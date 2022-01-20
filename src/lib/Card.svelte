<section class="card">
	<slot />
</section>

<style>
	.card {
		background: white;
		display: block;
		box-shadow: 0.1em 0.1em 0.75em #aaa;
		/* border: 1px solid #bbb; */
		margin: 2em auto;
		padding: 1rem;
        overflow-x:auto;
		line-height: 1.5;
		cursor: pointer;
	}
</style>
