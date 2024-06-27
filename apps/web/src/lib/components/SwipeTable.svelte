<script>
  export let swipeReport;
</script>

<table class="table table-zebra">
  <thead><tr><th>Name</th><th>No Swipe Dates</th><th>Incomplete Swipe Dates</th></tr></thead><tbody>
    {#each swipeReport.students as student}
      <tr>
        <td>{student.lastName}, {student.firstName}</td>
        <td>
          {#each student.noSwipeDates as date}
            {date}<br />
          {/each}
        </td>
        <td>
          {#each student.incompleteSwipeDates as iDate}
            {iDate}<br />
          {/each}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
