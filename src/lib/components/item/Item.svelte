<script lang="ts">
	import type { Item } from '$lib/sanity/item';
	import UnknownItemIcon from '$assets/UnknownItem.svg';
	import Tag from './Tag.svelte';

	export let item: Item;
</script>

<a
	href={`/item/${item.slug}`}
	class="flex bg-zinc-100 p-4 rounded-md cursor-pointer border border-zinc-500 shadow-md"
	class:!bg-pink-100={item.promoted}
	class:!border-pink-300={item.promoted}
>
	<div class="pr-4 flex items-center flex-shrink-0">
		{#if item.image.url}
			<img
				src={item.image.url}
				alt={item.image.caption}
				class="w-16 h-16 rounded-md overflow-hidden"
			/>
		{:else}
			<img
				src={UnknownItemIcon}
				alt="Unknown item icon"
				class="w-16 h-16 rounded-md overflow-hidden"
			/>
		{/if}
	</div>
	<div>
		<h1 class="font-mulish text-xl pb-2">{item.title}</h1>
		<div class="flex gap-2 flex-wrap">
			{#if item.promoted}
				<Tag promoted={item.promoted}>Promoted</Tag>
			{/if}
			{#each item.tags as tag}
				<Tag promoted={item.promoted} href={`/tag/${tag.slug}`}>{tag.title}</Tag>
			{/each}
		</div>
		<div class="pt-2">
			{item.shortDescription}
		</div>
	</div>
</a>
