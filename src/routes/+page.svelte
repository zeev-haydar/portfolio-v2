<script lang="ts">
	import { Header, Link } from '$lib';
	import { AboutSection, MainSection, ProjectSection, Section } from '$lib/components/sections';
	import { fade, fly } from 'svelte/transition';
	import type { Action } from 'svelte/action';
	import { NewTabLinkIcon } from '$lib/components/icons';

	let showContents: boolean[] = $state([false, false, false]);

	let headerHeight = $state(0);

	const viewport: Action<
		HTMLDivElement,
		undefined,
		{
			onenterViewport: (e: CustomEvent) => void;
			onexitViewport: (e: CustomEvent) => void;
		}
	> = (node) => {
		const options = {
			root: node.parentElement,
			threshold: 0.5 // Fires when 50% of the element is visible
		};

		// The observer is created and lives only within this action
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.dispatchEvent(new CustomEvent('enterViewport'));
				} else {
					node.dispatchEvent(new CustomEvent('exitViewport'));
				}
			});
		}, options);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	};
</script>

<div class="scroll-container">
	<Header bind:height={headerHeight} justifyContent="flex-end">
		<Link href="https://github.com/zeev-haydar" target="_blank" rel="noopener noreferrer">
			<div class="flex items-center gap-x-1">
				<h1>Github</h1>
				<NewTabLinkIcon/>
			</div>
		</Link>
		<Link
			href="https://www.linkedin.com/in/nazhif-haidar-putra-wibowo/"
			target="_blank"
			rel="noopener noreferrer"
		>
		<div class="flex items-center gap-x-1">
			<h1>Linkedin</h1>
			<NewTabLinkIcon/>
		</div>
		</Link>
	</Header>

	<Section
		id="home"
		class="bg-[#111] justify-start"
		style="padding-top: {headerHeight}px;"
		bind:show={showContents[0]}
	>
		<MainSection />
	</Section>

	<Section
		id="about"
		class="bg-[#222] flex flex-col justify-center items-center text-2xl"
		style="padding-top: {headerHeight}px;"
		bind:show={showContents[1]}
	>
		<AboutSection />
	</Section>

	<Section
		id="projects"
		class="bg-[#333] flex flex-col justify-center items-center text-2xl"
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
		scrollbar-width: none; /*Firefox*/
		-ms-overflow-style: none; /*MS Edge*/
	}

	/**For Chrome, Safari, and Opera*/
	.scroll-container::-webkit-scrollbar {
		display: none;
	}
</style>
