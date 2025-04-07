import { WorkerEntrypoint } from 'cloudflare:workers';
import { DO } from './do';

export { DO };

export default class DO_RPC extends WorkerEntrypoint<Env> {
	// variant 1
	// worker pc calling do rpc
	async add(item: string) {
		const id = this.env.DO.idFromName('static');
		const stub = this.env.DO.get(id);
		return stub.add(item);
	}
	async remove() {
		const id = this.env.DO.idFromName('static');
		const stub = this.env.DO.get(id);
		return stub.remove();
	}
	async getItems() {
		const id = this.env.DO.idFromName('static');
		const stub = this.env.DO.get(id);
		return stub.getItems();
	}
	async getMoreItems() {
		const id = this.env.DO.idFromName('static');
		const stub = this.env.DO.get(id);
		return stub.getMoreItems();
	}
	// variant 2
	// worker passing do stub for do rpc
	async getStub() {
		const id = this.env.DO.idFromName('static');
		const stub = this.env.DO.get(id);
		return stub.getRpcTarget();
	}
}
