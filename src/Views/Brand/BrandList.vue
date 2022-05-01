<template>
  <h1>Бренды</h1>
  <router-link class="btn btn-sm btn-outline-info" :to="{ name: 'create_brand'}">
    <i class="fas fa-plus"></i>
    Добавить бренд
  </router-link>
</template>

<script>
export default {
  name: "BrandList"
}
</script>

<style scoped>

</style>