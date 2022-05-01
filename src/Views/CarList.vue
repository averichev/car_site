<template>
  <h1>Список авто</h1>
  <router-link class="btn btn-outline-info" :to="{ name: 'create_car'}">
    <i class="fas fa-plus"></i>
    Добавить
  </router-link>
</template>

<script>
export default {
  name: "CarList"
}
</script>

<style scoped>

</style>