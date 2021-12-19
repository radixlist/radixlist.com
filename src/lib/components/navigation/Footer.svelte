<script lang="ts">
	import type { Team } from '$lib/sanity/team';
	import MailIcon from '$assets/Mail.svg';

	export let team: Team;
</script>

<footer class="flex justify-center pb-8">
	<div class="max-w-screen-lg w-full md:flex justify-between font-mulish">
		<div class="md:order-last text-sm md:flex gap-4 text-gray-800">
			<div class="md:px-4 py-4 md:py-0 flex flex-col gap-2">
				<h5 class="font-bold">Contact</h5>
				<a href="mailto:hello@radixlist.com" class="underline hover:text-zinc-500"
					>hello@radixlist.com</a
				>
			</div>
			<div class="md:px-4 py-4 md:py-0 flex flex-col gap-2">
				<h5 class="font-bold">Initiative</h5>
				<a
					href="https://docs.google.com/forms/d/19fVvtpMPp5k8ayz_U9veTNTutzHRo0HDiupP19a7GYI"
					target="_blank"
					class="underline hover:text-zinc-500">Add initiative</a
				>
				<a
					href="https://docs.google.com/forms/d/19fVvtpMPp5k8ayz_U9veTNTutzHRo0HDiupP19a7GYI"
					target="_blank"
					class="underline hover:text-zinc-500">Edit initiative</a
				>
				<a href="/promote" class="underline hover:text-zinc-500">Promote initiative</a>
			</div>
			<div class="md:px-4 py-4 md:py-0 flex flex-col gap-2">
				<h5 class="font-bold">Links</h5>
				<a
					href="https://plausible.io/radixlist.com"
					target="_blank"
					class="underline hover:text-zinc-500">Statistics</a
				>
			</div>
		</div>
		<div class="text-sm py-4 md:py-0">
			<div>Made with ❤️ for the Radix Community</div>
			<div>
				{#each team.members as member (member._key)}
					{#if member.contact}
						<a
							href={member.contact.link}
							class="text-gray-800 hover:text-zinc-500 cursor-pointer block"
						>
							{#if member.contact.icon}
								<img src={member.contact.icon} class="w-4 h-4 inline" alt="icon" />
							{/if}
							{member.name}
						</a>
					{:else}
						{member.name}
					{/if}
				{/each}
			</div>
		</div>
	</div>
</footer>
