<template >

  <section class="src-componentes-atributos">
    <div class="jumbotron">
      <h1>Atributos</h1>
      <hr>

      <!-- ------------- -->
      <!--      :style   -->
      <!-- ------------- -->
<h4><u>:Style</u></h4>

<button class="btn btn-success my-3" @click="estado1=!estado1">Cambiar</button>
<p :style="{'background-color': estado1? 'green': 'crimson', color: 'white', borderRadius: '10px', padding: '10px'}">
  LALALALALALA
</p>

<hr>
      <!-- ------------- -->
      <!--      :class   -->
      <!-- ------------- -->

<h4><u>:Class</u></h4>

<button class="btn btn-success my-3" @click="estado2=!estado2">Cambiar</button>

<p :class="[btn,'p-3',{'btn-success my-3': estado2 , 'btn-danger my-3':!estado2 }]">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ea maiores animi provident cupiditate similique, omnis ad harum sapiente maxime obcaecati dolore pariatur aut id quos deserunt blanditiis, vitae illum.
</p>



    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-atributos',
    props: [],
    mounted () {

    },
    data () {
      return {
estado1: true,
estado2: true,


      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
  background: turquoise;
  color: white;
}

h1 {
  color: white;
}
hr {
  background-color: #eee;
}
</style>
