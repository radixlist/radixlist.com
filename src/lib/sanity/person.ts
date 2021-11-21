export type Person = {
	_id: string;
	_type: string;
	name: string;
	slug: string;
	wallet: string;
	discordHandle: string;
	twitter: {
		handle: string;
		link: string;
	};
	telegram: {
		handle: string;
	};
};
