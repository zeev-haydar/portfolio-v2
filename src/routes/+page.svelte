<script lang="ts">
	import { AboutSection, MainSection, ProjectSection, Section } from '$lib/components/sections';
	import { fade, fly } from 'svelte/transition';
	import { getContext, onMount, type Component } from 'svelte';
	import { setContext } from 'svelte';
	import ModalWrapper from '$lib/components/modals/ModalWrapper.svelte';

	let modalComponent: Component | null = $state(null);
	let modalProps: any = $state({});
	let isModalOpen: boolean = $derived(modalComponent !== null);

	// Scroll container reference
	let scrollContainer: HTMLElement;

	let showContents: boolean[] = $state([false, false, false]);

	const headerHeight: Function = getContext('headerHeight');

	// Modal management functions
	const openModal = (component: Component, props: any = {}) => {
		// Singleton: close any existing modal first
		closeModal();

		modalComponent = component;
		modalProps = props;

		// Prevent scroll when modal opens
		if (scrollContainer) {
			scrollContainer.style.overflow = 'hidden';
			scrollContainer.style.scrollBehavior = 'auto';
		}
	};

	const closeModal = () => {
		modalComponent = null;
		modalProps = {};

		// Restore scroll when modal closes
		if (scrollContainer) {
			scrollContainer.style.overflow = 'scroll';
			scrollContainer.style.scrollBehavior = 'smooth';
		}
	};

	// Keyboard event handler for ESC key
	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && isModalOpen) {
			closeModal();
		}
	};

	// Modal backdrop click handler
	const handleBackdropClick = (event: MouseEvent) => {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	};

	// Provide modal functions to child components via context

	setContext('modal', {
		open: openModal,
		close: closeModal,
		isOpen: () => isModalOpen
	});

	onMount(() => {
		// Add global keyboard listener
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="scroll-container" class:modal-open={isModalOpen} bind:this={scrollContainer}>
	<Section
		id="home"
		class="justify-start bg-[#111]"
		style="padding-top: {headerHeight()}px;"
		bind:show={showContents[0]}
	>
		<MainSection />
	</Section>

	<Section
		id="about"
		class="flex flex-col items-center justify-center bg-[#222] text-2xl"
		style="padding-top: {headerHeight()}px;"
		bind:show={showContents[1]}
	>
		<AboutSection />
	</Section>

	<Section
		id="projects"
		class="flex flex-col items-center justify-start bg-[#333] text-2xl"
		style="padding-top: {headerHeight()}px;"
		bind:show={showContents[2]}
	>
		<ProjectSection />
	</Section>
</div>

{#if isModalOpen}
	{@const ModComponent = modalComponent}
	<div
		class="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Enter' && closeModal()}
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		role="dialog"
		aria-modal="true"
		tabindex="0"
	>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="modal-content relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-white shadow-2xl"
			onclick={(e) => e.stopPropagation()}
			in:fade={{  duration: 300, delay: 100 }}
			out:fade={{ duration: 200 }}
			role="document"
			tabindex="-1"
		>
			<!-- Close button -->
			<button
				class="absolute top-4 right-4 z-10 rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
				onclick={closeModal}
				aria-label="Close modal"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>

			<!-- Dynamic modal content -->
			<ModComponent {...modalProps} {closeModal} />
		</div>
	</div>
	{/if}

<style>
	.scroll-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
		scrollbar-width: none; /*Firefox*/
		-ms-overflow-style: none; /*MS Edge*/
	}

	/**For Chrome, Safari, and Opera*/
	.scroll-container::-webkit-scrollbar {
		display: none;
	}

	.modal-overlay {
		background: rgba(0, 0, 0, 0.5);
	}

	.modal-content {
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	:global(body.modal-open) {
		overflow: hidden;
	}
</style>
