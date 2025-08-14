<script lang="ts">
	import { Link } from '$lib';
	import { fade, fly } from 'svelte/transition';
	import DisplayBox from '../boxes/DisplayBox.svelte';

	const handleOpenLink = (url: string) => {

		window.open(url, '_blank', 'noopener,noreferrer');
	};
</script>

<div class="w-full h-full flex flex-col items-center px-8">
	<h1 class="font-black" in:fly={{ y: 20, duration: 1000 }}>My Projects</h1>
	<div class="w-full h-fit flex flex-row justify-between">
		<DisplayBox 
		size={[200, 200]} 
		image="images/projects/jasakula.png" 
		tooltip="Jasakula" 
		onClick={()=>handleOpenLink("https://github.com/zeev-haydar/Jasakula")}
		/>
	</div>
</div>
<!-- <p in:fly={{ y: 20, delay: 200, duration: 1000 }}>Here's a showcase of my work.</p>
<div class="project-card" in:fade={{ delay: 400, duration: 1000 }}>Project One</div>
<div class="project-card" in:fade={{ delay: 600, duration: 1000 }}>Project Two</div> -->

<style>

</style>
