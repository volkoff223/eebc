<script>
  import { Input } from '$lib/components';
  export let data;
</script>

<div class="flex flex-col-w-full h-full p2">
  <div class="w-full">
    <form
      action="?/create"
      method="POST"
      class="flex flex-col space-y-2 w-full items-center"
      enctype="multipart/form-data"
    >
      <div class="form-control w-full max-w-lg">
        <h3 class="text-3xl font-bold">Add a new required document</h3>
        <div class="form-control w-full max-w-lg">
          <Input id="name" label="Name of document" required="true" />
          <lable for="ownerType" class="label font-medium pb-1">
            <span class="label-text">Owner type</span>
          </lable>
          <select class="input input-bordered w-full max-w-lg" name="ownerType" id="ownerType">
            <option value="students">Student</option>
            <option value="employees">Employee</option>
            <option value="center">Center</option>
          </select>
          <Input type="number" id="expires" label="Months untill expires" required />
          <div class="w-full max-w-lg pt-3">
            <button type="submit" class="btn btnprimary w-full max-w-lg">Add Document</button>
          </div>
          <div class="text-xl">Required Documents</div>
          <ul>
            {#each data.docTypes as docTypes}
              <li>{docTypes.name}</li>
            {/each}
          </ul>
        </div>
      </div>
    </form>
  </div>
</div>
