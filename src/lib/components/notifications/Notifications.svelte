<script lang="ts">
	import { messages } from './store';
</script>

{#each $messages as message}
	<div class="text-red-500">
		{message.message}
	</div>
{/each}
