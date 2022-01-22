<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ url }) => {
		try {
			const sort = url.searchParams.get('sort') ?? '_createdAt';
			const order = url.searchParams.get('order') ?? 'desc';
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
	<meta property="og:title" content="Radix List | Explore Radix community projects" />
	<meta property="og:image" content="/favicon.png" />
	<meta name="twitter:title" content="Radix List | Explore Radix community projects" />
	<meta
		name="twitter:description"
		content="radixlist.com - The service where all community projects and initiatives are collected in an easily searchable service."
	/>
	<meta name="twitter:image" content="/favicon.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<List {items} {numberOfItems}>
	<Ordering slot="ordering" {sort} {order} />
	<Normal slot="pagination" {numberOfItems} pageNumber={1} />
</List>
