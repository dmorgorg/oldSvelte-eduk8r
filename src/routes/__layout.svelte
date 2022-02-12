<script>
	// import katex from 'katex';
	// import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	// import { onMount } from 'svelte';
	import Header from '$lib/Header.svelte';
	// let mounted = false;

	// let katexify = () => {
	// 	renderMathInElement(document.body, {
	// 		delimiters: [
	// 			{
	// 				left: '$$',
	// 				right: '$$',
	// 				display: true
	// 			},
	// 			{
	// 				left: '\\[',
	// 				right: '\\]',
	// 				display: true
	// 			},
	// 			{
	// 				left: '!$',
	// 				right: '!$',
	// 				display: false
	// 			},
	// 			{
	// 				left: '\\(',
	// 				right: '\\)',
	// 				display: false
	// 			}
	// 		]
	// 	});
	// };

	// onMount(() => {
	// 	document.addEventListener('DOMContentLoaded', katexify);
	// 	document.addEventListener('click', katexify);
	// 	document.addEventListener('input', katexify);
	// 	document.addEventListener('change', katexify);
	// 	mounted=true;	
	// });

	// $: {
	// 	mounted;
	// 	console.log('called'+mounted)
	// 	if(mounted) katexify();
	// }
</script>

<!-- <main> -->
	<Header />

	<slot />
<!-- </main> -->
 
<!-- <style>
	main {
		width: 100%;
	}
</style> -->