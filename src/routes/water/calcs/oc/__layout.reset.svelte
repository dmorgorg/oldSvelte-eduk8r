<script>
	import Header from '$lib/Header.svelte';
</script>

<main>
	<Header />
	<slot />
</main>

<style>
	main {
		background: pink;
		width: 100%;
	}
</style>
