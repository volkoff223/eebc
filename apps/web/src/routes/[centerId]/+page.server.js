import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

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
    center: await getCenter(params.centerId)
  };
};

export const actions = {
  updateReport: async ({ request, locals, params }) => {
    const formData = await request.formData();
    const file = formData.get('vax_record');
    console.log(file);

    if (formData.size === 0) {
      console.log('You must select a file.');
      throw error(500, 'You must select a file.');
    }
    try {
      await locals.pb.collection('centers').update(params.centerId, formData);
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }

    throw redirect('303', `/${params.centerId}`);
  }
};
