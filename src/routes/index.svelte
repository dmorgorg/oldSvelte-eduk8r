<nav>
	<ul>
		<li class="about">
			<a href="/about">About</a>
		</li>
		<li class="statics">
			<a href="/statics">Statics</a>
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

				<!-- <li>
					<a href="/statics/guided"><s>A Course</s></a>
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
				</li> -->
			</ul>
		</li>

		<li class="strength">
			<a href="/strength"><s>Strength</s></a>
			<ul>
				<li><a href="/strength/guided"><s>Guided Practice</s></a></li>
				<li><a href="/strength/tables"><s>Tables & Formul&aelig;</s></a></li>
			</ul>
		</li>

		<li class="water">
			<a href="/water">Fluids/Water</a>
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
	nav {
		width: 90%;
		margin: -5em auto 0 auto;
		display: flex;
		justify-content: flex-end;
		/* align-content: flex-end; */
		font-size: 110%;
		height: 80vh;
		padding: 0;
		font-family: 'Happy Monkey', cursive;
		/* border: 1px solid green; */
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
		padding: 0.5em;
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
		/* display: flex;
		flex-direction: column;
		justify-content: center; */
		align-self: center;
		padding: 0;
		/* position: absolute; */
	}
	/* link text colors */
	li > a,
	/* li.statics {
		color: white;
		transition: all 0.875s ease 0.1s;
	} */
	li > a {
		color: black;
	}
	/* li:hover > a {
		color: black;
	} */
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
	
	
	
	li > a:only-child::after {
		border: none;
		transition: all 0.875s;
	}
	/* ul:hover > li:not(:hover) {
		background: #bbb;
		border-color: #bbb;
		transition: all 0.875s;
	}
	ul:hover > li:not(:hover) > a::after {
		border-right: 0.75em solid #bbb;
		right: 100%;
	} */













/* //////////////////////////////////////////////////////////////////// */

	

	li.about,
	li.statics,
	li.statics li,
	li.strength, 
	li.strength li,
	li.water,
	li.water li,
	li.misc,
	li.misc li {
		background-color: var(--home-primary);
		border: 0.125em solid var(--home-primary);
		transition: all 0.875s;
		margin-bottom: 0.5em;
	}
	li.about:hover {
		background-color: var(--about-primary);
	}
	li.statics:hover,
	li.statics li:hover {
		background-color: var(--statics-primary);
	}
	li.strength:hover,
	li.strength li:hover {
		background-color: var(--strength-primary);
	}
	li.water:hover,
	li.water li:hover {
		background-color: var(--water-primary);
	}
	li.misc:hover,
	li.misc li:hover {
		background-color: var(--misc-primary);
	}
	li:hover,
	li ul li:hover {
		border-color: black;
		transition: border 0.875s;
	}
	li > a::after {
		content: '';
		position: absolute;
		border: 0.5em solid transparent;
		top: 0.6em;
		right: 101%;
		transition: all 0.875s;
	}
	li.statics > a::after,
	li.statics ul > li > a::after,
	li.strength > a::after,
	li.strength ul > li > a::after,
	li.water > a::after,
	li.water ul > li > a::after,
	li.misc > a::after,
	li.misc ul > li > a::after{
		border-right: 0.75em solid var(--home-primary);
	}
	li:hover > a::after,
	li:hover li:hover > a::after {
		border-right: 0.75em solid black;
		transition: all 0.875s;
		z-index: 100;
		right: 101%;
	}
	


</style>