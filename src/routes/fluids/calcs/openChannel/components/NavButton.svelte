<script>
	export let name;
	export let current;
</script>

<button class:active={current === name} on:click={() => (current = name)}>
	<slot />
</button>

<style>
	button {
		font-size: 90%;
		background-color: var(--fluids-primary);
		border: none;
		border-radius: 0.3em;
		outline: none;
		padding: 0.5em 1em;
	}
	button:hover {
		color: #ccc;
	}
	button.active {
		color: white;
	}
</style>
