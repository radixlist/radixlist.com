<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ page }) => {
		try {
			const pageNumber = parseInt(page.params.page);
			const result = await sanity.ItemsQuery({ page: pageNumber, limit: 20 });

			return {
				status: 200,
				props: {
					items: result.items,
					numberOfItems: result.numberOfItems,
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
	import Normal from '$lib/components/pagination/Normal.svelte';
	export let items: Item[];
	export let numberOfItems: number;
	export let pageNumber: number;
</script>

<svelte:head>
	<title>Radix List | Explore Radix community projects</title>
</svelte:head>

<List {items} {numberOfItems}>
	<Normal slot="pagination" {numberOfItems} {pageNumber} />
</List>
