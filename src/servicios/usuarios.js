const url ="https://665a0e1cde346625136eea10.mockapi.io/usuarios/usuarios/"
import axios from 'axios'

/* export const get = cb => {
    axios.get(url)
     .then(response => {
      const datos = response.data
        console.log(datos)
        cb(datos)
    }).catch(error => {
      console.error("hubo un error", error)
    })
}; */

export const getAll = async () => {
    try{
    const { data: usuarios } = await axios.get(url)
        return usuarios
    }
    catch(error) {
        console.error("Error Usuarios GET", error)
        return []
    }


};

export const post = async usuario  => {
    try{
    const { data: usuarioGuardado } = await axios.post(url, usuario)
        return usuarioGuardado
    }
    catch(error) {
        console.error("Error Usuarios POST", error)
        return {}
    }


};

export const put = async (id, usuario)  => {
    try{
    const { data: usuarioActualizado } = await axios.put(url+id, usuario)
        return usuarioActualizado
    }
    catch(error) {
        console.error("Error Usuarios PUT", error)
        return {}
    }


};

export const del = async (id)  => {
    try{
    const { data: usuarioEliminado } = await axios.delete(url+id)
        return usuarioEliminado
    }
    catch(error) {
        console.error("Error Usuarios PUT", error)
        return {}
    }


};
