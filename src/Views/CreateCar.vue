<template>
  <h1>Добавление автомобиля</h1>
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
</template>

<script>
import {BFormGroup} from "bootstrap-vue-3";

export default {
  name: "CreateCar",
  components: {BFormGroup},
  data() {
    return {
      form: {
        name: null,
        seatsCount: null,
        url: null,
        body: null,
        brand: null
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
  },
  methods: {
    onSubmit() {
      const router = this.$router
      this.$httpClient
          .post('/api/cars/add', this.form)
          .then((response) => {
            if (response.data["isSuccess"] === true) {
              router.push({name: 'home'})
            }
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }

}
</script>