<script context="module">
	export const prerender = true;
	import CA2 from '$lib/circalthumb/circalAvatar2.webp';
	import D1 from '$lib/circalthumb/d1CThumb.webp';
	import P4 from '$lib/circalthumb/p4CThumb2.webp';
	import TT from '$lib/circalthumb/TexasTripCThumb.webp';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="bar">
	<a sveltekit:prefetch href="https://joettevisitsvelte.pages.dev/" ><img class="foo" src={CA2} alt="fuckit" /></a>
	<a sveltekit:prefetch href="https://dadsvelte.pages.dev/" ><img class="foo" src={D1} alt="fuckit" /></a>
	<a sveltekit:prefetch href="https://tobisvelte.pages.dev" ><img class="foo" src={P4} alt="fuckit" /></a>
	<a sveltekit:prefetch href="https://texastripsvelte.pages.dev/" ><img class="foo" src={TT} alt="fuckit" /></a>
	<a class="boo" sveltekit:prefetch href="https://tripvids2.pages.dev/"><button>Video</button></a>
</div>

<style>

	button {
		border: 3px solid;
		border-radius: 50%;
		width: 195px;
		height: 195px;
		background-color: gold;
		font-size: 1.5em;
	}

	.bar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;

		
	}

	.foo {
		max-width: 200px;
		min-width: 70px;
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
