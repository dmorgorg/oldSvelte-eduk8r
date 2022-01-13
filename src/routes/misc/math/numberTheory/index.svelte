<script>
	import Ki from '$lib/katex/Ki.svelte';
	import Kd from '$lib/katex/Kd.svelte';
	import Card from '$lib/Card.svelte';
	import Env from '$lib/numbering/Env.svelte';
	import Sect from '$lib/numbering/Sect.svelte';
</script>

<main>
	

	<!-- <Sect type="chapter">The Integers</Sect>

	<Card>
		<p>Number theory is the study of integers (the 'whole' numbers):</p>

		<Kd>\mathbb\[Z\]=\lbrace \ldots, -4, -3, -2, -1, 0, 1, 2, 3, 4, \ldots \rbrace</Kd>

		<aside>The <Ki>\mathbb\[Z\]</Ki> comes from the German word for numbers: <Ki>\mathbb\[ Z \]</Ki>ahlen. 'Integer' is from the Latin for 'whole.'</aside>

		<p>The natural numbers are the non-negative integers:</p>

		<Kd>\mathbb\[ N \] = \lbrace 1, 2, 3, 4, \ldots	\rbrace</Kd>		
	</Card>

	<Sect>Addition and Multiplication</Sect>

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

	

	<Sect>Subtraction and Division</Sect>

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

	

	<Sect>Induction Examples</Sect> -->

	<!-- <Card>
		<Env type='example'>
			Show that <Ki>n\lt 3^n</Ki> for all positive integers <Ki>n</Ki>.
		</Env>

		<Env type='solution'>
			First, verify the base case (<Ki>n=1</Ki>)
				
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
		</Env>		
	</Card>

	<Card>
		<Env type='example'>Prove that <Kd>\sum_\[j=1\]^n j^2= \frac\[n(n+1)(2n+1)\]\[6\]</Kd></Env>

		<Env type='solution'>
			First, verify the base case (<Ki>n=1</Ki>)
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
				\end\[aligned\]
			</Kd>
		</Env>		
	</Card>

	<Card>
		<Env type='example'> Prove that <Kd>n! \le n^n\;\forall n \in \mathbb\[N\]</Kd></Env>

		<Env type='solution'> First, verify the base case (<Ki>n=1</Ki>)

			<Kd>1! = 1\le 1^1=1 \quad\color\[green\]\[\Large\checkmark\]</Kd>

			<p>Now, assume that it is true for some <Ki>n=k</Ki>. That is, </p>
			<Kd>k! \le k^k</Kd>

			<p>We need to show that <Ki>k! \le k^k \Rightarrow (k+1)! \le (k+1)^\[k+1\]</Ki></p>
			<Kd>
				\begin\[aligned\]
					k! \le k^k &\Rightarrow (k+1)k! \le (k+1)k^k \\
					&\Rightarrow (k+1)! \le (k+1)(k+1)^k\\
					&\Rightarrow (k+1)! \le (k+1)^\[k+1\]\qquad \color\[green\]\[\blacksquare\]			
				\end\[aligned\]
			</Kd>
		</Env>
	</Card>

	<Card>
		<Env type='example'> Prove that <Kd>\sum_\[j=1\]^n (2j-1) = n^2\;\forall n \in \mathbb\[N\]		</Kd>

			<p>That is, <Kd>1+3+5+\ldots +(2n-1) = n^2</Kd></p>
		</Env>

		<Env type='solution'> First, verify the base case (<Ki>n=1</Ki>)

			<Kd>\sum_\[j=1\]^1 (2j-1) = 2(1)-1 = 1 = 1^2 \quad\color\[green\]\[\Large\checkmark\]</Kd>

			<p>Now, assume that it is true for some <Ki>n=k</Ki>. That is, </p>
			<Kd>\sum_\[j=1\]^k (2j-1) = k^2</Kd>

			<p>We need to show that <Kd>\sum_\[j=1\]^k (2j-1) = k^2 \Rightarrow \sum_\[j=1\]^\[k+1\] (2j-1) = (k+1)^2</Kd> So,</p>
			<Kd>
				\begin\[aligned\]
					\sum_\[j=1\]^k (2j-1) &= k^2 \\  &\Rightarrow \sum_\[j=1\]^k (2j-1)+(2k+1) = k^2+(2k+1) \\
					&\Rightarrow \sum_\[j=1\]^k (2j-1)+(2(k+1)-1) = (k+1)^2 \\
					&\Rightarrow \sum_\[j=1\]^\[k+1\] (2j-1) = (k+1)^2 \qquad \color\[green\]\[\blacksquare\]			
				\end\[aligned\]
			</Kd>
		</Env>
	</Card>

	<Card>
		<Env type='example'> Prove that <Ki>\forall n \in \mathbb\[N\],\; n(n^2-1)(3n+2)</Ki> is divisible by <Ki>24</Ki>.</Env>
		<br/>
		<Env type='proof'> First, verify the base case (<Ki>n=1</Ki>):<br/>

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
			
			<Kd>\forall n \in \mathbb\[N\],\; n(n^2-1)(3n+2) \textsf\[ is divisible by \]24\qquad 		\color\[green\]\[\blacksquare\]
			</Kd>
		</Env>
		
	</Card> -->

	<Sect type='chapter'>Getting Started</Sect>

	<!-- <p></p>

	<Sect type='section'>Ground Rules</Sect> -->

	<Card>
		<p>The numbers we use for counting <Ki>(1, 2, 3, \ldots)</Ki> are known by mathematicians as the <strong>natural numbers</strong>. (Some include <Ki>0</Ki> in the natural numbers but we shall not.)</p>

		<p>If we have <Ki>3</Ki> (a natural number) rabbits and then obtain <Ki>5</Ki> (a natural number) more, we have a total of <Ki>8</Ki> <Ki>(=3+5)</Ki> rabbits. <Ki>8</Ki> is also a natural number.</p> 
		
		<p>The sum of any two (or more) natural numbers is also a natural number: the natural numbers are <strong>closed under addition</strong>.</p>

		<p>The set of all natural numbers is denoted by <Ki>\mathbb\[N\]</Ki> so that we write:</p>

		<Kd>\mathbb\[N\]=\lbrace 1,2,3,\ldots \rbrace</Kd>

		<p>The 'curly braces,' <Ki>\lbrace \text\[ and \] \rbrace</Ki>, are notation for a set. We shall investigate sets in detail later but for now you can think of it as a collection of elements where order is unimportant and there are no duplicates. (We could rearrange the order of the elements in <Ki>\mathbb\[N\]</Ki> as long as none is omitted. But we don't generally do this!)</p>
		
		<p>The three dots<Ki>,\ldots ,</Ki> indicate that the progression of numbers <Ki>0,1,2,3,</Ki> continues indefinitely.</p>

		<p>We write:</p>

		<Kd>\forall a,b \in \mathbb\[N\],\quad a+b\in \mathbb\[N\]</Kd>

		<p>to indicate that the natural numbers are closed under addition. We say "For all <Ki>a</Ki> and <Ki>b</Ki> in <Ki>\mathbb\[N\]</Ki>, <Ki>a</Ki> plus <Ki>b</Ki> is in <Ki>\mathbb\[N\]</Ki>." Or, less literally, "For all natural numbers <Ki>a</Ki> and <Ki>b</Ki>, their sum <Ki>a</Ki> plus <Ki>b</Ki> is a natural number."</p>
		
		<p><Ki>\forall</Ki> is read "for all" and <Ki>\in</Ki> is read "in."</p>
	</Card>

	<Card>
		<p>If we include the negative numbers (the additive inverses of the natural numbers) and <Ki>0</Ki>, we get the set of all integers:</p>

		<Kd>\mathbb\[Z\]=\lbrace \ldots, -3, -2, -1, 0, 1, 2, 3, \ldots \rbrace</Kd>

		where <Ki>\mathbb\[Z\]</Ki> is from the German word z&auml;hlen, meaning 'numbers.' Integer is from the Greek for 'whole.' 
	</Card>

	<Card>
		<p><Ki>\mathbb\[N\]</Ki> is closed under multiplication: <Ki>\quad\forall a,b\in \mathbb\[N\], \quad a\cdot b\in\mathbb\[N\]</Ki></p>

		<p>"For all <Ki>a</Ki> and <Ki>b</Ki> in <Ki>\mathbb\[N\]</Ki>, their product <Ki>a</Ki> times <Ki>b</Ki> is in <Ki>\mathbb\[N\]</Ki>"</p>
	</Card>

	<Card>		
		<p>For all <Ki>a, b, c \in \Z \textsf\[ or \]\N</Ki>, the following are true:</p>

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

	<Sect>Three Important Principles</Sect>

	<Card>
		
		<Env type='theorem' title='The Well-Ordering Principle'>
			Let <Ki>X \subset \N</Ki> be non-empty. Then there exists <Ki> a\in X</Ki> such that <Ki> a\le x</Ki> for every <Ki> \[x\in X\]</Ki>.
		</Env>		

		<p>"Let <Ki>X</Ki> be a non-empty subset of <Ki>X</Ki>. Then, there exists <Ki>a</Ki> in <Ki>X</Ki> such that <Ki>a</Ki> is less than or equal to <Ki>x</Ki> for every <Ki>x</Ki> in <Ki>X</Ki>."</p>

		<Env type='remark'>In other words, every non-empty set of positive integers has a least element.</Env>

		<Env type='proof'>
			Let <Ki>X \subset \N</Ki> and assume that <Ki>X</Ki> has no smallest element. We prove that <Ki>X</Ki> is empty. (Thus, if <Ki>X</Ki> is non-empty, it must have a smallest element.) Let
			<Kd>S=\lbrace n\in\N\mid n\lt x\textit\[ for every \]x\in X\rbrace</Kd>
			Since all elements of <Ki>S</Ki> are less than the elements of <Ki>X</Ki>, they can have no elements in common, that is <Ki>S \cap X = \phi</Ki>. <Ki>0</Ki> is less than or equal to any element in <Ki>\N</Ki> and so less than or equal to any element of <Ki>X</Ki>. <Ki>X</Ki> has no least element so <Ki>0 \notin X</Ki> so <Ki>0\lt x</Ki> for every <Ki>x\in X</Ki>. Therefore, <Ki>0\in S</Ki>.

			
		</Env>

		<Env type='remark'>
			This is an example of proof by <strong>contrapositive</strong>. By assuming <Ki>X</Ki> has no smallest element, we found <Ki>X</Ki> empty. Thus, the only way that <Ki>X</Ki> can be non-empty is if <Ki>X</Ki> has a smallest element. In order to show that <Ki>A</Ki> implies <Ki>B</Ki> using a contrapositive proof, we show that not <Ki>B</Ki> implies not <Ki>A</Ki>.
		</Env>
		

		<p>(<Ki>\mathbb\[N\]</Ki> is well-ordered but <Ki>\mathbb\[Z\]</Ki> is not.)</p>

		
	</Card>

	<Card>
		<p><strong>The Pigeonhole Principle</strong>:</p>

		<p class="center">If <Ki>s</Ki> objects are placed in <Ki>k</Ki> boxes, with <Ki>s>k</Ki>, then at least one box must contain more than one object.</p>

		<Env type='proof'> We prove by contradiction. Suppose that each box contains one object. Then there are at most <Ki>k</Ki> objects. But there are <Ki>s>k</Ki> objects, so there is a contradiction and each box cannot contain at most one object.</Env>

	</Card>

	<Card>
		<p><strong>The First (or Weak) Principle of Mathematical Induction</strong>:</p>

		 <p>If a set of positive integers has the property that, when it contains the integer <Ki>\[k,\]</Ki> it must also contain <Ki>k+1</Ki>, and if this set also contains <Ki>1</Ki>, then it must be the set of all positive integers. </p>

		<p>In other words, a property concerning the positive integers that is true for <Ki>\[n=1,\]</Ki> and is true for the integer <Ki>n+1</Ki> whenever it is true for integer <Ki>n</Ki>, must be true for all positive integers.</p>

		<Env type='proof'> Let <Ki>S</Ki> be the set of positive integers that contains <Ki>1</Ki> and also contains <Ki>k+1</Ki> whenever it contains <Ki>k</Ki>. Furthermore, assume that <Ki>S</Ki> is <strong>not</strong> the set of all positive numbers. It follows that there must be some positive integers that are not in <Ki>S</Ki>, and these integers must have a least element, <Ki>\alpha</Ki> say (from the Well-Ordering Principle). Then, <Ki>\alpha \ne 1</Ki> since <Ki>1 \in S</Ki>. <Ki>\alpha</Ki> is the least member not in <Ki>S</Ki> so <Ki>\alpha-1 \in S</Ki>. But, if <Ki>\alpha-1 \in S</Ki>, then <Ki>\alpha \in S</Ki> and there is a contradiction. Therefore, our assumption that <Ki>S</Ki> is not the set of all positive numbers must be false.</Env> 

	</Card>

	<Card>
		<p>
			<Env type='theorem' title='Division with Remainder'>
				<Kd>\forall a, b \in \mathbb\[N\], \textit\[ with \] b>0, 
					\quad\exists\; q, r \in \mathbb\[N\]:\\ ~ \\
					a=q(b)+r \textit\[, where \] 0\le r \lt b				
				</Kd>			
			</Env>
		</p>

		<p>"For all natural numbers <Ki>a</Ki> and <Ki>b</Ki>, with <Ki>b</Ki> greater than <Ki>0,</Ki> there exist natural numbers <Ki>q</Ki> and <Ki>r</Ki> such that <Ki>a</Ki> equals <Ki>q</Ki> times <Ki>b,</Ki> plus <Ki>r,</Ki> where <Ki>r</Ki> is greater than or equal to zero and less than <Ki>b</Ki>."</p>

		<p>
			<Env type='remark'>
				<Ki>q</Ki> is known as the <strong>quotient</strong> and <Ki>r</Ki> the <strong>remainder</strong>.
			</Env>
		</p>
	</Card>


</main>

<style>
	
	main:first-of-type {
		counter-reset: thm defn chapter 1 section example exercise;
	}
	main {
		width: 95%;
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
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
