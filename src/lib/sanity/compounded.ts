import type { Team } from './team';
import type { Tag } from './tag';
import type { Item } from './item';
import groq from 'groq';

export type LayoutResponse = {
	team: Team;
	tags: Tag[];
	bannerItem: Item;
};

export const Layout = (): string => {
	const today = new Date().toISOString().split('T')[0];
	return groq`
  {
    'team': *[_type == 'team'][0] {
			_id,
			_type,
      members[]{
        _key,
        _type,
        name,
        contact {
          'icon': linkType->icon.asset->url,
          'link': url,
          'displayText': coalesce(title, linkType->title),
        }
      }
		},
    'tags': coalesce(*[_type == 'tag' && featured == true] | order(_createdAt desc) {
			_id,
			_type,
			title,
			'slug': slug.current,
			featured
		}, []),
    'bannerItem': *[_type == 'item' && (coalesce(count(promoted[expires >= '${today}']) > 0, false) && coalesce(count(promoted[slot == 'banner']) > 0, false))][0] {
      _id,
      _updatedAt,
      title,
      'slug': slug.current,
      'shortDescription': coalesce(shortDescription, ''),
      'description': coalesce(description, []),
      'tags': tags[]->{ _id, title, featured, 'slug': slug.current },
      'image': {
        'url': image.asset->url
      },
      'promotionBackground': {
        'url': promotionBackground.asset->url
      },
      'owners': coalesce(owners[]->{
        name,
        wallet,
        discordHandle,
        twitter,
        telegram
      }, []),
      'links': coalesce(links[]{
        'url': url,
        'title': coalesce(title, linkType->title),
        'image': linkType->icon.asset->url
      }, []),
      'promoted': coalesce(count(promoted[expires >= '${today}']) > 0, false)
    }
	}`;
};
