<template>
  <main class="container d-flex flex-wrap justify-content-center pt-5">
    <div
      @click="openPage('/number-convesion')"
      class="card align-items-center pt-4 col-6 col-lg-6 col-xl-6"
    >
      <div class="d-flex flex-column align-items-center">
        <i class="ri-arrow-left-right-fill mb-4"></i>
        <span class="mx-5">Conversão entre números romano e algoritmos arábicos</span>
      </div>
    </div>

    <div @click="openPage('/treemap')" class="card align-items-center pt-4 col-6 col-lg-6 col-xl-6">
      <div class="d-flex flex-column align-items-center">
        <i class="ri-line-chart-fill mb-4"></i>
        <span>Gráfico Treemap</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    openPage(page) {
      this.$router.push(page)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 30px auto;
  width: 270px;
  height: 270px;
  border-radius: 40px;
  box-shadow:
    5px 5px 30px 7px rgba(61, 61, 61, 0.25),
    -5px -5px 30px 7px rgba(61, 61, 61, 0.22);
  cursor: pointer;
  transition: 0.4s;
  background-color: rgb(255, 230, 230);

  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow:
      5px 5px 30px 15px rgba(255, 64, 64, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }

  span {
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }
}

i {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  width: 50px;
  font-size: 30px !important;
  background: linear-gradient(#e66465, #9198e5);
}
</style>
