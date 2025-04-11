import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const items = platform?.env.DORPC.getItems();
	const items2 = platform?.env.DORPC.getItems();
	const moreItems = await platform?.env.DORPC.getMoreItems();
	return { items, items2, moreItems };
};

export const actions = {
	add: async ({ platform }) => {
		await platform?.env.DORPC.add(crypto.randomUUID());
	},
	remove: async ({ platform }) => {
		await platform?.env.DORPC.remove();
	}
} satisfies Actions;
