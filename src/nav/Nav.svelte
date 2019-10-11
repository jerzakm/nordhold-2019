<ul class="navigation-links">
    <li><a href="/" use:link>Home</a></li>
    <li><a href="/contact" use:link>Contact</a></li>
    <li><a href="/hello/svelte" use:link use:active={'/hello/*', 'active'}>Say hi!</a></li>
    <li><a href="/does/not/exist" use:link>Not found</a></li>
</ul>

<script>

import {link, push, pop, replace, location, querystring} from 'svelte-spa-router'
import active from 'svelte-spa-router/active'

</script>