<template>
  <div class="card p-3 shadow-sm mb-4">
    <h5 class="mb-3">Nuevo Contacto</h5>
    <form @submit.prevent="guardar">
      <div class="row g-2">
        <div class="col-md-6">
          <input type="text" v-model="form.name" class="form-control" placeholder="Nombre" required />
        </div>
        <div class="col-md-6">
          <input type="email" v-model="form.email" class="form-control" placeholder="Correo electrónico" required />
        </div>
        <div class="col-md-6">
          <input type="text" v-model="form.phone" class="form-control" placeholder="Teléfono" />
        </div>
        <div class="col-md-6">
          <input type="text" v-model="form.address" class="form-control" placeholder="Dirección" />
        </div>
        <div class="col-md-6">
          <input type="text" v-model="form.city" class="form-control" placeholder="Ciudad" />
        </div>
        <div class="col-md-6">
          <input type="text" v-model="form.country" class="form-control" placeholder="País" />
        </div>
      </div>
      <button type="submit" class="btn btn-success mt-3">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: ''
      }
    }
  },
  methods: {
    guardar() {
      this.$emit('guardar', { ...this.form })
      this.form = {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: ''
      }
    }
  }
}
</script>