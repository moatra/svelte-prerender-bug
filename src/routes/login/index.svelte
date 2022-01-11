<script context="module">
	import { enhance } from '$lib/form';
	export const prerender = true;
</script>

<script>
	import { goto } from "$app/navigation";
</script>

<svelte:head>
	<title>Todos</title>
</svelte:head>

<div>
	<h1>Log In</h1>

	<form
		action="/login"
		method="post"
		use:enhance={{
			result: async (res) => {
				let json = await res.json();
				if (json.success) {
					goto("/login/success");
				} else {
					alert('got non success in success handler');
				}
			},
			error: async (res) => {
				alert('bad login');
			}
		}}
	>
		<input type="email" name="email" placeholder="email" />
		<input type="password" name="password" placeholder="password" />
		<button type="submit">Login</button>
	</form>
</div>

<style>
</style>
