<script lang="ts">
	import type { Snippet } from 'svelte';

	type SmartGridProps = {
		minSize?: number; // The minimum width of each item in pixels.
		gap?: number; // The space between items in pixels.
		children: Snippet;
	};

	// Set default values for the props.
	let { minSize = 250, gap = 16, children }: SmartGridProps = $props();
</script>

<div
	class="smart-grid h-full w-full"
	style="--min-size: {minSize}px; --gap: {gap}px;"
>
	{@render children?.()}
</div>

<style>
	.smart-grid {
		display: grid;
		gap: var(--gap);

		/* This is the core of the smart grid:
            - repeat(): Creates as many columns as needed.
            - auto-fit: Fits as many columns as possible in a row. If there's extra space,
                        it expands the columns to fill it. If not enough space, it wraps.
            - minmax(): Defines the size range for each column.
                - var(--min-size): The minimum width for a column. This is the key to responsiveness.
                - 1fr: Allows the column to grow and take up a fraction of the available space.
        */
		grid-template-columns: repeat(auto-fit, minmax(var(--min-size), 1fr));

        grid-auto-rows: 1fr;
		
		/* Make sure children respect the grid boundaries */
		overflow: hidden;
	}

    .smart-grid > :global(*) {
		width: 100%;
		height: 100%;
		min-width: 0;
		min-height: 0;
		aspect-ratio: 1;
		overflow: hidden;
	}
</style>