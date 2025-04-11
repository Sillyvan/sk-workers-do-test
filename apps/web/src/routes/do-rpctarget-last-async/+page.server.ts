import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const itemsStub = platform?.env.DORPC.getStub();
	const items = itemsStub?.getItems();
	const items2 = itemsStub?.getItems();
	const moreItems = await itemsStub?.getMoreItems();
	return { items, items2, moreItems };
};

export const actions = {
	add: async ({ platform }) => {
		const itemsStub = platform?.env.DORPC.getStub();
		await itemsStub?.add(crypto.randomUUID());
	},
	remove: async ({ platform }) => {
		const itemsStub = platform?.env.DORPC.getStub();
		await itemsStub?.remove();
	}
} satisfies Actions;
