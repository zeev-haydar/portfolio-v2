<script lang="ts">
	import { AboutSection, MainSection, ProjectSection, Section } from '$lib/components/sections';
	import { fade, fly } from 'svelte/transition';
	import type { Action } from 'svelte/action';
	import { NewTabLinkIcon } from '$lib/components/icons';
	import { getContext } from 'svelte';

	let showContents: boolean[] = $state([false, false, false]);

	const headerHeight: Function = getContext('headerHeight');

</script>

<div class="scroll-container">
	<Section
		id="home"
		class="bg-[#111] justify-start"
		style="padding-top: {headerHeight()}px;"
		bind:show={showContents[0]}
	>
		<MainSection />
	</Section>

	<Section
		id="about"
		class="bg-[#222] flex flex-col justify-center items-center text-2xl"
		style="padding-top: {headerHeight()}px;"
		bind:show={showContents[1]}
	>
		<AboutSection />
	</Section>

	<Section
		id="projects"
		class="bg-[#333] flex flex-col justify-start items-center text-2xl"
		style="padding-top: {headerHeight()}px;"
		bind:show={showContents[2]}
	>
		<ProjectSection/>
		
	</Section>
</div>

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
</style>
