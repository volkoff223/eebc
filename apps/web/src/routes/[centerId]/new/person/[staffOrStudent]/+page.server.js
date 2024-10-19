import { error, redirect } from '@sveltejs/kit';

let isStaff;
export const load = async ({ locals, params }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login');
  } else {
    if (params.staffOrStudent === 'staff') {
      isStaff = true;
    } else {
      isStaff = false;
    }
    return {
      isStaff,
      centerId: params.centerId
    };
  }
};

export const actions = {
  create: async ({ request, locals, params }) => {
    let formData = await request.formData();
    try {
      if (params.staffOrStudent === 'employee') {
        await locals.pb.collection('employees').create(formData);
      } else {
        await locals.pb.collection('students').create(formData);
      }
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
    throw redirect(303, `/${params.centerId}`);
  }
};
