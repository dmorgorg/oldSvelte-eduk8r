<script>
	import Sect from '$lib/numbering/Sect.svelte';
	import NavButton from './components/NavButton.svelte';
	import Rectangular from './components/Rectangular.svelte';
	import Trapezoidal from './components/Trapezoidal.svelte';
	import Triangular from './components/Triangular.svelte';
	import Circular from './components/Circular.svelte';

	let current = 'rectangular';
	// import { onMount } from 'svelte';

	// onMount(() => {
	// 	katexify();
	// });

	// let popPercent = 67.6;

	// const processChange = () => {
	// 	katexify();
	// 	// calculate();
	// };
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

	<nav class="navbar">
		<NavButton bind:current name="rectangular">Rectangular</NavButton>
		<NavButton bind:current name="trapezoidal">Trapezoidal</NavButton>
		<NavButton bind:current name="triangular">Triangular</NavButton>
		<NavButton bind:current name="circular">Circular</NavButton>
	</nav>

	<div class:show={current === 'rectangular'} class:hide={current !== 'rectangular'}>
		<Rectangular />
	</div>
	<div class:show={current === 'triangular'} class:hide={current !== 'triangular'}>
		<Triangular />
	</div>
	<div class:show={current === 'trapezoidal'} class:hide={current !== 'trapezoidal'}>
		<Trapezoidal />
	</div>
	<div class:show={current === 'circular'} class:hide={current !== 'circular'}>
		<Circular />
	</div>
</main>

<style>
	main {
		width: 100%;
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
		/* border: 3px solid purple; */
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 1rem auto;
		padding: 0;
		/* border: 1px solid black; */
		
	}
	.show {
		display: block;
	}
	.hide {
		display: none;
	}

	@media (min-width: 640px) {
		main {
			width: 80%;
			/* background: pink; */
		}
	}
	@media (min-width: 768px) {
		main {
			width: 70%;
			/* background: yellow; */
		}
	}
	@media (min-width: 1024px) {
		main {
			width: 65%;
			/* background: purple; */
		}
	}
</style>
