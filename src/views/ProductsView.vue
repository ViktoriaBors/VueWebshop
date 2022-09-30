<template>
<div>
    Search function
   <div v-if="error">
      <p>{{error}}</p>
  </div>
  <div v-if="products.length">
            <ProductCards :products="products"></ProductCards>
  </div>
  <div v-else>
    <p>Data is loading...</p>
  </div>
</div>
</template>

<script>
import getProducts from "../composables/getProducts.js"
import ProductCards from "../components/ProductCards.vue"
import {ref, computed} from "vue"

export default {
    components: {
    ProductCards,
  },
  setup(){
    console.log("setup home")

    const search = ref("")
    const {products, error, loadData} = getProducts()
    loadData()   
    
    return {products, error,   }
  }
}
</script>

<style>

</style>