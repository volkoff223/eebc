<script>
	import { enhance } from '$app/forms';
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

	<div>
		<h1 class="text-2xl font-bold mt-4">
			{data.center.name} Immunization Report
		</h1>
		<form
			action="?/updateReport"
			method="POST"
			class="flex flex-col space-y-2 w-full"
			enctype="multipart/form-data"
		>
			<div class="form-control w-full max-w-lg">
				<lable for="fileInput" class="lable font-medium pb-1">
					<span class="lable-text">Update Report</span>
				</lable>
				<input
					type="file"
					class="file-input file-input-bordered file-input-primary w-full max-w-xs"
					accept="*"
					id="vax_record"
					name="vax_record"
				/>
			</div>
			<div class="w-full max-w-lg pt-3">
				<button class="btn btn-primary max-w-lg" type="submit">Update Report</button>
			</div>
		</form>
	</div>

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
