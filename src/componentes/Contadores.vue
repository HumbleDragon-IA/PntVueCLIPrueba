<template >

  <section class="src-componentes-contadores">
      <Contador ini="123" fondo="success"/>
      <Contador ini="456" fondo="warning" />
      <Contador ini="789" fondo="danger" />
  </section>

</template>

<script lang="js">
import Contador  from './Contador/index.vue'

  export default  {
    name: 'src-componentes-contadores',
    components: {
      Contador,
    },
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-contadores {
    margin: 20px 0;
  }
</style>
