<script context="module">
	// export const prerender = true;
	import CA2 from '$lib/circalthumb/circalAvatar2.png';
	import D1 from '$lib/circalthumb/d1CThumb.png';
	import P4 from '$lib/circalthumb/p4CThumb2.png';
	import TT from '$lib/circalthumb/TexasTripCThumb.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="bar">
	<a href="https://joettevisitsvelte.pages.dev/" ><img class="foo" src={CA2} alt="fuckit" /></a>
	
	<a href="https://dadsvelte.pages.dev/" ><img class="foo" src={D1} alt="fuckit" /></a>
	
	<a href="https://tobiastro.pages.dev/" ><img class="foo" src={P4} alt="fuckit" /></a>
	
<!-- </div>
<div class="bar"> -->
	
	<a href="https://texastripsvelte.pages.dev/" ><img class="foo" src={TT} alt="fuckit" /></a>
	<a class="boo" sveltekit:prefetch href="https://tripvids2.pages.dev/"><button>Video</button></a>
	
</div>



<style>
	button {
		border: 3px solid;
		border-radius: 50%;
		/* padding: 20px; */
		width: 195px;
		height: 195px;
		background-color: gold;
		font-size: 1.5em;
		


	}

	/* @media screen and (max-width: 420px) {
		.foo {
			width: 175px;
		}
	} */

	.bar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;

		
	}

	.foo {
		max-width: 200px;
		min-width: 70px;
		/* margin: 7px; */
	} 

	@media screen and (max-width: 412px) {
		img {
			width: 125px;
		}
	}

	@media screen and (max-width: 412px) {
		button {
			width: 125px;
			height: 125px;
		}
	}
</style>
