<template>
  <div>
    <div v-for="product in products" :key="product.id">
        <router-link :to="{name: 'details', params:{id: product.id}}">
            <h3> {{product.title}} </h3>
        </router-link>
    <img :src="product.image">
    <p>{{product.category}}</p>
    <p>{{product.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["products"],
}

</script>

<style>

</style>