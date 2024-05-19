<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a VUE CLI</h1>
      <h2>Componente Principal (App)</h2>
      <br>

      <Binding />
      <Estructura/>
      <Atributos />

      <Formulario />

      <Contador ini="123" fondo="success"/>
      <Contador ini="456" fondo="warning" />
      <Contador ini="789" fondo="danger" />
  </div>
</div>
  
</template>

<script>
import Binding from './componentes/Binding.vue'
import Estructura from './componentes/Estructura.vue'
import Atributos  from './componentes/Atributos.vue'
import Contador  from './componentes/Contador/index.vue'
import Formulario  from './componentes/Formulario/index.vue'

export default {
  name: 'App',
  components: {
    Binding,
    Estructura,
    Atributos,
    Contador,
    Formulario
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
