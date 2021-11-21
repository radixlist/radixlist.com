import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
import type { Tag } from './tag';
import type { Person } from './person';
import groq from 'groq';

export type Item = {
	_id: string;
	_type: string;
	title: string;
	slug: string;
	tags: Tag[];
	image: {
		url: string;
		caption: string;
	};
	shortDescription: string;
	description: PortableTextBlocks;
	owners: Person[];
	link: string;
	promoted: boolean;
};

export type ItemsResponse = {
	items: Item[];
	numberOfItems: number;
};

export type PaginationInput = {
	page: number;
	limit: number;
};

export const Items = (paginationInput: PaginationInput = { page: 1, limit: 20 }): string => {
	const today = new Date().toISOString().split('T')[0];
	const start = (paginationInput.page - 1) * paginationInput.limit;
	const end = (paginationInput.page - 1) * (paginationInput.limit - 1) + paginationInput.limit - 1;
	return groq`
  {
    'items': *[_type == 'item'] | order(coalesce(count(promoted[expires >= '${today}']) > 0, false) desc) [${start}..${end}] {
      _id,
      _updatedAt,
      title,
      'slug': slug.current,
      'shortDescription': coalesce(shortDescription, ''),
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
      link,
      'promoted': coalesce(count(promoted[expires >= '${today}']) > 0, false)
    },
    'numberOfItems': count(*[_type == 'item'])
  }
  `;
};

export const ItemsByTag = (
	tag: string,
	paginationInput: PaginationInput = { page: 1, limit: 20 }
): string => {
	const today = new Date().toISOString().split('T')[0];
	const start = (paginationInput.page - 1) * paginationInput.limit;
	const end = (paginationInput.page - 1) * (paginationInput.limit - 1) + paginationInput.limit - 1;
	return groq`
  {
    'items': *[_type == 'item' && tags[]->slug.current match '${tag}'] | order(coalesce(count(promoted[expires >= '${today}']) > 0, false) desc) [${start}..${end}] {
      _id,
      _updatedAt,
      title,
      'slug': slug.current,
      'shortDescription': coalesce(shortDescription, ''),
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
      link,
      'promoted': coalesce(count(promoted[expires >= '${today}']) > 0, false)
    },
    'numberOfItems': count(*[_type == 'item' && tags[]->slug.current match '${tag}'])
  }
  `;
};

export const ItemsByPerson = (
	person: string,
	paginationInput: PaginationInput = { page: 1, limit: 20 }
): string => {
	const today = new Date().toISOString().split('T')[0];
	const start = (paginationInput.page - 1) * paginationInput.limit;
	const end = (paginationInput.page - 1) * (paginationInput.limit - 1) + paginationInput.limit - 1;
	return groq`
  {
    'items': *[_type == 'item' && owners[]->slug.current match '${person}'] | order(coalesce(count(promoted[expires >= '${today}']) > 0, false) desc) [${start}..${end}] {
      _id,
      _updatedAt,
      title,
      'slug': slug.current,
      'shortDescription': coalesce(shortDescription, ''),
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
      link,
      'promoted': coalesce(count(promoted[expires >= '${today}']) > 0, false)
    },
    'numberOfItems': count(*[_type == 'item' && owners[]->slug.current match '${person}'])
  }
  `;
};
