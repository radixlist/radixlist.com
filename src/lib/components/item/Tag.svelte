<script lang="ts">
	export let promoted: boolean;
	export let href: string = '';
</script>

{#if href.length > 0}
	<a
		{href}
		class="inline-block px-4 py-0.5 md:py-2 bg-zinc-200 font-mulish text-sm rounded-md transition-colors duration-200 hover:bg-zinc-300"
		class:!bg-pink-200={promoted}
		class:hover:!bg-pink-300={promoted}
	>
		<span class="text-blue-700 pr-2" class:text-pink-700={promoted}>#</span><slot />
	</a>
{:else}
	<div
		class="inline-block px-4 py-0.5 md:py-2 bg-zinc-200 font-mulish text-sm rounded-md transition-colors duration-200"
		class:!bg-pink-200={promoted}
	>
		<span class="text-blue-700 pr-2" class:text-pink-700={promoted}>#</span><slot />
	</div>
{/if}
