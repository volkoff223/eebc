<script>
  export let data;
</script>

<h1 class="text-4xl font-bold mt-4 mb-4">Student Information</h1>
<!-- <div class="card card-compact bg-base-100 w- shadow-xl">
  <div id="titleRow" class="card-body flex-row">
    <div class="w-1/3 font-bold">Full Name</div>
    {#each data.docNameArray as docName}
      <div class="w-1/3 font-bold">{docName}</div>
    {/each}
  </div>
</div> -->

{#each data.studentView as student}
  <div class="card card-bordered card-compact bg-base-100 shadow-xl mb-2">
    <div id="rowBody" class="card-body flex-row">
      <div class="w-1/3">
        {`${student.lastName}, ${student.firstName}`}
      </div>
      <div class="w-1/3">
        {`${student.name}`}
      </div>
      <div class="w-1/3">
        {`${student.startDate}`}
      </div>
    </div>
  </div>
{/each}
