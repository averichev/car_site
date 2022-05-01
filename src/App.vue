<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link :to="{ name: 'home'}"
                     class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link :to="{ name: 'home'}" class="nav-link px-2" exact-active-class="text-secondary">Главная
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'create_car'}" class="nav-link px-2" exact-active-class="text-secondary">Добавить автомобиль
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'brand_list'}" class="nav-link px-2" exact-active-class="text-secondary">Бренды</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about'}" class="nav-link px-2" exact-active-class="text-secondary">О
              проекте
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div class="container pt-5">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

</style>
