<script>
  import Hamburguer from "./Hamburguer.svelte";
  import NavLink from "./NavLink.svelte";

  export let segment;
  let expand = false;

  function toggleMobileMenu(event) {
    expand = event.detail;
  }
</script>

<style>
  .brand-logo{
    max-width: 9em;
  }
</style>

<nav
  class="text-black w-full flex items-center justify-between flex-wrap p-6">
  <a href="." class="font-semibold text-xl tracking-tight mr-4">
    <img src="logo.png" alt="Brand logo" class="brand-logo">
  </a>

  <div class="block lg:hidden">
    <Hamburguer on:click={toggleMobileMenu} {expand} />
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="{!expand && 'hidden'} lg:block text-sm lg:flex-grow">
      <NavLink text="About" href="about" {segment} />
      <NavLink text="Blog" href="blog" {segment} rel="prefetch" />
    </div>
  </div>
</nav>
