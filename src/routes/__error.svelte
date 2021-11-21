<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		console.log(error, status);
		return {
			props: {
				status,
				message: error.message
			}
		};
	}
</script>

<script lang="ts">
	import NotFound from '$assets/NotFound.svg';
	export let status: number;
	export let message: string;
</script>

<!-- This is an example component -->
<main class="flex justify-center">
	<div class="max-w-screen-lg w-full md:grid grid-cols-2 gap-4">
		<div class="text-gray-700 flex items-center w-full">
			<div>
				<div class="text-5xl font-dark font-bold">{status}</div>
				<p class="text-2xl md:text-3xl font-light leading-normal">Sorry something went wrong.</p>
				<p class="my-4">{message}</p>
				<a
					href="/"
					class="px-4 mt-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
				>
					back to homepage
				</a>
			</div>
		</div>
		<div>
			<img src={NotFound} alt="Not found illustration" class="w-full h-96" />
		</div>
	</div>
</main>
