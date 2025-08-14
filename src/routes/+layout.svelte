<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	// @ts-ignore
	import { browser } from '$app/environment';
	import { Header, Link } from '$lib';
	import { NewTabLinkIcon } from '$lib/components/icons';
	import { setContext } from 'svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';

	let headerHeight = $state(0);
	let { children } = $props();

	setContext('headerHeight', () => headerHeight);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header bind:height={headerHeight} justifyContent="flex-end">
	<Link href="https://github.com/zeev-haydar" target="_blank" rel="noopener noreferrer">
		<div class="flex items-center gap-x-1">
			<h1>Github</h1>
			<NewTabLinkIcon />
		</div>
	</Link>
	<Link
		href="https://www.linkedin.com/in/nazhif-haidar-putra-wibowo/"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="flex items-center gap-x-1">
			<h1>LinkedIn</h1>
			<NewTabLinkIcon />
		</div>
	</Link>
</Header>

{#if browser}
	<CustomCursor />
{/if}

{@render children?.()}

<style>
	/* Use :global() to hide the default system cursor everywhere */
	:global(body, a, button) {
		cursor: none;
	}
</style>
