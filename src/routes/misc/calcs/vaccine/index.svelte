<script>
	import Drop from '$lib/misc/Drop.svelte';
	import Card from '$lib/Card.svelte';
	import Sect from '$lib/numbering/Sect.svelte';

	let popPercent = 67.6,
		pop = 100000,
		icuPercent = 11.6,
		icu = 14.8,
		numVaccinated,
		numUnvaccinated,
		numVacICU,
		likelyVac,
		unvacPercent,
		icuUnvacPercent,
		numUnVacICU,
		likelyUnVac,
		final;

	const calculate = () => {
		popPercent = Number((popPercent).toPrecision(3));
		pop = Number(pop);
		icuPercent = Number((icuPercent).toPrecision(3));
		icu = Number(icu);

		numVaccinated = Math.round((pop * popPercent) / 100);
		numVacICU = (icu * icuPercent / 100).toPrecision(4);
		likelyVac = Math.round(numVaccinated / numVacICU);

		unvacPercent = (100 - popPercent).toPrecision(3);
		numUnvaccinated = unvacPercent * pop / 100;
		icuUnvacPercent = (100 - icuPercent).toPrecision(3);
		numUnVacICU = (icuUnvacPercent * icu / 100).toPrecision(4);
		likelyUnVac = Math.round(numUnvaccinated / numUnVacICU);
		final = (likelyVac / likelyUnVac).toPrecision(4);

		// numVaccinated = (pop * popPercent) / 100
		// numVacICU = (Number(icu) * icuPercent) / 100;
		// likelyVac = numVaccinated / numVacICU;

		// unvacPercent = 100 - popPercent;
		// numUnvaccinated = (unvacPercent * pop) / 100;
		// icuUnvacPercent = 100 - icuPercent;
		// numUnVacICU = (icuUnvacPercent * icu) / 100;
		// likelyUnVac = numUnvaccinated / numUnVacICU
		// final = likelyVac / likelyUnVac;
	};
	const processChange = () => {
		calculate();
	};

	calculate();
</script>

<main>
	<Sect type="chapter0">Vaccine Efficacy Calculator</Sect>
    

	<Card>
		<Drop>
			<section slot="top">
				<header>Who Is This Calculator For?</header>
			</section>
			<section slot="drop">
				<p>
					Suppose that you hear in the news that 50% of Covid deaths are vaccinated. Do you wonder
					why the 'experts' want us all to get vaccinated? Then this calculator is for you.
				</p>

				<p>
					At first glance, it may seem that vaccination isn't helping at all; there are as many
					vaccinated patients as unvaccinated patients. But are we really just as likely to die if
					we do get vaccinated?
				</p>

				<p>
					The answer is: we don't know. We don't have enough information. To figure this out, we
					also need to know the proportion of the population that is vaccinated.
				</p>

				<p>
					Consider this scenario: 80% of the population are fully vaccinated and the fully vaccinated make up half of Covid deaths. Then, 20% of the population (the
					unvaccinated) have the same number of deaths as the 80% of the population who are vaccinated. So the vaccinated do have protection; with these figures, it looks like you are four times more likely to die if unvaccinated.
				</p>

				<p>
					Let's work with some real numbers, do the calculations and find the real level of protection. There is math here, but it's pretty simple.
				</p>
			</section>
		</Drop>
	</Card>

     <p><strong>Note</strong>: Panels with<span class='triangle-down'></span>contain more information. Click the <span class='triangle-down'></span> on the panel.</p>

	<Card>
		<Drop>
			<section slot="top">
				<header>The Inputs</header>
			</section>
			<section slot="drop">
				These default values are for Switzerland and were retrieved from <a
					href="https://ourworldindata.org/covid-deaths-by-vaccination">Our World In Data</a
				>
				on 20th January, 2022. Scroll down to the data for Switzerland. Switzerland was chosen
				because the data were the most recent for a country comparable to Canada or Britain. The
				numbers are per 100,000 of the population.

				<p>
					Feel free to enter your own numbers. Note that the only two figures required are the
					percentage of the population vaccinated and the percentage of vaccinated deaths.
					The size of the population and the number of deaths do not affect the likelihood of dying. (See for yourself by randomly changing those values; small changes in value are due to number rounding)
				</p>
			</section>
		</Drop>
		<form on:submit|preventDefault={calculate}>
			<label class="pop">
				Size of the population:
				<input type="number" step="any" required bind:value={pop} on:input={processChange} />
			</label>
			<label class="popPercent">
				% of the population fully vaccinated:
				<input type="number" step="any" required bind:value={popPercent} on:input={processChange} />
			</label>
			<label class="icu">
				Number of Covid deaths:
				<input type="number" step="any" required bind:value={icu} on:input={processChange} />
			</label>
			<label class="icu">
				% of Covid deaths that were vaccinated:
				<input type="number" step="any" required bind:value={icuPercent} on:input={processChange} />
			</label>
		</form>
	</Card>

	<Card>
		<header>The Calculations</header>

		<p>
			{popPercent}% of the population of {pop} are vaccinated, i.e. {numVaccinated} are vaccinated.
		</p>

		<p>
			{icuPercent}% of the {icu} deaths were vaccinated, i.e. {numVacICU} vaccinated patients died.
		</p>

		<p>
			The likelihood of a vaccinated person dying is {numVacICU}/{numVaccinated}, i.e.
			<strong>1 in {likelyVac}</strong>.
		</p>

		<p>
			{unvacPercent}% of the population of {pop} are unvaccinated, i.e. {numUnvaccinated} are not vaccinated.
		</p>

		{icuUnvacPercent}% of the {icu} deaths were not vaccinated, i.e. {numUnVacICU} deaths were unvaccinated.

		<p>
			The likelihood of an unvaccinated person dying is {numUnVacICU}/{numUnvaccinated}, i.e.
			<strong>1 in {likelyUnVac}</strong>.
		</p>

		Thus, an unvaccinated person is {likelyVac}/{likelyUnVac} =
		<strong>{final} times more likely to die</strong>.
	</Card>

    
   
</main>

<style>
	main {
		width: 95%;
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
	}
	header {
		display: inline-block;
		color: var(--misc-primary);
		font-family: 'Covered By Your Grace', cursive;
		font-size: 2rem;
		-webkit-text-stroke-width: 0.02em;
		-webkit-text-stroke-color: black;
		margin: 0;
		padding: 0;
	}
	form {
		width: 90%;
		margin: 0 auto;
		text-align: right;
		/* border: 1px solid green; */
	}
	label {
		display: block;
		margin: 1em;
	}
	input[type='number'] {
		width: 7em;
	}
    .triangle-down {
		border-top: 0.7em solid var(--misc-primary);
		border-left: 0.6em solid transparent;
		border-right: 0.6em solid transparent;
		/* float: right; */
        vertical-align:-75%;
        margin: 0.5em;
       
	}

	@media (min-width: 640px) {
		main {
			width: 70%;
			/* background: pink; */
		}
	}
	@media (min-width: 768px) {
		main {
			width: 60%;
			/* background: yellow; */
		}
	}
	@media (min-width: 1024px) {
		main {
			width: 55%;
			/* background: purple; */
		}
	}
</style>
