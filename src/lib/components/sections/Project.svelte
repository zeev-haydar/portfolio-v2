<script lang="ts">
	import { Link } from '$lib';
	import { fade, fly } from 'svelte/transition';
</script>

<h1 in:fly={{ y: 20, duration: 1000 }}>My Projects</h1>
<p in:fly={{ y: 20, delay: 200, duration: 1000 }}>Here's a showcase of my work.</p>
<div class="project-card" in:fade={{ delay: 400, duration: 1000 }}>Project One</div>
<div class="project-card" in:fade={{ delay: 600, duration: 1000 }}>Project Two</div>

<style>
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
