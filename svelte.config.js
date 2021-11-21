import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// Adapter to make project work with Vercel
		adapter: vercel(),
		// Custom VITE configuration
		vite: {
			resolve: {
				alias: {
					$assets: path.resolve('./src/assets')
				}
			}
		}
	}
};

export default config;
