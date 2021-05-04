import * as yup from 'yup';

export  const workSchema =  yup.object().shape({
    name: yup
      .string("Need to be an Text!")
      .min(4, "Min text is 4!")
      .max(30, "Max Text is 30!")
      .required("Nome é requirido!"),
    age: yup.string().required().min(1).max(2),
    email: yup.string().email().required(),
    
    state: yup.string().ensure().required(),
    

  });