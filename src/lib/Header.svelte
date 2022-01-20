<script>
	import { page } from '$app/stores';
	import Nav from '$lib/Nav.svelte';
	import Logo from '$lib/Logo.svelte';

	// set nav variable to true if path isn't root, '/'
	$: path = $page.url.pathname;
	$: nav = path !== '/';
	$: pathArray = path.split('/');
	$: subject = nav ? pathArray[1] : 'home';

	
</script>

<header>
	<Logo title="eduk8r.org" fill={subject} clickable={nav} />
	{#if nav}
		<Nav />
	{/if}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2em;
	}
</style>
