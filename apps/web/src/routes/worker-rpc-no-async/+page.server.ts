import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const items = platform?.env.DO_RPC.getItems();
	const items2 = platform?.env.DO_RPC.getItems();
	const moreItems = platform?.env.DO_RPC.getMoreItems();
	return { items, items2, moreItems };
};

export const actions = {
	add: ({ platform }) => {
		platform?.env.DO_RPC.add(crypto.randomUUID());
	},
	remove: ({ platform }) => {
		platform?.env.DO_RPC.remove();
	}
} satisfies Actions;
