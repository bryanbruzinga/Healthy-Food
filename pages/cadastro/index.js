import FormCadastro from "./FormCadastro";
import HeaderCadastro from "./HeaderCadastro";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Cadastro() {
  return (
    <section className={styles.RegisterSectionContainer}>
      <HeaderCadastro />
      <h2>Register Yourself</h2>
      <div className={styles.RegisterContent}>
        <FormCadastro />
        <Image
          src="/register.png"
          alt="healthy food"
          width={500}
          height={500}
          objectFit="responsive"
        />
      </div>
    </section>
  );
}
