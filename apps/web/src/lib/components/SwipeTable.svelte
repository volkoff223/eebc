<script>
  export let swipeReport;
  let year = 2024;
  let month = 11;
  const d = (days) => {
    return new Date(`${year}-${month}-${days}T08:00:00`).toLocaleDateString('en-US');
  };

  const tblHeaders = {
    1: d('01'),
    2: d('02'),
    3: d('03'),
    4: d('04'),
    5: d('05'),
    6: d('06'),
    7: d('07'),
    8: d('08'),
    9: d('09'),
    10: d('10'),
    11: d('11'),
    12: d('12'),
    13: d('13'),
    14: d('14'),
    15: d('15'),
    16: d('16'),
    17: d('17'),
    18: d('18'),
    19: d('19'),
    20: d('20'),
    21: d('21'),
    22: d('22'),
    23: d('23'),
    24: d('24'),
    25: d('25'),
    26: d('26'),
    27: d('27'),
    28: d('28'),
    29: d('29'),
    30: d('30'),
    31: d('31')
  };
</script>

<div>
  <table id="table" class="table table-zebra">
    <thead>
      <tr>
        <th class="name">Name</th>
        {#each Object.entries(tblHeaders) as [key, value]}
          {#if new Date(value).getDay() === 0 || new Date(value).getDay() === 6}
            <th class="weekend"><button class="btn btn-sm btn-disabled">{value}</button></th>
          {:else}
            <th class={key}><button class="btn btn-sm">{value}</button></th>
          {/if}
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each swipeReport.data as row}
        <tr>
          {#each Object.entries(row) as [key, value]}
            {#if key === 'name'}
              <td class={key}>{value}</td>
            {/if}
          {/each}
          {#each Object.entries(row) as [key, value]}
            {#if key !== 'auth' && key !== '' && key !== 'pu' && key !== 'au' && key !== 'name'}
              <td class={key}>{value}</td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
