<script lang="ts">
	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';
	import NavigationOpen from './NavigationOpen.svelte';
	import NavigationClose from './NavigationClose.svelte';

	let __refRoot: HTMLElement;
	let _active = false;
	let _touchEvent: string;
	function toggleMenu() {
		_active = !_active;
	}
	const eventEndHandler = (evt: MouseEvent): void => {
		if (__refRoot !== evt.target && !__refRoot.contains(evt.target as Node)) {
			_active = false;
		}
	};
	const registerEvent = (): void => {
		document.body.addEventListener(_touchEvent, eventEndHandler);
	};
	const unregisterEvent = (): void => {
		document.body.removeEventListener(_touchEvent, eventEndHandler);
	};
	$: if (_active && browser) {
		registerEvent();
	}
	$: if (!_active && browser) {
		unregisterEvent();
	}
	onMount(() => {
		const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints;
		_touchEvent = touchSupport ? 'touchend' : 'click';
	});
	onDestroy(() => {
		if (browser) {
			unregisterEvent();
		}
	});
</script>

<li bind:this={__refRoot} class="block ml-1 md:hidden">
	<div
		class:pointer-events-none={_active}
		on:click={toggleMenu}
		aria-haspopup="true"
		aria-expanded={_active}
	>
		<div class="flex flex-col items-center justify-center cursor-pointer w-7 h-7">
			<NavigationOpen classes="w-7 h-7" />
		</div>
	</div>
	<div
		class:pointer-events-none={!_active}
		class:flex={_active}
		class="absolute left-0 top-0 right-0 justify-end"
	>
		<div
			class:opacity-100={_active}
			class:opacity-0={!_active}
			class:scale-100={_active}
			class:scale-95={!_active}
			class="transform origin-top-right duration-200 bg-white shadow-lg rounded-md overflow-hidden relative leading-5 flex-grow p-4"
		>
			<div
				class="absolute right-0 top-0 w-12 h-12 cursor-pointer flex justify-center items-center"
				on:click={toggleMenu}
			>
				<NavigationClose classes="w-7 h-7" />
			</div>
			<div class="">
				<a
					href="https://docs.google.com/forms/d/19fVvtpMPp5k8ayz_U9veTNTutzHRo0HDiupP19a7GYI"
					target="_blank"
					class="link box-border flex flex-row items-center py-2 cursor-pointer"
					on:click={() => (_active = false)}
				>
					<div>
						<div class="font-bold text-lg text-[#005DAA] flex items-center">
							Add or edit initiative
						</div>
					</div>
				</a>
			</div>
			<div class="">
				<a
					href="/promote"
					class="link box-border flex flex-row items-center py-2 cursor-pointer"
					on:click={() => (_active = false)}
				>
					<div>
						<div class="font-bold text-lg text-[#005DAA] flex items-center">Promote initiative</div>
					</div>
				</a>
			</div>
			<div class="">
				<a
					href="https://plausible.io/radixlist.com"
					target="_blank"
					class="link box-border flex flex-row items-center py-2 cursor-pointer"
					on:click={() => (_active = false)}
				>
					<div>
						<div class="font-bold text-lg text-[#005DAA] flex items-center">Statistics</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</li>
