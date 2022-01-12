<script>
	import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';
	import Card from '$lib/Card.svelte';
	import Env from '$lib/numbering/Env.svelte';
	import Sect from '$lib/numbering/Sect.svelte';
</script>

<main>
	<Sect type='chapter'>Principle of Mathematical Induction</Sect>

	<Card>
		
			<Env type='theorem'> If a set of positive integers has the
			property that, when it contains the integer <Ki>k</Ki>, it must also
			contain <Ki>k+1</Ki>, and if this set also contains <Ki>1</Ki>, then it
			must be the set of all positive integers.</Env>		

		<p>
			In other words, a property concerning the positive integers that is true
			for <Ki>\[n=1,\]</Ki> and is true for the integer <Ki>n+1</Ki> whenever it is true
			for integer <Ki>n</Ki>, must be true for all positive integers.
		</p>

		<p>This is known as The (Weak) Principle of Mathematical Induction. </p>

		
			<Env type='proof'> Let <Ki>S</Ki> be the set of positive integers
				that contains <Ki>1</Ki> and also contains <Ki>k+1</Ki> whenever it contains
				<Ki>k</Ki>. Furthermore, assume that <Ki>S</Ki> is <strong>not</strong>
				the set of all positive numbers. If follows that there must be some positive
				integers that are not in <Ki>S</Ki>, and these integers must have a least
				element, <Ki>\alpha</Ki> say (from the Well-Ordering Principle).
			</Env>
		</Card> 




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
