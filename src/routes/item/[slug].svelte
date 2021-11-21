<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ page }) => {
		try {
			const result = await sanity.ItemsQuery({ page: 1, limit: 20 });

			return {
				status: 200,
				props: {
					items: result.items
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
	export let items: Item[];
</script>

<main class="flex justify-center">
	<div class="max-w-screen-lg w-full flex justify-start">
		{#each items as item}
			<div>
				{item.title}
			</div>
		{/each}
	</div>
</main>
