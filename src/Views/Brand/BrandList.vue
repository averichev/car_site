<template>
  <h1>Бренды</h1>
  <router-link class="btn btn-sm btn-outline-info" :to="{ name: 'create_brand'}">
    <i class="fas fa-plus"></i>
    Добавить бренд
  </router-link>
  <table class="table table-striped w-auto">
    <thead>
    <tr>
      <th>
        Id
      </th>
      <th>
        Название
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="brand in brands" :key="brand.id">
      <td>{{ brand.id }}</td>
      <td>{{ brand.name }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BrandList",
  data() {
    return {
      brands: []
    }
  },
  mounted() {
    const self = this
    this.$httpClient
        .get('/api/brands')
        .then((response) => {
          self.brands = response.data.list
        })
  }
}
</script>