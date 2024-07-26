<template>
  <nav class="navbar custom-navbar">
    <div class="container d-flex justify-content-start">
      <router-link to="/" class="navbar-brand">
      <img class="cursor-pointer me-3" src="./iconsComponent/logo-demander.png" alt="" />
    <span>Página inicial</span>  
    </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.custom-navbar {
  padding: 10px 0px;
  background-image: linear-gradient(to bottom right, #FF3E9D, #0E1F40);
  border-radius: 20px;
  margin: 10px 10px 0;

  img {
    height: 40px;
  }

  span {
    color: #fff;
  }
}
</style>
