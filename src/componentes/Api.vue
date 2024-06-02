<template >

  <section class="src-componentes-api">
    <h1>Api</h1>
    <button class="btn btn-info my-3 mr-2" @click="getUsuarios">GET</button>
    <button class="btn btn-success my-3 mr-2" @click="postUsuario">POST</button>
    
   <!-- <pre> {{ usuarios }}</pre> -->
    <div v-if="usuarios.length" class="table-responsive">
  <table class="table table-dark">
  <tr>
    <th>id</th>
    <th>nombreCompleto</th>
    <th>email</th>
    <th>telefono</th>
    <th>acciones</th>
    
   

    </tr>
    
    <tr v-for="(usuario, index) in usuarios" :key="index">
      <td>{{ usuario.id }}</td>
      <td>{{ usuario.nombre }}</td>
      <td>{{ usuario.email }}</td>
      <td>{{ usuario.telefono }}</td>
  <td>
    <button class="btn btn-warning my-3 mr-2" @click="this.putUsuario(usuario.id)">PUT</button>
    <button class="btn btn-danger my-3 mr-2" @click="this.deleteUsuario(usuario.id)">delete</button>
  </td>
      
    </tr>
    
</table>

</div>  
  </section>

</template>

<script>
import * as serviciosUsuarios from '../servicios/usuarios'

  export default  {
    name: 'src-componentes-api',
    props: [],
    mounted () {
      //serviciosUsuarios.get(usuarios => this.usuarios = usuarios)
    },
    data () {
      return {
        
        usuarios: []

      }
    },
    methods: {

      async getUsuarios(){
        const usuarios = await serviciosUsuarios.getAll()
        this.usuarios= usuarios
        console.log('get')
      },

      async postUsuario(){
        const usuario = {
          "nombre":"Mr. Vicki Von",
          "email":"Johanna_Watsica@yahoo.com",
          "telefono":"612-901-1448 x77137",
          "id":"15"
        }
        
        const usuarioGuardado = await serviciosUsuarios.post(usuario)
        console.log(usuarioGuardado,"post")
        await this.usuarios.push(usuarioGuardado)
      },

      async putUsuario(id) {
        const usuario = {
          "nombre":"Lucas Benvin",
          "email":"luquitas@yahoo.com",
          "telefono":"12345678",
         }

        

        const usuarioActualizado = await serviciosUsuarios.put(id, usuario)
        console.log(usuarioActualizado,"post")
        const index = this.usuarios.findIndex(usuario => usuario.id === usuarioActualizado.id)
        this.usuarios.splice(index, 1, usuarioActualizado)

        console.log('put',id,usuario)

        //await this.getUsuarios()
      },

      async deleteUsuario(id){

        const usuarioEliminado = await serviciosUsuarios.del(id)
        console.log(usuarioEliminado,"post")
        
        const index = this.usuarios.findIndex(usuario => usuario.id === usuarioEliminado.id)
        this.usuarios.splice(index, 1)

       // await this.getUsuarios()
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-api th {

  text-transform: uppercase;
  }
  
</style>
