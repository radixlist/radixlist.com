<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	if (browser) {
		onMount(async () => {
			await import('firebase/compat/app');
			const { getAuth, onAuthStateChanged } = await import('firebase/auth');

			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				if (user) {
					// User is signed in, see docs for a list of available properties
					// https://firebase.google.com/docs/reference/js/firebase.User
					console.debug('Account: user logged in', user);
					email = user.email;
					emailVerified = user.emailVerified;
					providerId = user.providerId;
					document.getElementById('user-details').style.display = 'inline';
				} else {
					// User is signed out
					goto('/account/login');
				}
			});
		});
	}

	export let email = '',
		emailVerified = false,
		providerId = '';
</script>

<div id="user-details" style="display: none;">
	<div>
		Email: {email}
	</div>
	<div>
		Email verified: {emailVerified}
	</div>
	<div>
		Provider: {providerId}
	</div>
</div>
