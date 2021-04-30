import axios from 'axios';

const states = async () => {
  try {
      const {data} = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
       return data.map((estado)=>({
           label:estado.sigla,
           value:estado.sigla,
       })) 
    } catch (error) {
        console.error(error)
    }
};

const cities = async (state) => {
  try {
    const {data} = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
    return data.map((cidade)=>({
        label:cidade.nome,
        value:cidade.nome,
    })) 
  } catch (error) {
      console.error(error);
  }
};

export {states,cities};
