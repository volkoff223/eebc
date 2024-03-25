import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

//Check if user is admin to add CRUD functionality
export const load = ({ locals, params }) => {
	const isAdmin = async () => {
		if (locals.pb.authStore.isValid) {
			const user = serializeNonPOJOs(
				await locals.pb.collection('users').getOne(locals.pb.authStore.model.id)
			);
			return user.isAdmin;
		}
	};
	const getProduct = async (productId) => {
		try {
			const product = serializeNonPOJOs(await locals.pb.collection('products').getOne(productId));
			return product;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};
	return {
		product: getProduct(params.productId),
		isAdmin: isAdmin()
	};
};
