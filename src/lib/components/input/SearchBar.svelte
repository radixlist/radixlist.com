<script lang="ts">
	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';
	import Find from '$assets/Find.svg';

	type I = $$Generic<{ title: string; _id: string; _type: string }>;
	type T = $$Generic<{ title: string; _id: string; _type: string }>;
	type P = $$Generic<{ name: string; _id: string; _type: string }>;

	export let placeholder = '';
	export let change: (search: string) => Promise<void>;
	export let select: (item: I | T | P) => void;
	export let itemSuggestions: I[];
	export let tagSuggestions: T[];
	export let personSuggestions: P[];
	export let loading: boolean;

	let focus = false;
	let selected = false;
	let search = '';
	let container: HTMLDivElement;
	let rect: DOMRect;
	let autocompleteStyles = '';
	let timeoutId: number;

	$: autocompleteHidden = search === '' || selected;
	const clickOutsideHandler = (event: MouseEvent) => {
		if (!container.contains(event.target as Node)) {
			selected = true;
		}
	};
	const onFocus = () => {
		focus = true;
		selected = false;
	};
	const onChange = () => {
		selected = false;
		window.clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => {
			change(search);
		}, 300);
	};
	const onSelect = (selection: I | T | P) => {
		switch (selection._type) {
			case 'item':
				search = (selection as I).title;
				break;
			case 'tag':
				search = (selection as T).title;
				break;
			case 'person':
				search = (selection as P).name;
				break;
		}
		selected = true;
		select(selection);
	};
	const updateBoundingClientRect = () => {
		rect = container.getBoundingClientRect();
		autocompleteStyles = `top: ${rect.top + container.offsetHeight + 10}px; left: ${
			rect.left + 4
		}px; width: ${container.clientWidth + 2}px`;
	};
	onMount(() => {
		if (browser) {
			window.addEventListener('resize', updateBoundingClientRect);
			window.addEventListener('click', clickOutsideHandler);
		}
		updateBoundingClientRect();
	});
	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', updateBoundingClientRect);
			window.removeEventListener('click', clickOutsideHandler);
		}
	});
</script>

<div
	class="bg-blue-200 pl-4 pr-8 py-4 flex justify-start items-center border border-transparent rounded-md transition-colors duration-100 shadow-md"
	bind:this={container}
>
	<img src={Find} class="w-6 h-6" alt="Search icon" />
	<input
		class="ml-8 w-full outline-none bg-transparent placeholder-slate-500"
		on:focus={() => onFocus()}
		on:focusout={() => (focus = false)}
		{placeholder}
		bind:value={search}
		on:input={onChange}
	/>
	{#if !autocompleteHidden}
		<div
			class="absolute rounded-md -m-1 bg-white border border-gray-300 shadow-lg z-10"
			style={autocompleteStyles}
		>
			<div class="grid grid-cols-1 md:grid-cols-3 p-4">
				<div>
					<h2 class="font-philosopher text-lg px-8 text-gray-400">Projects</h2>
					<ul>
						{#each itemSuggestions as itemSuggestion (itemSuggestion._id)}
							<li
								class="cursor-pointer px-8 py-2 hover:bg-gray-200 transition-colors duration-200 rounded-md"
								on:click={() => onSelect(itemSuggestion)}
							>
								<slot name="items" {itemSuggestion} />
							</li>
						{/each}
						{#if itemSuggestions.length === 0 && loading}
							<slot name="loading" />
						{/if}
						{#if itemSuggestions.length === 0 && !loading}
							<slot name="no-result" />
						{/if}
					</ul>
				</div>
				<div>
					<h2 class="font-philosopher text-lg px-8 text-gray-400">Tags</h2>
					<ul>
						{#each tagSuggestions as tagSuggestion (tagSuggestion._id)}
							<li
								class="cursor-pointer px-8 py-2 hover:bg-gray-200 transition-colors duration-200 rounded-md"
								on:click={() => onSelect(tagSuggestion)}
							>
								<slot name="tags" {tagSuggestion} />
							</li>
						{/each}
						{#if tagSuggestions.length === 0 && loading}
							<slot name="loading" />
						{/if}
						{#if tagSuggestions.length === 0 && !loading}
							<slot name="no-result" />
						{/if}
					</ul>
				</div>
				<div>
					<h2 class="font-philosopher text-lg px-8 text-gray-400">People</h2>
					<ul>
						{#each personSuggestions as personSuggestion (personSuggestion._id)}
							<li
								class="cursor-pointer px-8 py-2 hover:bg-gray-200 transition-colors duration-200 rounded-md"
								on:click={() => onSelect(personSuggestion)}
							>
								<slot name="persons" {personSuggestion} />
							</li>
						{/each}
						{#if personSuggestions.length === 0 && loading}
							<slot name="loading" />
						{/if}
						{#if personSuggestions.length === 0 && !loading}
							<slot name="no-result" />
						{/if}
					</ul>
				</div>
			</div>
		</div>
	{/if}
</div>
