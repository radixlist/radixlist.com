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
	import Footer from '$lib/components/navigation/Footer.svelte';
</script>

<div class="h-full px-4 bg-gradient-to-b from-blue-200 to-white flex flex-col">
	<Navigation />
	<div class="flex-grow pb-8">
		<slot />
	</div>
	<Footer />
</div>

<style lang="scss">
	@import '../../app.css';
</style>
