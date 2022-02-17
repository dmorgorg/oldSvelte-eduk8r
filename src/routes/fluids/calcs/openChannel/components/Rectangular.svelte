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

		while(true){
			if(typeof katexify === 'function'){
				break;
			}
		}

		quickUpdate();
	});

	let sdigs = 4,
		wdigs = 6,
		validS = true,
		typeOfChannel = 'rectangular',
		specifyY = true,
		bs = 3, b,
		ys = 1.75, y,
		ns = 0.013, n,
		ss = 0.1, s,
		gs = 9.81, g,
		// QQ, QQs for Q value where Q is specified, not calculated
		QQs = 3.75, QQ,
		A, P, R, v, Q, E, T, NF;

	// https://www.freecodecamp.org/news/javascript-debounce-example/
	function debounce(func, timeout = 1500) {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		};
	}
	// stop katexify() running before calculate() has finished
	const delayK = debounce(() => {
		katexify();
	}, 10);
	const update = debounce(() => {
		// delay call to calculate, giving time to enter numbers 
		calculate();
		// make sure calculate is finished before calling katexify
		delayK();
	});
	const quickUpdate = () => {
		calculate();
		// make sure calculate is finished before calling katexify
		delayK();
	}
	function calculate() {
		// ss is the string bound to input, s is associated number
		s = Number(ss);		
		s = s < 0 ? -s : s; // negative n not allowed
		ss = sds(s); // for binding to the input field
		validS = s === 0 ? false : true; // check for 0 slope

		n = Number(ns);		
		n = n <= 0 ? 0.01 : n; // negative n not allowed
		ns = sds(n);

		g = Number(gs);
		g = g < 9.8 ? 9.8 : g; // minimum value for g is 9.8 (mainly 9.806?)
		gs = sds(g);

		b = Number(bs);
		b = b < 0 ? -b : b;
		b = b === 0 ? 1 : b;
		bs = sds(b); // for binding to the input field

		y = Number(ys);
		y = y < 0 ? -y : y;
		ys = sds(y); // for binding to the input field

		QQ = Number(QQs);
		QQ = QQ < 0 ? -QQ : QQ;
		QQs = sds(QQ); // for binding to the input field

		
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
		E = rect.getE(y, v, g);
		T = rect.getT(b);
		NF = rect.getNF(v, g, A, T);
	}

	calculate();

	function sds(n) {
		return n.toPrecision(sdigs);
	}
	function sdw(n) {
		return n.toPrecision(wdigs);
	}
</script>

<main 
	on:click={quickUpdate} on:change={update} >
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
						bind:value={bs}
						on:input={update} />
					!$\mathsf m !$
				</label>

				{#if specifyY}
					<label class="y">
						!$y=!$
						<input
							type="number"
							step="any"
							required
							bind:value={ys}
							on:input={update} />
						!$\mathsf m !$
					</label>
				{:else}
					<label class="Q">
						!$Q=!$
						<input
							type="number"
							step="any"
							required
							bind:value={QQs}
							on:input={update} />
						!$\mathsf&lcub;m^3\!/s&rcub;!$
					</label>
				{/if}
			</form>
		</div>

		<form on:submit|preventDefault={calculate} class="lowerInputs">
			<div class="s">
				Slope, !$S=!$
				<input
					type="number"
					step="any"
					required
					bind:value={ss}
					on:input={update} />
				!$\small \% !$
			</div>
			<div class="n">
				Manning's !$n=!$
				<input
					type="number"
					step="any"
					required
					bind:value={ns}
					on:input={update} />
				!$\small \mathsf &lcub; s/m^&lcub;1/3&rcub; &rcub; !$
			</div>
			<div class="g">
				!$g=!$
				<input
					type="number"
					step="any"
					required
					bind:value={gs}
					on:input={update} />
				!$\small \mathsf &lcub; m/s^2 &rcub; !$
			</div>
		</form>
	</section>

	<br />

	<!-- sdigs:
	<input type="number" required bind:value={sdigs} on:input={update} />
	<br />
	wdigs:
	<input type="number" required bind:value={wdigs} on:input={update} />
	<br /> -->

	<section class="result">
		<!-- //////////////////////// FROM y ///////////////////////// -->
		{#if specifyY}
			{#if !validS}
				<section>
					For a slope of !$0!$, there is !$0!$ flow. And, without flow, critical conditions are not defined.
				</section>
			{:else}
				<Sect type="subsection0" center>Normal (Uniform) Flow</Sect>
				<DDprops
					top="<span class='lowbold'>Flow Area:</span> 
						!$ \quad A = {sds(A)} \mathsf &lcub; \, m^2 &rcub; !$"
					drop="$$
						\begin&lcub;aligned&rcub;
							A &= b\cdot y \\
							&= {sds(b)}\textsf &lcub; m &rcub;\times {sds(y)}\textsf m\\
							&= {sdw(A)} \,\mathsf&lcub;m^2&rcub;
						\end&lcub;aligned&rcub;
						$$" />

				<DDprops
					top="<span class='lowbold'>Wetted Perimeter:</span>
						!$\quad P = {sds(P)}\, \mathsf m !$"
					drop="$$
						\begin&lcub;aligned&rcub;
							P &= b+2y \\
							&= {sds(b)}\textsf &lcub; m &rcub; +2\times {sds(y)}\textsf &lcub; m &rcub;\\
							&= {sdw(P)} \,\mathsf&lcub;m&rcub;
						\end&lcub;aligned&rcub;
						$$" />

				<DDprops
					top="<span class='lowbold'>Hydraulic Radius:</span>
					!$\quad R = {sds(R)}\, \mathsf m !$"
					drop="$$
					\begin&lcub;aligned&rcub;
						R &= A/P \\
						&= {sdw(A)}\; \mathsf&lcub; m^2 &rcub;/{sdw(P)}\;\textsf m \\
						&= {sdw(R)} \;\mathsf m
					\end&lcub;aligned&rcub;
					$$" />

				<DDprops
					top="<span class='lowbold'>Average Flow Velocity:</span>
					!$\quad v = {sds(v)}\, \mathsf &lcub; m/s &rcub; !$"
					drop="$$
					\begin&lcub;aligned&rcub;
						v &= \frac 1n R^&lbrace 2/3 &rcub;S^&lbrace 1/2 &rcub; \\
						&= \frac 1&lcub; {sds(n)}&rcub; ({sdw(R)})^&lbrace 2/3 &rcub;({sds(
						s
					)} / 100
					)^&lcub; 1/2 &rcub; \\
						&= {sdw(v)} \,\mathsf&lcub;m/s&rcub;
					\end&lcub;aligned&rcub;	
					$$" />

				<DDprops
					top="<span class='lowbold'>Flow Rate:</span>
					!$\quad Q = {sds(Q)}\,\mathsf &lcub; m^3\!/s &rbrace !$"
					drop="$$
					\begin&lcub;aligned&rcub;
						Q &= Av \\
						&= {sdw(A)}\;\mathsf&lcub;m^2&rcub; \times{sdw(v)}\;\mathsf&lcub;m/s&rcub; \\
						&= {sdw(Q)} \,\mathsf&lcub;m^3\!/s&rcub;
					\end&lcub;aligned&rcub;	
					$$" />

				<DDprops
					top="<span class='lowbold'>Specific Energy:</span> !$ \quad E = {sds(E)} \,\mathsf m !$"
					drop="$$
					\begin&lcub;aligned&rcub;
						Q &= Av \\
						&= {sdw(A)}\;\mathsf&lcub;m^2&rcub; \times{sdw(v)}\;\mathsf&lcub;m/s&rcub; \\
						&= {sdw(Q)} \,\mathsf&lcub;m^3\!/s&rcub;
					\end&lcub;aligned&rcub;	
					$$" />

				<DDprops
					top="<span class='lowbold'>Free Surface:</span> !$ \quad T = {sds(T)}\, \mathsf &lcub; m &rcub;  !$"
					drop="$$
					\begin&lcub;aligned&rcub;
							T &= b\\							
							&= {sds(T)}\,\mathsf m 
						\end&lcub;aligned&rcub;
					$$" />

				<DDprops
					top="<span class='lowbold'>Froude Number: </span> !$ \quad N_F = {sds(NF)}   !$"
					drop="$$
					\begin&lcub;aligned&rcub;
						N_F &=  \frac&lcub;v &rcub;&lcub;\sqrt&lcub;g(A/T)&rcub;&rcub; \\
						&=  \frac&lcub;{v}\,\mathsf&lcub; m/s &rcub;&rcub;&lcub;\sqrt&lcub;\left({g}\,\mathsf&lcub; m/s^2 &rcub;\right)({sdw(A)}\,\mathsf&lcub; m^2 &rcub;/{sds(T)}\,\mathsf m)&rcub;&rcub; \\
						&= {sdw(NF)}
					\end&lcub;aligned&rcub;
					$$" />

				<Sect type="subsection0" center>Critical Flow</Sect>
			{/if}
		{/if}
	</section>
</main>

<style>
	section.fig {
		margin: 1em auto 0 auto;
		position: relative;
		/* border: 1px solid green;		 */
	}
	/* section.fig div {
		border: 1px solid red;
	} */
	form label {
		padding-left: 0.1rem;
		padding-right: 0.1rem;
		position: absolute;
	}
	form input {
		width: 4.25rem;
		/* font-size: 0.8em; */
		padding-left: 0.1em;
		padding-right: 0.1em;
		cursor: pointer;
		font-family: 'Times New Roman', Times, serif;
		font-size: 1.05em;
		font-weight: 500;
		/* color: red; */
	}
	.lowerInputs {
		display: flex;
		justify-content: space-between;
		/* font-size: 0.9em; */
	}
	/* form.lowerInputs div input {
		font-size: 1.1em;
	} */
	label.b {
		top: 75.5%;
		left: 35%;
		background-color: #ccc;
		padding: 0 0.25em;
	}
	label.y {
		color: white;
		padding: 0.125em 0.25em;
		top: 40%;
		left: 45%;
		background-color: var(--fluids-primary);
		font-size: 1rem;
	}
	label.Q {
		/* color: white; */
		/* padding: 0.25em; */
		top: 40%;
		left: 35%;
		background-color: var(--fluids-primary);
	}
	div.n input {
		width: 6em;
	}

	.super {
		position: absolute;
		left: -5%;
	}
</style>
