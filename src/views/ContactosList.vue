<template>
  <div class="container mt-4">

    <div class="mb-4">
      <ContactosCrear
        v-if="modo === 'crear'"
        @guardar="crearContacto"
      />
      <ContactosEditar
        v-if="modo === 'editar'"
        :contactoOriginal="contactoSeleccionado"
        @modificar="modificarContacto"
        @cancelar="modo = 'crear'"
      />
    </div>

    <div class="mb-3">
      <div class="input-group">
        <span class="input-group-text">Filtrar por país </span>
        <select v-model="filtroPais" class="form-select">
          <option disabled value="">-- Seleccionar --</option>
          <option value="">Todos</option>
          <option v-for="pais in paisesUnicos" :key="pais" :value="pais">
            {{ pais }}
          </option>
        </select>
      </div>
    </div>

    <div class="mb-3">
      <div class="input-group">
        <span class="input-group-text">Buscar por nombre </span>
        <input type="search" v-model="textoBusqueda" class="form-control" placeholder="Ej. Alice" />
      </div>
    </div>

    <table class="table table-bordered border-primary">
      <thead class="table-light">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Ciudad</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contacto in contactosFiltrados" :key="contacto.id">
          <td>{{ contacto.id }}</td>
          <td>{{ contacto.name }}</td>
          <td>{{ contacto.email }}</td>
          <td>{{ contacto.phone }}</td>
          <td>{{ contacto.city }}</td>
          <td>{{ contacto.country }}</td>
          <td>
            <button class="btn btn-sm btn-warning me-1" @click="editarContacto(contacto)">Editar</button>
            <button class="btn btn-sm btn-danger" @click="eliminarContacto(contacto)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import ContactosCrear from '@/components/ContactosCrear.vue'
import ContactosEditar from '@/components/ContactosEditar.vue'

export default {
  name: 'ContactosList',
  components: {
    ContactosCrear,
    ContactosEditar
  },
  data() {
    return {
      contactos: [],
      modo: 'crear',
      contactoSeleccionado: null,
      filtroPais: '',
      textoBusqueda: ''
    }
  },
  computed: {
    contactosFiltrados() {
      return this.contactos.filter(c =>
        (!this.filtroPais || c.country === this.filtroPais) &&
        (!this.textoBusqueda || c.name.toLowerCase().includes(this.textoBusqueda.toLowerCase()))
      )
    },
    paisesUnicos() {
      return [...new Set(this.contactos.map(c => c.country))].sort()
    }
  },
  methods: {
    cargarContactos() {
      axios.get(process.env.VUE_APP_API_URL + '/contacts')
        .then(res => {
          this.contactos = res.data
        })
    },
    crearContacto(data) {
      axios.post(process.env.VUE_APP_API_URL + '/contacts', data)
        .then(() => this.cargarContactos())
    },
    editarContacto(c) {
      this.contactoSeleccionado = c
      this.modo = 'editar'
    },
    modificarContacto(data) {
      axios.patch(process.env.VUE_APP_API_URL + '/contacts/' + data.id, data)
        .then(() => {
          this.modo = 'crear'
          this.cargarContactos()
        })
    },
    eliminarContacto(c) {
      if (confirm('¿Eliminar este contacto?')) {
        axios.delete(process.env.VUE_APP_API_URL + '/contacts/' + c.id)
          .then(() => this.cargarContactos())
      }
    }
  },
  mounted() {
    this.cargarContactos()
  }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
}
</style>