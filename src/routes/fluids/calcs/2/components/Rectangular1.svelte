<script>
	import Intro from './Intro.svelte';
	import { fade } from 'svelte/transition';
	import Decimal from 'decimal.js';
	import Ki from '$lib/katex/Ki.svelte';
	import Sect from '$lib/numbering/Sect.svelte';
	import Drop from '$lib/fluids/Drop.svelte';
	import Card from '$lib/Card.svelte';

	let typeOfChannel = 'rectangular',
		specifyY = true,
		validS,
		//input strings
		sdigs = 4,
		wdigs = 6,
		bs = 3,
		b,
		ys = 1.75,
		y,
		QQs = 3.25,
		QQ,
		ss = 0.1,
		s,
		ns = 0.013,
		n,
		gs = 9.81,
		g;

	$: A = getArea();

	// document.addEventListener("input", processChange);
	// document.addEventListener("click", processChange);
	// document.addEventListener("change", processChange);

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
		// katexify();
	}, 10);
	const processChange = debounce(() => {
		console.log("processing Change " +b)
		calculate();
		// delayK();
	});
	const calculate = () => {
		// rounding mode: ROUND_HALF_UP (away from 0) = 4
		Decimal.rounding = 4;
		Decimal.precision = wdigs;
		// channel breadth
		b = Number(bs);
		b = b < 0 ? -b : b;
		b = b === 0 ? 1 : b;
		bs = sds(b);
		// flow depth
		y = Number(ys);
		y = y < 0 ? -y : y;
		y = y === 0 ? 1 : y;
		ys = sds(y);
		// Volume flow specified
		QQ = Number(QQs);
		QQ = QQ < 0 ? -QQ : QQ;
		QQ = QQ === 0 ? 1 : QQ;
		QQs = sds(QQ);
		// slope input string
		s = Number(ss);
		s = s < 0 ? -s : s;
		ss = sds(s); // for binding to the input field
		validS = s === 0 ? false : true;
		// roughness input string
		n = Number(ns);
		n = n <= 0 ? 0.01 : n;
		ns = Number(toSD(n, 3));
		// gravitational acceleration
		g = Number(gs);
		gs = Number(toSD(g, 4));

		if (validS) {
			calculateFromY();
			// calculateFromQ();
		}
	};
	const getArea = () => {
		return y * b;
	};
	const calculateFromY = () => {
		A = getArea();
	};

	const toSD = (number, sigdigs) => {
		return new Decimal(number).toSD(sigdigs).toPrecision(sigdigs);
	};
	const sdw = (num) => {
		return toSD(num, wdigs);
	};
	const sds = (num) => {
		return toSD(num, sdigs);
	};

	calculate();
</script>

<main>
	<section class="intro">
		<Intro {typeOfChannel} />
		<label class="yQlayout">
			<input type="radio" bind:group={specifyY} value={true} />
			<span>Specify <Ki>y</Ki></span>
		</label>

		<label class="yQlayout">
			<input type="radio" bind:group={specifyY} value={false} />
			<span>Specify <Ki>Q</Ki></span>
		</label>
	</section>

	<section class="fig">
		<img src="/images/rectangularChannelSectionQ.png" alt="rectangular channel section" />
		{#if specifyY}
			<img
				class="super"
				in:fade={{ duration: 1000 }}
				out:fade={{ duration: 1000 }}
				src="/images/rectangularChannelSectionY.png"
				alt="rectangular channel section by depth"
			/>
		{/if}

		<form on:change|preventDefault={processChange}>
			<label class="b" in:fade={{ duration: 500, delay: 250 }} out:fade={{ duration: 250 }}>
				<Ki>b=</Ki>
				<input 
					type="number" 
					step="any" 
					required 
					bind:value={bs} 
					on:change={processChange} />
				<Ki>\mathsf\[m\]</Ki>
			</label>

			{#if specifyY}
				<label class="y" in:fade={{ duration: 500, delay: 250 }} out:fade={{ duration: 250 }}>
					<Ki>y=</Ki>
					<input type="number" step="any" required bind:value={ys} on:input={processChange} />
					<Ki>\mathsf\[m\]</Ki>
				</label>
			{:else}
				<label class="Q" in:fade={{ duration: 500, delay: 250 }} out:fade={{ duration: 250 }}>
					<Ki>Q=</Ki>
					<input
						in:fade={{ duration: 1000 }}
						out:fade={{ duration: 1000 }}
						type="number"
						step="any"
						required
						bind:value={QQs}
						on:input={processChange}
					/>
					<Ki>\mathsf\[m^3\!/s\]</Ki>
				</label>
			{/if}
		</form>

		<form on:change|preventDefault={calculate} class="Sng">
			<label class="s">
				<Ki>S=</Ki>
				<input type="number" step="any" required bind:value={ss} on:input={processChange} />
				<Ki>\small \%</Ki>
			</label>
			<label class="n">
				<Ki>n=</Ki>
				<input type="number" step="any" required bind:value={ns} on:input={processChange} />
				<Ki>\small \mathsf\[ s/m^\[1/3\]\]</Ki>
			</label>
			<label class="g">
				<Ki>g=</Ki>
				<input type="number" step="any" required bind:value={gs} on:input={processChange} />
				<Ki>\small \mathsf \[ m/s^2 \]</Ki>
			</label>
		</form>
	</section>

	<section>
		{#if specifyY}
			<br /><br />
			<Sect type="section0" center>Normal Flow, Given Y</Sect>
			<Card>
				<Drop>
					<section slot="top">
						Flow Area: <Ki>A={sds(getArea())}\;\mathsf\[m^2\]</Ki><br/>
						{A}
					</section>
					<section slot="drop">now you see me</section>
				</Drop>
			</Card>
		{:else}
			<p><Sect type="section0" center>Normal (Uniform) Flow, Given Q</Sect></p>
		{/if}
	</section>
</main>

<style>
	.intro {
		width: 85%;
		margin: 2em auto 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
		text-align: center;
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	label.yQlayout input[type='radio'] {
		opacity: 0;
		width: 0;
		height: 0;
	}
	label input[type='radio'] + *::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.3em;
		border-radius: 0.3em;
		border-style: solid;
		border-width: 0.2em;
		border-color: var(--fluids-primary);
	}
	label input[type='radio']:checked + *::before {
		background: var(--fluids-primary);
		border-width: 0.2em;
		content: 'x';
		font-weight: bold;
	}
	img.super {
		position: absolute;
		left: 0;
	}
	form input {
		width: 4rem;
		font-size: 1rem;
		padding-left: 0.1rem;
		padding-right: 0.1rem;
		cursor: pointer;
	}
	form label {
		position: absolute;
	}
	form.Sng label {
		position: relative;
	}
	form label.y {
		color: white;
		padding: 0.25em;
		top: 40%;
		left: 53%;
		background-color: var(--fluids-primary);
		padding: 0.5em;
	}
	form label.b {
		top: 71%;
		left: 40%;
		background-color: #ccc;
		padding: 0.5em;
	}
	form label.Q {
		top: 40%;
		left: 38%;
		background-color: var(--fluids-primary);
		padding: 0.5em;
	}
	form.Sng {
		/* border: 1px solid green; */
		margin-top: -1em;
		display: flex;
		/* flex-direction: column; */
		justify-content: space-between;
		width: 90%;
		margin: -1em auto 0 auto;
	}
	section.fig {
		margin: 1em auto 0 auto;
		position: relative;
	}

	@media (min-width: 640px) {
		main {
			width: 85%;
			/* border: 1px solid green; */
			margin: 0 auto;
		}
	}
	@media (min-width: 768px) {
		main {
			width: 70%;
			/* border: 1px solid red; */
			margin: 0 auto;
		}
	}
	@media (min-width: 1100px) {
		main {
			width: 60%;
			/* border: 1px solid purple; */
			margin: 0 auto;
		}
	}
</style>
