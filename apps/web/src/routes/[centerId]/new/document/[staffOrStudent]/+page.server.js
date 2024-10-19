import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

let ownerType;
export const load = async ({ locals, params }) => {
  if (params.staffOrStudent === 'employee') {
    ownerType = 'employees';
  } else {
    ownerType = 'students';
  }
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login');
  } else {
    const getEmployees = async () => {
      try {
        const employees = serializeNonPOJOs(
          await locals.pb
            .collection('employees')
            .getFullList({ filter: `center="${params.centerId}"` })
        );
        return employees;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };

    const getStudents = async () => {
      try {
        const students = serializeNonPOJOs(
          await locals.pb
            .collection('students')
            .getFullList({ filter: `center="${params.centerId}"` })
        );
        return students;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };

    const getDocTypes = async () => {
      try {
        const docTypes = serializeNonPOJOs(
          await locals.pb
            .collection('documentTypes')
            .getFullList({ filter: `ownerType="${ownerType}"` })
        );
        return docTypes;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };

    return {
      employees: await getEmployees(),
      students: await getStudents(),
      docTypes: await getDocTypes(),
      ownerType
    };
  }
};

//todo Need to remove duplicate docType
export const actions = {
  create: async ({ request, locals, params }) => {
    const formData = await request.formData();
    try {
      if (ownerType === 'employees') {
        await locals.pb.collection('employeeDocuments').create(formData);
      } else {
        await locals.pb.collection('studentDocuments').create(formData);
      }
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
    throw redirect(303, `/${params.centerId}`);
  }
};
