<script>
  import SwipeTable from '$lib/components/SwipeTable.svelte';
  import InfoCard from '$lib/components/InfoCard.svelte';
  import { getImageURL } from '$lib/utils.js';
  export let data;
</script>

<div class="flex flex-col w-full mt-4">
  <div class="avatar">
    <div class="w-20 rounded">
      <img
        src={data.center?.logo
          ? getImageURL(data.center.collectionId, data.center.id, data.center.logo, '350x350')
          : 'Error thing'}
        alt="Center logo"
      />
    </div>
  </div>

  <div>
    <h1 class="text-2xl font-bold mt-4">
      {data.center.name} Dash Board
    </h1>
  </div>
  <div class="flex space-x-3 mb-10">
    <InfoCard
      cardTitle="Swipe Report"
      swipeReport={data.center.swipeReport}
      statTitle={['Missed Swipes', 'No Swipe']}
    />
    <!-- <InfoCard cardTitle="Revenue Report" statTitle={['Money Made', 'Money Lost']} />
    <InfoCard cardTitle="HR Report" statTitle={['Applicants Screened', 'Employees Hired']} /> -->
  </div>
  <!-- Make this modal open! -->
  <SwipeTable swipeReport={data.center.swipeReport} />
</div>
