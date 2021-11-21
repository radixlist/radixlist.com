<script lang="ts">
	import type { Item } from '$lib/sanity/item';
	import ItemComponent from '$lib/components/item/Item.svelte';

	export let items: Item[];
	export let numberOfItems: number;
	export let pageNumber: number;
</script>

<main class="flex justify-center">
	<div class="max-w-screen-lg w-full md:grid grid-cols-4 gap-4">
		{#if items.length > 0}
			<div class="col-span-3">
				{#if numberOfItems > 1}
					<span class="font-italic font-mulish text-sm">Found {numberOfItems} results</span>
				{/if}
				{#if numberOfItems === 1}
					<span class="font-italic font-mulish text-sm">Found {numberOfItems} result</span>
				{/if}
				{#each items as item}
					<div class="py-4">
						<ItemComponent {item} />
					</div>
				{/each}
				{#if numberOfItems > 20}
					<slot name="pagination" />
				{/if}
			</div>
		{:else}
			<div class="col-span-3">Sorry, the current filter does not find any results</div>
		{/if}
		<div class="py-2">
			Welcome to Radix List, here we gather all community initiatives for the radix ecosystem
		</div>
	</div>
</main>
