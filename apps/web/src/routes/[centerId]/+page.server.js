import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
  const getCenter = async () => {
    try {
      const center = serializeNonPOJOs(
        await locals.pb.collection('centers').getOne(params.centerId)
      );
      return center;
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
  };
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
  const getCenterDocuments = async () => {
    try {
      const centerDocuments = serializeNonPOJOs(
        await locals.pb
          .collection('centerDocuments')
          .getFullList({ filter: `center="${params.centerId}"` })
      );
      return centerDocuments;
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
  };
  const getEmployeeDocuments = async () => {
    try {
      let filteredEmployeeDocs = [];
      const employeeDocuments = serializeNonPOJOs(
        await locals.pb.collection('employeeDocuments').getFullList({
          expand: 'docOwner'
        })
      );
      for (let i = employeeDocuments.length - 1; i >= 0; i--) {
        if (employeeDocuments[i].expand.docOwner.center === params.centerId) {
          filteredEmployeeDocs.push(employeeDocuments[i]);
        }
      }
      return { filteredEmployeeDocs };
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
  };
  const getStudentDocuments = async () => {
    let filteredStudentDocs = [];
    try {
      const studentDocuments = serializeNonPOJOs(
        await locals.pb.collection('studentDocuments').getFullList({
          expand: 'docOwner'
        })
      );
      for (let i = studentDocuments.length - 1; i >= 0; i--) {
        if (studentDocuments[i].expand.docOwner.center === params.centerId) {
          filteredStudentDocs.push(studentDocuments[i]);
        }
      }
      return { filteredStudentDocs };
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
  };
  return {
    center: await getCenter(),
    employees: await getEmployees(),
    students: await getStudents(),
    centerDocs: await getCenterDocuments(),
    employeeDocs: await getEmployeeDocuments(),
    studentDocs: await getStudentDocuments()
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
