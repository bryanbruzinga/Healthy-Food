import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().min(2).required(),
  birthYear: Yup.date(),
  cpf: Yup.string().required().min(10),
  cep: Yup.string().required().min(8),
  logradouro: Yup.string().min(2).required(),
  bairro: Yup.string().min(2).required(),
  numero: Yup.string().min(2).required(),
  cidade: Yup.string().min(2).required(),
  estado: Yup.string().min(2).required(),
});
