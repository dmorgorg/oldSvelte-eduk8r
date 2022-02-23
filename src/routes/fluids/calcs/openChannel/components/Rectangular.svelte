<script>
	import katex from "katex";
	import renderMathInElement from "katex/dist/contrib/auto-render.js";
	import Comp from './Comp.svelte';
	import { onMount } from 'svelte';
	let c = 42;
	
	let katexify = () => {
		renderMathInElement(document.body, {
			delimiters: [
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


You need to 'escape' the curly braces that Svelte thinks are variables but static \(\KaTeX\) renders fine:
\[a=\sqrt &lcub; b^2+c^2 &rcub;\]
When reading a variable? Not so much.

\[a=\sqrt &lcub; b^2+{c}^2 &rcub;\]

<p>
	When the math string is in the prop of a component, the variable is read and the math is \(\KaTeX\)ified.
</p>

<p>
	<Comp content = '\[a=\sqrt &lcub; b^2+{c}^2 &rcub;\]'/>
</p>

<p>
	Change the value of \(c\):
	<input type="number" step="any" required bind:value={c} on:input={katexify} />
</p>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>
</svelte:head>