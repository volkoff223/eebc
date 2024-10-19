import { redirect, error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
let tableArray = [];
export const load = async ({ locals, params }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login');
  } else {
    const getCenter = async () => {
      try {
        const center = serializeNonPOJOs(
          await locals.pb
            .collection('centers')
            .getOne(params.centerId, { expand: 'students.documents.docType' })
        );
        return center;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };

    const getDocumentTypes = async () => {
      try {
        const docTypes = serializeNonPOJOs(
          await locals.pb
            .collection('documentTypes')
            .getFullList({ filter: 'ownerType="students"' })
        );

        return docTypes;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };

    const getStudentView = async () => {
      try {
        const studentView = serializeNonPOJOs(
          await locals.pb
            .collection('studentDocumentsView')
            .getFullList({ filter: `center='${params.centerId}'` })
        );
        return studentView;
      } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
      }
    };
    return {
      center: await getCenter(),
      studentView: await getStudentView(),
      // students: await getStudents(),
      // documents: await getStudentDocuments(),
      documentTypes: await getDocumentTypes(),
      tableArray
    };
  }
};
