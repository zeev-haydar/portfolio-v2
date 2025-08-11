<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Action } from 'svelte/action';

	// Props for this component
	let {
		id,
		class: className,
		style,
		show = $bindable(),
		children
	}: {
		id: string;
		class?: string;
		style?: string;
		show: boolean;
		children: Snippet;
	} = $props();

	// The viewport action is moved here, making it self-contained.
	const viewport: Action<
		HTMLDivElement,
		undefined,
		{
			onenterViewport: (e: CustomEvent) => void;
			onexitViewport: (e: CustomEvent) => void;
		}
	> = (node) => {
		const options = {
			root: node.parentElement,
			threshold: 0.5 // Fires when 50% of the element is visible
		};

		// The observer is created and lives only within this action
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.dispatchEvent(new CustomEvent('enterViewport'));
				} else {
					node.dispatchEvent(new CustomEvent('exitViewport'));
				}
			});
		}, options);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	};
</script>

<div
    id={id}
	class={`section ${className ?? ''}`}
    style={`${style ?? ''}`}
	use:viewport
	onenterViewport={() => (show = true)}
	onexitViewport={() => (show = false)}
>
	{#if show}
		{@render children?.()}
	{/if}
</div>

<style>
	.section {
		height: 100vh;
		width: 100%;
		scroll-snap-align: start;
		display: flex;
		flex-direction: column;
		color: white;
	}
</style>
