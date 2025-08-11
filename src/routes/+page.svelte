<script lang="ts">
	import { Carousel1, Header, Link, Title } from '$lib';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { Action } from 'svelte/action';

	let showContents: boolean[] = $state([false, false]);
	let titleText: string = 'Hello! Welcome to My Page'.toUpperCase();

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
			<h1>Github</h1>
		</Link>
		<Link
			href="https://www.linkedin.com/in/nazhif-haidar-putra-wibowo/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<h1>Linkedin</h1>
		</Link>
	</Header>
	<div id="home" class="section main-window" style="padding-top: {headerHeight}px;">
		<div
			style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;"
		>
			<div class="content-container">
				<Title title={titleText} />
				<div class="mt-8 flex flex-row justify-evenly w-full">
					<Carousel1 backgroundColor="aliceblue" roundRadius={10} size={[320, 320]} navbutton={
						{
							href:"#about",
							backgroundColor: "#00000000",
							text: "Navigate",
							textColor: "#111"
						}
					}>
						<h1 class="font-black text-black">About</h1>
					</Carousel1>
					<Carousel1 backgroundColor="aliceblue" roundRadius={10} size={[320, 320]} navbutton={
						{
							href:"#projects",
							backgroundColor: "#00000000",
							text: "Navigate",
							textColor: "#111"
						}
					}>
						<h1 class="font-black text-black">Projects</h1>
					</Carousel1>
					<Carousel1 backgroundColor="aliceblue" roundRadius={10} size={[320, 320]} navbutton={
						{
							href:"#projects",
							backgroundColor: "#00000000",
							text: "Navigate",
							textColor: "#111"
						}
					}>
						<h1 class="font-black text-black">Others</h1>
					</Carousel1>
				</div>
			</div>
		</div>
	</div>

	<div
		id="about"
		class="section about-section"
		style="padding-top: {headerHeight}px;"
		use:viewport
		onenterViewport={() => {
			showContents[0] = true;
			console.log('Enter about section');
		}}
		onexitViewport={() => {
			showContents[0] = false;
			console.log('Exit about section');
		}}
	>
		{#if showContents[0]}
			<h1 in:fly={{ y: 20, duration: 1000 }}>About Me</h1>
			<p in:fly={{ y: 20, delay: 200, duration: 1000 }}>This is the second section of the page.</p>
			<p in:fly={{ y: 20, delay: 400, duration: 1000 }}>The header is still visible on top. ✨</p>
			<Link href="#home">
				<h1 class="back-link" in:fade={{ delay: 600, duration: 1000 }}>Go Back Up</h1>
			</Link>
		{/if}
	</div>

	<div
		id="projects"
		class="section projects-section"
		use:viewport
		onenterViewport={() => {
			showContents[1] = true; // Use index 1 for this section
		}}
		onexitViewport={() => {
			showContents[1] = false; // Use index 1 for this section
		}}
	>
		{#if showContents[1]}
			<h1 in:fly={{ y: 20, duration: 1000 }}>My Projects</h1>
			<p in:fly={{ y: 20, delay: 200, duration: 1000 }}>Here's a showcase of my work.</p>
			<div class="project-card" in:fade={{ delay: 400, duration: 1000 }}>Project One</div>
			<div class="project-card" in:fade={{ delay: 600, duration: 1000 }}>Project Two</div>
		{/if}
	</div>
</div>

<style>
	.main-window {
		background-color: #111;
		justify-content: flex-start;
	}

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

	.section {
		height: 100vh;
		width: 100%;
		scroll-snap-align: start;
		display: flex;
		flex-direction: column;
		color: white;
	}

	.content-container {
		width: 100%;
		display: flex;
		padding-left: 10%;
		padding-right: 10%;
		align-items: center;
		flex-direction: column;
	}
	.about-section {
		background-color: #222;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
	}
	.about-section p {
		font-size: 1.2rem;
		color: #ccc;
	}
	.back-link {
		margin-top: 2rem;
		font-size: 1rem;
		border: 1px solid white;
		padding: 0.5rem 1rem;
		border-radius: 8px;
	}

	.projects-section {
		background-color: #333; /* A new background color */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
	}

	.project-card {
		border: 1px solid #555;
		background-color: #2a2a2a;
		border-radius: 8px;
		padding: 1rem 2rem;
		margin-top: 1rem;
		font-size: 1.2rem;
		width: 60%;
		text-align: center;
	}
</style>
