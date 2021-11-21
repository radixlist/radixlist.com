import type { Item } from './item';
import type { Person } from './person';
import type { Tag } from './tag';
import groq from 'groq';

export type SearchResponse = {
	items: Item[];
	tags: Tag[];
	persons: Person[];
};

export const Search = (search: string): string => {
	const terms = search.split(' ').map((term) => `"${term}*"`);
	return groq`
  {
    'items': *[_type == 'item' && ([title, description, link] match [${terms.join(
			','
		)}])] | order(_createdAt desc) [0..5] {
      _id,
      _type,
      _updatedAt,
      title,
      'slug': slug.current,
      'description': coalesce(description, []),
      'tags': tags[]->{ _id, title, featured },
      'image': {
        'url': image.asset->url,
        'caption': image.asset->url
      },
      'owners': owners[]->{
        name,
        wallet,
        discordHandle,
        twitter,
        telegram
      },
      link
    },
    'tags': *[_type == 'tag' && (title match [${terms.join(
			','
		)}])] | order(_createdAt desc) [0..5] {
      _id,
      _type,
			title,
      'slug': slug.current,
			featured
		},
    'persons': *[_type == 'person' && ([name, discordHandle, twitter.handle, telegram.handle] match [${terms.join(
			','
		)}])] | order(_createdAt desc) [0..5] {
      _id,
      _type,
      name,
      'slug': slug.current,
      discordHandle,
      'twitter': {
        'handle': twitter.handle,
        'link': twitter.link
      },
      'telegram': {
        'handle': telegram.handle
      }
		},
  }
  `;
};
