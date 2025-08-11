<script lang="ts">
	import { onMount } from 'svelte';
	let { title = 'untitled', useAnimation=false, fontSize='3.75rem' } = $props();
	let visible = $state(!useAnimation);

	function typewriter(node: HTMLElement, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error('This transition only works with a single text node');
		}

		const text = node.textContent || '';
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	onMount(() => {
		// Set a timeout to hide the text after a certain interval

        if (!useAnimation) return;
		visible=true;
		const visibleDuration = 3000; // Time in milliseconds (3 seconds)
		const cycleDuration = 3000; // Time in milliseconds (5 seconds)

		// Start the cycle
		const cycle = () => {
			setTimeout(() => {
				visible = !visible;
			}, visibleDuration);
		};

		// Run the cycle immediately and then at intervals
		setInterval(cycle, cycleDuration);
	});

</script>


<style>
	.skewed {
		transform: skewX(-20deg);
	}

	.outlined-bevel {
    /* Outline effect */
    -webkit-text-stroke: 4px #aaaaaaaa; /* Outline width and color */
    color: white; /* Text color */

    /* Bevel effect */
    text-shadow:
      2px 2px 0px #000, /* Bottom-right shadow */
      -2px -2px 0px #fff; /* Top-left highlight */
  }
	
</style>


<div class="title" style="min-height: {fontSize};">
    {#if visible}
		<h1 class="text-end font-bold text-white" style="
		font-family: 'Roboto', sans-serif;
		letter-spacing: 0.2rem;
		line-height: 1;
		font-size: {fontSize};
		display: inline-block;
		overflow: wrap;" 
		transition:typewriter={{ speed: 1 }}>
            {title}
        </h1>
    {/if}
</div>