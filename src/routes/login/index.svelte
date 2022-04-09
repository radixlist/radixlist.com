<script lang="ts">
	import auth, { session } from '$lib/firebase/auth';
	import { onDestroy } from 'svelte';
	const unsubscribe = session.subscribe((user) => {
		if (user.uid) {
			// TODO: Redirect user to home, since the user is logged in.
			console.log('REDIRECT!');
		}
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<br />
{#if $session.uid}
	<p>You are logged in!</p>
	<button on:click={() => auth.signOut()} class="px-6 py-2 border">Logout</button>
{:else}
	<p>You are not logged in!</p>
	<button on:click={() => auth.signInWithGoogle()} class="px-6 py-2 border"
		>Sign in with Google</button
	>
	<br />
	<button on:click={() => auth.signInWithFacebook()} class="px-6 py-2 border"
		>Sign in with Facebook</button
	>
	<br />
	<button on:click={() => auth.signInWithTwitter()} class="px-6 py-2 border"
		>Sign in with Twitter</button
	>
	<br />
	<button on:click={() => auth.signInWithGithub()} class="px-6 py-2 border"
		>Sign in with Github</button
	>
{/if}
