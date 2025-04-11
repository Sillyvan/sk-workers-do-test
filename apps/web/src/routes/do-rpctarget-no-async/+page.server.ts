import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const itemsStub = platform?.env.DORPC.getStub();
	const items = itemsStub?.getItems();
	const items2 = itemsStub?.getItems();
	const moreItems = itemsStub?.getMoreItems();
	return { items, items2, moreItems };
};

export const actions = {
	add: ({ platform }) => {
		const itemsStub = platform?.env.DORPC.getStub();
		itemsStub?.add(crypto.randomUUID());
	},
	remove: ({ platform }) => {
		const itemsStub = platform?.env.DORPC.getStub();
		itemsStub?.remove();
	}
} satisfies Actions;
