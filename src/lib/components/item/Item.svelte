<script lang="ts">
	import type { Item } from '$lib/sanity/item';
	import UnknownItemIcon from '$assets/UnknownItem.svg';
	import Tag from './Tag.svelte';

	export let item: Item;
</script>

<a href={`/item/${item.slug}`} style="display: block;">
	<div
		class="bg-zinc-100 p-2 md:p-4 rounded-md cursor-pointer border border-zinc-500 shadow-md relative overflow-hidden"
		class:!bg-white={item.promoted}
		class:!border-pink-300={item.promoted}
	>
		{#if item.promoted}
			<div
				class="absolute w-full h-full z-0 top-0 left-0 flex justify-center items-center overflow-hidden"
			>
				{#if item.promotionBackground.url}
					<img src={item.promotionBackground.url} alt="background" class="min-w-[1022px]" />
				{/if}
				<div class="w-full h-full bg-pink-100 absolute top-0 left-0 opacity-80" />
			</div>
		{/if}
		<div class="flex gap-2 w-full">
			<div class="flex items-center relative">
				<div class="w-16 h-16 rounded-md overflow-hidden">
					{#if item.image.url}
						<img src={item.image.url} alt={`${item.title} icon`} class="w-full min-h-full" />
					{:else}
						<img src={UnknownItemIcon} alt="Unknown item icon" class="w-full min-h-full" />
					{/if}
				</div>
			</div>
			<div class="relative flex-1 min-w-0">
				<h1 class="font-mulish text-xl pb-1 font-medium">{item.title}</h1>
				<div
					class="flex gap-2 pb-1 overflow-x-auto scrollbar:!w-1 scrollbar:!h-1 scrollbar:bg-transparent scrollbar-track:!bg-gray-200 scrollbar-thumb:!rounded scrollbar-track:!rounded supports-scrollbars:pr-2"
					class:scrollbar-thumb:!bg-gray-300={!item.promoted}
					class:scrollbar-thumb:!bg-pink-300={item.promoted}
				>
					{#if item.promoted}
						<Tag promoted={item.promoted}>Promoted</Tag>
					{/if}
					{#each item.tags as tag}
						<Tag promoted={item.promoted} href={`/tag/${tag.slug}`}>{tag.title}</Tag>
					{/each}
				</div>
			</div>
		</div>
		<div class="pt-1 relative line-clamp-3">
			{item.shortDescription}
		</div>
	</div>
</a>
