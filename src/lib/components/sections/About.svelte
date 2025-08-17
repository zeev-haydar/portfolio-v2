<script lang="ts">
	import { Link } from '$lib';
	import { fade, fly } from 'svelte/transition';
</script>

<!-- <h1 in:fly={{ y: 20, duration: 1000 }}>About Me</h1>
<p in:fly={{ y: 20, delay: 200, duration: 1000 }}>This is the second section of the page.</p>
<p in:fly={{ y: 20, delay: 400, duration: 1000 }}>The header is still visible on top. ✨</p>
 -->
<div class="flex h-full w-full flex-col items-center gap-y-8 pb-16">
	<h1 class="text-4xl font-black" in:fly={{ y: 20, duration: 1000 }}>ABOUT</h1>
	<div
		class="flex h-full w-full flex-row justify-around"
		in:fly={{ y: 20, delay: 300, duration: 1000 }}
	>
		<div class="flex h-full max-w-[33%] flex-col items-center gap-x-1">
			<h1 class="font-extrabold">Profile</h1>
			<div class="mt-4 flex h-full flex-col rounded-2xl border border-white p-8">
				<ul class="space-y-2">
					<li>
						<span class="font-bold">Name</span>: Nazhif Haidar Putra Wibowo
					</li>
					<li>
						<span class="font-bold">University</span>: Institut Teknologi Bandung
					</li>
					<li>
						<span class="font-bold">Major</span>: Information System and Technology (Graduated on
						2025)
					</li>
					<li>
						<span class="font-bold">Skills</span>: AI/ML/Data Science, Software Engineering, Web
						Development (full stack), Game Development
					</li>
					<li>
						<span class="font-bold">Programming Language</span>: Python, Java, JS/TS, Go, C#, C++
					</li>
					<li>
						<span class="font-bold">Natural Language</span>: Indonesian (Native), English
						(Advanced), Japanese (Intermediate)
					</li>
				</ul>
				<Link href="/cv">
					<h1 class="back-link bg-blue-950" in:fade={{ delay: 600, duration: 1000 }}>See CV</h1>
				</Link>
			</div>
		</div>
		<div class="flex h-full max-w-[33%] flex-col items-center gap-x-1">
			<h1 class="font-extrabold">About Me</h1>
			<div class="mt-4 flex h-full flex-col rounded-2xl border border-white p-8 text-justify gap-y-4">
				<p>
					I am a type of person that eager to learn everything that is interesting to me. 
					I also can work on a group, and sometimes I become the group leader.
				</p>
				<p>
					My interest in programming world include things like game development, software engineering, and AI/ML/Data Science related.
					The most skilled one is the latter. I have many experiences regarding the AI/ML/Data Science from many competitions, and Bangkit program by Google that give me the skill certificate.
				</p>
				<p>
					Beyond that, I also have passion in music. I have been making music for 9 years, currently as a hobby.
					I am a person that wants to explore many things and excel in various skills, both technical and non-technical.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	p {
		font-size: 1rem;
		color: #ccc;
	}
	li {
		font-size: 1rem;
		color: #ccc;
	}
	.back-link {
		margin-top: 2rem;
		font-size: 1rem;
		border: 1px solid white;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		display:flex;
		width: 33%;
		justify-content: center;
		justify-self: center;
	}
</style>
