<script>
	import { Icon, Trash } from 'svelte-hero-icons';
	import { Input } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	export let data;
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			method="POST"
			action="?/updateProduct"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
		>
			<h3 class="text-3xl font-bold">Edit {data.product}</h3>
			<Input id="product" label="Product name" value={data.product ?? ''} />
			<Input id="price" label="Price" value={data.price ?? ''} />
			<div class="form-control w-full max-w-lg">
				<label for="description" class="label font-medium pb-1">
					<span class="label-text">Product description</span>
				</label>
				<textarea
					name="description"
					class="textarea textarea-bordered h-24 resize-none"
					value={data.description ?? ''}
				/>
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="thumbnail" class="label font-medium pb-1">
					<span class="label-text">Primary image</span>
				</label>
				{#if data.thumbnail}
					<label for="thumbnail" class="avatar w-20 hover:cursor-pointer">
						<label for="thumbnail" class="absolute -top-1 5 -right-1 5 hover:cursor-pointer">
							<button formaction="?/deleteThumbnail" class="btn btn-error btn-sm btn-circle">
								<Icon src={Trash} class="w-5 h-5 text-white" />
							</button>
						</label>
						<div class="w-20 rounded">
							<img
								src={data.thumbnail
									? getImageURL(data.collectionId, data.id, data.thumbnail, '80x80')
									: 'Error thing'}
								alt="Thumbnail"
							/>
						</div>
					</label>
				{/if}
				<input
					type="file"
					name="thumbnail"
					id="thumbnail"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
			</div>

			<div class="form-control w-full max-w-lg">
				<label for="images" class="label font-medium pb-1">
					<span class="label-text">Aditional images | Hold Ctl to select multiple images</span>
				</label>
				{#if data.images}
					{#each data.images as image, i}
						<label for="images" class="avatar w-20 hover:cursor-pointer">
							<label for="images" class="absolute -top-1 5 -right-1 5 hover:cursor-pointer">
								<button formaction="?/deleteImages" class="btn btn-error btn-sm btn-circle">
									<Icon src={Trash} class="w-5 h-5 text-white" />
								</button>
							</label>
							<div class="w-20 rounded">
								<img
									src={data.images
										? getImageURL(data.collectionId, data.id, image, '80x80')
										: 'Error thing'}
									alt="Thumbnail"
								/>
							</div>
						</label>
					{/each}
				{/if}
				<input
					multiple
					type="file"
					name="images"
					id="images"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
			</div>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Save Changes</button>
			</div>
		</form>
	</div>
</div>
