<template >

  <section class="src-componentes-estructura">
    <div class="jumbotron">
      <h1>Estructura</h1>
      <hr>

      <!-- -------------------- -->
      <!-- -------v-if--------- -->
      <!-- -------------------- -->
      <h4><u>v-if</u></h4>

      <button class="btn btn-warning"  my-3 @click="mostrar=!mostrar">
        {{ mostrar ? 'Ocultar':'Mostrar'}}
      </button>
      
      <p v-if="mostrar" class="alert alert-warning my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam mollitia harum pariatur? Iure maiores enim corporis officiis officia asperiores doloremque quia, voluptatum, suscipit assumenda, tenetur sequi dolor unde dolorem iusto!

     </p>

      <p v-else class="alert alert-danger">ELEMENTO REMOVIDO</p>

      <!-- -------------------- -->
      <!-- -------v-show--------- -->
      <!-- -------------------- -->
      <h4><u>v-show</u></h4>

      <button class="btn btn-warning"  my-3 @click="cambiarVisibilidad()">
        {{ obtenerTituloVisibilidad() }}
      </button>
      
      <p v-show="visibilidad()" class="alert alert-info my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam mollitia harum pariatur? Iure maiores enim corporis officiis officia asperiores doloremque quia, voluptatum, suscipit assumenda, tenetur sequi dolor unde dolorem iusto!

      </p>

      <!-- -------------------- -->
      <!-- -------v-for--------- -->
      <!-- -------------------- -->
      <h4><u>v-for</u></h4>

      <ul>


      </ul>
      <li v-for="(usuario, index) in usuarios" :key="index">
        {{index+1}} - {{ usuario }}
      </li>      
      <hr>

<button class="btn btn-warning my-3" @click="agregarAlumno()">Agregar Alumno</button>      
<div v-if="alumnos.length">
      <li v-for="(alumno, index) in alumnos" :key="index">
        <!-- {{ index+1 }} - {{alumno.nombre}} -  {{alumno.apellido }} -->
        {{ index+1+'-'+ alumno.nombre+' '+ alumno.apellido }}
      
      </li> 
<hr>
<div class="table-responsive">
  <table class="table table-dark">
  <tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Edad</th>
    <th>Curso</th>
    <th>Foto</th>

    </tr>
    
    <tr v-for="(alumno, index) in alumnos" :key="index">
      <td>{{ alumno.nombre }}</td>
      <td>{{ alumno.apellido }}</td>
      <td>{{ alumno.edad }}</td>
      <td>{{ alumno.curso? 'Si':'No' }}</td>
      <td>
        <img :src="alumno.foto" :alt="alumno.nombre" width="50">
        </td>
    </tr>
</table>
<h4 class="alert alert-primary">
  <span v-if="obtenerDatosAlumnos.cantidad==0">Ningun alumno hizo el curso</span>
  <span v-else-if="obtenerDatosAlumnos.cantidad===obtenerDatosAlumnos.total">Todos los alumnos hicieron el curso</span>
<span v-else >{{ obtenerDatosAlumnos.cantidad }} de {{ obtenerDatosAlumnos.total }} hicieron el curso   </span>
</h4>
</div>
<hr>
<br>
<div v-for="(alumno, index) in alumnos" :key="index"  class="media">
<img :src="alumno.foto" width="150" class="mr-3" :alt="alumno.nombre">
  <div class="media-body">
  <h5 class="mt-0" mb="3"><u>Orden:</u> {{ index+1 }}</h5>

  <p> Nombre: <a :href="alumno.foto">{{alumno.nombre}} {{ alumno.apellido }}</a> </p>
 
  <p>Edad: <i>{{ alumno.edad }}</i></p>
  Hizo el Curso: <input type="checkbox" v-model="alumno.curso">
  <button class="btn btn-danger mx-3" @click="borrarAlumno(index)">Borrar</button>
  </div>
</div>

    </div>
    <h4 v-else class="alert alert-danger">No se encontraron alumnos</h4>

</div>

    
    
  </section>

</template>

<script lang="js">



  export default  {
    name: 'src-componentes-estructura',
    props: [],
    mounted () {

    },
    data () {
      return {
        mostrar:true,
        mostrar2:true,
        usuarios: [
          'Pedro',
          'Juan',
          'Ana',
          'Laura'
        ],
        alumnos:[
          {nombre: 'Pedro', apellido:'Mei', edad:32, curso:true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png'},
          {nombre: 'Juan', apellido:'Blanco', edad:24, curso:false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'},
          {nombre: 'Ana', apellido:'Perez', edad:31, curso:false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'},
          {nombre: 'Laura', apellido:'Lopez', edad:26, curso:true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-512.png'},
        ]
      }

    },
    methods: {
      cambiarVisibilidad(){
        this.mostrar2=!this.mostrar2;
      },
      obtenerTituloVisibilidad(){
        return this.mostrar2 ? 'Ocultar':'Mostrar'
      },
      visibilidad(){
        return this.mostrar2;
      },
      borrarAlumno(index){
      this.alumnos.splice(index,1)
      },
      agregarAlumno(){
        const alumno ={
          nombre: "Pablo",
          apellido:"Gutierrez",
          edad: 31,
          curso: false,
          foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png',
        }
        this.alumnos.push(alumno)
        }
      
    },
    computed: {
      obtenerDatosAlumnos(){
        let cant =0;
        this.alumnos.forEach(alumno =>{
          if(alumno.curso) cant++
        })
        return {cantidad: cant,
          total: this.alumnos.length
        }
      },
    }
}


</script>

<style scoped lang="css">
 .jumbotron {
  background: pink;
  color: brown;
}

h1 {
  color: brown;
}
hr {
  background-color: 
  black;
}

.table td, .table th{
  vertical-align: middle;
}
</style>
