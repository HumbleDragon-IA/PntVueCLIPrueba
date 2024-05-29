export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
      enviar(){

        console.log({...this.formData})
        this.formData = this.getInicialData();
        this.formDirty=this.getInicialData();
      },
      getInicialData() {
        return {
          
            nombre: null,
            apellido: null,
            edad: null,
            email: null,
            password: null,
          
        }
      },
      

      habilitado(){
        return this.nombreOk() && this.apellidoOk() && this.edadOk() && this.emailOk() && this.passOk()
      },

      nombreOk() {
        return  this.formData.nombre!=null && (this.formData.nombre || this.formData.nombre.length >= 3 || this.formData.nombre.length <10)
      },
      apellidoOk() {
        return this.formData.apellido!=null && (this.formData.apellido || this.formData.apellido.length >= 3 || this.formData.apellido.length <10)
      },
      edadOk() {
        return this.formData.edad>0 && this.formData.edad<=120
      },
      emailOk() {
        return !!this.formData.email
      },
      passOk() {
        return !!this.formData.password
      },
  }
}


