<script lang="ts">
	import Logo from '$assets/Logo.svg';
	import Mobile from './Mobile.svelte';

	let _hoverID = -1;
</script>

<header class="flex justify-center relative">
	<div class="max-w-screen-lg w-full flex justify-between md:justify-start relative my-4">
		<div>
			<a href="/" class="flex items-center">
				<img src={Logo} alt="Radix List Logo" />
				<span class="font-philosopher font-bold ml-4 text-2xl text-black">Radix List</span>
			</a>
		</div>
		<div class="items-center ml-10 hidden md:flex">
			<a
				href="https://docs.google.com/forms/d/19fVvtpMPp5k8ayz_U9veTNTutzHRo0HDiupP19a7GYI"
				target="_blank"
				class="navigation-item-wrapper box-border px-4 hidden md:inline-block cursor-pointer mt-4"
				aria-haspopup="false"
				on:mouseenter={() => (_hoverID = 0)}
				on:mouseleave={() => (_hoverID = -1)}
			>
				<span
					class="navigation-item box-border pb-2 relative inline-block overflow-hidden bg-clip-text sharp-blue-to-black duration-300 ease-in-out font-mulish"
					class:active={_hoverID === 0}
					style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 200% 100%; transition-property: background; background-position: 100%;"
				>
					Add or edit initiative
				</span>
			</a>
			<a
				href="/promote"
				class="navigation-item-wrapper box-border px-4 hidden md:inline-block cursor-pointer mt-4"
				aria-haspopup="false"
				on:mouseenter={() => (_hoverID = 1)}
				on:mouseleave={() => (_hoverID = -1)}
			>
				<span
					class="navigation-item box-border pb-2 relative inline-block overflow-hidden bg-clip-text sharp-blue-to-black duration-300 ease-in-out font-mulish"
					class:active={_hoverID === 1}
					style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 200% 100%; transition-property: background; background-position: 100%;"
				>
					Promote initiative
				</span>
			</a>
			<a
				href="https://plausible.io/radixlist.com"
				target="_blank"
				class="navigation-item-wrapper box-border px-4 hidden md:inline-block cursor-pointer mt-4"
				aria-haspopup="false"
				on:mouseenter={() => (_hoverID = 2)}
				on:mouseleave={() => (_hoverID = -1)}
			>
				<span
					class="navigation-item box-border pb-2 relative inline-block overflow-hidden bg-clip-text sharp-blue-to-black duration-300 ease-in-out font-mulish"
					class:active={_hoverID === 2}
					style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 200% 100%; transition-property: background; background-position: 100%;"
				>
					Statistics
				</span>
			</a>
		</div>
		<div class="md:hidden flex items-center">
			<Mobile />
		</div>
	</div>
</header>

<style lang="scss">
	.navigation-item {
		&:before {
			position: absolute;
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
			bottom: 0;
			display: block;
			height: 3px;
			width: 0%;
			content: '';
			background-color: #111827;
		}
		&.active {
			background-position: 0 100% !important;
			&:before {
				opacity: 1;
				width: 100%;
			}
		}
	}
</style>
