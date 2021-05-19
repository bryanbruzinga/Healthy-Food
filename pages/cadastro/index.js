import FormCadastro from "./FormCadastro";
import HeaderCadastro from "./HeaderCadastro";
import styles from "./styles.module.css";

export default function Cadastro() {
  return (
    <section className={styles.RegisterSectionContainer}>
      <HeaderCadastro />
      <h2>Register Yourself</h2>
      <FormCadastro />
    </section>
  );
}
