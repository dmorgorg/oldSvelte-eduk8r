<script>
	import katex from 'katex';
	const render = (n) => {
		let str = n.textContent.replaceAll('\\[', '{');
		str = str.replaceAll('\\]', '}');
		katex.render(str, n, { displayMode: false });
	};
</script>

<span use:render><slot /></span>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous" />
</svelte:head>