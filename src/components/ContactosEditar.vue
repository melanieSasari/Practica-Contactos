<template>
  <div class="card p-3 shadow-sm mb-4" v-if="contacto">
    <h5 class="mb-3">Editar Contacto</h5>
    <form @submit.prevent="modificar">
      <div class="row g-2">
        <div class="col-md-6">
          <input v-model="contacto.name" class="form-control" placeholder="Nombre" required />
        </div>
        <div class="col-md-6">
          <input v-model="contacto.email" type="email" class="form-control" placeholder="Correo" required />
        </div>
        <div class="col-md-6">
          <input v-model="contacto.phone" class="form-control" placeholder="Teléfono" />
        </div>
        <div class="col-md-6">
          <input v-model="contacto.address" class="form-control" placeholder="Dirección" />
        </div>
        <div class="col-md-6">
          <input v-model="contacto.city" class="form-control" placeholder="Ciudad" />
        </div>
        <div class="col-md-6">
          <input v-model="contacto.country" class="form-control" placeholder="País" />
        </div>
      </div>
      <div class="mt-3 d-flex gap-2">
        <button type="submit" class="btn btn-primary">Actualizar</button>
        <button type="button" class="btn btn-secondary" @click="$emit('cancelar')">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['contactoOriginal'],
  data() {
    return {
      contacto: { ...this.contactoOriginal }
    }
  },
  methods: {
    modificar() {
      this.$emit('modificar', { ...this.contacto })
    }
  }
}
</script>