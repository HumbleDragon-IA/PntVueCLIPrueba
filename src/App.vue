<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a VUE CLI</h1>
      <h2>Componente Principal (App)</h2>
      <br>

      <Binding />
      <Estructura/>
      <Atributos />
  </div>
</div>
  
</template>

<script>
import Binding from './componentes/Binding.vue'
import Estructura from './componentes/Estructura.vue'
import Atributos  from './componentes/Atributos.vue'

export default {
  name: 'App',
  components: {
    Binding,
    Estructura,
    Atributos,
  }
}
</script>

<style>
h1 {
  color: crimson;
}
h2{
  color: blue;
}
</style>
