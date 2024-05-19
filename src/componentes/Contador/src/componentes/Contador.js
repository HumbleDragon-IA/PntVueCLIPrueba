
export default {
  name: 'src-componentes-contador',
  components: {},
  props: ['ini', 'fondo'],
  data () {
    return {
      contador:this.ini,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getColorFondo(){
      return `btn-${this.fondo}`
    },
    contar(){
      this.contador++;
    }
  }
}


