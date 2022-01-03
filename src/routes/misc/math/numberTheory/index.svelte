<script>
	import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';
	import Card from '$lib/Card.svelte';
</script>

<main>
	<header>Integers</header>

	<Card>
		<p>Number theory is the study of integers (the 'whole' numbers):</p>

		<Kd>\mathbb\[Z\]=\lbrace \ldots, -4, -3, -2, -1, 0, 1, 2, 3, 4, \ldots</Kd>

		<aside>The <Ki>\mathbb\[Z\]</Ki> comes from the German word for numbers: <Ki>\mathbb\[ Z \]</Ki>ahlen. 'Integer' is from the Latin for 'whole.'</aside>

		<p>The natural numbers are the non-negative integers:</p>

		<Kd>\mathbb\[ N \] = \lbrace 1, 2, 3, 4, \ldots	\rbrace</Kd>		
	</Card>

	<p class='subHeader'>Addition and Multiplication</p>

	<Card>
		<p>Addition and multiplication are obvious operations on these two sets:</p>
		
		<Kd >
			\forall\; a, b \in \mathbb\[Z\], \quad a+b\in\mathbb\[Z\], \\
			\forall\; a, b \in \mathbb\[Z\], \quad a\cdot b\in\mathbb\[Z\]
		</Kd>
		<Kd>
			\forall\; a, b \in \mathbb\[N\], \quad a+b\in\mathbb\[N\], \\
			\forall\; a, b \in \mathbb\[N\], \quad a\cdot b\in\mathbb\[N\]		
		</Kd>

		<p>Thus, <Ki>\mathbb\[Z\]</Ki> and <Ki>\mathbb\[N\]</Ki> are <strong>closed</strong> under the operations of addition and multiplication. (That means that the additive result and the multiplicative result for all elements in the sets are themselves contained in the corresponding <Ki>\mathbb\[Z\]</Ki> or <Ki>\mathbb\[N\]</Ki>.)</p>

	</Card>

	<Card>		
		<p>For all <Ki>a, b, c \in \mathbb\[Z\] \textsf\[ or \]\mathbb\[N\]</Ki>, the following are true:</p>

		<ol>
			<li>Commutativity
				<Kd>
					\begin\[aligned\]
						a+b &= b+a \\
						a\cdot b &= b\cdot a 
					\end\[aligned\]
				</Kd>
			</li>
			<li>Associativity
				<Kd>
					\begin\[aligned\]
						\lparen a+b \rparen +c &= a+\lparen b+c \rparen \\
						\lparen a\cdot b\rparen\cdot c &= a\cdot \lparen b \cdot c \rparen 
					\end\[aligned\]
				</Kd>
			</li>
			<li>Distributivity
				<Kd>
					a\cdot\lparen b+c\rparen = a\cdot b + a\cdot c
				</Kd>
			</li>
		</ol> 		
	</Card>	

	<p class='subHeader'>Subtraction and Division</p>

	<Card>
		<p>Set <Ki>\mathbb\[Z\]</Ki> contains <strong>identity</strong> elements for the operations of addition and multiplication, <Ki>0</Ki> and <Ki>1</Ki> respectively.</p>

		<Kd>
			\begin\[alignat*\] 
				\forall a\in \mathbb\[Z\],& a+0 = 0+a = a \\
				\forall a\in \mathbb\[Z\],& a\cdot 1 = 1\cdot a = a
			\end\[alignat*\]
		</Kd>

		<p><Ki>\mathbb\[Z\]</Ki> (but not <Ki>\mathbb\[N\]</Ki>) has an additive inverse:</p>

		<Kd>			
				\forall a\in \mathbb\[Z\],\quad a+(-a) = 0
		</Kd>

		Only the element <Ki>1</Ki> has a multiplicative inverse.

		Subtraction is an operation on <Ki>\mathbb\[Z\]</Ki> while division is defined only for specific pairs of integers:

		<Kd>
			\begin\[gather*\]
				a-b = a+(-b) \quad\forall\; a, b \in \mathbb\[Z\] \\
				a/b = c \Lrarr a=b\cdot c
			\end\[gather*\]
		</Kd>
	</Card>

	<p class='subHeader'>Three Principles:</p>

	<Card>
		<p><strong>The Well Ordering Principle</strong>:</p>

		<p class="center">Every non-empty set of positive integers has a least element.</p>

		<p>(<Ki>\mathbb\[N\]</Ki> is well-ordered but <Ki>\mathbb\[Z\]</Ki> is not.)</p>

		<p>This principle is taken as an axiom and is not proved.</p>

	</Card>

	<Card>
		<p><strong>The Pigeonhole Principle</strong>:</p>

		<p class="center">If <Ki>s</Ki> objects are placed in <Ki>k</Ki> boxes, with <Ki>s>k</Ki>, then at least one box must contain more than one object.</p>

		<p><i>Proof:</i> We prove by contradiction. Suppose that each box contains one object. Then there are at most <Ki>k</Ki> objects. But there are <Ki>s>k</Ki> objects, so there is a contradiction and each box cannot contain at most one object.</p>

	</Card>

	<Card>
		<p><strong>The First (or Weak) Principle of Mathematical Induction</strong>:</p>

		 <p>If a set of positive integers has the property that, when it contains the integer <Ki>k</Ki>, it must also contain <Ki>k+1</Ki>, and if this set also contains <Ki>1</Ki>, then it must be the set of all positive integers. </p>

		<p>In other words, a property concerning the positive integers that is true for <Ki>n=1</Ki>, and is true for the integer <Ki>n+1</Ki> whenever it is true for integer <Ki>n</Ki>, must be true for all positive integers.</p>

		<p><i><strong>Proof</strong></i>: Let <Ki>S</Ki> be the set of positive integers that contains <Ki>1</Ki> and also contains <Ki>k+1</Ki> whenever it contains <Ki>k</Ki>. Furthermore, assume that <Ki>S</Ki> is <strong>not</strong> the set of all positive numbers. It follows that there must be some positive integers that are not in <Ki>S</Ki>, and these integers must have a least element, <Ki>\alpha</Ki> say (from the Well-Ordering Principle). Then, <Ki>\alpha \ne 1</Ki> since <Ki>1 \in S</Ki>. <Ki>\alpha</Ki> is the least member not in <Ki>S</Ki> so <Ki>\alpha-1 \in S</Ki>. But, if <Ki>\alpha-1 \in S</Ki>, then <Ki>\alpha \in S</Ki> and there is a contradiction. Therefore, our assumption that <Ki>S</Ki> is not the set of all positive numbers must be false. 

	</Card>


	<p class='subHeader'> Induction Examples</p>

	<Card>
		<p>
			<i><strong>Exercise 1</strong></i>: Show that
			<Ki>n\lt 3^n</Ki> for all positive integers <Ki>n</Ki>.
		</p>

		<p>
			<i><strong>Proof</strong></i>: First, verify the base case (<Ki>n=1</Ki>)
		</p>

		<Kd>1 \lt 3 = 3^1 \quad\color\[green\]\[\Large\checkmark\]</Kd>

		<p>Now, assume that it is true for some <Ki>n=k</Ki>. That is,</p>
		<Kd>k \lt 3^k</Kd>

		<p>
			Given that the assumption is true for <Ki>n=k</Ki>, it remains to show
			that it is then true for <Ki>n=k+1</Ki>. That is, we must show that <Ki
				>k\lt 3^k\Rightarrow k+1 \lt 3^\[k+1\]</Ki>
		</p>

		<Kd>
			\begin\[aligned\] 
				k\lt 3^k &\Rightarrow 3\cdot k \lt 3\cdot 3^k \\ 
				&\Rightarrow 3k \lt 3^\[k+1\] 
			\end\[aligned\]		
		</Kd> 

		 <Kd>\textsf\[But \] k+1\lt 3k \;\forall k\in \mathbb\[N\] \textsf\[ so \] k+1 \lt 3^\[k+1\] \textsf\[ as required.\] \qquad\color\[green\]\[\blacksquare\]</Kd>		
	</Card>

	<Card>
		<p><i><strong>Example 2</strong></i>: Prove that <Kd>\sum_\[j=1\]^n j^2= \frac\[n(n+1)(2n+1)\]\[6\]</Kd></p>

		<p><i><strong>Proof</strong></i>: First, verify the base case (<Ki>n=1</Ki>)</p>

		<Kd>\sum_\[j=1\]^1\; j^2 = 1^2 = \frac\[1(1+1)(2\cdot 1+1)\]\[6\]\quad\color\[green\]\[\Large\checkmark\]</Kd>

		<p>Now, assume that it is true for some <Ki>n=k</Ki>. That is, </p>
		<Kd>\sum_\[j=1\]^k j^2= \frac\[k(k+1)(2k+1)\]\[6\]</Kd>

		<p>Given that the assumption is true for <Ki>n=k</Ki>, it remains to show that it is then true for <Ki>n=k+1</Ki>.</p>

		<Kd>
			\begin\[aligned\]
				\sum_\[j=1\]^\[k+1\] j^2 &= \sum_\[j=1\]^\[k\] j^2 + (k+1)^2 \\
				&= \frac\[k(k+1)(2k+1)\]\[6\] + (k^2+2k+1) \\
				&= \frac\[(k^2+k)(2k+1)\]\[6\] + \frac\[(6k^2+12k+6)\]\[6\] \\
				&= \frac\[(2k^3+3k^2+k)+(6k^2+12k+6)\]\[6\] \\
				&= \frac\[2k^3+9k^2+13k+6\]\[6\] \\
				&= \frac\[(k+1)(2k^2+7k+6)\]\[6\] \\
				&= \frac\[(k+1)(k+2)(2k+3)\]\[6\] \\
				&= \frac\[(k+1)\left((k+1)+1\right)(2(k+1)+1)\]\[6\] \qquad \color\[green\]\[\blacksquare\]			
			\end\[aligned\]</Kd>
	</Card>

	<Card>
		<p><i><strong>Example 3</strong></i>: Prove that <Kd>n! \le n^n\;\forall n \in \mathbb\[N\]</Kd></p>

		<p><i><strong>Proof</strong></i>: First, verify the base case (<Ki>n=1</Ki>)</p>

		<Kd>1! = 1\le 1^1=1 \quad\color\[green\]\[\Large\checkmark\]</Kd>

		<p>Now, assume that it is true for some <Ki>n=k</Ki>. That is, </p>
		<Kd>k! \le k^k</Kd>

		<p>We need to show that <Ki>k! \le k^k \Rightarrow (k+1)! \le (k+1)^\[k+1\]</Ki></p>
		<Kd>
			\begin\[aligned\]
				k! \le k^k &\Rightarrow (k+1)k! \le (k+1)k^k \\
				&\Rightarrow (k+1)! \le (k+1)(k+1)^k\\
				&\Rightarrow (k+1)! \le (k+1)^\[k+1\]\qquad \color\[green\]\[\blacksquare\]			
			\end\[aligned\]</Kd>
	</Card>

	<Card>
		<p><i><strong>Example 4</strong></i>: Prove that <Kd>\sum_\[j=1\]^n (2j-1) = n^2\;\forall n \in \mathbb\[N\]</Kd></p>

		<p>That is, <Kd>1+3+5+\ldots +(2n-1) = n^2</Kd></p>

		<p><i><strong>Proof</strong></i>: First, verify the base case (<Ki>n=1</Ki>)</p>

		<Kd>\sum_\[j=1\]^1 (2j-1) = 2(1)-1 = 1 = 1^2 \quad\color\[green\]\[\Large\checkmark\]</Kd>

		<p>Now, assume that it is true for some <Ki>n=k</Ki>. That is, </p>
		<Kd>\sum_\[j=1\]^k (2j-1) = k^2</Kd>

		<p>We need to show that <Kd>\sum_\[j=1\]^k (2j-1) = k^2 \Rightarrow \sum_\[j=1\]^\[k+1\] (2j-1) = (k+1)^2</Kd> So,</p>
		<Kd>
			\begin\[aligned\]
				\sum_\[j=1\]^k (2j-1) &= k^2 \\  &\Rightarrow \sum_\[j=1\]^k (2j-1)+(2k+1) = k^2+(2k+1) \\
				 &\Rightarrow \sum_\[j=1\]^k (2j-1)+(2(k+1)-1) = (k+1)^2 \\
				 &\Rightarrow \sum_\[j=1\]^\[k+1\] (2j-1) = (k+1)^2 \qquad \color\[green\]\[\blacksquare\]			
			\end\[aligned\]</Kd>
	</Card>

	<Card>
		<p><i><strong>Example 5</strong></i>: Prove that <Ki>\forall n \in \mathbb\[N\],\; n(n^2-1)(3n+2)</Ki> is divisible by <Ki>24</Ki>.</p>

		<p><i><strong>Proof</strong></i>: First, verify the base case (<Ki>n=1</Ki>):</p>

		<Ki>\qquad \ 1(1^2-1)(3\cdot 1+2)=0=24\cdot 0</Ki> so the base case is satisfied. <Ki>\quad\color\[green\]\[\Large\checkmark\]</Ki>

		<p>Now, assume that it is true for some <Ki>n=k</Ki>. That is, </p>
		<Kd>
			\begin\[aligned\]
				k(k^2-1)(3k+2) &= (k-1)k(k+1)(3k+2) \\
				&= 24m \textsf\[ for some \] m \in \mathbb\[N\]
			\end\[aligned\]
		</Kd>

		<p>Using this assumption, we need to show that, for <Ki>n=k+1</Ki>, <Kd>k(k+1)(k+2)\left(3(k+1)+2\right) \textsf\[ is divisible by \] 24.</Kd></p>

		<p>So,</p>
		<Kd>
			\begin\[aligned\]
				k(k+1)&(k+2)(3k+5) \\
				&=k(k+1)(k-1)(3k+5)+ 3\cdot k(k+1)(3k+5) \\
				&=k(k+1)(k-1)(3k+2)+ 3\cdot k(k+1)(3k+5) \\				
				& \qquad\qquad\qquad\qquad +  3\cdot k(k+1)(k-1) \\
				&=24m+ 3k(k+1)\big[(3k+5)+(k-1)\big] \\				
				&=24m+ 3k(k+1)\big[4(k+1)\big] \\				
				&=24m+ 12k(k+1)^2
			\end\[aligned\] 
		</Kd>	

		<p>Now, one of <Ki>k</Ki> or <Ki>k+1</Ki> must be even. Thus, <Ki>k(k+1)^2</Ki> is even, and <Ki>k(k+1)^2=2m' \textsf\[ for some \] m' \in \mathsf\[N\]</Ki>. Then,</p>
				
		<Kd>
			\begin\[aligned\]
				k(k+1)(k+2)(3k+5) &=24m+ 12\cdot 2m' \\
				&= 24(m+m')	\\ 
				&\Rightarrow 24 | k(k+1)(k+2)(3k+5)\quad\color\[green\]\[\Large\checkmark\]	
			
			\end\[aligned\] 
		</Kd>
		
		We have shown that assuming the hypothesis to be true for <Ki>n=k</Ki> implies that it is true for <Ki>n=k+1</Ki>, so by the Principle of Mathematical Induction: <br/> 
		
		<Kd>\forall n \in \mathbb\[N\],\; n(n^2-1)(3n+2) \textsf\[ is divisible by \]24\qquad \color\[green\]\[\blacksquare\]</Kd>
		
	</Card>

</main>



<style>
	main {
		width: 95%;
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
	}
	header {
		margin: 0;
		letter-spacing: 0.05em;
		color: var(--misc-primary);
		font-family: "Covered By Your Grace", cursive;
		font-size: 350%;
		text-decoration: underline;
		text-decoration-color: var(--misc-primary);
		-webkit-text-stroke-width: 0.02em;
		-webkit-text-stroke-color: black;
	}
	.subHeader {
		margin: 0;
		margin-bottom: -0.5em;
		color: var(--misc-primary);
		font-family: "Covered By Your Grace", cursive;
		letter-spacing: 0.05em;
		-webkit-text-stroke-width: 0.02em;
		-webkit-text-stroke-color: black;
		font-size: 225%;
	}
	.center {
		/* margin: 0 auto; */
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			width: 85%;
			/* background: pink; */
		}
	}
	@media (min-width: 768px) {
		main {
			width: 70%;
			/* background: yellow; */
		}
	}
	@media (min-width: 1024px) {
		main {
			width: 60%;
			/* background: purple; */
		}
	}
	
</style>
