<script lang="ts">
	import { customAlphabet } from 'nanoid';

	const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);
	const id = nanoid();

	export let label: string;
	export let hideLabel = false;
	export let labelCornerHint = '';
	export let type = 'text';
	export let placeholder = '';
	export let help = '';
	export let error = '';
	export let value = '';

	const onInput = (event: InputEvent) => (value = (event.target as HTMLInputElement).value);
</script>

<div>
	<div class:flex={labelCornerHint} class:justify-between={labelCornerHint}>
		<label for={id} class="block text-sm font-medium text-gray-700" class:sr-only={hideLabel}>
			{label}
		</label>
		{#if labelCornerHint}
			<span class="text-sm text-gray-500">{labelCornerHint}</span>
		{/if}
	</div>
	<div
		class="mt-1"
		class:relative={$$slots.icon}
		class:rounded-md={$$slots.icon}
		class:shadow-sm={$$slots.icon}
	>
		{#if $$slots.icon}
			<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				<slot name="icon" />
			</div>
		{/if}
		<input
			{type}
			name={label}
			{id}
			class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			class:pl-10={$$slots.icon}
			class:border-red-300={error}
			class:text-red-900={error}
			class:placeholder-red-300={error}
			class:focus:ring-red-500={error}
			class:focus:border-red-500={error}
			{value}
			on:input={onInput}
			{placeholder}
		/>
		{#if error}
			<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<!-- Heroicon name: solid/exclamation-circle -->
				<svg
					class="h-5 w-5 text-red-500"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		{/if}
	</div>
	{#if help}
		<p class="mt-2 text-sm text-gray-500">{help}</p>
	{/if}
	{#if error}
		<p class="mt-2 text-sm text-red-600">{error}</p>
	{/if}
</div>
