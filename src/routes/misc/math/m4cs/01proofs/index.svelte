<script>
	import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';
	import Card from '$lib/Card.svelte';
	import Env from '$lib/numbering/Env.svelte';
	import Sect from '$lib/numbering/Sect.svelte';
</script>

<main>
    <Sect type='chapter'>Proofs</Sect>


</main>

<style>	
	main:first-of-type {
		counter-reset: thm defn chapter 1 section example exercise;
	}
	main {
		width: 95%;
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
	}
	
	
	
	@media (min-width: 640px) {
		main {
			width: 85%;
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
			width: 60%;
			/* background: purple; */
		}
	}
</style>