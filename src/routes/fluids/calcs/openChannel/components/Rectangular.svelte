<script>
	import katex from "katex";
	import renderMathInElement from "katex/dist/contrib/auto-render.js";
	import Comp from './Comp.svelte';
	import { onMount } from 'svelte';
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

what the fuck



<p>
	<Comp content = '\[a=\sqrt &lcub; b^2+{c}^2 &rcub;\]'/>
</p>

<p>
	Change the value of \(c\):
	<input type="number" step="any" required bind:value={c} on:input={katexify} />
</p>

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
