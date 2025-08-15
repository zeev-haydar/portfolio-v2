<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { MoreDetailIcon } from '../icons';
	import type { Action } from 'svelte/action';
	import { hover } from 'motion';
	import { fade } from 'svelte/transition';
	import { getContext, onMount } from 'svelte';

	type DisplayBoxProps = {
		image?: string;
		tooltip?: string;
		onClick?: MouseEventHandler<HTMLButtonElement>;
		modalComponent?: any; // Component to show in modal
		modalProps?: any; // Props to pass to modal component
	};
	let { image, tooltip, onClick, modalComponent, modalProps = {} }: DisplayBoxProps = $props();

	let infoIconVisible: boolean = $state(false);

	// Get modal context
	const modal = getContext('modal') as {
		open: (component: any, props?: any) => void;
		close: () => void;
		isOpen: () => boolean;
	};


	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		// If custom onClick is provided, use it
		if (onClick) {
			onClick(event);
			return;
		}

		// If modalComponent is provided, open it in modal
		if (modalComponent && modal) {
			modal.open(modalComponent, {
				...modalProps,
				image,
				tooltip
			});
			return;
		}

		// Default behavior
		console.log('Button clicked!');
	};

	const hoverAction: Action<HTMLButtonElement> = (element) => {
		const controls = hover(element, () => {
			infoIconVisible = true;

			return (endEvent) => {
				infoIconVisible = false;
			};
		});

		return {
			destroy() {
				controls();
			}
		};
	};
</script>

<button
	use:hoverAction
	class="relative overflow-hidden rounded-lg bg-center text-white shadow-lg"
	class:bg-cover={image}
	class:bg-gray-200={!image}
	style="{image ? `background-image: url(${image});`: ''}"
	aria-label={tooltip || 'View more details'}
	onclick={onClick || handleClick}
>
	{#if !image}
		<div class="flex h-full w-full items-center justify-center text-gray-500">No Image</div>
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