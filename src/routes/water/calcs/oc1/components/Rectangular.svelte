<script>
    import Intro from './Intro.svelte';
    // import Ki from '$lib/katex/Ki.svelte'

    let typeOfChannel = "rectangular";
</script>

<section class='intro'><Intro {typeOfChannel} /></section>

<style>
   
   .intro {
		width: 85%;
		margin: 2em auto 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
        text-align: center;
	}	
	
	/* @media (min-width: 640px) {
		main {
			width: 85%;
		}
	} */
	@media (min-width: 768px) {
		.intro {
			width: 70%;
			/* background: yellow; */
		}
	}
	@media (min-width: 1100px) {
		.intro {
			width: 60%;
			/* background: purple; */
		}
	}
</style>