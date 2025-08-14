<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	

	// Reactive state to hold the cursor's coordinates
	let cursorPosition = $state({ x: -100, y: -100 });
	let isHoveringLink = $state(false);

	// Function to update the cursor's position
	const handleMouseMove = (event: MouseEvent) => {
		cursorPosition.x = event.clientX;
		cursorPosition.y = event.clientY;

		// Check if the cursor is hovering over a link or button
		const target = event.target as HTMLElement;
		isHoveringLink = !!target.closest('a, button');
	};

	// Add and remove the event listener when the component is mounted/destroyed
	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
	});

	onDestroy(() => {
		window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<div
	class="cursor-dot"
	style="top: {cursorPosition.y}px; left: {cursorPosition.x}px;"
></div>
<div
	class="cursor-circle"
	class:grow={isHoveringLink}
	style="top: {cursorPosition.y}px; left: {cursorPosition.x}px;"
></div>

<style>
	.cursor-dot {
		position: fixed;
		width: 8px;
		height: 8px;
		background-color: lightcyan;
		border-radius: 50%;
		/* Center the dot on the cursor tip */
		transform: translate(-50%, -50%);
		/* Ensure the cursor doesn't block interactions with elements underneath */
		pointer-events: none;
		z-index: 9999;
	}

	.cursor-circle {
		position: fixed;
		width: 40px;
		height: 40px;
		border: 2px solid aliceblue;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		/* Add a smooth trailing effect */
		transition:
			width 0.3s,
			height 0.3s,
			top 0.01s,
			left 0.01s;
		z-index: 9999;
	}

	/* This class makes the circle grow when hovering over links/buttons */
	.cursor-circle.grow {
		width: 60px;
		height: 60px;
	}
</style>