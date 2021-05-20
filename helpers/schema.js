import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().min(2).required("Campo necessário"),
  birthYear: Yup.date().required("Campo necessário"),
  cpf: Yup.string().required("Campo necessário").min(10).max(14, "Inválido"),
  cep: Yup.string().required("Campo necessário").min(8).max(9, "CEP inválido"),
  logradouro: Yup.string().min(2).required("Campo necessário"),
  bairro: Yup.string().min(2).required("Campo necessário"),
  numero: Yup.string().min(2).required("Campo necessário"),
  cidade: Yup.string().min(2).required("Campo necessário"),
  estado: Yup.string().min(2).required("Campo necessário"),
});
