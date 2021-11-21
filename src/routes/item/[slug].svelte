<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ page }) => {
		try {
			const result = await sanity.ItemBySlugQuery(page.params.slug);
			return {
				status: 200,
				props: {
					item: result.item
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
	export let item: Item;
</script>

<svelte:head>
	<title>Radix List | {item.title}</title>
</svelte:head>

<main class="flex justify-center">
	<div class="max-w-screen-lg w-full">
		<Breadcrumb current={item.title} />
		<div class="flex mt-10">
			<div class="">
				{#if item.image.url}
					<img src={item.image.url} alt={item.image.caption} class="w-40 h-40" />
				{:else}
					<img src={UnknownItemIcon} alt="Unknown item icon" class="w-40 h-40" />
				{/if}
			</div>
			<div class="pl-8">
				<h1 class="text-6xl font-philosopher">{item.title}</h1>
				<div class="flex gap-4 pt-4">
					{#if item.promoted}
						<a
							href={`/tag/promoted`}
							class="inline-block px-4 py-2 bg-pink-300 text-pink-700 font-mulish text-sm rounded-md transition-colors duration-200"
						>
							<span class="text-pink-700 pr-2">#</span>Promoted
						</a>
					{/if}
					{#each item.tags as tag}
						<a
							href={`/tag/${tag.slug}`}
							class="inline-block px-4 py-2 bg-zinc-300 font-mulish text-sm rounded-md transition-colors duration-200"
							class:text-pink-700={item.promoted}
							class:!bg-pink-300={item.promoted}
						>
							<span class="text-blue-700 pr-2" class:text-pink-700={item.promoted}>#</span
							>{tag.title}
						</a>
					{/each}
				</div>
			</div>
		</div>
		<div class="mt-8 border-b border-blue-300 font-mulish text-2xl pb-2">Overview</div>
		<div class="py-4">
			<PortableText blocks={item.description} />
		</div>
		<div class="mt-8 border-b border-blue-300 font-mulish text-2xl pb-2">
			People who leads the initiative
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
		<div class="mt-8 border-b border-blue-300 font-mulish text-2xl pb-2">Links</div>
		<div class="flex gap-4 pt-4">
			{#if item.links.length === 0}
				<div class="italic font-mulish text-sm">No links found for this initiative</div>
			{/if}
			{#each item.links as link}
				<a
					href={link.url}
					target="_blank"
					class="inline-flex gap-4 items-center px-4 py-1 bg-blue-300 border border-blue-500 hover:bg-blue-500 font-mulish rounded-md transition-colors duration-200"
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
	</div>
</main>
