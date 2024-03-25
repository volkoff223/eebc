import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	} else {
		const user = await locals.pb.collection('users').getOne(locals.pb.authStore.model.id);
		if (!user.isAdmin) {
			throw error(401, { message: 'Unauthorized' });
		}
	}
};

export const actions = {
	create: async ({ request, locals }) => {
		const formData = await request.formData();

		const images = formData.get('images');
		const thumbnail = formData.get('thumbnail');

		if (images.size === 0) {
			formData.delete('images');
		}
		if (thumbnail.size === 0) {
			formData.delete('thumbnail');
		}
		try {
			await locals.pb.collection('products').create(formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		throw redirect(303, '/');
	}
};
