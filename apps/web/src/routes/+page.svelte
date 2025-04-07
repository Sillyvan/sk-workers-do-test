<main class="container mx-auto">
	<h1 class="text-4xl">Welcome to to this little test. here are the 4 scenarios:</h1>
	<h2 class="text-2xl text-red-600">
		Why not just call the DO rpc directly? because locally thats not as easy. you can run multiple
		workers in 1 wrangler session BUT here we mix vite and wrangler which makes this not possible
		afaik
	</h2>
	<div>
		<p class="my-4">
			In these scenarios im calling an RPC method on a worker. That worker just calls a DO rpc
			method.
		</p>
		<a
			class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			href="/worker-rpc">await all</a
		>
		<a
			class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			href="/worker-rpc-last-async">await last promise</a
		>
		<a
			class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			href="/worker-rpc-no-async">without await</a
		>
	</div>
	<div>
		<p class="my-4">
			in this scenario we get the DO stub from the worker and call the do rpc method on it
		</p>
		<a
			class="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
			href="/do-rpctarget">await all</a
		>
		<a
			class="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
			href="/do-rpctarget-last-async">await last promise</a
		>
		<a
			class="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
			href="/do-rpctarget-no-async">without await</a
		>
	</div>
</main>
