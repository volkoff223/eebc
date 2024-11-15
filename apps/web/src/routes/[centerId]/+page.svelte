<script>
  import SwipeTable from '../../lib/components/SwipeTable.svelte';
  import Papa from 'papaparse';
  export let data;
  const headers = `name,auth,pu,au,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,\r\n`;
  let swipeReport = Papa.parse(headers + data.center.swipeReportText, {
    header: true,
    delimiter: ',',
    skipEmptyLines: true,
    dynamicTyping: true
  });
</script>

<div class="flex flex-col w-full mt-4">
  <div class="flex justify-between">
    <h1 class="text-4xl font-bold mt-4 mb-4">
      {data.center.name} Dash Board
    </h1>
    <a href="/{data.center.id}/new/report" class="btn btn-primary">+ Report</a>
  </div>
  <div class="text-xl font-bold mt-4 mb-4">Swipe Report</div>
  {#if data.center.swipeReport !== ''}
    <SwipeTable {swipeReport} />
  {/if}
</div>
