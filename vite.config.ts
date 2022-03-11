import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import laravel from 'vite-plugin-laravel'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import inertia from './resources/scripts/vite/inertia-layout'

export default defineConfig({
	plugins: [
		inertia(),
		svelte({
			experimental: {
				prebundleSvelteLibraries: true
			}
		}),
		laravel({
			postcss: [
				tailwindcss(),
				autoprefixer(),
			],
		}),
	],
	optimizeDeps: {
		include: [
			'@inertiajs/inertia',
      '@inertiajs/inertia-svelte',
		]
	}
})
