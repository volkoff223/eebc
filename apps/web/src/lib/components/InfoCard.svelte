<script>
  import StatBox from './StatBox.svelte';
  export let cardTitle;
  export let statTitle;
  export let statValue;
  export let params;
</script>

<div class="card card-bordered card-compact bg-base-100 w-96 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{cardTitle}</h2>
    <StatBox {statTitle} {statValue} />
    <div class="card-actions">
      <a href={params} class="btn btn-ghost">View Details</a>
    </div>
  </div>
</div>
<dialog id="update_modal" class="modal">
  <div class="modal-box">
    <h3>This is where you will see a detailed view of the report</h3>
    <div id="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
