<script>
	
	let display = false;
    
	function toggleDisplay(event) {
		display = !display;
	}
</script>

<article class="card" on:click={toggleDisplay}>
	<button class="display-btn">
		{#if display}
			<div class="triangle-up" />
		{:else}
            <div class="triangle-down" />
		{/if}
	</button>
	<slot name="top"><!-- optional fallback --></slot>

	{#if display}
		<slot name="drop"><!-- optional fallback --></slot>
	{/if}
	<!-- optional always visible content below dropdown -->
	<slot name="bottom"><!-- optional fallback --></slot>
</article>

<style>
	.card {
		background: transparent;
		display: block;
		/* box-shadow: 0.1em 0.1em 0.75em #aaa; */
		margin: 0 auto;
		padding: 0;
		/* padding-top: 0.5em; */
		overflow-x: auto;
		line-height: 1.5;
	}
	.triangle-up {
		border-bottom: 0.35em solid var(--misc-primary);
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
		float: right;
		padding: 0;
		margin-top: -0.5em;
		
	}
	.triangle-down {
		border-top: 0.35em solid var(--misc-primary);
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
		float: right;
		padding: 0;
		margin-top: -0.5em;
	}
	button {
		margin: 1.35rem;
		margin-right: 0;
		font-size: 2.25rem;
		background: transparent;
		border: none;
		cursor: pointer;
		color: var(--primaryColor);
		outline: none;
		float: right;
	}
  
</style>