<template>
  <h1>Кузова</h1>
  <router-link class="btn btn-sm btn-outline-info" :to="{ name: 'create_body'}">
    <i class="fas fa-plus"></i>
    Добавить тип кузова
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
    <tr v-for="body in bodies" :key="body.id">
      <td>{{ body.id }}</td>
      <td>{{ body.name }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BodyList",
  data() {
    return {
      bodies: []
    }
  },
  mounted() {
    const self = this
    this.$httpClient
        .get('/api/bodies')
        .then((response) => {
          self.bodies = response.data.list
        })
  }
}
</script>