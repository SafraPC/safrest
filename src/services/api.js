import axios from 'axios'

//Model for requisitions with axios: 
/*
 try {
        await api.post("/job/create", {professionalName, professionalContact, title, description, jobTypes, link});
        toast.success("¡Enviado para validación!",TOASTIFY_OPTIONS)
      } catch (error) {
        toast.error("¡Hubo un error! Inténtalo de nuevo.",TOASTIFY_OPTIONS)
      
      }
*/ 

const  api = axios.create({
    baseURL:`${process.env.REACT_APP_BACKEND_API}`
})

export default api