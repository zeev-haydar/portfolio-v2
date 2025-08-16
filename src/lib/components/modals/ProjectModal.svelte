<script lang="ts">
	import { type ProjectModalProps } from "$lib/data/project";

	let { 
		image, 
		tooltip, 
		title = tooltip || 'Project Details',
		description = 'Project description goes here...',
		technologies = [],
		githubUrl,
		demoUrl,
		closeModal = () => {}
	}: ProjectModalProps = $props();
</script>

<div class="project-modal relative w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
	<!-- Close Button -->
	<button 
		class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
		onclick={closeModal}
		aria-label="Close modal"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</button>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Image Section -->
		<div class="space-y-4">
			{#if image}
				<div class="aspect-video w-full overflow-hidden rounded-lg">
					<img 
						src={image} 
						alt={title}
						loading="lazy"
						decoding="async"
						class="w-full h-full object-cover"
						style="max-height: 400px"
					/>
				</div>
			{/if}
			
			<!-- Action buttons -->
			<div class="flex gap-3">
				{#if githubUrl}
					<a 
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
						</svg>
						GitHub
					</a>
				{/if}
				
				{#if demoUrl}
					<a 
						href={demoUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
							<polyline points="15,3 21,3 21,9"/>
							<line x1="10" y1="14" x2="21" y2="3"/>
						</svg>
						Demo
					</a>
				{/if}
			</div>
		</div>
		
		<!-- Content Section -->
		<div class="space-y-4">
			<h2 class="text-2xl font-bold text-gray-900">{title}</h2>
			
			<p class="text-gray-600 leading-relaxed">
				{description}
			</p>
			
			{#if technologies.length > 0}
				<div class="space-y-2">
					<h3 class="text-lg font-semibold text-gray-900">Technologies Used</h3>
					<div class="flex flex-wrap gap-2">
						{#each technologies as tech}
							<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.project-modal {
		will-change: transform, opacity;
  		transform: translateZ(0);
	}
</style>
