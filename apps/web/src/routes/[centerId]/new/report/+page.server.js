import { error, redirect } from '@sveltejs/kit';

export const actions = {
  update: async ({ request, locals, params }) => {
    try {
      const formData = await request.formData();

      await locals.pb.collection('centers').update(params.centerId, formData);
    } catch (err) {
      console.log('Detailed error:', err);
      throw error(err.status || 400, err.message);
    }
    throw redirect(303, `/${params.centerId}`);
  }
};
