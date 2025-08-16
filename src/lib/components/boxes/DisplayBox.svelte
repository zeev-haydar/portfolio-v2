<script lang="ts" generics="C extends Component">
	import type { MouseEventHandler } from 'svelte/elements';
	import { MoreDetailIcon } from '../icons';
	import type { Action } from 'svelte/action';
	import { hover } from 'motion';
	import { fade } from 'svelte/transition';
	import { onMount} from 'svelte';
	import type { Component } from 'svelte';

	type DisplayBoxProps = {
		image?: string;
		tooltip?: string;
		onClick?: MouseEventHandler<HTMLButtonElement>;
	};
	let { image, tooltip, onClick }: DisplayBoxProps = $props();

	let infoIconVisible: boolean = $state(false);
	let buttonEl: HTMLButtonElement;
	let bgImage: string = $state(''); // lazy-loaded background

	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		if (onClick) {
			onClick(event);
			return;
		}
		console.log('Button clicked!');
	};

	const hoverAction: Action<HTMLButtonElement> = (element) => {
		const controls = hover(element, () => {
			infoIconVisible = true;

			return () => {
				infoIconVisible = false;
			};
		});

		return {
			destroy() {
				controls();
			}
		};
	};

	onMount(() => {
		if (!image || !buttonEl) return;

		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						bgImage = `url(${image})`; // apply real image
						obs.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '100px' } // preload before fully visible
		);

		observer.observe(buttonEl);

		return () => observer.disconnect();
	});
</script>

<button
	bind:this={buttonEl}
	use:hoverAction
	class="relative overflow-hidden rounded-lg bg-center text-white shadow-lg"
	class:bg-cover={!!bgImage}
	class:bg-gray-200={!bgImage}
	style="background-image: {bgImage}"
	aria-label={tooltip || 'View more details'}
	onclick={onClick || handleClick}
>
	{#if !bgImage}
		<div class="flex h-full w-full items-center justify-center text-gray-500">
			No Image
		</div>
	{/if}

	{#if infoIconVisible}
		<div
			class="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px]"
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 200 }}
		>
			{#if tooltip}
				<span
					class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 rounded-md bg-gray-900 px-2 py-1 text-sm whitespace-nowrap"
				>
					{tooltip}
				</span>
			{/if}
			<MoreDetailIcon size={48} />
		</div>
	{/if}
</button>
