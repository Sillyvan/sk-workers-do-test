import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const items = platform?.env.DORPC.getItems();
	const items2 = platform?.env.DORPC.getItems();
	const moreItems = platform?.env.DORPC.getMoreItems();
	return { items, items2, moreItems };
};

export const actions = {
	add: ({ platform }) => {
		platform?.env.DORPC.add(crypto.randomUUID());
	},
	remove: ({ platform }) => {
		platform?.env.DORPC.remove();
	}
} satisfies Actions;
