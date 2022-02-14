<script>
	// import { fade, slide, fly } from 'svelte/transition';
	export let top = '';
	export let drop = '';
	let display = false;

	function toggleDisplay() {
		display = !display;
	}
</script>

<div class="card" on:click={toggleDisplay}>
	<div class="top">
		<div class="top">
			{@html top}
		</div>

		<button class="display-btn">
			{#if display}
				<div class="triangle-up" />
			{:else}
				<div class="triangle-down" />
			{/if}
		</button>
	</div>
	
	{#if display}
		<div class="drop">
			{@html drop}
		</div>
	{/if}
</div>

<style>
	.card {
		background-color: white;
		border: 1px solid #ccc;
		margin: 0.25rem 0.5rem;
		padding: 0.5rem 1rem;
		cursor: pointer;
		box-shadow: 0 0 0.3em #eee;
		/* font-size: 90%; */
		vertical-align: text-top;
	}
	.card:hover {
		border: 1px solid #ccc;
		box-shadow: 0 0 0.3em #bbb;
	}
	.top {
		display: flex;
		justify-content: space-between;
	}
	.drop {
		margin-top: 1em;
	}
	.triangle-up {
		border-bottom: 0.35em solid var(--fluids-primary);
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
	}
	.triangle-down {
		border-top: 0.35em solid var(--fluids-primary);
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
	}
	button {
		font-size: 2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		color: var(--primaryColor);
		outline: none;
	}
</style>
