<script>
	export let data;
</script>

{#if !data.user}
	<div class="container">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
			<a href="/register">
				<button class="btn btn-primary">Get Started</button>
			</a>
		</div>
	</div>
{:else}
	<div class="container">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Hello there {data.user.name}</h1>
			<p class="mb-5">Click the get started button to update your profile.</p>
			<a href="/my/settings/profile">
				<button class="btn btn-primary">Get Started</button>
			</a>
		</div>
	</div>
{/if}
