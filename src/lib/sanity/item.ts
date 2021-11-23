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
	links: {
		url: string;
		title: string;
		image: string;
	}[];
	promoted: boolean;
};

export type ItemsResponse = {
	items: Item[];
	numberOfItems: number;
};

export type ItemResponse = {
	item: Item;
};

export type PaginationInput = {
	page: number;
	limit: number;
};

export const Items = (
	paginationInput: PaginationInput = { page: 1, limit: 20 },
	order: string = '_createdAt desc'
): string => {
	const today = new Date().toISOString().split('T')[0];
	const start = (paginationInput.page - 1) * paginationInput.limit;
	const end = (paginationInput.page - 1) * (paginationInput.limit - 1) + paginationInput.limit - 1;
	return groq`
  {
    'items': *[_type == 'item'] | order(${order}) | order(coalesce(count(promoted[expires >= '${today}']) > 0, false) desc) [${start}..${end}] {
      _id,
      _updatedAt,
      title,
      'slug': slug.current,
      'shortDescription': coalesce(shortDescription, ''),
      'description': coalesce(description, []),
      'tags': tags[]->{ _id, title, featured, 'slug': slug.current },
      'image': {
        'url': image.asset->url,
        'caption': image.asset->url
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
    },
    'numberOfItems': count(*[_type == 'item'])
  }
  `;
};

export const ItemsByTag = (
	tag: string,
	paginationInput: PaginationInput = { page: 1, limit: 20 },
	order: string = '_createdAt desc'
): string => {
	const today = new Date().toISOString().split('T')[0];
	const start = (paginationInput.page - 1) * paginationInput.limit;
	const end = (paginationInput.page - 1) * (paginationInput.limit - 1) + paginationInput.limit - 1;
	return groq`
  {
    'items': *[_type == 'item' && tags[]->slug.current match '${tag}'] | order(${order}) | order(coalesce(count(promoted[expires >= '${today}']) > 0, false) desc) [${start}..${end}] {
      _id,
      _updatedAt,
      title,
      'slug': slug.current,
      'shortDescription': coalesce(shortDescription, ''),
      'description': coalesce(description, []),
      'tags': tags[]->{ _id, title, featured, 'slug': slug.current },
      'image': {
        'url': image.asset->url,
        'caption': image.asset->url
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
    },
    'numberOfItems': count(*[_type == 'item' && tags[]->slug.current match '${tag}'])
  }
  `;
};

export const ItemsByPerson = (
	person: string,
	paginationInput: PaginationInput = { page: 1, limit: 20 },
	order: string = '_createdAt desc'
): string => {
	const today = new Date().toISOString().split('T')[0];
	const start = (paginationInput.page - 1) * paginationInput.limit;
	const end = (paginationInput.page - 1) * (paginationInput.limit - 1) + paginationInput.limit - 1;
	return groq`
  {
    'items': *[_type == 'item' && owners[]->slug.current match '${person}'] | order(${order}) | order(coalesce(count(promoted[expires >= '${today}']) > 0, false) desc) [${start}..${end}] {
      _id,
      _updatedAt,
      title,
      'slug': slug.current,
      'shortDescription': coalesce(shortDescription, ''),
      'description': coalesce(description, []),
      'tags': tags[]->{ _id, title, featured, 'slug': slug.current },
      'image': {
        'url': image.asset->url,
        'caption': image.asset->url
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
    },
    'numberOfItems': count(*[_type == 'item' && owners[]->slug.current match '${person}'])
  }
  `;
};

export const ItemBySlug = (slug: string): string => {
	const today = new Date().toISOString().split('T')[0];
	return groq`
  {
    'item': *[_type == 'item' && slug.current == '${slug}'] [0] {
      _id,
      _updatedAt,
      title,
      'slug': slug.current,
      'shortDescription': coalesce(shortDescription, ''),
      'description': coalesce(description, []),
      'tags': tags[]->{ _id, title, featured, 'slug': slug.current },
      'image': {
        'url': image.asset->url,
        'caption': image.asset->url
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
  }
  `;
};
