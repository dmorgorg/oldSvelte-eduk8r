<script>
	import DropCard from '$lib/fluids/DropCard.svelte';
	import Card from '$lib/Card.svelte';
	import Sect from '$lib/numbering/Sect.svelte';
	import { onMount } from 'svelte';
	import katex from 'katex';

	onMount(() => {
		katexify();
	});

	let popPercent = 67.6;

	const processChange = () => {
		katexify();
		// calculate();
	};


</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>

	<!-- The loading of KaTeX is deferred to speed up page rendering -->
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.js"
		integrity="sha384-VQ8d8WVFw0yHhCk5E8I86oOhv48xLpnDZx5T9GogA/Y84DcCKWXDmSDfn13bzFZY"
		crossorigin="anonymous"></script>

	<!-- To automatically render math in text elements, include the auto-render extension: -->
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.min.js"
		integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR"
		crossorigin="anonymous"
		onload="renderMathInElement(document.body);"></script>

	<script src="/katexify.js"></script>
</svelte:head>

<main>
	<Sect type="chapter0" center>Open Channel Flow Calculator</Sect>

	
	

	<DropCard
		top="the answer is !${popPercent}!$"
		drop="the answer is !${popPercent}!$"
	/>
	
	<Card>
		!$ \KaTeX !$
		<br />
		!${popPercent}!$

		<form on:submit|preventDefault={processChange}>
			<label class="popPercent">
				% of the population fully vaccinated:
				<input type="number" step="any" required bind:value={popPercent} on:input={processChange} />
			</label>
		</form></Card
	>


</main>

<style>
	main {
		width: 95%;
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
	}
	
	form {
		width: 90%;
		margin: 0 auto;
		text-align: right;
		/* border: 1px solid green; */
	}
	label {
		display: block;
		margin: 1em;
	}
	input[type='number'] {
		width: 7em;
		font-size: 1rem;
	}
	

	@media (min-width: 640px) {
		main {
			width: 70%;
			/* background: pink; */
		}
	}
	@media (min-width: 768px) {
		main {
			width: 60%;
			/* background: yellow; */
		}
	}
	@media (min-width: 1024px) {
		main {
			width: 55%;
			/* background: purple; */
		}
	}
</style>
