<script>
	import { fade, slide, fly } from 'svelte/transition';
	export let top = '';
	export let drop = '';
	let display = false;

	function toggleDisplay() {
		display = !display;
	}
</script>

<article class="card" on:click={toggleDisplay}>
	<div class="top">
		<div>
			{@html top}
			<slot name="top" />
		</div>

		<button class="display-btn">
			{#if display}
				<div
					class="triangle-up"
					in:fade={{ duration: 500, delay: 500 }}
					out:fade={{ duration: 500 }} />
			{:else}<div
					class="triangle-down"
					in:fade={{ duration: 500, delay: 500 }}
					out:fade={{ duration: 500 }} />
			{/if}
		</button>
	</div>
	{#if display}

	<div>
	<!-- <div class:show={display} class:hide={!display}> -->
		<br />
		{@html drop}
		<slot name="drop" />
	</div>
	{/if}
</article>

<style>
	.card {
		background-color: white;
		border: 1px solid #ccc;
		margin: 0.5rem;
		padding: 0.25rem 1rem;
		cursor: pointer;
		box-shadow: 0.1em 0.1em 0.4em #eee;
	}
	.show {
		display: block;
		/* transition: all 15s ease-out 20s; */
	}
	.hide {
		display: none;
		/* transition: all 15s ease-out 20s; */
	}
	div.top {
		display: flex;
		justify-content: space-between;
	}

	.card:hover {
		border: 1px solid #ccc;
		box-shadow: 0.05em 0.05em 0.3em #bbb;
	}
	.triangle-up {
		border-bottom: 0.35em solid var(--fluids-primary);
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
		float: right;
	}

	.triangle-down {
		border-top: 0.35em solid var(--fluids-primary);
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
		float: right;
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
