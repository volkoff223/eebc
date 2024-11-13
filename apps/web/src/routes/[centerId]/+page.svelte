<script>
  import SwipeTable from '$lib/components/SwipeTable.svelte';
  import InfoCard from '$lib/components/InfoCard.svelte';
  export let data;
  // access to .center .employees .students .centerDocs .employeeDocs .studentDocs
</script>

<div class="flex flex-col w-full mt-4">
  <div class="flex justify-between">
    <h1 class="text-4xl font-bold mt-4 mb-4">
      {data.center.name} Dash Board
    </h1>
    <a href="/{data.center.id}/new/report" class="btn btn-primary">+ Report</a>
  </div>
</div>
