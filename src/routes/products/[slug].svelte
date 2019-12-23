<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte
		const { slug } = page.params;
		return { slug };
	}
</script>

<script>
    export let slug;

    console.log(slug)
</script>

<h1>Slug</h1>