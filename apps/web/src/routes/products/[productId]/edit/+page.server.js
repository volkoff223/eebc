import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	} else {
		const user = await locals.pb.collection('users').getOne(locals.pb.authStore.model.id);
		if (!user.isAdmin) {
			throw error(401, { message: 'Unauthorized' });
		}
	}

	try {
		const product = serializeNonPOJOs(
			await locals.pb.collection('products').getOne(params.productId)
		);

		return product;
	} catch (err) {
		console.log('Error: ', err);
		throw error(err.status, err.message);
	}
};

export const actions = {
	updateProduct: async ({ request, locals, params }) => {
		const formData = await request.formData();

		const thumbnail = formData.get('thumbnail');
		const images = formData.get('images');

		if (thumbnail.size === 0) {
			formData.delete('thumbnail');
		}
		if (images.size === 0) {
			formData.delete('images');
		}

		try {
			await locals.pb.collection('products').update(params.productId, formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect('303', `/products/${params.productId}`);
	},
	deleteThumbnail: async ({ locals, params }) => {
		try {
			await locals.pb.collection('products').update(params.productId, { thumbnail: null });
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	},
	deleteImages: async ({ locals, params }) => {
		try {
			await locals.pb.collection('products').update(params.productId, { images: null });
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
