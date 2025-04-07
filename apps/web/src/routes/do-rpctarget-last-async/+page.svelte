<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="container mx-auto">
	<h1 class="text-4xl">items</h1>
	{#each data.items as item}
		<p>{item}</p>
	{/each}
	<h1 class="text-4xl">more items</h1>
	{#each data.moreItems as item}
		<p>{item}</p>
	{/each}

	<form method="POST" action="?/add" use:enhance>
		<button type="submit" class="bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			>add</button
		>
	</form>
	<form method="POST" action="?/remove" use:enhance>
		<button type="submit" class="bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
			>remove</button
		>
	</form>
</div>
