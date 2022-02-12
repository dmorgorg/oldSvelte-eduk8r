<script>
	// import katex from 'katex';
	// import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import DropDown from '$lib/fluids/calcs/DropDown.svelte';
	import { onMount } from 'svelte';
	let c = 4;

	let katexify = (e) => {
		console.log("event: "+e)
		renderMathInElement(document.body, {
			delimiters: [
				{
					left: '$$',
					right: '$$',
					display: true
				},
				{
					left: '\\[',
					right: '\\]',
					display: true
				},
				{
					left: '!$',
					right: '!$',
					display: false
				},
				{
					left: '\\(',
					right: '\\)',
					display: false
				}
			],
			throwOnError: false
		});
	};

	onMount(() => {
		// document.addEventListener('DOMContentLoaded', katexify);
		document.addEventListener('click', katexify);
		document.addEventListener('input', katexify);
		document.addEventListener('change', katexify);
		katexify();
	});
</script>

<article>
	You need to 'escape' the curly braces that Svelte thinks are variables but
	static \(\KaTeX\) renders fine: \[a=\sqrt &lcub; b^2+c^2 &rcub;\] \( a^2 =
	b^2+c^2 \) When reading a variable? Not so much. {c}
	<!-- \[a=\sqrt &lcub; b^2+{c}^2&rcub;\] -->

	<p>
		When the math string is in the prop of a component, the variable is read and
		the math is \(\KaTeX\)ified.
	</p>

	<p>
		<DropDown top="\({c}\)" drop="\[a=\sqrt &lcub; b^2+{c}^2 &rcub;\]" />
	</p>

	<p>
		Change the value of \(c\):
		<input type="number" step="any" required bind:value={c} />
	</p>
</article>

<!-- <svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous" />
</svelte:head> -->
<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous" />

		<script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous"></script>
</svelte:head>