// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare namespace Cloudflare {
	interface Env {
		DO_RPC: Service<import('../../services/src/index').default>;
		ASSETS: Fetcher;
	}
}
interface Env extends Cloudflare.Env {}

declare global {
	namespace App {
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

export {};
