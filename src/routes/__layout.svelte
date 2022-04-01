<script>
	import '../app.css';
	import Firebase from '$lib/components/auth/Firebase.svelte';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
</script>

<Firebase />

<Navigation />

<slot />
