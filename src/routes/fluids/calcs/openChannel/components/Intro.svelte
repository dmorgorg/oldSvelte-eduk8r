<script>
	import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';
	export let typeOfChannel = 'trapezoidal';
</script>

<section>
	<p>
		This calculator is for normal (uniform) flow in an open channel with a
		<strong>{typeOfChannel}</strong> cross-section.
	</p>

	<p>
		Results for each calculation are always visible. Click on <span class="triangle-down" /> to display
		the associated calculations for each result. Click again to close the panel.
	</p>

	<p>
		Either flow depth, !$y!$, in metres !$(\textsf&lbrace;m&rbrace;)!$ or volume flow, !$Q!$, in cubic
		metres per second !$(\mathsf &lcub; m^3/s &rcub;)!$ must be specified. But not both.
	</p>

	<p>
		If !$y!$ is specified, then the corresponding !$Q!$ will be calculated.<br />If <Ki>Q</Ki> is specified,
		then the corresponding flow depth !$y!$ will be calculated. !$ \N !$
	</p>
	<p />
	<Kd>-b\pm</Kd> 

	{#if typeOfChannel !== 'triangular'}
		<p>
			Note that !$y!$ cannot be determined analytically from !$Q!$ for a {typeOfChannel} channel and
			it is found using an iterative method.
		</p>
	{/if}
</section>

<style>
	section {
		width: 95%;
		margin: 0 auto;
		text-align: center;
	}
	span.triangle-down {
		border-top: 0.7em solid var(--fluids-primary);
		border-left: 0.6em solid transparent;
		border-right: 0.6em solid transparent;
		padding: 0;
		vertical-align: -40%;
		margin: 0 0.5em;
	}
</style>
