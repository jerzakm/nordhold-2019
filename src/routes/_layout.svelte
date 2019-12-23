<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<main class="container mx-auto p-3">
<Nav {segment}/>
	<slot></slot>
</main>