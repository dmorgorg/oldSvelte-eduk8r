<script>
	export let name;
	export let current;
</script>

<button class:active={current === name} on:click={() => (current = name)}>
	<slot />
</button>

<style>
	button {
		background-color: var(--water-primary);
		border: none;
		outline: none;
		margin: 0 1em;
		cursor: pointer;
		width: 20rem;
		padding: 0.75rem;
		font-size: 1rem;
	}
	button:hover {
		font-weight: bold;
	}
	button.active {
		color: white;
		font-weight: bold;
	}
</style>
