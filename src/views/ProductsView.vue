<template>
  <div>
    <div>
      <div class="mb-3 container-sm">
        <label class="form-label fw-bold fs-5" for="search">Search by name</label>
        <input
          type="text"
          class="form-control text-lowercase"
          aria-describedby="search"
          v-model="search"
        />
      </div>
      <div class="input-group mb-3 container-sm">
        <label class="input-group-text" for="categories">Categories</label>
        <select class="form-select" id="categories" v-model="category">
          <option selected></option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
        <button @click="loadData(search,category)"  class="btn btn-secondary mb-3 text-uppercase">Search</button>
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
      <div v-if="products.length">
        <ProductCards :products="products"></ProductCards>
      </div>
      <div v-else>
        <p>No products available</p>
      </div>
  </div>
</template>

<script>
import getProducts from "../composables/getProducts.js";
import ProductCards from "../components/ProductCards.vue";
import { onBeforeUnmount, ref, } from "vue";

export default {
  components: {
    ProductCards,
  },
  setup() {
    console.log("setup home");

    let showProducts = ref(true);
    const category = ref("");
    const search = ref("");
    const { products, error, loadData } = getProducts();
    
    return { products, error, showProducts, search, category, loadData };
  },
};
</script>

<style>
</style>