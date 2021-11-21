<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ page }) => {
		try {
			const slug = page.params.slug;
			const result = await sanity.ItemsByPersonQuery(slug, { page: 1, limit: 20 });

			return {
				status: 200,
				props: {
					items: result.items,
					numberOfItems: result.numberOfItems,
					slug
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
</script>

<svelte:head>
	<titel>Radix List | Explore Radix community projects | People</titel>
</svelte:head>

<List {items} {numberOfItems} pageNumber={1}>
	<Tag slot="pagination" {numberOfItems} {slug} pageNumber={1} />
</List>
