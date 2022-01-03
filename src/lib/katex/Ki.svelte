<script>
	import katex from 'katex';
	const render = (n) => {
		let str = n.textContent.replaceAll('\\[', '{');
		str = str.replaceAll('\\]', '}');
		katex.render(str, n, { displayMode: false });
	};
</script>

<span use:render><slot /></span>
