<script>
	import Drop from '$lib/misc/Drop.svelte';
	import Card from '$lib/Card.svelte';
	import Sect from '$lib/numbering/Sect.svelte';
	import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';

	let popPercent = 80,
		pop = 3000000,
		icuPercent = 50,
		icu = 300,
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
		popPercent = Number(popPercent);
        pop = Number(pop);        
        icuPercent = Number(icuPercent);
        icu = Number(icu);

        numVaccinated = pop*popPercent/100;
        numVacICU = Number(icu)*icuPercent/100;
        likelyVac = numVaccinated / numVacICU;

        unvacPercent = 100 - popPercent;
        numUnvaccinated = unvacPercent*pop/100;
        icuUnvacPercent = 100-icuPercent;
        numUnVacICU = icuUnvacPercent * icu/100;
        likelyUnVac = numUnvaccinated / numUnVacICU;
        final = likelyVac / likelyUnVac;
        
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
					Suppose that you hear in the news that <Ki>50\%</Ki> of people in ICU are vaccinated. Do you
					wonder why the 'experts' want us all to get vaccinated? Then this calculator is for you.
				</p>

				<p>
					At first glance, it may seem that vaccination isn't helping at all; there are as many
					vaccinated patients as unvaccinated patients. But are we really just as likely to end up
					in the ICU if we do get vaccinated?
				</p>

				<p>
					The answer is: we don't know. We don't have enough information. To figure this out, we
					also need to know the proportion of the population that is vaccinated.
				</p>

				<p>
					Consider this scenario: <Ki>80\%</Ki> of the population are fully vaccinated and the fully
					vaccinated make up half of the patients in ICU. Then, <Ki>20\%</Ki> of the population (the
					unvaccinated) are taking up as much ICU space as the <Ki>80\%</Ki> of the population who are
					vaccinated. So the vaccinated do have protection; with these figures, it looks like you are
					four times more likely to end up in ICU if you are unvaccinated.
				</p>

				<p>
					Let's work with some real numbers, do the calculations and find the real level of
					protection. There is math here, but it's pretty simple.
				</p>
			</section>
		</Drop>
	</Card>

	<Card>
        <Drop>
            <section slot='top'>
                 <header>The Inputs</header>
            </section>
            <section slot='drop'>
                These default values were retrieved from ....

                <p>Feel free to enter your own numbers. Note that the only two figures required are the percentage of the population vaccinated and the percentage of vaccinated patients in ICU. The size of the population and the number of people in ICU do not affect the likelihood of ending up in ICU. See for yourself by randomly changing those values.</p>
            </section>
		   
        </Drop>
		<form on:submit|preventDefault={calculate}>
            <label class="pop">
				Size of the population:
				<input type="number" step="any" required bind:value={pop} on:input={processChange} />
			</label>
			<label class="popPercent">
				<Ki>\%</Ki> of the population vaccinated:
				<input type="number" step="any" required bind:value={popPercent} on:input={processChange} />
			</label>
			<label class="icu">
				Number of ICU patients:
				<input type="number" step="any" required bind:value={icu} on:input={processChange} />
			</label>
			<label class="icu">
				<Ki>\%</Ki> of ICU patients vaccinated:
				<input type="number" step="any" required bind:value={icuPercent} on:input={processChange} />
			</label>			
		</form>
	</Card>

	<Card>
		<header>The Calculations</header>

        <p>{popPercent}% of the population of {pop} are vaccinated, i.e. {numVaccinated} are vaccinated.</p>

        <p>{icuPercent}% of the {icu} in the ICU are vaccinated, i.e. {numVacICU} vaccinated patients are in the ICU.</p>

        <p>The chance of a vaccinated person ending up in ICU is {numVacICU}/{numVaccinated}, i.e. <strong>1 in {likelyVac}</strong>.</p>

        <p>{unvacPercent}% of the population of {pop} are unvaccinated, i.e. {numUnvaccinated} are not vaccinated.</p>

        {icuUnvacPercent}% of the {icu} in the ICU are not vaccinated, i.e. {numUnVacICU} unvaccinated patients are in the ICU.

        <p>The chance of a vaccinated person ending up in ICU is {numUnVacICU}/{numUnvaccinated}, i.e. <strong>1 in {likelyUnVac}</strong>.</p>

        Thus, an unvaccinated person is {likelyVac}/{likelyUnVac} = <strong>{final} times more likely</strong> than a vaccinated person to end up in ICU.


        
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
		width: 70%;
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
