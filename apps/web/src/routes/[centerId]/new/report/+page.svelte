<script>
  import { Input } from '$lib/components';
</script>

<div class="flex flex-col-w-full h-full p2">
  <div class="w-full">
    <form
      action="?/update"
      method="POST"
      class="flex flex-col space-y-2 w-full items-center"
      enctype="multipart/form-data"
    >
      <h3 class="text-3xl font-bold">Add a Report</h3>

      <div class="form-control w-full max-w-lg">
        <label for="image" class="label font-medium pb-1">
          <span class="label-text">Report</span>
        </label>
        <input
          type="file"
          name="report"
          id="report"
          class="file-input input-primary file-input-bordered w-full max-w-lg"
        />

        <div class="w-full max-w-lg pt-3">
          <button type="submit" class="btn btnprimary w-full max-w-lg">Add Report</button>
        </div>
      </div>
    </form>
  </div>
</div>
