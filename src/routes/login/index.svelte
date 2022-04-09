<script lang="ts">
	import { onDestroy } from 'svelte';
	import auth, { session } from '$lib/firebase/auth';

	let displayName = '';
	const unsubscribe = session.subscribe((user) => {
		if (user.uid) {
			displayName = user.displayName as string;
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
	<p>{$session.displayName}</p>
	<input type="text" bind:value={displayName} class="border px-6 py-2"/>
	<br/>
	<button on:click={() => auth.updateDisplayName(displayName)} class="px-6 py-2 border">Update display name</button>
	<br	/>
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
