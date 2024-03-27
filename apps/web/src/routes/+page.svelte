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
{:else if data.user}
	<div class="container">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Hello there {data.user.name}</h1>
			{#if data.user.role == 'admin'}
				<div class="dropdown">
					<div tabindex="0" role="button" class="btn m-1">Choose a center</div>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						{#each data.centers as center}
							<li><a href="/{center.id}">{center.name}</a></li>
						{/each}
					</ul>
				</div>
			{:else if data.user.role == 'director'}
				<a href="/{data.user.center}">
					<button class="btn btn-active btn-primary">Go to dashboard</button>
				</a>
			{:else}
				<div />
			{/if}
		</div>
	</div>
{/if}
