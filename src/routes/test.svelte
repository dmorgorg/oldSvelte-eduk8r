<script>
	import Ki from '$lib/katex/Ki.svelte'
	import Env from '$lib/numbering/Env.svelte';
	import Sect from '$lib/test/Sect.svelte';
</script>

<main>
	<Env type="definition" title="The Fundamental Definition" >Let <Ki>a</Ki> and <Ki>b</Ki> be integers, with <Ki>b</Ki> positive.</Env>
	<Env type="theorem">Let <Ki>a</Ki> and <Ki>b</Ki> be integers, with <Ki>b</Ki> positive.</Env>
	<Env type="theorem" title="The Fundamental Theorem">$a^2$</Env>
	<Env type="definition">test</Env>
	<Env type="theorem" title="The Fundamental Theorem">test</Env>
	<Env type="definition" title="The Fundamental Definition">test</Env>
</main>

<style>
	main:first-of-type {
		counter-reset: thm defn chapter 24;
	}
</style>
