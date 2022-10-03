<template>
  <div>
    <div class="container bg-light mt-5">
      <div class="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div v-for="product in products" :key="product.id" class="" >

          <div class="col flexBox pb-3">
            <div class="card bg-light">
              <div class="card-header d-flex flex-column justify-content-center">
                <h3 class="card-title">{{ product.title }}</h3>
              </div>
              <div class="imgContainer d-flex flex-column justify-content-center">
              <img
                :src="product.image"
                class="card-img-top"
                alt="product.title"
              />
              </div>
              <div class="card-body d-flex flex-column justify-content-between">
                <p class="card-text text-uppercase">{{ product.category }}</p>
                <p class="card-text fw-bold">{{ product.price }} $</p>
                <hr />
                <router-link
                  :to="{ name: 'details', params: { id: product.id } }"
                >
                  <button type="button" class="btn btn-success text-decoration-none fw-bolder">
                    Read more
                  </button>
                </router-link>
              </div>
            </div>

            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style scoped>
.flexBox{
  height: 100%;
}
  .card {
    border: 1px solid gray;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
.card-header{
  height: 250px;
  width:100%;
}
.card-img-top {
  height: auto;
  width: 250px;
}
.imgContainer{
  height: 450px;
}

</style>