<script>
	import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';
	import Card from '$lib/Card.svelte';
</script>

<main>
	<header>Math for Computer Science (M4CS)</header>
</main>

<style>
	main {
		width: 50%;
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
	}
	header {
		margin: 0;
		margin-left: -1.5em;
		margin-bottom: 0;
		letter-spacing: 0.05em;
		color: var(--misc-primary);
		font-family: 'Covered By Your Grace', cursive;
		font-size: 300%;
		/* font-family: "Happy Monkey", cursive; */
		-webkit-text-stroke-width: 0.02em;
		-webkit-text-stroke-color: black;
		width: 120%;
		border: 1px solid black;
	}
	.subHeader {
		margin: 0;
		margin-bottom: -0.5em;
		color: var(--misc-primary);
		font-family: 'Covered By Your Grace', cursive;
		letter-spacing: 0.05em;
		-webkit-text-stroke-width: 0.02em;
		-webkit-text-stroke-color: black;
		font-size: 225%;
	}
</style>
