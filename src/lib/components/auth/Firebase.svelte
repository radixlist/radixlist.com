<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	if (browser) {
		onMount(async () => {
			const { default: firebase } = await import('firebase/compat/app');
			const firebaseConfig = {
				// TODO shift to configuration
				apiKey: "AIzaSyC-tD6v4P7lDj8EnODXtum84nESq6yK8GI",
				authDomain: "radix-list-development.firebaseapp.com",
				projectId: "radix-list-development",
				storageBucket: "radix-list-development.appspot.com",
				messagingSenderId: "390165300739",
				appId: "1:390165300739:web:18936bee15eb975d11f036",
				measurementId: "G-M0EFT9MWH2"
			};
			firebase.initializeApp(firebaseConfig);
		});
	}
</script>
