<template>
<div>
  <router-link :to="{name:'products'}" >
  <h2 class="link text-success text-decoration-none fw-bolder">Check Out our awesome stuffs</h2>
  </router-link>
</div>

</template>

<script>

export default {
  name: 'homeHomeView',
}
</script>

<style>
  h2, .link{
    cursor: pointer;
    text-decoration: none;
  }
</style>
