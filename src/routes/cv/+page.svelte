<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type * as PDFJS from 'pdfjs-dist';

	const pdfUrl = '/documents/Nazhif Haidar CV Data Science_ML-2025.pdf';

	let pdfDoc: PDFJS.PDFDocumentProxy | null = $state(null);
	let currentPage = $state(1);
	let totalPages = $state(0);
	let canvas: HTMLCanvasElement;

	const headerHeight: Function = getContext('headerHeight');

	async function renderPage(pageNumber: number) {
		if (!pdfDoc || !canvas) return;

		try {
			const page = await pdfDoc.getPage(pageNumber);
			const viewport = page.getViewport({ scale: 1.5 });
			const context = canvas.getContext('2d');
			if (!context) return;

			canvas.height = viewport.height;
			canvas.width = viewport.width;

			await page.render({
				canvas: canvas,
				canvasContext: context,
				viewport: viewport
			}).promise;
		} catch (error) {
			console.error(`Failed to render page ${pageNumber}`, error);
		}
	}

	onMount(async () => {
		const pdfjsLib = await import('pdfjs-dist');
		const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.mjs?url');
		pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker.default;

		try {
			// Load the document and set up state
			const loadedPdf = await pdfjsLib.getDocument(pdfUrl).promise;
			pdfDoc = loadedPdf;
			totalPages = loadedPdf.numPages;
		} catch (error) {
			console.error('Error loading PDF:', error);
		}
	});

	// Reactive effect: Re-render the page whenever 'currentPage' or 'pdfDoc' changes
	$effect(() => {
		renderPage(currentPage);
	});
</script>

<div
	class="flex h-screen w-screen flex-col items-center bg-gray-800 p-8"
	style="padding-top: {headerHeight()}px;"
>
	<h1 class="my-2">CV/Resume</h1>

	<div class="pdf-container">
		<canvas bind:this={canvas}></canvas>
	</div>
	<div class="pagination-controls my-2 flex items-center gap-4 text-white">
		<button
			class="rounded bg-blue-600 px-4 py-1 disabled:opacity-50"
			disabled={currentPage <= 1}
			onclick={() => currentPage--}
		>
			{'<'}
		</button>
		<span>Page {currentPage} of {totalPages}</span>
		<button
			class="rounded bg-blue-600 px-4 py-1 disabled:opacity-50"
			disabled={currentPage >= totalPages}
			onclick={() => currentPage++}
		>
			{'>'}
		</button>
	</div>
	<a
		href={pdfUrl}
		download="Nazhif Haidar CV.pdf"
		class="mt-4 rounded-2xl bg-blue-200 p-4 text-black no-underline transition hover:bg-blue-300"
	>
		<p>Download CV/Resume</p>
	</a>
</div>

<style>
	h1 {
		color: aliceblue;
		font-size: 2.5rem;
		font-weight: 900;
	}

	.pdf-container {
		border: 1px solid #ccc;
		max-width: 800px;
		max-height: 75vh; /* Adjusted for better spacing with pagination */
		margin: 1rem auto;
		overflow-y: auto; /* This enables vertical scrolling */
	}

	canvas {
		width: 100%;
		height: auto;
	}
</style>
