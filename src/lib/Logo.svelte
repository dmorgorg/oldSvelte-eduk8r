<script>
	export let title = "dmorg.org";
	export let fill = "home";
	export let clickable = true;
</script>

<div class="logo {fill}"><a href="/" class:clickable>{title} </a></div>

<style>
	.logo {
		padding: 0;
		padding-left: 1.5em;
		margin: 0;
		word-spacing: -0.2em;
		letter-spacing: 0.05em;
	}
	.logo a {
		text-decoration: none;
		color: inherit;
		font-family: "Covered By Your Grace", cursive;
		font-size: 3em;
		-webkit-text-stroke-width: 1.5px;
		-webkit-text-stroke-color: black;
	}
	.logo a:hover {
		/* text-shadow: none; */
		/* text-decoration: none; */
		cursor: default;
	}
	.logo a.clickable {
		-webkit-text-stroke-width: 1px;
	}
	.logo a.clickable:hover {
		text-shadow: 0 0 0.4em black;
		text-decoration: none;
		cursor: pointer;
		color: inherit;
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
