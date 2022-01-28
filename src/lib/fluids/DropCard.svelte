<script>
	import { fade } from 'svelte/transition';
	export let top = '';
	export let drop = '';
	let display = false;

	function toggleDisplay(event) {
		displayCalc = !displayCalc;
	}
</script>

<article class="card" on:click={toggleDisplay}>
	<section class="top">
		<div>{@html top}</div>
		<button class="display-btn">
			{#if display}
				<div class="triangle-up" />
			{:else}<div class="triangle-down" />
			{/if}
		</button>
	</section>

	{#if display}
		<section class="drop" transition:fade={{ duration: 2500 }}>
			{@html drop}
			<slot name="solution" />
		</section>
	{/if}
</article>

<style>
	.top {
		display: flex;
		justify-content: space-between;
	}
	.triangle-up {
		border-bottom: 0.35em solid var(--fluids-primary);
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
		float: right;
		padding: 0;
		margin-top: -0.5em;
	}
	.triangle-down {
		border-top: 0.35em solid var(--fluids-primary);
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
		float: right;
		padding: 0;
		margin-top: -0.5em;

	}
	.card {
		background-color: white;
		margin: 0 auto;
		padding: 0.25rem 1rem;
		cursor: pointer;
		box-shadow: 0.1em 0.1em 0.75em #aaa;
		line-height: 1.5;
	}
	button {
		
		margin-top:0.65em;
		font-size: 2.25rem;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		outline: none;
		float: right;
	}
</style>
