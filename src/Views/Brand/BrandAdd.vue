<template>
  <h1>Добавление бренда</h1>
  <div class="row">
    <div class="col-md-4 m-auto">
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-2" label="Название" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="form.name"
              required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Сохранить</b-button>
      </b-form>
    </div>
  </div>

</template>

<script>
export default {
  name: "BrandAdd",
  data() {
    return {
      form: {name: null}
    }
  },
  methods: {
    onSubmit() {
      const router = this.$router
      this.$httpClient
          .post('/api/brands/add', this.form)
          .then((response) => {
            if (response.data["isSuccess"] === true) {
              router.push({name: 'brand_list'})
            }
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>