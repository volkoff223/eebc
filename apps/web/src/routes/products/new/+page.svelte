<script>
	import { Input } from '$lib/components';
</script>

<div class="flex flex-col-w-full h-full p2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
		>
			<h3 class="text-3xl font-bold">Tell me about your product</h3>
			<p class="mt-2 text-lg">We'll need the name, price, description, and an images.</p>
			<Input id="product" label="Product name" />
			<Input id="price" label="Price" />
			<div class="form-control w-full max-w-lg">
				<label for="description" class="label font-medium pb-1">
					<span class="label-text">Description</span>
				</label>
				<textarea name="description" class="textarea textarea-bordered h-24 resize-none" />
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="image" class="label font-medium pb-1">
					<span class="label-text">Primary image</span>
				</label>
				<input
					type="file"
					name="thumbnail"
					id="thumbnail"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
				<label for="image" class="label font-medium pb-1">
					<span class="label-text">Aditional images</span>
				</label>
				<input
					multiple
					type="file"
					name="images"
					id="images"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
				<div class="w-full max-w-lg pt-3">
					<button type="submit" class="btn btnprimary w-full max-w-lg">Create Product</button>
				</div>
			</div>
		</form>
	</div>
</div>
