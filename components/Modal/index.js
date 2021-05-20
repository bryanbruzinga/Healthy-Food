import styles from "./styles.module.css";
import { MdDone } from "react-icons/md";

export default function Modal() {
  return (
    <div className={styles.modalContainer}>
      <MdDone />
      <p>Cadastro realizado com sucesso!</p>
    </div>
  );
}
