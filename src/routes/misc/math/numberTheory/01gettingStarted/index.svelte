<script>
    import Drop from '$lib/misc/Drop.svelte';
    import Card from '$lib/Card.svelte';
    import Sect from '$lib/numbering/Sect.svelte'
    import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';
	import Env from '$lib/numbering/Env.svelte';

</script>

<main>
    <Sect type='title'>Number Theory</Sect>
    <Sect type='chapter'>Getting Started</Sect>

    <Card>
        A little terminology:
        <ul>
            <li>A <strong>theorem</strong> is an important result.</li>
            <li>A <strong>proposition</strong> is less important than a theorem.</li>
            <li>A <strong>lemma</strong> is a small result, generally proved before its use in a theorem.</li>
            <li>A <strong>corollary</strong> is a small result, generally a consequence of a recently proved theorem.</li>
        </ul>
        These distinctions are necessarily subjective.
    </Card>

    <Sect type='section'>Integers and Counting</Sect>

    <Card>
		<p>Number theory is the study of integers (the 'whole' numbers):</p>

		<Kd>\mathbb\[Z\]=\lbrace \ldots, -4, -3, -2, -1, 0, 1, 2, 3, 4, \ldots \rbrace</Kd>

		<aside><Ki>\mathbb\[Z\]</Ki> comes from the German word for numbers: <Ki>\mathbb\[ Z \]</Ki>ahlen. 'Integer' is from the Latin for 'whole.'</aside>

		<p>The natural numbers are the non-negative integers:</p>

		<Kd>\mathbb\[ N \] = \lbrace 0, 1, 2, 3, 4, \ldots	\rbrace</Kd>	
        
        <Env type='remark'>Many number theorists omit <Ki>0</Ki> from the natural numbers. We do not.</Env>
	</Card>

    <Card>
        Not all number are integers. If we need to round such numbers to integers, we use <strong>floor</strong> or <strong>ceiling</strong> functions. The floor of a number is the integer less than or equal to the number: the floor of <Ki>3.142</Ki> is <Ki>3</Ki>. The ceiling of a number is the nearest integer greater than or equal to the number: the ceiling of <Ki>1.414</Ki> is <Ki>2</Ki>. We write
    
        <Kd>
            \lfloor 3.142 \rfloor = 3, \quad \lceil 1.414 \rceil = 2 \\~\\
            \lfloor 42.0 \rfloor = 42, \quad \lceil 42.0 \rceil = 42
        </Kd>
    </Card>
    
    <Card>
        <Drop>
            <section slot='top'>
                <Env type='proposition' title='Counting Multiples'>
                    Let <Ki>n</Ki> and <Ki>m</Ki> be positive integers. Then the number of multiples of <Ki>m</Ki> between <Ki>1</Ki> and <Ki>n</Ki> is <Ki>\lfloor \frac nm \rfloor</Ki>. 
                </Env>
            </section>
            <section slot='drop'>
                <Env type='proof'><Ki>m</Ki> is the first multiple of <Ki>m</Ki>, <Ki>2m</Ki> is the second multiple, <Ki>3m</Ki> is the third multiple, <Ki>\ldots</Ki>, <Ki>n</Ki> is the <Ki>\frac nm</Ki>-th multiple. But <Ki>\frac nm</Ki> may contain a partial multiple that should not be counted so we round down to <Ki>\lfloor \frac nm \rfloor</Ki></Env>
            </section>
        </Drop>
    </Card>

    <Card>
        <Env type='example'>
            The number of multiples of <Ki>m=3</Ki> between <Ki>1</Ki> and <Ki>17</Ki> is <Ki>\lfloor \frac\[17\]\[3\] \rfloor = 5</Ki>. <Ki>(\text\[They are \]3, 6, 9, 12 \text\[ and \] 15.)</Ki>
        </Env>
        <Env type='example'>
            The number of multiples of <Ki>m=4</Ki> between <Ki>1</Ki> and <Ki>24</Ki> is <Ki>\lfloor \frac\[24\]\[4\] \rfloor = 6</Ki>. <Ki>(\text\[They are \]4, 8, 12, 16, 20 \text\[ and \] 24.)</Ki>
        </Env>
        <Env type='remark'>
            When we use the term 'between,' we mean it inclusively. The numbers between <Ki>21</Ki> and <Ki>23</Ki> are <Ki>21, 22 \text\[ and \] 23</Ki>.
        </Env>
        <Env type='example'>
            The number of multiples of <Ki>m=7</Ki> between <Ki>1</Ki> and <Ki>1024</Ki> is <Ki>\lfloor \frac\[1024\]\[7\] \rfloor = 146</Ki>. 
        </Env>
    </Card>
        
   

    <Card>
        <Drop>
            <section slot='top'>
                <Env type='proposition' title='Counting Squares'>
                    Let <Ki>n</Ki> be a positive integer. The number of squares between <Ki>1</Ki> and <Ki>n</Ki> is <Ki>\lfloor\sqrt\[n\]\rfloor</Ki>.
                </Env>
            </section>
            <section slot='drop'>
                <Env type='proof'>
                    Create a table as follows:
                    <Kd>
                        \begin\[array\] \[r:lllll\]
                            \textsf\[Squares\] & 1 & 4 & 9 & 16 & \cdots & \lfloor\sqrt\[n\]\rfloor^2 \\\\
                            \textsf\[Number-th\] & 1^\text\[st\]\quad & 2^\text\[nd\]\quad & 3^\text\[rd\]\quad& 4^\text\[th\] & \cdots & \lfloor\sqrt\[n\]\rfloor\text\[-th\]
                        \end\[array\]
                    </Kd>
                    And the number of entries between the first and <Ki>\lfloor\sqrt\[n\]\rfloor\text\[-th\]</Ki> is <Ki>\lfloor\sqrt\[n\]\rfloor</Ki>.
                </Env>
                 <Env type='remark'>
                    <Ki>\lfloor\sqrt\[n\]\rfloor^2</Ki> is the last square before (or including) <Ki>n</Ki>.
                </Env>
            </section>
        </Drop>
    </Card>

    <Card>    
        <Env type='example'>
            The number of squares between <Ki>1</Ki> and <Ki>39</Ki> is <Ki>\lfloor \sqrt\[39\]\rfloor=6</Ki>. <Ki>(\text\[They are \]1, 4, 9, 16, 25 \text\[ and \] 36.)</Ki>
        </Env>
        <Env type='example'>
            Find the number of squares between <Ki>100</Ki> and <Ki>200</Ki>.
        </Env>
        <Env type='solution'>
            The number of squares between <Ki>100</Ki> and <Ki>200</Ki> is the number of squares between <Ki>1</Ki> and <Ki>200</Ki> <strong>minus</strong> the number of squares between <Ki>1</Ki> and <Ki>99.</Ki> (Note that if we subtract the number of squares between <Ki>1</Ki> and <Ki>100</Ki>, where <Ki>100</Ki> is a square, we are removing one of the squares that we should be counting between <Ki>100</Ki> and <Ki>200</Ki>.)
            <Kd> \lfloor \sqrt\[200\]\rfloor - \lfloor \sqrt\[99\]\rfloor = 14-9=5</Kd>
            The squares are <Ki>100, 121, 144, 156 \text\[ and \] 169</Ki>.
        </Env>
    </Card>

    <Card>
        <Drop>
            <section slot='top'>
                <Env type='proposition' title='Counting Digits'>If <Ki>n</Ki> is a positive integer, then the number of digits in the decimal representation of <Ki>n</Ki> is <Ki>\[ \lfloor \log_\[10\](n) \rfloor + 1\]</Ki></Env>
            </section>
            <section slot='drop'>
                <Env type='remark'>
                    This is not a proof, more a less rigorous justification of the proposition.

                    <p>(I remember the following about logarithms from my schooling in the 1960s, the pre-calculator age when we schoolkids spent countless hours performing multiplication and division with the aid of logarithm and antilogarithm tables. To this day, the logarithms for <Ki>2</Ki> and <Ki>3</Ki> &mdash; <Ki>0.3010</Ki> and <Ki>0.4471</Ki> &mdash; are indelibly printed in my mind, to the four digits that we were required to use.)</p>

                    <p>Integers in the range <Ki>0-9</Ki> are of the form <Ki>0.abcd\ldots</Ki> where the <Ki>0</Ki> is the 'characteristic' of the logarithm of the number and the <Ki>a, b, c, d, \ldots</Ki> are the decimal digits of the 'mantissa' of the logarithm. Integers in the range <Ki>0-9</Ki> have a characteristic of <Ki>0</Ki>; integers in the range <Ki>10-99</Ki> have a characteristic of <Ki>1</Ki>; integers in the range <Ki>100-999</Ki> have a characteristic of <Ki>3</Ki>; and so on.</p>

                    Integers in the range <Ki>10^0-(10^1-1)</Ki> have characteristic <Ki>0</Ki> and take a single digit to express in decimal representation; integers in the range <Ki>10^1-(10^2-1)</Ki> have characteristic <Ki>1</Ki> and take <Ki>2</Ki> digits; integers in the range <Ki>10^2-(10^3-1)</Ki> have characteristic <Ki>2</Ki> and take <Ki>3</Ki> digits. In general, integers in the range <Ki>\[10^a-(10^\[a+1\]-1)\]</Ki> have characteristic <Ki>a</Ki> and take <Ki>a+1</Ki> digits to express in digital representation. Here <Ki>a = \lfloor \log_\[10\]n \rfloor</Ki> and the result follows.
                </Env>
            </section>
        </Drop>
    </Card>

    <Card>
        <Env type='proposition' title='Counting Bits'>
            If <Ki>n</Ki> is a positive integer, then the number of digits in the binary representation of <Ki>n</Ki> is <Ki>\[ \lfloor \log_\[2\](n) \rfloor + 1\]</Ki>
        </Env>
    </Card>
           
    <Sect>Division</Sect>  

    <Card>
        <Drop>
            <section slot='top'>
                 <Env type='proposition' title='Division with Remainder'>
                Let a and b be integers, with b positive. Then there exist integers q and r satisfying
                <Kd>a=q\cdot b+r \textit\[ and \] 0\le r \lt b</Kd>
            </Env>
            </section>
           <section slot='drop'>
               <Env type='proof'>
                   
               </Env>
           </section>
        </Drop>
    </Card>
   
</main>


<style>
    main:first-of-type {
		counter-reset: thm defn chapter 0 section example exercise;
	}
	main {
		width: 95%;
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
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