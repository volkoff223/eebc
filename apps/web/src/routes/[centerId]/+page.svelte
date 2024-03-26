<script>
	import { getImageURL } from '$lib/utils.js';
	export let data;
</script>

<div class="flex flex-col w-full mt-4">
	<div class="avatar">
		<div class="w-20 rounded">
			<img
				src={data.center?.logo
					? getImageURL(data.center.collectionId, data.center.id, data.center.logo, '350x350')
					: 'Error thing'}
				alt="Center logo"
			/>
		</div>
	</div>
	<div class="stats shadow">
		<div class="stat place-items-center">
			<div class="stat-title">Missed Swipes</div>
			<div class="stat-value">4</div>
			<div class="stat-desc">From March 20th to March 27th</div>
		</div>

		<div class="stat place-items-center">
			<div class="stat-title">Missed Swipes Percentage</div>
			<div class="stat-value text-secondary">10%</div>
			<div class="stat-desc text-secondary">↗︎ 2 (7%)</div>
		</div>

		<div class="stat place-items-center">
			<div class="stat-title">Incomplete Swipes</div>
			<div class="stat-value">2</div>
			<div class="stat-desc">↘︎ 1 (3%)</div>
		</div>
	</div>
	<h1 class="text-2xl font-bold mt-4">
		{data.center.name} Missed Swipe Report
	</h1>
	<div class="overflow-x-auto max-w-md">
		<table class="table table-zebra">
			<!-- head -->
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				<tr>
					<th>1</th>
					<td>Cy Ganderton</td>
					<td>Mar 25th</td>
				</tr>
				<!-- row 2 -->
				<tr>
					<th>2</th>
					<td>Hart Hagerty</td>
					<td>Mar 25th</td>
				</tr>
				<!-- row 3 -->
				<tr>
					<th>3</th>
					<td>Brice Swyre</td>
					<td>Mar 24th</td>
				</tr>
				<!-- row 4 -->
				<tr>
					<th>4</th>
					<td>Jack Smith</td>
					<td>Mar 23th</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
