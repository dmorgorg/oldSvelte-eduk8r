<script>
	import { onMount } from 'svelte';
	import DDprops from './DDprops.svelte';
	import Intro from './Intro.svelte';
	let katexify;

	onMount(() => {
		katexify = () => {
			renderMathInElement(document.body, {
				delimiters: [
					{
						left: '$$',
						right: '$$',
						display: true
					},
					{
						left: '!$',
						right: '!$',
						display: false
					},
					{
						left: '\\[',
						right: '\\]',
						display: true
					},
					{
						left: '\\(',
						right: '\\)',
						display: false
					}
				]
			});
		};

		katexify();
	});

	let c = 4,
		typeOfChannel = 'rectangular',
		specifyY = true;
</script>

<main on:click={katexify}>
	<Intro {typeOfChannel} />

	<label class="yQlayout">
		<input type="radio" bind:group={specifyY} value={true} />
		<span class="radio__label">Specify !$y!$</span>
	</label>

	<label class="yQlayout">
		<input type="radio" bind:group={specifyY} value={false} />
		<span>Specify !$Q!$</span>
	</label>

	<p>
		<DDprops
			top="\(a=\sqrt &lcub; b^2+{c}^2 &rcub;\)"
			drop="\[a=\sqrt &lcub; b^2+{c * c}^&lcub;{c}&rcub; &rcub;\]" />
	</p>
</main>

<input type="number" step="any" required bind:value={c} on:input={katexify} />


