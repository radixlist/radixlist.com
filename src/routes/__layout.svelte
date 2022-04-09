<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import auth from '$lib/firebase/auth';
	import Notifications from '$lib/components/notifications/Notifications.svelte';

	onMount(async () => {
		await auth.getRedirectResult();
	});
</script>

<Notifications />
<slot />
