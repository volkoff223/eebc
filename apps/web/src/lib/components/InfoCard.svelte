<script>
  import StatBox from './StatBox.svelte';
  export let cardTitle = '';
  export let statTitle = [];
  export let swipeReport = {};
</script>

<div class="card card-bordered card-compact bg-base-100 w-96 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{cardTitle}</h2>
    <StatBox {statTitle} {swipeReport} />
    <p>Here is some info</p>
    <div class="card-actions justify-between">
      <button class="btn btn-ghost" onclick="update_modal.showModal()">Update</button>
      <button class="btn btn-primary">Show more</button>
    </div>
  </div>
</div>
<dialog id="update_modal" class="modal">
  <div class="modal-box">
    <h3>This is where you will upload the new scan report .csv file</h3>
    <div id="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
