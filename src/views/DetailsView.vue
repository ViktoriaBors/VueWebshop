<template>
  <div>
    <div v-if="product">
      <div class="container">
        <div class="card bg-light">
          <div class="card-header">
            <h3 class="card-title fw-bold text-success">{{ product.title }}</h3>
          </div>
          <div class="card-body mb-2">
            <p class="card-text">{{ product.category }}</p>
            <p class="card-text fw-bold">{{ product.price }} $</p>
            <hr />
            <p class="card-text mb-2 fw-bolder fst-italic">
              {{ product.description }}
            </p>
          </div>
          <img :src="product.image" class="card-img-top" alt="product.title" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Data is loading ...</p>
    </div>
  </div>
</template>

<script>
import getOneProduct from "../composables/getOneProduct.js";
export default {
  setup() {
    console.log("setup home");
    const { product, error, loadData } = getOneProduct(
      window.location.pathname
    );
    loadData();

    return { product, error };
  },
};
</script>

<style>
</style>