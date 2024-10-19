import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login');
  } else {
    const getDocTypes = async () => {
      try {
        const requiredDocs = serializeNonPOJOs(
          await locals.pb.collection('documentTypes').getFullList()
        );
        return requiredDocs;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };
    return { docTypes: await getDocTypes() };
  }
};

export const actions = {
  create: async ({ request, locals, params }) => {
    let formData = await request.formData();
    try {
      await locals.pb.collection('documentTypes').create(formData);
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
    throw redirect(303, `/${params.centerId}`);
  }
};
