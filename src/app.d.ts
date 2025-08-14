// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare module 'pdfjs-dist/build/pdf.worker.mjs';

declare module '*?url' {
	const url: string;
	export default url;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache }
		}
	}
}

// export {};
