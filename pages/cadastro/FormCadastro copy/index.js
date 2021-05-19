import React from "react";
import styles from "./styles.module.css";

export default function FormCadastro() {
  const [data, setData] = React.useState("");
  const [cpf, setCpf] = React.useState(false);

  function getCep({ target }) {
    const cep = target.value?.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((r) => r.json())
      .then((json) => setData(json));
  }

  function validateCpf({ target }) {
    const cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
  }

  function validateAll(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.form}>
      <label htmlFor="name">Nome*</label>
      <input type="text" placeholder="Nome" id="name" required />

      <label htmlFor="birthYear">Data de Nascimento*</label>
      <input type="date" id="birthYear" required />

      <label htmlFor="cpf">CPF*</label>
      <input
        type="text"
        placeholder="***.***.***-**"
        id="cpf"
        onBlur={validateCpf}
        required
      />

      <label htmlFor="cep">CEP*</label>
      <input
        type="text"
        placeholder="******-***"
        id="cep"
        name="cep"
        onBlur={getCep}
        required
      />

      <label htmlFor="rua">Rua*</label>
      <input
        type="text"
        placeholder="Rua"
        id="rua"
        name="logradouro"
        value={data?.logradouro}
        required
      />

      <label htmlFor="bairro">Bairro*</label>
      <input
        type="text"
        placeholder="Bairro"
        id="bairro"
        name="bairro"
        value={data?.bairro}
        required
      />

      <label htmlFor="numero">Número*</label>
      <input
        type="text"
        placeholder="Número"
        id="numero"
        name="numero"
        required
      />

      <label htmlFor="cidade">Cidade*</label>
      <input
        type="text"
        placeholder="Cidade"
        id="cidade"
        name="localidade"
        value={data?.localidade}
        required
      />

      <label htmlFor="estado">Estado*</label>
      <input
        type="text"
        placeholder="Estado"
        id="estado"
        name="uf"
        value={data?.uf}
        required
      />

      <button type="submit" onClick={validateAll}>
        Finalizar Cadastro
      </button>
      <p>* Campos requiridos</p>
    </form>
  );
}
