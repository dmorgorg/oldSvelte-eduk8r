<script>
	import katex from 'katex';
	import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Sect from '$lib/numbering/Sect.svelte';
	import DDprops from './DDprops.svelte';
	import Intro from './Intro.svelte';
	import { rect } from '../openChannelFlowCalcUtils';
	import Comp from './Comp.svelte';
	let c = 42;
	let specifyY = true;

	let katexify = () => {
		renderMathInElement(document.body, {
			delimiters: [
				{
					left: '$$',
					right: '$$',
					display: true
				},
				{
					left: '!$',
					right: '!$',
					display: false
				},
				{
					left: '\\[',
					right: '\\]',
					display: true
				},
				{
					left: '\\(',
					right: '\\)',
					display: false
				}
			]
		});
	};

	onMount(() => {
		katexify();
	});
</script>

<section class="yQlayout">
	<label>
		<input type="radio" bind:group={specifyY} value={true} />
		<span>Specify !$y!$</span>
	</label>

	<label>
		<input type="radio" bind:group={specifyY} value={false} />
		<span>Specify !$Q!$</span>
	</label>
</section>

{#if specifyY}
		Y
{:else}
		Q
{/if}



