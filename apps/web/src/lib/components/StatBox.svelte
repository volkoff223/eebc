<script>
  export let statTitle;
  export let swipeReport;
</script>

<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">{statTitle[0]}</div>
    <div class="stat-value">14</div>
    <div class="stat-desc">{swipeReport.scanDates}</div>
  </div>

  <div class="stat">
    <div class="stat-title">{statTitle[1]}</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc">{swipeReport.scanDates}</div>
  </div>
</div>
