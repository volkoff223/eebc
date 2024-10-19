<script>
  import { Input } from '$lib/components';
  export let data;
  let staffOrStudent;
  if (data.isStaff) {
    staffOrStudent = 'staff';
  } else {
    staffOrStudent = 'student';
  }
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
        <h3 class="text-3xl font-bold">Add a new {staffOrStudent}</h3>
        <div class="form-control w-full max-w-lg">
          <!-- Input for document owner -->
          <Input id="firstName" label="First Name" required="true" />
          <Input id="lastName" label="Last Name" required="true" />

          <!-- Input for dates -->
          <Input type="date" id="startDate" label="Start Date" required="true" />

          <input type="hidden" id="isStaff" name="isStaff" value={data.isStaff} />
          <input type="hidden" id="center" name="center" value={data.centerId} />

          <div class="w-full max-w-lg pt-3">
            <button type="submit" class="btn btnprimary w-full max-w-lg">Add</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
