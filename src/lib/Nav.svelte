<nav>
	<ul>
		<li class="about">
			<a href="/about">About</a>
		</li>
		<li class="statics">
			<a href="/statics">Statics</a>
			<ul>
				<li>
					<a href="/statics/vis">Visualisations</a>
					<ul>
						<li><a href="/statics/vis/conc">Concentrated Loads </a></li>
						<li><a href="/statics/vis/dist">Distributed Loads </a></li>
						<li><a href="/statics/vis/moj">Method of Joints: Bridge</a></li>
					</ul>
				</li>

				<li>
					<a href="/statics/guided"><s>Guided Practics</s></a>
					<ul>
						<li>
							<a href="/statics/guided/conc"><s>Concurrent Forces</s></a>
						</li>
						<li><a href="/statics/guided/moj"><s>Method of Joints</s></a></li>
						<li><a href="/statics/guided/mos"><s>Method of Sections</s></a></li>
						<li><a href="/statics/guided/cf"><s>Complex Frames</s></a></li>
					</ul>
				</li>

				<!-- <li>
					<a href="/statics/vis"><s>A Course</s></a>
					<ul>
						<li><a href="/statics/vis/conc">Concentrated Loads </a></li>
						<li><a href="/statics/vis/dist">Distributed Loads </a></li>
						<li><a href="/statics/vis/moj">Method of Joints: Bridge</a></li>
					</ul>
				</li> -->
			</ul>
		</li>
		<li class="strength">
			<a href="/strength"><s>Strength</s></a>
			<!-- <ul>
				<li><a href="/strength/guided"><s>Guided Practice</s></a></li>
				<li><a href="/strength/tables"><s>Tables & Formul&aelig;</s></a></li>
			</ul> -->
		</li>
		<li class="fluids">
			<a href="/fluids">Fluids/Water</a>
			<ul>
				<!-- <li><a href="/fluids/guided"><s>Guided Practice</s></a></li> -->
				<li>
					<a href="/fluids/calcs">Calculators </a>
					<ul>
						<!-- <li><a href="/fluids/calcs/hw">Hazen-Williams</a></li> -->
						<li><a href="/fluids/calcs/openChannel/index.html">Open Channel</a></li>
					</ul>
				</li>
				<!-- <li>
					<a href="/fluids/tables"><s>Tables & Formul&aelig;</s></a>
				</li> -->
			</ul>
		</li>

		<li class="misc">
			<a href="/misc" class="misc">Misc.</a>
			<ul>
				<li>
					<a href="/misc/calcs">Calculators</a>
					<ul>
						<li>
							<a href="/misc/calcs/vaccine">Vaccine Efficacy</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="/misc/math">Math bits...</a>
					<ul>
						<li>
							<a href="/misc/math/m4cs">Math for CompSci</a>
							<ul>
								<li>
									<a href="/misc/math/m4cs/01proofs">Proofs</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="/misc/math/numberTheory/">(a little) Number Theory</a>
							<ul>
								<li>
									<a href="/misc/math/numberTheory/01gettingStarted">
										01 Getting Started
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</nav>

<style>
	s {
		color: white;
	}
	nav {
		display: flex;
		justify-content: flex-end;
		text-align: center;
		font-size: 90%;
		padding: 0;
		margin: 0;
		font-family: 'Happy Monkey', cursive;
	}
	li {
		position: relative;
		display: block;
		opacity: 0;
		cursor: pointer;
		min-width: 5em;
		border-radius: 0.3em;
		margin-right: 0.3em;
		margin-top: 0.3em;
		margin: 0.3em;
	}
	a {
		padding: 0.375em;
		box-sizing: border-box;
		border-radius: 3px;
		position: relative;
		white-space: nowrap;
		display: block;
		text-decoration: none;
	}
	/* all menus */
	li > ul {
		position: absolute;
		pointer-events: none;
		margin-top: -0.5em;
		padding: 0;
	}
	/* first ul */
	nav > ul {
		display: flex;
		align-items: flex-start;
		margin: 0.5em 1em 0 0;
		padding: 0;
	}
	/* link text colors */
	li > a {
		color: white;
		transition: all 0.875s ease 0.1s;
	}
	li:hover > a {
		color: black;
	}
	/* end link colors */

	/* show first row always */
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

	nav > ul > li li ul {
		top: 3%;
		right: 101%;
	}

	/* subsequent dropdowns */
	li > ul > li > ul > li {
		transition: all 5.875s;
		opacity: 0;
	}
	li > ul > li:hover > ul > li {
		opacity: 1;
	}

	/* course background colors */
	li.about {
		background-color: var(--about-primary);
		border: 0.15em solid var(--about-primary);
		transition: all 0.875s;
	}
	li.statics,
	li.statics li {
		background-color: var(--statics-primary);
		border: 0.15em solid var(--statics-primary);
		transition: all 0.875s;
	}
	li.strength {
		background-color: var(--strength-primary);
		border: 0.15em solid var(--strength-primary);
		transition: all 0.875s;
	}
	li.fluids,
	li.fluids li {
		background-color: var(--fluids-primary);
		border: 0.15em solid var(--fluids-primary);
		transition: all 0.875s;
	}
	li.misc,
	li.misc li {
		background-color: var(--misc-primary);
		border: 0.15em solid var(--misc-primary);
		transition: all 0.875s;
	}
	li:hover,
	li ul li:hover {
		border-color: black;
		transition: border 0.875s;
	}
	/* downward pointing colored triangles indicating sub-menu for top-level menuitems */
	nav > ul > li > a::after {
		content: '';
		position: absolute;
		top: 2em;
		left: 0.5em;
		border: 0.5em solid transparent;
		z-index: -100;
		transition: all 0.875s;
	}
	nav > ul > li.about > a::after {
		border-top: 0.75em solid var(--about-primary);
	}
	li.statics > a::after {
		border-top: 0.75em solid var(--statics-primary);
	}
	li.strength > a::after {
		border-top: 0.75em solid var(--strength-primary);
	}
	li.fluids > a::after {
		border-top: 0.75em solid var(--fluids-primary);
	}
	li.misc > a::after {
		border-top: 0.75em solid var(--misc-primary);
	}
	li > a:only-child::after {
		border: none;
	}
	nav > ul > li:hover > a::after {
		border-top: 0.75em solid black;
		transition: border 0.875s;
		z-index: 100;
	}
	/* left-pointing colored triangles indicating lower level menu for top-level men*/
	li ul > li > a::after {
		content: '';
		position: absolute;
		border: 0.5em solid transparent;
		top: 0.55em;
		right: 100%;
		/* z-index: 100; */
		transition: all 0.875s;
	}
	li.statics ul > li > a::after {
		border-right: 0.75em solid var(--statics-primary);
	}
	/* li.strength ul > li > a::after {
		border-right: 0.75em solid var(--strength-primary);
	} */
	li.fluids > ul > li > a::after {
		border-right: 0.75em solid var(--fluids-primary);
	}
	li.misc ul > li > a::after {
		border-right: 0.75em solid var(--misc-primary);
	}
	li:hover li:hover > a::after {
		border-right: 0.75em solid black;
		transition: all 0.875s;
		z-index: 200;
	}
	/* ----------------------------------------------------------------------- */
	/* position first dropdown */
	nav > ul > li > ul > li {
		transform: translateY(25%) translateX(-5%);
		/* transform: translateY(150%) translateX(-5%); */
		/* opacity: 0; */
		/* transition: all 5.875s; */
	}
	nav > ul > li:hover > ul > li {
		transform: translateY(25%) translateX(-5%);
		opacity: 1;
		transition: all 1.875s;
	}
	/* end position first drop */
	nav > ul > li.misc > ul {
		right: 0;
	}
	nav > ul > li.misc > ul > li {
		transform: translateY(25%) translateX(-100%);
		left: 99%;
	}
</style>
