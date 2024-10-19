import { redirect, error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
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

    const getEmployeeDocuments = async () => {
      try {
        const employeeDocuments = serializeNonPOJOs(
          await locals.pb
            .collection('employeeDocuments')
            .getFullList({ expand: 'docOwner,docType' })
        );
        return employeeDocuments;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };

    return {
      employees: await getEmployees(),
      documents: await getEmployeeDocuments()
    };
  }
};
