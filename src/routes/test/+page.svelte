<script lang="ts">
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    const uname = $page.url.searchParams.get("name");
    const uname_defined = $page.url.searchParams.has("name");
	const hack_attempt = $page.url.searchParams.has("cmd");
    export let data: PageData;
</script>

<svelte:head>
	<title>clock_break3rs</title>
	<meta name="description" content="clock_break3rs" />
</svelte:head>

<section>
	<h1>
		clock_break3rs
	</h1>

	{#if hack_attempt}
	<h2>
		Do you really want a webshell that badly?
	</h2>
	{/if}

    {#if !uname_defined}
	<h2>
		Give me cookies {data.name}
	</h2>
    {:else}
	<h2>
		Give me cookies {uname}
	</h2>
	{/if}

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
