<template>
  <h1>Список авто</h1>
  <router-link class="btn btn-outline-info" :to="{ name: 'create_car'}">
    <i class="fas fa-plus"></i>
    Добавить
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
      <th>
        Количество мест
      </th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="car in cars" :key="car.id">
      <td>{{ car.id }}</td>
      <td>{{ car.name }}</td>
      <td>{{ car.seatsCount }}</td>
      <td>
        <div class="d-flex">
          <div class="me-2">
            <router-link class="btn btn-primary btn-sm" :to="{ name: 'car_edit', params: { id: car.id }}">
              <i class="fas fa-pencil-alt"></i>
            </router-link>
          </div>
          <div>
            <b-button class="btn btn-danger btn-sm" v-on:click="deleteItem(car.id)">
              <i class="fas fa-trash-alt"></i>
            </b-button>
          </div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {BButton} from "bootstrap-vue-3";

export default {
  name: "CarList",
  components: {BButton},
  data() {
    return {
      cars: []
    }
  },
  mounted() {
    const self = this
    this.$httpClient
        .get('/api/cars')
        .then((response) => {
          self.cars = response.data.list
        })
  },
  methods: {
    deleteItem(carId) {
      const self = this
      this.$httpClient
          .delete(`/api/cars/${carId}/delete`)
          .then(() => {
            self.cars = self.cars.filter(function (item) {
              return item.id !== carId
            })
          })
          .catch((e) => {
            alert(e.message)
          })
    }
  }
}
</script>