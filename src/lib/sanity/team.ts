import groq from 'groq';

export type Member = {
	_key: string;
	_type: string;
	name: string;
	contact?: {
		icon: string;
		link: string;
		displayText: string;
	};
};

export type Team = {
	_id: string;
	_type: string;
	members: Member[];
};

export type TeamResponse = {
	team: Team;
};

export const TeamMembers = (): string => {
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
          'link': linkType->url,
          'displayText': coalesce(title, linkType->title),
        }
      }
		}
	}`;
};
