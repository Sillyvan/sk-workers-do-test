import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const itemsStub = await platform?.env.DO_RPC.getStub();
	const items = await itemsStub?.getItems();
	const items2 = await itemsStub?.getItems();
	const moreItems = await itemsStub?.getMoreItems();
	return { items, items2, moreItems };
};

export const actions = {
	add: async ({ platform }) => {
		const itemsStub = await platform?.env.DO_RPC.getStub();
		await itemsStub?.add(crypto.randomUUID());
	},
	remove: async ({ platform }) => {
		const itemsStub = await platform?.env.DO_RPC.getStub();
		await itemsStub?.remove();
	}
} satisfies Actions;
