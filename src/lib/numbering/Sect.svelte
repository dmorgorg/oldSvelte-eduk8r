<!-- this component requires all counters to be 'reset' in the calling file. This is so the chapter number can be specified on a file by file basis. This cannot be done here (or I don't know how to)
since, unlike the other counters, it does not (always) begin at 1. All counters have to be declared at the same time so it has to be in the parent. Apparently. -->
<script>
	import { page } from '$app/stores';
	// set nav variable to true if path isn't root, '/'
	$: path = $page.url.pathname;
	$: nav = path !== '/';
	$: pathArray = path.split('/');
	$: subject = nav ? pathArray[1] : 'home';

	export let type = 'section';
	export let center = false;
</script>

<header class="{type} {subject}" class:center>&nbsp;<slot />&nbsp;</header>

<style>
    .chapter,
	.chapter0,
    .section,
	.section0, 
	.subsection,
	.subsection0,
	.subsubsection,
	.subsubsection0,
	.title {       
		margin: 0.5em 0 -0.5em -0.25em;
		letter-spacing: 0.025em;
        word-spacing: -0.5rem;
        font-family: "Covered By Your Grace", cursive;
		font-size: 2.75rem;
        -webkit-text-stroke-width: 0.02em;
		-webkit-text-stroke-color: black;
		/* display: inline-block; */
		padding: 0;
    }
    .chapter::before {
        content: 'Ch.' counter(chapter) '  '
    }
    .section,
	.section0,
	.subsection,
	.subsetion0 {
        font-size: 2.5rem;
		padding: 0;
    }
    .section::before {
        counter-increment: section;
        content: counter(chapter)'.'counter(section)' ';
    }
	.title{
		margin-left: -0.25em;
		font-size: 2.5em;
	}

	.subsection,
	.subsection0 {
		font-size: 2em;
		margin-bottom: -1.5em;
	}
	.subsubsection,
	.subsubsection0 {
		font-size: 1.5em;
	}
	
	.center {
		margin: 0 auto;
		text-align: center;
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
	.fluids {
		color: var(--fluids-primary);
	}
	.misc {
		color: var(--misc-primary);
	}

    @media (max-width: 768px) {
		.chapter {
			margin-left: 0;
		}
	}
</style>
