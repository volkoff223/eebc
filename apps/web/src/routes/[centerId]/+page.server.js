import { error } from '@sveltejs/kit';
import { serializeNonPOJOs, getFileURL } from '$lib/utils';

export const load = async ({ locals, params }) => {
  const getCenter = async () => {
    try {
      const center = serializeNonPOJOs(
        await locals.pb.collection('centers').getOne(params.centerId)
      );

      // This adds swipe report text to the center object
      const fileURL = getFileURL('centers', params.centerId, center.swipeReport);
      const swipeReportResponse = await fetch(fileURL);
      center.swipeReportText = await swipeReportResponse.text();
      return center;
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
  };

  return {
    center: await getCenter()
  };
};
