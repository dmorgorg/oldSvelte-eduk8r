<script>
	import Rectangular from './components/Rectangular.svelte';
	import Sect from '$lib/numbering/Sect.svelte';
	// import { onMount } from 'svelte';

	// let katexify;

	// onMount(() => {
	// 	katexify = () => {
	// 		renderMathInElement(document.body, {
	// 			delimiters: [
	// 				{
	// 					left: '$$',
	// 					right: '$$',
	// 					display: true
	// 				},
	// 				{
	// 					left: '!$',
	// 					right: '!$',
	// 					display: false
	// 				},
	// 				{
	// 					left: '\\[',
	// 					right: '\\]',
	// 					display: true
	// 				},
	// 				{
	// 					left: '\\(',
	// 					right: '\\)',
	// 					display: false
	// 				}
	// 			]
	// 		});
	// 	};

	// 	katexify();
	// });
</script>

<Sect type="chapter0" center>Open Channel Flow Calculator</Sect>
<Rectangular />


<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css"
		integrity="sha384-BTL0nVi8DnMrNdMQZG1Ww6yasK9ZGnUxL1ZWukXQ7fygA1py52yPp9W4wrR00VML"
		crossorigin="anonymous" />
	<script
		src="https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.js"
		integrity="sha384-y6SGsNt7yZECc4Pf86XmQhC4hG2wxL6Upkt9N1efhFxfh6wlxBH0mJiTE8XYclC1"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/contrib/auto-render.min.js"
		integrity="sha384-IiI65aU9ZYub2MY9zhtKd1H2ps7xxf+eb2YFG9lX6uRqpXCvBTOidPRCXCrQ++Uc"
		crossorigin="anonymous"></script>
</svelte:head>