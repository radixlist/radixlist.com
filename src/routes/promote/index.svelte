<script>
	import Breadcrumb from '$lib/components/breadcrumb/Breadcrumb.svelte';
</script>

<svelte:head>
	<title>Radix List | Promote initiative</title>
	<meta property="og:title" content="Radix List | Promote initiative" />
	<meta property="og:image" content="/favicon.png" />
	<meta name="twitter:title" content="Radix List | Promote initiative" />
	<meta
		name="twitter:description"
		content="radixlist.com - The service where all community projects and initiatives are collected in an easily searchable service."
	/>
	<meta name="twitter:image" content="/favicon.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="flex justify-center">
	<div class="max-w-screen-lg w-full">
		<Breadcrumb current="Promote initiative" />
		<div class="break-words">
			<h1 class="text-6xl font-philosopher py-10">Promote initiative: Get more visitors</h1>
			<div class="py-2 text-xl">
				The goal of radixlist.com is to provide a service where all community projects, initiatives
				and social gatherings are collected together to simplify searching.
			</div>
			<div class="py-2 text-xl">
				When you promote an initiative it will be listed at the top everytime users filter on
				something that matches your initiative.
			</div>
			<div class="py-2 text-xl">Don't miss the chance to get more visitors to your project!</div>
			<div class="py-2 text-xl">
				If you are interested in promotion, please contact either of the following:
			</div>
			<div class="py-2 text-l">
				<a href="https://t.me/Kansuler"
					class="text-gray-800 hover:text-zinc-500 cursor-pointer block">
					<img src="/src/assets/Telegram.svg" class="w-4 h-4 inline" alt="icon" />
					Kansuler
				</a>
			</div>
			<div class="py-2 text-l">
				<a href="https://t.me/chris_pica"
					class="text-gray-800 hover:text-zinc-500 cursor-pointer block">
					<img src="/src/assets/Telegram.svg" class="w-4 h-4 inline" alt="icon" />
					Chris | pica.finance
				</a>
			</div>
		</div>
	</div>
</main>
