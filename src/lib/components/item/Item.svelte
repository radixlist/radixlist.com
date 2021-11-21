<script lang="ts">
	import type { Item } from '$lib/sanity/item';
	import PortableText from '@portabletext/svelte';
	import UnknownItemIcon from '$assets/UnknownItem.svg';

	export let item: Item;
</script>

<a
	href={`/item/${item.slug}`}
	class="flex bg-zinc-100 p-4 rounded-md cursor-pointer border border-zinc-500 shadow-md"
	class:!bg-pink-200={item.promoted}
	class:!border-pink-500={item.promoted}
>
	<div class="pr-4 flex items-center flex-shrink-0">
		{#if item.image.url}
			<img src={item.image.url} alt={item.image.caption} class="w-16 h-16" />
		{:else}
			<img src={UnknownItemIcon} alt="Unknown item icon" class="w-16 h-16" />
		{/if}
	</div>
	<div>
		<h1 class="font-mulish text-xl pb-2">{item.title}</h1>
		<div class="flex gap-2 flex-wrap">
			{#if item.promoted}
				<a
					href={`/tag/promoted`}
					class="inline-block px-4 py-0.5 bg-pink-300 text-pink-700 font-mulish text-sm rounded-md transition-colors duration-200"
				>
					<span class="text-pink-700 pr-2">#</span>Promoted
				</a>
			{/if}
			{#each item.tags as tag}
				<a
					href={`/tag/${tag.slug}`}
					class="inline-block px-4 py-0.5 bg-zinc-300 font-mulish text-sm rounded-md transition-colors duration-200"
					class:text-pink-700={item.promoted}
					class:!bg-pink-300={item.promoted}
				>
					<span class="text-blue-700 pr-2" class:text-pink-700={item.promoted}>#</span>{tag.title}
				</a>
			{/each}
		</div>
		<div class="pt-2">
			{item.shortDescription}
		</div>
	</div>
</a>
