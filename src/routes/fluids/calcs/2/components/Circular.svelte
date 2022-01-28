<script>
    import Intro from './Intro.svelte';
    import Ki from '$lib/katex/Ki.svelte'

    let typeOfChannel = "circular";
</script>

<section class='intro'><Intro {typeOfChannel} /></section>

<style>
    .intro {
        width: 60%;
        margin: 0 auto;
        text-align: center;
        margin-top: 2em;
    }
</style>