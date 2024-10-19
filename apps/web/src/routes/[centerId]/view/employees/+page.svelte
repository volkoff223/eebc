<script>
  export let data;
</script>

<h1 class="text-4xl font-bold mt-4 mb-4">Employee Information</h1>
<ul>
  {#each data.documents as document}
    <li>
      {document.expand.docOwner.firstName},
      {document.expand.docType.name},
      {document.expand.docOwner.center}
    </li>
  {/each}
</ul>
