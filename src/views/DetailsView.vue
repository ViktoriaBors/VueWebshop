<template>
<div>
  <h2>Detail about</h2>
  <h3>{{product.title}}</h3>
  <p>{{product.description}}</p>
</div>
</template>

<script>
import getOneProduct from "../composables/getOneProduct.js"
export default {

    setup(){
    console.log("setup home")
    const {product, error, loadData} = getOneProduct( window.location.pathname)
    loadData()
    
    return {product, error, }
    }
}
</script>

<style>

</style>