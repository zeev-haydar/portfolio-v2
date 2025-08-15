<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import DisplayBox from '../boxes/DisplayBox.svelte';
	import { SmartGrid } from '../grids';
	import { ProjectModal } from '../modals';

	const handleOpenLink = (url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};
</script>

<div class="flex h-full w-full flex-col items-center px-8">
	<h1 class="font-black" in:fly={{ y: 20, duration: 1000 }}>My Projects</h1>
	<div class="mt-4 h-full w-full pb-[10%]" in:fly={{ y: 20, duration: 1000, delay: 200 }}>
		<SmartGrid minSize={100} gap={20}>
			<DisplayBox
				image="images/projects/jasakula.png"
				tooltip="Jasakula"
				modalComponent={ProjectModal}
				modalProps={{
					title: 'Jasakula',
					description: 'A comprehensive service platform for people who looking for freelancers, you can be either a client or a freelancer',
					technologies: ['React Native (Expo)', 'TypeScript', 'Node.js'],
					githubUrl: 'https://github.com/zeev-haydar/Jasakula'
				}}
			/>
			<DisplayBox
				image="images/projects/tugas-akhir.png"
				tooltip="NARM and SRGNN Comparative Study"
				modalComponent={ProjectModal}
				modalProps={{
					title: 'NARM and SRGNN Comparative Study',
					description: 'Research comparing neural recommendation models using a real life e-commerce dataset. This research also conducted hyperparameter tuning for the best model',
					technologies: ['Python', 'PyTorch', 'PyTorch Geometric', 'Optuna'],
					githubUrl: 'https://github.com/zeev-haydar/tugas-akhir-s1'
				}}
			/>
		</SmartGrid>
	</div>
</div>

<style>
</style>
