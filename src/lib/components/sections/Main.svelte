<script lang="ts">
	import { Carousel1, Title } from '$lib';
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	let titleText: string = 'Hello! Welcome to My Page'.toUpperCase();
</script>

<div
	style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;"
>
	<div class="content-container">
		<div in:fade={{ duration: 1000, easing: quintOut }}>
			<Title title={titleText} />
		</div>
		<div
			class="mt-8 flex w-full flex-row justify-evenly"
			in:fly={{y:20, delay: 250, duration: 1000, easing: quintOut }}
		>
			<Carousel1
				backgroundColor="aliceblue"
				roundRadius={10}
				size={[320, 320]}
				navbutton={{
					href: '#about',
					backgroundColor: '#00000000',
					text: 'Navigate',
					textColor: '#111'
				}}
			>
				<h1 class="font-black text-black">About</h1>
			</Carousel1>
			<Carousel1
				backgroundColor="aliceblue"
				roundRadius={10}
				size={[320, 320]}
				navbutton={{
					href: '#projects',
					backgroundColor: '#00000000',
					text: 'Navigate',
					textColor: '#111'
				}}
			>
				<h1 class="font-black text-black">Projects</h1>
			</Carousel1>
			<!-- <Carousel1
				backgroundColor="aliceblue"
				roundRadius={10}
				size={[320, 320]}
				navbutton={{
					href: '#projects',
					backgroundColor: '#00000000',
					text: 'Navigate',
					textColor: '#111'
				}}
			>
				<h1 class="font-black text-black">Others</h1>
			</Carousel1> -->
		</div>
	</div>
</div>

<style>
	.content-container {
		width: 100%;
		display: flex;
		padding-left: 10%;
		padding-right: 10%;
		align-items: center;
		flex-direction: column;
	}
    
</style>


