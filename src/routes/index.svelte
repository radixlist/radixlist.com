<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ page: { query }, session }) => {
		try {
			const sort = query.get('sort') ?? '_createdAt';
			const order = query.get('order') ?? 'desc';
			const result = await sanity.ItemsQuery({ page: 1, limit: 20 }, `${sort} ${order}`);

			return {
				status: 200,
				props: {
					items: result.items,
					numberOfItems: result.numberOfItems,
					sort,
					order
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
	import Ordering from '$lib/components/input/Ordering.svelte';

	export let items: Item[];
	export let numberOfItems: number;
	export let sort: string;
	export let order: string;
</script>

<svelte:head>
	<title>Radix List | Explore Radix community projects</title>
</svelte:head>

<List {items} {numberOfItems}>
	<Ordering slot="ordering" {sort} {order} />
	<Normal slot="pagination" {numberOfItems} pageNumber={1} />
</List>
