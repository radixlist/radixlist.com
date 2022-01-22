<script lang="ts">
	import type { Item } from '$lib/sanity/item';
	import ItemComponent from '$lib/components/item/Item.svelte';
	import Telegram from '$assets/Telegram.svg';

	export let items: Item[];
	export let numberOfItems: number;
</script>

<main class="flex justify-center">
	<div class="max-w-screen-lg w-full md:grid grid-cols-4 gap-2">
		{#if items.length > 0}
			<div class="col-span-3 flex flex-col gap-y-2">
				<div class="flex flex-col md:flex-row justify-between items-center md:items-end">
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
				{#each items as item (item._id)}
					<ItemComponent {item} />
				{/each}
				{#if numberOfItems > 20}
					<slot name="pagination" />
				{/if}
			</div>
		{:else}
			<div class="col-span-3">Sorry, the current filter does not find any results</div>
		{/if}
		<div class="py-2 px-2 hidden md:block text-sm">
			<h1 class="font-philosopher text-2xl">Get push notifications</h1>
			If you want to get live push notifications when new listings are added, be sure to subscribe to
			our announcement channel!
			<div class="mt-4">
				<a
					href="https://t.me/radixlist"
					class="text-gray-800 hover:text-zinc-500 cursor-pointer block underline"
				>
					<img src={Telegram} class="w-4 h-4 inline-block mr-2" alt="icon" />Radix List
				</a>
			</div>
		</div>
	</div>
</main>
