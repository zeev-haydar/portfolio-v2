<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type AnchorProps = HTMLAnchorAttributes & {
		children?: Snippet;
	};

	let { children, ...rest }:AnchorProps = $props();
</script>

<a {...rest}>
	{@render children?.()}
</a>
