<script>
	import { onMount } from 'svelte';
	import Intro from './Intro.svelte';

	onMount(() => {
		katexify();
	});

	let typeOfChannel = 'rectangular',
		specifyY = true,
		validS,
		//input strings
		sdigs = 4,
		wdigs = 6,
		bs = 3,
		b,
		ys = 1.75,
		y,
		QQs = 3.25,
		QQ,
		ss = 0.1,
		s,
		ns = 0.013,
		n,
		gs = 9.81,
		g;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>

	<!-- The loading of KaTeX is deferred to speed up page rendering -->
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.js"
		integrity="sha384-VQ8d8WVFw0yHhCk5E8I86oOhv48xLpnDZx5T9GogA/Y84DcCKWXDmSDfn13bzFZY"
		crossorigin="anonymous"></script>

	<!-- To automatically render math in text elements, include the auto-render extension: -->
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.min.js"
		integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR"
		crossorigin="anonymous"
		onload="renderMathInElement(document.body);"></script>

	<script src="/katexify.js"></script>
</svelte:head>


<main>
	<Intro {typeOfChannel} />
!$ \KaTeX !$




</main>
