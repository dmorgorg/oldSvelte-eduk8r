<script>
	import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';
	import Card from '$lib/Card.svelte';
</script>

<main>
	<header>M4CS :: Principle of Mathematical Induction</header>

	<Card>
		<p>
			<i><strong>Theorem 1</strong></i>: If a set of positive integers has the
			property that, when it contains the integer <Ki>k</Ki>, it must also
			contain <Ki>k+1</Ki>, and if this set also contains <Ki>1</Ki>, then it
			must be the set of all positive integers.
		</p>

		<p>
			In other words, a property concerning the positive integers that is true
			for <Ki>n=1</Ki>, and is true for the integer <Ki>n+1</Ki> whenever it is true
			for integer <Ki>n</Ki>, must be true for all positive integers.
		</p>

		<p>This is known as The (Weak) Principle of Mathematical Induction. </p>

		<p>
			<i><strong>Proof</strong></i>: Let <Ki>S</Ki> be the set of positive integers
			that contains <Ki>1</Ki> and also contains <Ki>k+1</Ki> whenever it contains
			<Ki>k</Ki>. Furthermore, assume that <Ki>S</Ki> is <strong>not</strong>
			the set of all positive numbers. If follows that there must be some positive
			integers that are not in <Ki>S</Ki>, and these integers must have a least
			element, <Ki>\alpha</Ki> say (from the Well-Ordering Principle).
		</p></Card>



	


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
