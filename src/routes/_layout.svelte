<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`routes.json`);
    const routes = (await res.json()).meta;
    if (res.status === 200) {
      return {routes};
    } else {
      this.error(res.status, res.message);
    }
  }
</script>

<script>
	import Nav from '../components/Nav.svelte';
  export let segment;
  export let routes;
</script>

<main class="container mx-auto p-3">
<Nav {segment} {routes}/>
	<slot></slot>
</main>