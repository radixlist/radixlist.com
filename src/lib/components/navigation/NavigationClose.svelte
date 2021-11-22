<script lang="ts">
	export let primaryColor = '#005DAA';
	export let secondaryColor = '#ADDAFF';
	export let backgroundColor = '#FFFFFF';
	export let classes = '';
</script>

<svg
	width="48"
	height="48"
	viewBox="0 0 48 48"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={classes}
>
	<path
		d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
		fill={secondaryColor}
	/>
	<path
		d="M7.73601 40.264C3.42253 35.9505 0.999237 30.1002 0.999237 24C0.999237 17.8998 3.42253 12.0495 7.73601 7.73601C12.0495 3.42253 17.8998 0.999237 24 0.999237C30.1002 0.999237 35.9505 3.42253 40.264 7.73601L7.73601 40.264Z"
		fill={backgroundColor}
	/>
	<path
		d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
		stroke={primaryColor}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M14 14L34 34"
		stroke={primaryColor}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M34 14L14 34"
		stroke={primaryColor}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
