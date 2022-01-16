<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	if (browser) {
		onMount(async () => {
			const { default: firebase } = await import('firebase/compat/app');
			const firebaseui = await import('firebaseui');
			await import ('firebaseui/dist/firebaseui.css');

			var uiConfig = {
				callbacks: {
					signInSuccessWithAuthResult: function(authResult, redirectUrl) {
						return true; // redirect automatically
					},
					// signInFailure: function(error) {
					// 	// TODO https://github.com/firebase/FirebaseUI-Web#signinfailureerror
					// 	console.error(error);
					// },
					uiShown: function() {
						// hide the loader when widget is rendered
						document.getElementById('firebaseui-loader').style.display = 'none';
					}
				},
				signInSuccessUrl: '/',
				signInOptions: [
					firebase.auth.EmailAuthProvider.PROVIDER_ID,
				],
				// TODO add privacy policy
				// privacyPolicyUrl: '<your-tos-url>'
			};

			let ui = firebaseui.auth.AuthUI.getInstance();
			if (ui) {
				ui.reset();
			} else {
				ui = new firebaseui.auth.AuthUI(firebase.auth());
			}
			ui.start('#firebaseui-auth-container', uiConfig);
		});
	}
</script>

<div id="firebaseui-auth-container"></div>
<div id="firebaseui-loader">Loading...</div>
<div>To create an account, start by entering your email above.</div>
