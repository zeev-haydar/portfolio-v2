<script lang="ts">
	import { Link } from '$lib';
	import { fade, fly } from 'svelte/transition';
	import { MoreDetailIcon } from '../icons';
</script>

<!-- <h1 in:fly={{ y: 20, duration: 1000 }}>About Me</h1>
<p in:fly={{ y: 20, delay: 200, duration: 1000 }}>This is the second section of the page.</p>
<p in:fly={{ y: 20, delay: 400, duration: 1000 }}>The header is still visible on top. ✨</p>
<Link href="#home">
	<h1 class="back-link" in:fade={{ delay: 600, duration: 1000 }}>Go Back Up</h1>
</Link> -->
<div class="flex h-full w-full flex-col items-center gap-y-8 pb-12">
	<h1 class="text-4xl font-black" in:fly={{ y: 20, duration: 1000 }}>ABOUT</h1>
	<div
		class="flex h-full w-full flex-row justify-around"
		in:fly={{ y: 20, delay: 300, duration: 1000 }}
	>
		<div class="flex h-full max-w-[33%] flex-col items-center gap-x-1">
			<h1 class="font-extrabold">Profile</h1>
			<div class="mt-4 flex h-full flex-col rounded-2xl border border-white p-8 text-justify">
				<p>
					<span class="font-bold">Name</span>: Nazhif Haidar Putra Wibowo
				</p>
				<p>
					<span class="font-bold">University</span>: Institut Teknologi Bandung
				</p>
				<p>
					<span class="font-bold">Major</span>: Information System and Technology (Graduated on
					2025)
				</p>
				<p>
					<span class="font-bold">Skills</span>: AI/ML/Data Science, Software Engineering, Web
					Development (full stack), Game Development
				</p>
				<p>
					<span class="font-bold">Programming Language</span>: Python, Java, JS/TS, Go, C#, C++
				</p>
				<p>
					<span class="font-bold">Natural Language</span>: Indonesian (Native), English (Advanced),
					Japanese (Intermediate)
				</p>
			</div>
		</div>
		<div class="flex h-full max-w-[33%] flex-col items-center gap-x-1">
			<h1 class="font-extrabold">Achievements</h1>
			<div class="mt-4 flex h-full flex-col rounded-2xl border border-white p-8 text-justify">
				<ul class="mt-4 list-inside space-y-2">
					<li class="flex items-start">
						<span class="mr-2 text-green-400">〇 </span>
						<span class="text-[#ccc] text-[1.2rem]">Finalist Compfest 16 Data Analytics Dash</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-green-400">〇 </span>
						<span class="text-[#ccc] text-[1.2rem]">Finalist Compfest 16 AI Innovation Challenge</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-green-400">〇 </span>
						<span class="text-[#ccc] text-[1.2rem]">Finalist GEMASTIK XVI 2023 IoT, Embedded System, and Smart Device Division</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-green-400">〇 </span>
						<span class="text-[#ccc] text-[1.2rem]">Finalist GEMASTIK XVII 2024 Data Mining</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	p {
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
</style>
