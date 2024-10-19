import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
  if (locals.user) {
    const getCenters = async () => {
      try {
        const centers = serializeNonPOJOs(
          await locals.pb.collection('centers').getFullList({ sort: 'name' })
        );
        return centers;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };

    return {
      centers: await getCenters()
    };
  }
};
