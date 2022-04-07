<script lang="ts">
	import auth from '$lib/firebase/auth';

	const signIn = () => auth.signInWithEmailAndPassword('simon@wikstrand.dev', '123');
</script>

<h1 class="text-2xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={signIn}>Sign in</button>
