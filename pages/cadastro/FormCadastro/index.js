import React from "react";
import styles from "./styles.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "../../../helpers/schema";
import Modal from "../../../components/Modal";
import { Bounce } from "react-reveal";

export default function FormCadastro() {
  const [modalOpen, setModalOpen] = React.useState(false);

  function getCep({ target }, setFieldValue) {
    const cep = target.value?.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((r) => r.json())
      .then((json) => {
        setFieldValue("bairro", json.bairro);
        setFieldValue("logradouro", json.logradouro);
        setFieldValue("cidade", json.localidade);
        setFieldValue("estado", json.uf);
      });
  }

  function submit(values) {
    setModalOpen(true);
    localStorage.setItem("formulario", JSON.stringify(values));
    document.cookie = `formulario=${JSON.stringify(values)}`;
    setTimeout(() => {
      setModalOpen(false);
      window.location.href = "/";
    }, 2000);
  }

  return (
    <div>
      {modalOpen && <Modal />}
      <Formik
        validationSchema={schema}
        onSubmit={submit}
        initialValues={{
          name: "",
          birthYear: "",
          cpf: "",
          cep: "",
          logradouro: "",
          bairro: "",
          numero: "",
          cidade: "",
          estado: "",
        }}
      >
        {({ isValid, setFieldValue }) => (
          <Bounce left>
            <Form className={styles.form}>
              <div>
                <label htmlFor="name">Nome</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" />
              </div>

              <div className={styles.formInputSmall}>
                <div>
                  <label htmlFor="birthYear">Data de Nascimento</label>
                  <Field type="date" id="birthYear" name="birthYear" />
                  <ErrorMessage name="birthYear" />
                </div>

                <div>
                  <label htmlFor="cpf">CPF</label>
                  <Field
                    type="text"
                    placeholder="***.***.***-**"
                    id="cpf"
                    name="cpf"
                  />
                  <ErrorMessage name="cpf" />
                </div>

                <div>
                  <label htmlFor="cep">CEP</label>
                  <Field
                    type="text"
                    placeholder="******-***"
                    id="cep"
                    name="cep"
                    onBlur={(e) => getCep(e, setFieldValue)}
                  />
                  <ErrorMessage name="cep" />
                </div>
              </div>

              <div>
                <label htmlFor="logradouro">Rua</label>
                <Field type="text" id="logradouro" name="logradouro" />
                <ErrorMessage name="logradouro" />
              </div>

              <div>
                <label htmlFor="bairro">Bairro</label>
                <Field type="text" id="bairro" name="bairro" />
                <ErrorMessage name="bairro" />
              </div>

              <div className={styles.formInputSmall}>
                <div>
                  <label htmlFor="numero">Número</label>
                  <Field type="text" id="numero" name="numero" />
                  <ErrorMessage name="numero" />
                </div>

                <div>
                  <label htmlFor="cidade">Cidade</label>
                  <Field type="text" id="cidade" name="cidade" />
                  <ErrorMessage name="cidade" />
                </div>

                <div>
                  <label htmlFor="estado">Estado</label>
                  <Field type="text" id="estado" name="estado" />
                  <ErrorMessage name="estado" />
                </div>
              </div>

              <button type="submit" disabled={!isValid}>
                Finalizar Cadastro
              </button>
            </Form>
          </Bounce>
        )}
      </Formik>
    </div>
  );
}
