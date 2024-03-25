<script>
	import { getImageURL } from '$lib/utils.js';
	export let data;
</script>

<div class="flex flex-col w-full mt-4">
	<div class="avatar">
		<div class="w-20 rounded">
			<img
				src={data.product?.thumbnail
					? getImageURL(data.product.collectionId, data.product.id, data.product.thumbnail, '80x80')
					: 'Error thing'}
				alt="Product"
			/>
		</div>
	</div>
	<h1 class="text-2xl font-bold mt-4">
		{data.product.product}
	</h1>
	<p>{data.product.description}</p>
	<p>${data.product.price}</p>
	{#if data.isAdmin}
		<a href="/products/{data.product.id}/edit" class="btn btn-primary">Edit</a>
	{/if}
</div>
