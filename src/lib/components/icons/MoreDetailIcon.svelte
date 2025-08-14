<script lang="ts">
	// 1. Define the props the component accepts.
	let { size = 24 } = $props<{
		size?: number;
	}>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<circle cx="12" cy="12" r="10"></circle>
	<line x1="12" y1="16" x2="12" y2="12"></line>
	<line x1="12" y1="8" x2="12.01" y2="8"></line>
</svg>
