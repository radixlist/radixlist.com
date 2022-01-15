<script lang="ts">
	import { goto } from '$app/navigation';
	import { getAuth } from "firebase/auth";

	function logout() {
		getAuth().signOut().then(function() {
			goto('/');
		}, function(error) {
			// TODO
			console.error('Sign Out Error', error);
		});
	}
</script>

<div>
	<button on:click="{logout}">Logout</button>
</div>
