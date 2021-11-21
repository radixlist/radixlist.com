<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ page }) => {
		try {
			const slug = page.params.slug;
			const pageNumber = parseInt(page.params.page);
			const result = await sanity.ItemsByPersonQuery(slug, { page: pageNumber, limit: 20 });

			return {
				status: 200,
				props: {
					items: result.items,
					numberOfItems: result.numberOfItems,
					slug,
					pageNumber
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
	import List from '$lib/components/list/List.svelte';
	import Tag from '$lib/components/pagination/Tag.svelte';
	export let items: Item[];
	export let numberOfItems: number;
	export let slug: string;
	export let pageNumber: number;
</script>

<svelte:head>
	<titel>Radix List | Explore Radix community projects | People</titel>
</svelte:head>

<List {items} {numberOfItems} {pageNumber}>
	<Tag slot="pagination" {numberOfItems} {slug} {pageNumber} />
</List>
