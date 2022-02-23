<script>
	import { fade } from 'svelte/transition';
	export let answer = '';
	export let solution = '';
	let displayCalc = false;

	function toggleDisplay(event) {
		displayCalc = !displayCalc;
	}
</script>

<article class="card" on:click={toggleDisplay}>
	<section class="answer">
		{@html answer}
		<button class="display-btn">
			{#if displayCalc}
				<div class="triangle-up" />
			{:else}<div class="triangle-down" />
			{/if}
		</button>
	</section>

	{#if displayCalc}
		<section class="solution" transition:fade={{ duration: 2500 }}>
			{@html solution}
		</section>
	{/if}
</article>
