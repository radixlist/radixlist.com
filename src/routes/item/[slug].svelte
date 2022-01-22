<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ params }) => {
		try {
			const result = await sanity.ItemBySlugQuery(params.slug);
			return {
				status: 200,
				props: {
					item: result.item,
					promotedItem: result.promotedItems[~~(Math.random() * result.promotedItems.length)]
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
	import Breadcrumb from '$lib/components/breadcrumb/Breadcrumb.svelte';
	import PortableText from '@portabletext/svelte';
	import PersonIcon from '$assets/Person.svg';
	import UnknownItemIcon from '$assets/UnknownItem.svg';
	import Tag from '$lib/components/item/Tag.svelte';
	import ItemComponent from '$lib/components/item/Item.svelte';
	export let item: Item;
	export let promotedItem: Item;
</script>

<svelte:head>
	<title>Radix List | {item.title}</title>
	<meta property="og:title" content={item.title} />
	<meta property="og:image" content={item.image.url} />
	<meta name="twitter:title" content={item.title} />
	<meta name="twitter:description" content={item.shortDescription} />
	<meta name="twitter:image" content={item.image.url} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="flex justify-center">
	<div class="max-w-screen-lg w-full">
		<Breadcrumb current={item.title} />
		<div class="flex flex-col md:flex-row items-center mt-10 ">
			<div
				class="flex items-center flex-shrink-0 rounded-md w-40 overflow-hidden relative justify-center"
			>
				{#if item.image.url}
					<img src={item.image.url} alt={item.image.caption} class="w-full min-h-full" />
				{:else}
					<img src={UnknownItemIcon} alt="Unknown item icon" class="w-full min-h-full" />
				{/if}
			</div>
			<div class="md:pl-8 pt-2 md:pt-0 w-full overflow-hidden">
				<h1 class="text-4xl md:text-6xl font-philosopher text-center md:text-left">{item.title}</h1>
				<div
					class="flex pt-2 gap-2 pb-1 overflow-x-auto scrollbar:!w-1 scrollbar:!h-1 scrollbar:bg-transparent scrollbar-track:!bg-gray-200 scrollbar-thumb:!rounded scrollbar-track:!rounded supports-scrollbars:pr-2"
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
				<div class="pt-2 break-words text-xl">
					{item.shortDescription}
				</div>
			</div>
		</div>
		<div
			class="md:mt-8 border-b border-blue-300 font-mulish text-2xl pb-2"
			class:mt-4={!promotedItem}
		>
			Overview
		</div>
		<div class="portable-block break-words">
			<PortableText blocks={item.description} />
		</div>
		<div class="mt-4 md:mt-8 border-b border-blue-300 font-mulish text-2xl pb-2">
			People who lead this initiative
		</div>
		<div class="pt-4">
			{#if item.owners.length === 0}
				<div class="italic font-mulish text-sm">No leaders found for this initiative</div>
			{/if}
			{#each item.owners as owner}
				<div class="flex items-center py-2 px-4">
					<div>
						<img src={PersonIcon} alt="Person icon" class="w-8 h-8" />
					</div>
					<div class="pl-4">
						{owner.name}
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-4 md:mt-8 border-b border-blue-300 font-mulish text-2xl pb-2">Links</div>
		<div class="flex flex-col md:flex-row flex-wrap gap-4 pt-4">
			{#if item.links.length === 0}
				<div class="italic font-mulish text-sm">No links found for this initiative</div>
			{/if}
			{#each item.links as link}
				<a
					href={link.url}
					target="_blank"
					class="md:inline-flex flex gap-4 items-center px-4 md:py-2 py-0.5 bg-blue-300 border border-blue-500 hover:bg-blue-500 font-mulish rounded-md transition-colors duration-200"
				>
					<div>
						<img src={link.image} alt={link.title} class="h-8 w-8" />
					</div>
					<span>
						{link.title}
					</span>
				</a>
			{/each}
		</div>
		{#if promotedItem}
			<div class="mt-4 md:mt-8 border-b border-blue-300 font-mulish text-2xl pb-2">Promotion</div>
			<div class="py-4">
				<ItemComponent item={promotedItem} />
			</div>
		{/if}
		<div class="mt-4 md:mt-4 border-b border-blue-300 font-mulish text-2xl pb-2">Warning ⚠️</div>
		<div class="flex flex-col md:flex-row flex-wrap gap-4">
			<p class="py-2">
				Radix List does not vet or verify projects that gets listed. It's important that you are
				aware of this before considering to invest time and money in the projects listed here. There
				is a possibility of scams and money grabs. Do your own research (DYOR) and be cautious.
			</p>
		</div>
	</div>
</main>

<style lang="scss">
	.portable-block :global(p) {
		@apply py-2;
	}
</style>
