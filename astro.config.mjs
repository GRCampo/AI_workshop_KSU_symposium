// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://grcampo.github.io',
	base: '/AI_workshop_KSU_symposium',
	integrations: [
		starlight({
			title: 'Working Smarter with AI',
			description: 'Workshop sobre uso de IA para análise de dados em pesquisa acadêmica.',
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap',
					},
				},
			],
			sidebar: [
				{
					label: 'Before the workshop',
					items: [
						{ label: 'Requirements', slug: 'before-workshop/requirements' },
						{ label: 'Installation Tutorial', slug: 'before-workshop/installation-tutorial' },
					],
				},
				{
					label: 'Before You Prompt',
					items: [
						{ label: 'Real-World Incidents', slug: 'before-you-prompt/real-world-incidents' },
						{ label: 'Privacy & Security', slug: 'before-you-prompt/privacy-and-security' },
						{ label: 'Research Tools', slug: 'before-you-prompt/research-tools' },
						{ label: 'Access & Memory', slug: 'before-you-prompt/access-and-memory' },
					],
				},
				{
					label: 'Hands-on',
					items: [
						{ label: 'Data Wrangling', slug: 'hands-on/data-wrangling' },
						{ label: 'Data Exploration', slug: 'hands-on/data-exploration' },
						{ label: 'Data Visualization', slug: 'hands-on/data-visualization' },
					],
				},
			],
		}),
	],
});
