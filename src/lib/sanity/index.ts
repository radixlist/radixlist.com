import type { SanityClient } from '@sanity/client';
import type { ItemsResponse, PaginationInput } from './item';
import type { SearchResponse } from './search';
import type { FeaturedTagsResponse } from './tag';
import { Search } from './search';
import sanityClient from '@sanity/client';
import { Items, ItemsByTag, ItemsByPerson } from './item';
import { FeaturedTags } from './tag';

class Sanity {
	client: SanityClient;

	private static _instance: Sanity;

	constructor() {
		this.client = sanityClient({
			projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
			dataset: import.meta.env.VITE_SANITY_DATASET as string,
			token: '', // or leave blank to be anonymous user
			useCdn: true, // `false` if you want to ensure fresh data
			apiVersion: '2021-10-28'
		});
	}

	public static get getInstance(): Sanity {
		if (!this._instance) {
			this._instance = new Sanity();
		}

		return this._instance;
	}

	public FeaturedTagsQuery(): Promise<FeaturedTagsResponse> {
		return this.client.fetch<FeaturedTagsResponse>(FeaturedTags());
	}

	public ItemsQuery(paginationInput: PaginationInput): Promise<ItemsResponse> {
		return this.client.fetch<ItemsResponse>(Items(paginationInput));
	}

	public ItemsByTagQuery(tag: string, paginationInput: PaginationInput): Promise<ItemsResponse> {
		return this.client.fetch<ItemsResponse>(ItemsByTag(tag, paginationInput));
	}

	public ItemsByPersonQuery(
		person: string,
		paginationInput: PaginationInput
	): Promise<ItemsResponse> {
		return this.client.fetch<ItemsResponse>(ItemsByPerson(person, paginationInput));
	}

	public SearchQuery(search: string): Promise<SearchResponse> {
		return this.client.fetch<SearchResponse>(Search(search));
	}
}

export default Sanity.getInstance;
