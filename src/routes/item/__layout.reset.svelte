<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import sanity from '$lib/sanity';

	export const load: Load = async () => {
		try {
			const result = await sanity.LayoutQuery();

			return {
				status: 200,
				props: {
					team: result.team,
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
	import type { Team } from '$lib/sanity/team';

	export let team: Team;
</script>

<div class="absolute bg-gradient-to-br from-blue-200 to-transparent h-1/2 w-full top-0">
	<div class="bg-gradient-to-t from-white to-transparent w-full h-full" />
</div>

<div class="h-full px-4 flex flex-col relative">
	<Navigation />
	<div class="flex-grow pb-8">
		<slot />
	</div>
	<Footer {team} />
</div>

<style lang="scss">
	@import '../../app.css';
</style>
