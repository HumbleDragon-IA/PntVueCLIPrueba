<template >
  <section class="src-componentes-binding">
    <div class="jumbotron">
      <h2>Componente Binding</h2>
      <hr />

      <!-- ------------ -->
      <!-- Property Binding / v-bind -->
      <!-- ------------ -->

      <h4><u>Property Binding / v-bind</u></h4>
      <br />
      <input type="text" value="123" /><br />
      <input type="text" value="valor" /><br />
      <!-- no hay property binding -->
      <input type="text" v-bind:value="valor" /> {{ valor }}<br />
      <!--  hay property binding -->
      <input type="text" :value="valor" /> {{ valor
      }}<br /><!--  hay property binding (hace lo mismo de arriba pero mas reducida la sintaxis)-->
      <hr />

      <!-- -------------------- -->
      <!-- Event Binding / v-on -->
      <!-- -------------------- -->
      <h4><u>Event Binding / v-on</u></h4>
      <br />
      <button class="btn btn-success my-3 mr-2" v-on:click="contador++">
        Contador {{ contador }}
      </button>
      <button class="btn btn-warning my-3 mr-2" v-on:click="contador2++">
        Contador {{ contador2 }}
      </button>
      <button class="btn btn-danger my-3 mr-2" v-on:click="incrementar()">
        Contador {{ getContador() }}
      </button>
      <hr />
      <!-- -------------------- -->
      <!-- Doble Data Binding / v-model -->
      <!-- -------------------- -->

      <h4><u>Event Binding / v-on</u></h4>
      <br />

      <h5>Manual</h5>
      <input type="text" :value="valor2" @input="actualizar($event)" />
      {{ valor2 }}<br />
      <br />
      <h5>Automatico</h5>
      <input type="text" v-model="valor3" /> {{ valor3 }}<br />
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-binding',
    props: [],
    mounted () {

    },
    data () {
      return {
        mensaje: "Soy un mensaje",
            mensajeHTML: "<i>Soy un mensaje</i>",
            valor: 456,
            valor2: 789,
            valor3: 321,
            contador:0,
            contador2: 456,
            contador3: 789,
      }
    },
    methods: {
      incrementar(){
            this.contador3++;
        },
        getContador(){
            return this.contador3;
        },
        actualizar(e){
            //console.log("actualizar",e)
            const dato = e.target.value
            console.log(dato)
            this.valor2=dato
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.jumbotron {
  background: blue;
  color: white;
}

h2 {
  color: white;
}
hr {
  background-color: #eee;
}
</style>
