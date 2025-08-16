<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	let {
		closeModal,
		children
	}: {
		closeModal: () => void;
		children: Snippet;
	} = $props();
</script>

<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
	onclick={closeModal}
	onkeydown={(e) => e.key === 'Escape' && closeModal()}
	tabindex="0"
	role="dialog"
	aria-modal="true"
	in:fade={{ duration: 200 }}
	out:fade={{ duration: 200 }}
>
	<div
		role="dialog"
		aria-modal="true"
        tabindex="-1"
		onclick={(e) => {
			e.stopPropagation();
		}}
		onkeydown={(e) => {
			e.stopPropagation();
		}}
	>
		{@render children?.()}
	</div>
</div>
