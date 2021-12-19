import type { Team } from './team';
import type { Tag } from './tag';
import groq from 'groq';

export type LayoutResponse = {
	team: Team;
	tags: Tag[];
};

export const Layout = (): string => {
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
		}, [])
	}`;
};
