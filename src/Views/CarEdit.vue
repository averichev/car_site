<template>
  <div>
    <h1>Редактирование автомобиля</h1>
    <div class="row">
      <div class="col-md-4 m-auto">
        <b-form @submit="onSubmit">
          <b-form-group label="Кузов">
            <b-form-select v-model="form.body" :options="formData.bodies.list" value-field="id"
                           text-field="name"></b-form-select>
          </b-form-group>
          <b-form-group label="Бренд">
            <b-form-select v-model="form.brand" :options="formData.brands.list" value-field="id"
                           text-field="name"></b-form-select>
          </b-form-group>
          <b-form-group label="Название модели" label-for="name">
            <b-form-input
                id="name"
                v-model="form.name"
                required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Число сидений" label-for="seatsCount">
            <b-form-input
                id="seatsCount"
                v-model="form.seatsCount"
                required
                type="number"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Url" label-for="url">
            <b-form-input
                id="url"
                v-model="form.url"
                required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Сохранить</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import {BFormGroup} from "bootstrap-vue-3";

export default {
  name: "CarEdit",
  components: {BFormGroup},
  data() {
    return {
      form: {
        name: null,
        seatsCount: null,
        url: null,
        body: null,
        brand: null,
        brandName: null,
        bodyName: null
      },
      formData: {
        brands: {
          list: []
        },
        bodies: {
          list: []
        }
      }
    }
  },
  mounted() {
    const self = this
    this.$httpClient
        .get('/api/cars/form')
        .then((response) => {
          self.formData = response.data
        })
    this.fetchData()
  },
  methods: {
    fetchData() {
      const self = this
      const carId = this.$route.params.id
      this.$httpClient
          .get(`/api/cars/${carId}`)
          .then((response) => {
            self.form = response.data
          })
    },
    onSubmit() {
      const carId = this.$route.params.id
      const router = this.$router
      this.$httpClient
          .post(`/api/cars/${carId}/edit`, this.form)
          .then(() => {
            router.push({name: 'home'})
          })
          .catch((error) => {
            if (error.response.status === 422) {
              alert(error.response.data.errors.join(''))
            }
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>

</style>