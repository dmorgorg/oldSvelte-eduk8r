<!-- this component requires all counters to be 'reset' in the calling file. This is so the chapter number can be specified on a file by file basis. This cannot be done here (or I don't know how to)
since, unlike the other counters, it does not begin at 1. All counters have to be declared at the same time so it has to be in the parent. Apparently. -->
<script>
	import { page } from '$app/stores';
	// set nav variable to true if path isn't root, '/'
	$: path = $page.url.pathname;
	$: nav = path !== '/';
	$: pathArray = path.split('/');
	$: subject = nav ? pathArray[1] : 'home';

	export let title = null;
	export let type = null;
</script>

<div class="{type} {subject}">
	{#if title}
		<span class="title">&nbsp;({title}.) </span>
	{/if}
	<span class="content">&nbsp;<slot /></span><br />
</div>

<style>
	.theorem,
	.definition,
	.example,
	.proposition,
	.lemma,
	.corollary {
		font-weight: bold;
		font-family: 'PT Serif', serif;
	}
	.theorem::before {
		counter-increment: thm;
		content: 'Theorem ' counter(chapter) '.' counter(section) '.' counter(thm);
	}
	.proposition::before {
		counter-increment: thm;
		content: 'Proposition ' counter(chapter) '.' counter(section) '.' counter(thm);
	}	
	.definition::before {
		counter-increment: defn;
		content: 'Definition ' counter(chapter) '.' counter(section) '.' counter(defn);
	}
	.example::before {
		counter-increment: example;
		content: 'Example ' counter(chapter) '.' counter(section) '.' counter(example);
	}
	.theorem .content,
	.proposition .content,
	.lemma .content,
	.corollary .content {
		/* font-family: 'Cormorant', serif; */
		font-style: italic;
		font-size: 1rem;
		font-weight: normal;
		color: var(--text-primary);
	}
	.example .content {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: normal;
		color: var(--text-primary);
	}
		
	.proof,
	.solution,
	.remark {
		font-family: 'Alegreya SC', serif;
		text-transform: capitalize;
		/* font-weight: bold; */
		font-size: 1.1em;
	}
	.proof::before {
		content: 'Proof: ';
	}
	.solution::before {
		content: 'Solution: ';
	}
	.remark::before {
		content: 'Remark: ';
	}
	.proof .content,
	.solution .content,
	.remark .content {
		font-style: normal;
		font-size: 1rem;
		font-weight: normal;
		text-transform: none;
		color: var(--text-primary);
		font-family: Arial, Helvetica, sans-serif;
	}

	.title {
		font-weight: bold;
		color: var(--text-primary);
	}
	div {
		margin: 1em 0;
	}

	.home {
		color: var(--home-primary);
	}
	.about {
		color: var(--about-primary);
	}
	.statics {
		color: var(--statics-primary);
	}
	.strength {
		color: var(--strength-primary);
	}
	.water {
		color: var(--water-primary);
	}
	.misc {
		color: var(--misc-primary);
	}
</style>
