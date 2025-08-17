<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { DisplayBox } from '$lib/components/boxes';
	import { SmartGrid } from '../grids';
	import { projects, type Project } from '$lib/data/project'; 
	import { getContext } from 'svelte';
	import ProjectModal from '../modals/ProjectModal.svelte'

	// Access modal context from +page.svelte
	const modal = getContext<{
		open: (component: any, props?: Record<string, any>) => void;
		close: () => void;
		isOpen: () => boolean;
	}>('modal');

	// Open ProjectModal when a DisplayBox is clicked
	const handleShowModal = async (project: Project) => {
    	modal.open(ProjectModal, project.modalProps);
	};
</script>

<div class="flex h-full w-full flex-col items-center px-8">
	<h1 class="font-black" in:fly={{ y: 20, duration: 1000 }}>My Projects</h1>
	<div class="mt-4 h-full w-full pb-[10%]" in:fade={{duration: 1000, delay: 200 }}>
		<SmartGrid minSize={200} gap={20}>
			
			{#each projects as project}
				<DisplayBox
					image={project.image}
					tooltip={project.tooltip}
					onClick={() => handleShowModal(project)}
				/>
			{/each}
		</SmartGrid>
	</div>
</div>
