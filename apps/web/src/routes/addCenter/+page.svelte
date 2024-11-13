<script>
  import { Input } from '$lib/components';
</script>

<div class="flex flex-col-w-full h-full p2">
  <div class="w-full">
    <form
      action="?/create"
      method="POST"
      class="flex flex-col space-y-2 w-full items-center"
      enctype="multipart/form-data"
    >
      <h3 class="text-3xl font-bold">Add a child care center</h3>
      <Input id="name" label="Name" required="true" />
      <Input id="email" type="email" label="Primary Email" required="true" />

      <div class="form-control w-full max-w-lg">
        <label for="image" class="label font-medium pb-1">
          <span class="label-text">Logo</span>
        </label>
        <input
          type="file"
          name="logo"
          id="logo"
          class="file-input input-primary file-input-bordered w-full max-w-lg"
        />

        <div class="w-full max-w-lg pt-3">
          <button type="submit" class="btn btnprimary w-full max-w-lg">Create Center</button>
        </div>
      </div>
    </form>
  </div>
</div>
