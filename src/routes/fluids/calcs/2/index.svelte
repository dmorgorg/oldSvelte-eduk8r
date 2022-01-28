<script>
	import Sect from '$lib/numbering/Sect.svelte';
	import NavButton from './components/NavButton.svelte';
	import Rectangular from './components/Rectangular1.svelte';
	import Trapezoidal from './components/Trapezoidal.svelte';
	import Triangular from './components/Triangular.svelte';
	import Circular from './components/Circular.svelte';

	let current = 'rectangular';
</script>

<main>
	<div class='center'><Sect type="chapter0" center>Open Channel Flow Calculator</Sect></div>

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
	.navbar {
		display: flex;
		justify-content: space-around;
		width: 80%;
		margin: 1rem auto;
		padding: 0;
	}
	main {
		width: 100%;
		background: white;
	}
	.show {
		display: block;
	}
	.hide {
		display: none;
	}
	
</style>
