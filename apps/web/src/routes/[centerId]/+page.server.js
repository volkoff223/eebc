import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

//Check if user is admin to add CRUD functionality
export const load = async ({ locals, params }) => {
	const getCenter = async (centerId) => {
		try {
			const center = serializeNonPOJOs(await locals.pb.collection('centers').getOne(centerId));
			return center;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};
	return {
		center: getCenter(params.centerId)
	};
};
