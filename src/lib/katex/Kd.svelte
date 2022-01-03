<script>
	import katex from 'katex';
	const render = (n) => {
		let str = n.textContent.replaceAll('\\[', '{');
		str = str.replaceAll('\\]', '}');
		katex.render(str, n, { displayMode: true });
	};
</script>

<span use:render><slot /></span>

<style>
	:global(.katex){
		/* color: green; */
		font-size: 1.1em;
	}
</style>
