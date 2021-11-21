<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ page }) => {
		try {
			const result = await sanity.FeaturedTagsQuery();

			return {
				status: 200,
				props: {
					tags: result.tags
				}
			};
		} catch (error) {
			return {
				status: 500,
				error
			};
		}
	};
</script>

<script lang="ts">
	import type { Item } from '$lib/sanity/item';
	import type { Tag } from '$lib/sanity/tag';
	import type { Person } from '$lib/sanity/person';
	import { goto } from '$app/navigation';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import SearchBar from '$lib/components/input/SearchBar.svelte';
	import SwingBlockLoading from '$assets/loading/SwingBlockLoading.svelte';
	import UnknownItemIcon from '$assets/UnknownItem.svg';
	import TagIcon from '$assets/Tag.svg';
	import PersonIcon from '$assets/Person.svg';

	export let tags: Tag[];

	let itemSuggestions: Item[] = [];

	let tagSuggestions: Tag[] = [];

	let personSuggestions: Person[] = [];

	let loadingAutocomplete = false;

	async function Search(search: string): Promise<void> {
		loadingAutocomplete = true;
		const results = await sanity.SearchQuery(search);
		itemSuggestions = [...results.items];
		tagSuggestions = [...results.tags];
		personSuggestions = [...results.persons];
		loadingAutocomplete = false;
	}

	function Select(item: Item | Tag | Person) {
		switch (item._type) {
			case 'item':
				goto(`/item/${item.slug}`);
				break;
			case 'tag':
				goto(`/tag/${item.slug}`);
				break;
			case 'person':
				goto(`/people/${item.slug}`);
				break;
		}
	}

	let _hoverID = -1;
</script>

<div class="h-full px-4 bg-gradient-to-b from-blue-200 to-white">
	<Navigation />
	<div class="flex justify-center pt-16">
		<div class="max-w-screen-lg w-full">
			<div class="pb-4">
				<h1 class="font-philosopher text-4xl md:text-6xl text-gray-800">
					Explore Radix community initiatives
				</h1>
			</div>
			<div class="py-2">
				<SearchBar
					placeholder="Search community initiatives"
					change={Search}
					select={Select}
					loading={false}
					{itemSuggestions}
					{tagSuggestions}
					{personSuggestions}
					let:itemSuggestion
					let:tagSuggestion
					let:personSuggestion
				>
					<div slot="items" class="flex items-center">
						{#if itemSuggestion.image.url}
							<img
								src={itemSuggestion.image.url}
								alt={itemSuggestion.image.caption}
								class="w-6 h-6"
							/>
						{:else}
							<img src={UnknownItemIcon} alt="Unknown logo" class="w-6 h-6" />
						{/if}
						<div class="ml-4">
							<div class="capitalize font-mulish">{itemSuggestion.title}</div>
						</div>
					</div>
					<div slot="tags" class="flex items-center">
						<img src={TagIcon} alt="Tag" class="w-6 h-6" />
						<div class="ml-8">
							<div class="capitalize font-mulish">{tagSuggestion.title}</div>
						</div>
					</div>
					<div slot="persons" class="flex items-center">
						<img src={PersonIcon} alt="Unknown logo" class="w-6 h-6" />
						<div class="ml-8">
							<div class="capitalize font-mulish">{personSuggestion.name}</div>
						</div>
					</div>
					<div slot="loading" class="flex px-8 py-2 items-center font-mulish">
						<SwingBlockLoading />
						<div class="pl-4">Loading...</div>
					</div>
					<div
						slot="no-result"
						class="flex px-8 py-2 items-center font-mulish font-italic text-gray-500"
					>
						No results found
					</div>
				</SearchBar>
			</div>
			<div class="py-2 flex gap-2 flex-wrap">
				{#each tags as tag}
					<a
						href={`/tag/${tag.slug}`}
						class="inline-block py-2 px-4 bg-blue-200 hover:bg-blue-300 font-mulish rounded-md transition-colors duration-200"
					>
						<span class="text-blue-700 pr-2">#</span>{tag.title}
					</a>
				{/each}
			</div>
			<div class="border-b border-blue-300 my-2" />
		</div>
	</div>
	<slot />
</div>

<style lang="scss">
	@import '../app.css';
</style>
