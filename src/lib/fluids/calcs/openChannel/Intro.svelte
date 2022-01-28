<script>
    import Ki from '$lib/katex/Ki.svelte'
	export let typeOfChannel = 'trapezoidal';
</script>

This calculator is for normal (uniform) flow in an open channel with a
<strong>{typeOfChannel}</strong> cross-section.
<p />
Clicking on a result panel will display the associated calculations for each result.
Clicking again will close the panel.
<p />
Either flow depth, <Ki>y</Ki>, in metres <Ki>\[(\textsf\[m\]\])</Ki> or volume flow, <Ki>Q</Ki>, in cubic metres
per second <Ki>\[(\mathsf\[m^3/s\])\]</Ki> must be specified. But not both.
<p />
If <Ki>y</Ki> is specified, then the corresponding <Ki>Q</Ki> will be calculated.<br />If <Ki>Q</Ki> is specified, then the corresponding flow depth <Ki>y</Ki> will be calculated.
<p/>
{#if typeOfChannel !== 'triangular'}
	Note that <Ki>y</Ki> cannot be determined analytically from <Ki>Q</Ki> for a {typeOfChannel} channel and it is found using an iterative method.
{/if}
<p />



