<script lang="ts">
	import type { Snippet, Component } from 'svelte';
	import { hover, animate } from 'motion';
	import type { Action } from 'svelte/action';
	type CarouselProps = {
		backgroundColor: string;
		roundRadius: number;
		image?: string; // URL of the image if any
		logo?: {
			logo: Component;
			backgroundColor: string;
		};
		navbutton?: {
			href: string;
			backgroundColor: string;
			text: string;
            textColor: string;
		};
		size: [number | string, number | string];
		children?: Snippet;
	};

    const hoverAction: Action<HTMLDivElement> = (element) => {
        const controls = hover(element, () => {
            animate(element, {scale: 1.1});

			return (endEvent) => {
                animate(element, {scale: 1.0});
			};
		});

        return {
            destroy() {
                controls();
            },
        }
    }

	let { children, ...props }: CarouselProps = $props();
	const formatSize = (value: number | string) => (typeof value === 'number' ? `${value}px` : value);
</script>

<div
    use:hoverAction
	class="carousel1 flex flex-col items-center justify-between p-6"
	style="
    background-color: {props.backgroundColor};
    border-radius: {props.roundRadius}px;
    width: {formatSize(props.size[0])};
    min-height: {formatSize(props.size[1])};
    height: fit-content;
"
>
	<div class="mb-4 flex h-1/2 w-full items-center justify-center">
		{#if props.image}
			<img
				src={props.image}
				class="h-full w-full object-cover"
				style="border-radius: {props.roundRadius - 10}px;"
				aria-hidden="true"
				alt="Display"
			/>
		{:else if props.logo}
			{@const Logo = props.logo.logo}
			<div
				class="flex h-32 w-32 items-center justify-center rounded-full"
				style="background-color: {props.logo.backgroundColor};"
			>
				<Logo />
			</div>
		{/if}
	</div>

	<div class="text-center">
		{@render children?.()}
	</div>

	{#if props.navbutton}
		<a
			href={props.navbutton.href}
			class="mt-auto rounded-lg px-6 py-2 font-bold transition-transform hover:scale-110"
			style="
            background-color: {props.navbutton.backgroundColor};
            border-color: {props.navbutton.textColor};
            border-style: solid;
            border-width: 1px;
            color: {props.navbutton.textColor};
            "
		>
			{props.navbutton.text}
		</a>
	{/if}
</div>
