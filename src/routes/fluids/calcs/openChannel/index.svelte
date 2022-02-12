<script>
	import Sect from '$lib/numbering/Sect.svelte';
	import NavButton from './components/NavButton.svelte';
	import Rectangular from './components/Rectangular.svelte';
	import Triangular from './components/Triangular.svelte';
	import Trapezoidal from './components/Trapezoidal.svelte';
	import Circular from './components/Circular.svelte';
	import Intro from './components/Intro.svelte';
	import DropDown from '$lib/fluids/calcs/DropDown.svelte';	

	let current = 'triangular';
</script>

<main>
	<Sect type="chapter0" center>Open Channel Flow Calculator</Sect>

	<div class="navbar">
		<NavButton bind:current name="rectangular">Rectangular</NavButton>
		<NavButton bind:current name="trapezoidal">Trapezoidal</NavButton>
		<NavButton bind:current name="triangular">Triangular</NavButton>
		<NavButton bind:current name="circular">Circular</NavButton>
	</div>

	<DropDown>
		<div slot='top'><Sect type='subsubsection0' center>About...</Sect></div>
		<div slot='drop'><Intro typeOfChannel={current} /></div>
	</DropDown>
	

	<div
		class:show={current === 'rectangular'}
		class:hide={current !== 'rectangular'}>
		<Rectangular />
	</div>
	<div
		class:show={current === 'triangular'}
		class:hide={current !== 'triangular'}>
		<Triangular />
	</div>
	<div
		class:show={current === 'trapezoidal'}
		class:hide={current !== 'trapezoidal'}>
		<Trapezoidal />
	</div>
	<div class:show={current === 'circular'} class:hide={current !== 'circular'}>
		<Circular />
	</div>
</main>

<style>
	.navbar {
		display: flex;
		justify-content: space-evenly;
		margin-top: 1em;
		margin-bottom: 1em;
	}
	.show {
		display: block;
	}
	.hide {
		display: none;
	}
</style>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous" />

		<script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous"></script>
</svelte:head>
