<script lang="ts">
	import Account from '$lib/components/auth/Account.svelte';
	import Logout from '$lib/components/auth/Logout.svelte';
</script>

<svelte:head>
	<title>Radix List | My Account</title>
	<meta property="og:title" content="Radix List | My Account" />
	<meta name="twitter:title" content="Radix List | My Account" />
</svelte:head>

<Account />

<Logout />
