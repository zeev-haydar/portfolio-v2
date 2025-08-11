<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	export let children: any;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
