<script>
	import katex from 'katex';
	import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import Comp from './Comp.svelte';
	import { onMount } from 'svelte';
	let specifyY = true,
		isValidS = true;

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
	\(Y\)
{:else}
	\(Q\)
{/if}

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous" />
</svelte:head>
