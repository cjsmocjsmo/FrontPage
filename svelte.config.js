/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import { imagetools } from 'vite-imagetools';

const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [imagetools({ force: true })],
		},
	}
};

export default config;
