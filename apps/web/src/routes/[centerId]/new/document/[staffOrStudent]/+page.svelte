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
        <h3 class="text-3xl font-bold">Add a new {data.ownerType} document</h3>
        <div class="form-control w-full max-w-lg">
          <!-- Input for document owner -->
          <label for="docOwner" class="label font-medium pb-1">
            <span class="label-text">Document Owner</span>
          </label>
          <select class="input input-bordered w-full max-w-lg" name="docOwner" id="docOwner">
            {#if data.ownerType === 'employees'}
              {#each data.employees as employee}
                <option value={employee.id}>{employee.lastName}, {employee.firstName}</option>
              {/each}
            {/if}
            {#if data.ownerType === 'students'}
              {#each data.students as student}
                <option value={student.id}>{student.lastName}, {student.firstName}</option>
              {/each}
            {/if}
          </select>
          <!-- Input for document type -->
          <label for="docType" class="label font-medium pb-1">
            <span class="label-text">Document Type</span>
          </label>
          <select class="input input-bordered w-full max-w-lg" name="docType" id="docType">
            {#each data.docTypes as docType}
              <option value={docType.id}>{docType.name}</option>
            {/each}
          </select>
          <!-- Input for dates -->
          <Input type="date" id="startDate" label="Start Date" required />
          <!-- Input for document file -->
          <label for="file" class="label font-medium pb-1">
            <span class="label-text">Document File</span>
          </label>
          <input
            type="file"
            name="docFile"
            id="docFile"
            class="file-input file-input-bordered w-full max-w-lg"
          />

          <div class="w-full max-w-lg pt-3">
            <button type="submit" class="btn btnprimary w-full max-w-lg">Add Document</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
