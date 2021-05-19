import styles from "./styles.module.css";

export default function FormCadastro() {
  return (
    <form className={styles.form}>
      <label htmlFor="name">Nome</label>
      <input type="text" placeholder="Nome" id="name" />

      <label htmlFor="birthYear">Data de Nascimento</label>
      <input type="date" id="birthYear" />

      <label htmlFor="cpf">CPF</label>
      <input type="number" placeholder="***.***.***-**" id="cpf" />

      <label htmlFor="cep">CEP</label>
      <input type="number" placeholder="******-***" id="cep" name="cep" />

      <label htmlFor="rua">Rua</label>
      <input type="text" placeholder="Rua" id="rua" name="logradouro" />

      <label htmlFor="bairro">Bairro</label>
      <input type="text" placeholder="Bairro" id="bairro" name="bairro" />

      <label htmlFor="cidade">Cidade</label>
      <input type="text" placeholder="Cidade" id="cidade" name="localidade" />

      <label htmlFor="estado">Estado</label>
      <input type="text" placeholder="Estado" id="estado" name="uf" />

      <button type="submit" onChange={() => getCep()}>
        Finalizar Cadastro
      </button>
    </form>
  );
}
