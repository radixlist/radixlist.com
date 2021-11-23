<script lang="ts">
	import type { Item } from '$lib/sanity/item';
	import ItemComponent from '$lib/components/item/Item.svelte';

	export let items: Item[];
	export let numberOfItems: number;
</script>

<main class="flex justify-center">
	<div class="max-w-screen-lg w-full md:grid grid-cols-4 gap-4">
		{#if items.length > 0}
			<div class="col-span-3">
				<div class="flex flex-col md:flex-row justify-between md:items-end">
					{#if numberOfItems > 1}
						<span class="italic font-mulish text-sm order-last mt-2 md:order-first"
							>Found {numberOfItems} results</span
						>
					{/if}
					{#if numberOfItems === 1}
						<span class="italic font-mulish text-sm order-last mt-2 md:order-first"
							>Found {numberOfItems} result</span
						>
					{/if}
					<slot name="ordering" />
				</div>
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
		<div class="py-2 px-2 hidden md:block text-sm">
			<h1 class="font-philosopher text-2xl">Welcome to Radix List</h1>
			radixlist.com is a service where all community projects, initiatives and social gatherings is gathered
			in an easily searchable service.
		</div>
	</div>
</main>
