<script>
	export let typeOfChannel = '';
</script>

<section>
	<p>
		This calculator is for normal (uniform) flow in an open channel with a
		{typeOfChannel} cross-section.
	</p>

	<p>
		Clicking on a result panel will display the associated calculations for each
		result. Clicking again will close the panel.
	</p>

	<p>
		Either flow depth, !$y!$, in metres (!$\mathsf&lbrace;m&rbrace;!$) or volume
		flow, !$Q!$, in cubic metres per second !$(\mathsf&lbrace;m^3\!/s&rbrace;)!$
		must be specified. But not both.
	</p>

	<p>
		If !$y!$ is specified, then the corresponding !$Q!$ will be calculated.<br />If
		!$Q!$ is specified, then the corresponding flow depth !$y!$ will be
		calculated.
	</p>

	<p
		class:show={typeOfChannel !== 'triangular'}
		class:hide={typeOfChannel === 'triangular'}>
		Note that !$ y !$ cannot be determined analytically from !$Q!$ and is found
		using an iterative method.
	</p>
</section>

<style>
	section {
		text-align: center;
		margin-top: -1em;
	}
	.show {
		display: block;
	}
	.hide {
		display: none;
	}
</style>
