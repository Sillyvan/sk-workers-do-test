import { DurableObject, RpcTarget } from 'cloudflare:workers';

export class DO extends DurableObject<Env> {
	items: string[] = ['some', 'test', 'items'];
	moreItems: string[] = ['some', 'more', 'items'];
	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env);
	}

	async add(item: string) {
		//fake 1 second delay
		await new Promise((resolve) => setTimeout(resolve, 250));
		this.items.push(item);
	}

	async remove() {
		//fake 1 second delay
		await new Promise((resolve) => setTimeout(resolve, 250));
		// remove last item
		this.items.pop();
	}

	async getItems() {
		await new Promise((resolve) => setTimeout(resolve, 250));
		return this.items;
	}
	async getMoreItems() {
		await new Promise((resolve) => setTimeout(resolve, 500));
		return this.moreItems;
	}

	//RPC methods we call from other workers
	private rpcTarget = class extends RpcTarget {
		private stub: DO;

		constructor(stub: DO) {
			super();
			this.stub = stub;
		}

		async add(item: string) {
			return this.stub.add(item);
		}
		async remove() {
			return this.stub.remove();
		}
		async getItems() {
			return this.stub.getItems();
		}
		async getMoreItems() {
			return this.stub.getMoreItems();
		}
	};

	getRpcTarget() {
		return new this.rpcTarget(this);
	}
}
