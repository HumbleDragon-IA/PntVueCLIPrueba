<template >
<section class="src-componentes-navbar">
<button class="btn btn-info my-3" @click="goToContadores">Ir a Contadores</button>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
        <RouterLink class="nav-link" to="/binding">Binding</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/estructura">Estructura</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/atributos">Atributos</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/contadores">Contadores</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/formulario">Formulario</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/api">Api</RouterLink>
      </li>
    </ul>
    
  </div>
</nav>
</section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      goToContadores(){
        this.$router.push('/contadores')
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-navbar {

  }
</style>
