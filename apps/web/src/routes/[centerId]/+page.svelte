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
  </div>
  <div class="flex justify-around mb-4">
    <a href="/{data.center.id}/new/docType" class="btn btn-warning">+ Document Requirement</a>
    <a href="/{data.center.id}/new/person/student" class="btn btn-secondary">+ Student</a>
    <a href="/{data.center.id}/new/person/employee" class="btn btn-secondary">+ Employee</a>
    <a href="/{data.center.id}/new/document/student" class="btn btn-primary">+ Student Document</a>
    <a href="/{data.center.id}/new/document/employee" class="btn btn-primary">+ Employee Document</a
    >
  </div>
  <div class="flex space-x-3 mb-10">
    <InfoCard
      cardTitle="Center"
      statValue={[1, 0]}
      statTitle={['Near Experation', 'Expired/Missing']}
      params={data.center.id + '/view/center'}
    />
    <InfoCard
      cardTitle="Employees"
      statValue={[5, 2]}
      statTitle={['Near Experation', 'Expired/Missing']}
      params={data.center.id + '/view/employees'}
    />
    <InfoCard
      cardTitle="Students"
      statValue={[4, 8]}
      statTitle={['Near Experation', 'Expired/Missing']}
      params={data.center.id + '/view/students'}
    />
  </div>
  <div class="text-2xl">Swipe Report</div>
  <SwipeTable swipeReport={data.center.swipeReport} />
</div>
