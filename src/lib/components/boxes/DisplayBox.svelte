<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { MoreDetailIcon } from '../icons';
	import type { Action } from 'svelte/action';
	import { hover } from 'motion';
	import { fade } from 'svelte/transition';

	type DisplayBoxProps = {
		size: [number | string, number | string];
		image?: string;
		tooltip?: string;
        onClick?: MouseEventHandler<HTMLButtonElement>;
	};
	let { size, image, tooltip, onClick }: DisplayBoxProps = $props();

	let infoIconVisible: boolean = $state(false);
	let mousePosition = $state({ x: 0, y: 0 });

	const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
		// this will open a modal. will be handled later
		console.log('Button clicked!');
	};

	const hoverAction: Action<HTMLButtonElement> = (element) => {
		const updateMousePosition = (event: MouseEvent) => {
			mousePosition.x = event.clientX;
			mousePosition.y = event.clientY;
		};

		const controls = hover(element, () => {
			infoIconVisible = true;
			element.addEventListener('mousemove', updateMousePosition);

			return (endEvent) => {
				infoIconVisible = false;
				element.removeEventListener('mousemove', updateMousePosition);
			};
		});

		return {
			destroy() {
				controls();
				element.removeEventListener('mousemove', updateMousePosition);
			}
		};
	};

	const formatSize = (value: number | string) => (typeof value === 'number' ? `${value}px` : value);
</script>

<button
	use:hoverAction
	class="relative overflow-hidden rounded-lg bg-center text-white shadow-lg"
	class:bg-cover={image}
	class:bg-gray-200={!image}
	style="width:{formatSize(size[0])}; height: {formatSize(size[1])}; {image
		? `background-image: url(${image});`
		: ''}"
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
					class="fixed z-10 rounded-md bg-gray-900 px-2 py-1 text-sm"
					style="
                    top: {mousePosition.y}px;
                    left: {mousePosition.x}px;
                    transform: translate(-100%, -533%);
                "
				>
					{tooltip}
				</span>
			{/if}
			<MoreDetailIcon size={48} />
		</div>
	{/if}
</button>
