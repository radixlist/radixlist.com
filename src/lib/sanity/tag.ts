import groq from 'groq';

export type Tag = {
	_id: string;
	_type: string;
	slug: string;
	title: string;
	featured: boolean;
};

export type FeaturedTagsResponse = {
	tags: Tag[];
};

export const FeaturedTags = (): string => {
	return groq`
  {
    'tags': coalesce(*[_type == 'tag' && featured == true] | order(_createdAt desc) {
			_id,
			_type,
			title,
			'slug': slug.current,
			featured
		}, [])
	}`;
};
