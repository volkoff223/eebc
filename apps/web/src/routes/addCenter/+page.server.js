import { error, redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request, locals, res }) => {
    let formData = await request.formData();
    try {
      res = await locals.pb.collection('centers').create(formData);
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
    throw redirect(303, `/${res.id}`);
  }
};
