<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Sect from '$lib/numbering/Sect.svelte';
	import DDprops from './DDprops.svelte';
	import Intro from './Intro.svelte';
	import { rect } from '../openChannelFlowCalcUtils';
	// import Lower from './Lower.svelte';
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

	let sdigs = 4,
		wdigs = 6,
		typeOfChannel = 'rectangular',
		specifyY = true,
		b = 3,
		y = 1.75,
		n = 0.013,
		s = 0.1,
		g = 9.81,
		QQ = 3.75,
		A,
		P,
		R,
		v,
		Q;

	function update() {
		calculate();
		katexify();
	}
	function calculate() {
		calculateFromY();
	}

	function calculateFromY() {
		//perform with same precision within methods, particularly for wdigs
		// all input values are sdigs
		rect.sdigs = sdigs;
		rect.wdigs = wdigs;
		A = rect.getA(b, y);
		P = rect.getP(b, y);
		R = rect.getR(b, y);
		v = rect.getManningsV(n, R, s);
		Q = rect.getQfromVnA(v, A);
	}

	calculate();

	function sds(n) {
		return n.toPrecision(sdigs);
	}
	function sdw(n) {
		return n.toPrecision(wdigs);
	}
</script>

<main on:load={update} on:click={update} on:change={update}>
	<Intro {typeOfChannel} />

	<section class="yQlayout">
		<label>
			<input type="radio" bind:group={specifyY} value={true} />
			<span>Specify !$y!$</span>
		</label>

		<label>
			<input type="radio" bind:group={specifyY} value={false} />
			<span>Specify !$Q!$</span>
		</label>
	</section>

	<section class="fig">
		<div class="width75">
			<img
				src="/openChannel/images/rectangularChannelSectionQ.png"
				alt="rectangular channel section" />
			{#if specifyY}
				<!-- img just a white vertical arrow for y dimension -->
				<img
					class="super"
					in:fade={{ duration: 750 }}
					out:fade={{ duration: 500 }}
					src="/openChannel/images/rectangularChannelSectionY.png"
					alt="rectangular channel section by depth" />
			{/if}

			<form on:submit|preventDefault={calculate}>
				<label class="b">
					!$b=!$
					<input
						type="number"
						step="any"
						required
						bind:value={b}
						on:input={update} />
					!$\mathsf&lbrace;m&rbrace;!$
				</label>

				{#if specifyY}
					<label class="y">
						!$y=!$
						<input
							type="number"
							step="any"
							required
							bind:value={y}
							on:input={update} />
						!$\mathsf&lbrace;m&rbrace;!$
					</label>
				{:else}
					<label class="Q">
						!$Q=!$
						<input
							type="number"
							step="any"
							required
							bind:value={QQ}
							on:input={update} />
						!$\mathsf&lbrace;m^3\!/s&rbrace;!$
					</label>
				{/if}
			</form>
		</div>
	</section>

	<br />
	
	\(s\):
	<input type="number" step="any" required bind:value={s} on:input={update} />
	<br />
	\(g\):
	<input type="number" step="any" required bind:value={g} on:input={update} />
	<br />
	\(n\):
	<input type="number" step="any" required bind:value={n} on:input={update} />
	<br />
	sdigs:
	<input type="number" required bind:value={sdigs} on:input={update} />
	<br />
	wdigs:
	<input type="number" required bind:value={wdigs} on:input={update} />
	<br />

	<Sect type="subsection0" center>Normal (Uniform) Flow</Sect>

	<p>
		<DDprops
			top="<span class='lowbold'>Flow Area:</span> 
				!$ \quad A = {sds(A)} \mathsf &lcub; \, m^2 &rcub; !$"
			drop="$$
				\begin&lcub;aligned&rcub;
					A &= b\cdot y \\
					&= {sds(b)}\textsf &lcub; m &rcub;\times {sds(y)}\textsf m\\
					&= {sdw(A)} \,\mathsf&lbrace;m^2&rbrace;
				\end&lcub;aligned&rcub;
				$$" />

		<DDprops
			top="<span class='lowbold'>Wetted Perimeter:</span>
				!$\quad P = {sds(P)}\, \mathsf m !$"
			drop="$$
				\begin&lcub;aligned&rcub;
					P &= b+2y \\
					&= {sds(b)}\textsf &lcub; m &rcub; +2\times {sds(y)}\textsf &lcub; m &rcub;\\
					&= {sdw(P)} \,\mathsf&lbrace;m&rbrace;
				\end&lbrace;aligned&rbrace;
				$$" />

		<DDprops
			top="<span class='lowbold'>Hydraulic Radius:</span>
				!$\quad R = {sds(R)}\, \mathsf m !$"
			drop="$$
				\begin&lbrace;aligned&rbrace;
					R &= A/P \\
					&= {sdw(A)}\; \mathsf&lcub; m^2 &rcub;/{sdw(P)}\;\textsf m \\
					&= {sdw(R)} \;\mathsf m
				\end&lbrace;aligned&rbrace;
				$$" />

		<DDprops
			top="<span class='lowbold'>Average Flow Velocity:</span>
				!$\quad v = {sds(v)}\, \mathsf &lbrace; m/s &rbrace; !$"
			drop="$$
				\begin&lbrace;aligned&rbrace;
					v &= \frac 1n R^&lbrace 2/3 &rbrace;S^&lbrace 1/2 &rbrace; \\
					&= \frac 1&lbrace; {sds(n)}&rbrace; ({sdw(R)})^&lbrace 2/3 &rbrace;({sds(
				s
			)} / 100
				)^&lbrace; 1/2 &rbrace; \\
					&= {sdw(v)} \,\mathsf&lbrace;m/s&rbrace;
				\end&lbrace;aligned&rbrace;	
				$$" />

		<DDprops
			top="<span class='lowbold'>Flow Rate:</span>
				!$\quad Q = {sds(Q)}\,\mathsf &lbrace; m^3\!/s &rbrace !$"
			drop="$$
				\begin&lbrace;aligned&rbrace;
					Q &= Av \\
					&= {sdw(A)}\;\mathsf&lcub;m^2&rcub; \times{sdw(v)}\;\mathsf&lcub;m/s&rcub; \\
					&= {sdw(Q)} \,\mathsf&lbrace;m^3\!/s&rbrace;
				\end&lbrace;aligned&rbrace;	
				$$" />
	</p>
</main>

<style>
	section.fig {
		margin: 1em auto 0 auto;
		position: relative;
		border: 1px solid green;		
	}
	section.fig div {
		border: 1px solid red;
	}
	form label {
		padding-left: 0.1rem;
		padding-right: 0.1rem;
		position: absolute;
	}
	form label input {
		width: 4.25rem;
		font-size: 0.8em;
		padding-left: 0.1em;
		padding-right: 0.1em;		
		cursor: pointer;
	}
	label.b {		
		top: 75.5%;
		left: 35%;
		background-color: #ccc;
		padding: 0 0.25em;
	}
	label.y {
		/* color: white; */
		padding: 0.125em 0.25em;
		top: 40%;
		left: 45%;
		background-color: var(--fluids-primary);
	}
	label.Q {
		/* color: white; */
		/* padding: 0.25em; */
		top: 40%;
		left: 35%;
		background-color: var(--fluids-primary);
	}

	.super {
		position: absolute;
		left: 0;
	}
</style>
