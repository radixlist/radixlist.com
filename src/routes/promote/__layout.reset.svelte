<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async ({ page }) => {
		try {
			const result = await sanity.FeaturedTagsQuery();

			return {
				status: 200,
				props: {
					tags: result.tags
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
	import Navigation from '$lib/components/navigation/Navigation.svelte';
</script>

<div class="h-full px-4 bg-gradient-to-b from-blue-200 to-white">
	<Navigation />
	<slot />
</div>

<style lang="scss">
	@import '../../app.css';
</style>
