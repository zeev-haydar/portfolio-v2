<script lang="ts">
	import { Link } from "$lib";

	type JustifyContent =
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';

	let { height=$bindable(), justifyContent = 'flex-start', children } = $props<{
		height?: number;
		justifyContent?: JustifyContent;
		children?: () => void;
	}>();
	


	let headerRootEl: HTMLElement;

	// This effect runs inside the header, measuring its own root element
	$effect(() => {
		if (headerRootEl) {
			height = headerRootEl.offsetHeight;
		}
	});
</script>

<header
	bind:this={headerRootEl}
	class="app-header flex w-full flex-row space-x-2 p-4 text-white"
	style="justify-content: {justifyContent}"
>
	<div class="w-full flex flex-row justify-start">
		<Link href="/">
			<h1 class="font-bold">Haidar Wibowo</h1>
		</Link>
	</div>
	{@render children?.()}
</header>

<style>
	.app-header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10; /* Ensures the header stays on top of other content */
		background: transparent; /* Or a color like rgba(0, 0, 0, 0.2) for a nice effect */
	}
</style>
