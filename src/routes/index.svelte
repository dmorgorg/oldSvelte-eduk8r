<nav>
	<ul>
		<li class="about">
			<a href="/about">About</a>
		</li>
		<li class="statics">
			<a href="/statics">Structural Statics</a>
			<!-- Structural Statics -->
			<ul>
				<li>
					<a href="/statics/vis">Visualisations</a>
					<ul>
						<li>
							<a href="/statics/vis/conc">Concentrated Loads </a>
						</li>
						<li>
							<a href="/statics/vis/dist">Distributed Loads </a>
						</li>
						<li>
							<a href="/statics/vis/moj">Method of Joints: Bridge</a>
						</li>
					</ul>
				</li>

				<li>
					<a href="/statics/guided"><s>Guided Practice</s></a>
					<ul>
						<li>
							<a href="/statics/guided/conc"><s>Concurrent Forces</s></a>
						</li>
						<li>
							<a href="/statics/guided/moj"><s>Method of Joints</s></a>
						</li>
						<li>
							<a href="/statics/guided/mos"><s>Method of Sections</s></a>
						</li>
						<li>
							<a href="/statics/guided/cf"><s>Complex Frames</s></a>
						</li>
					</ul>
				</li>
			</ul>
		</li>

		<li class="strength">
			<a href="/strength"><s>Strength of Materials</s></a>
			<ul>
				<li><a href="/strength/guided"><s>Guided Practice</s></a></li>
				<li><a href="/strength/tables"><s>Tables & Formul&aelig;</s></a></li>
			</ul>
		</li>

		<li class="water">
			<a href="/water">Fluid Mechanics & Water Resources</a>
			<ul>
				<li><a href="/water/guided"><s>Guided Practice</s></a></li>
				<li>
					<a href="/water/calcs" class="hasSub">Calculators </a>
					<ul>
						<li><a href="/water/calcs/hw">Hazen-Williams</a></li>
						<li><a href="/water/calcs/oc">Open Channel</a></li>
					</ul>
				</li>
				<li>
					<a href="/water/tables"><s>Tables & Formul&aelig;</s></a>
				</li>
			</ul>
		</li>
		<li class="misc">
			<a href="/misc" class="misc">Misc.</a>
			<ul>
				<li>
					<a href="/misc/math">Math bits...</a>
					<ul>
						<li>
							<a href="/misc/math/m4cs">Math for CompSci</a>
							<ul>
								<li>
									<a href="/misc/math/m4cs/induction">Induction</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="/misc/math/numberTheory/">(a little) Number Theory</a>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</nav>

<style>
	:global(:root) {
		--home-primary: #bbb;
		--about-primary: #ae946d;
		--about-primary-hover: #d79c45;
		--about-secondary: #000;
		--statics-primary: #900;
		--statics-primary-hover: #880000;
		--statics-secondary: #000;
		--misc-primary: #172;
		--misc-primary-hover: #09801c;
		--misc-secondary: #000;
		--water-primary: #0af;
		--water-secondary: #000;
		--strength-primary: #e70;
		--strength-secondary: #000;
		--li-hover-border: red;
		--sub-ul: #aaa;
		--sub-ul-hover: #777;
		--page-background: white;
		--link-text: white;
		--link-text-hover: black;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		/* font-family: "Happy Monkey", cursive; */
		font-size: clamp(12px, 1.3vw, 24px);
		box-sizing: border-box;
	}
	:global(*:after, *:before) {
		box-sizing: inherit;
	}

	:global(.katex) {
		font-size: 110%;
		/* color: red; */
	}
	/* s {
		color: white;
	} */
	nav {
		width: 80%;
		margin: 0 13% auto auto;
		display: flex;
		justify-content: flex-end;
		font-size: 130%;
		height: 80vh;
		padding: 0;
		font-family: 'Happy Monkey', cursive;
	}
	li {
		position: relative;
		display: block;
		opacity: 0;
		cursor: pointer;
		min-width: 6em;
		border-radius: 0.4em;
		border: 0.15em solid white;
	}

	a {
		padding: 1em;
		box-sizing: border-box;
		border-radius: 0.4em;
		position: relative;
		white-space: nowrap;
		display: block;
		text-decoration: none;
	}
	/* all menus */
	li > ul {
		position: absolute;
		pointer-events: none;
		padding: 0;
	}
	/* first ul */
	nav > ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0;
		position: absolute;
	}
	/* link text colors */
	li > a,
	li.statics {
		color: white;
		transition: all 0.875s ease 0.1s;
	}
	li:hover > a {
		color: black;
	}
	/* end link colors */
	/* show first row/column always */
	nav > ul > li {
		pointer-events: all;
		opacity: 1;
	}
	li:hover > ul {
		pointer-events: initial;
	}
	li:hover > ul > li,
	ul:hover > li {
		opacity: 1;
	}

	nav > ul > li ul {
		top: -0.125em;
		right: 100.75%;
		z-index: 50;
		padding-right: 0.35em;
	}

	/* subsequent dropdowns */
	li > ul > li > ul > li {
		transition: all 0.875s;
		opacity: 0;
	}
	li > ul > li:hover > ul > li {
		opacity: 1;
		transition: all 0.875s;
	}

	/* course background colors */
	li.about {
		background-color: var(--about-primary);
		border: 0.125em solid var(--about-primary);
		transition: all 0.875s;
		margin-bottom: 0.5em;
	}
	li.statics,
	li.statics li {
		background-color: var(--statics-primary);
		border: 0.125em solid var(--statics-primary);
		transition: all 0.875s;
		margin-bottom: 0.5em;
	}
	li.strength,
	li.strength li {
		background-color: var(--strength-primary);
		border: 0.125em solid var(--strength-primary);
		transition: all 0.875s;
		margin-bottom: 0.5em;
	}
	li.water,
	li.water li {
		background-color: var(--water-primary);
		border: 0.125em solid var(--water-primary);
		transition: all 0.875s;
		margin-bottom: 0.5em;
	}
	li.misc,
	li.misc li {
		background-color: var(--misc-primary);
		border: 0.125em solid var(--misc-primary);
		transition: all 0.875s;
		margin-bottom: 0.5em;
	}
	li:hover,
	li ul li:hover {
		border-color: black;
		transition: border 0.875s;
	}

	/* left-pointing colored triangles indicating lower level menu for top-level men*/
	li > a::after {
		content: '';
		position: absolute;
		border: 0.5em solid transparent;
		top: 1.2em;
		right: 100%;
		transition: all 0.875s;
	}
	li.statics > a::after,
	li.statics ul > li > a::after {
		border-right: 0.75em solid var(--statics-primary);
	}
	li.strength > a::after,
	li.strength ul > li > a::after {
		border-right: 0.75em solid var(--strength-primary);
	}
	li.water > a::after,
	li.water ul > li > a::after {
		border-right: 0.75em solid var(--water-primary);
	}
	li.misc > a::after,
	li.misc ul > li > a::after {
		border-right: 0.75em solid var(--misc-primary);
	}
	li:hover > a::after,
	li:hover li:hover > a::after {
		border-right: 0.75em solid black;
		transition: all 0.875s;
		z-index: 100;
		right: 100.5%;
	}
	li > a:only-child::after {
		border: none;
		transition: all 0.875s;
	}

	ul:hover > li:not(:hover) {
		background: #bbb;
		border-color: #bbb;
		transition: all 0.875s;
	}
	ul:hover > li:not(:hover) > a::after {
		border-right: 0.75em solid #bbb;
		/* transition: all 0.875s; */
		right: 100%;
	}
</style>