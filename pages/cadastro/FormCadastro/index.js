import React from "react";
import styles from "./styles.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "../../schema";

export default function FormCadastro() {
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

  function validateCpf({ target }) {
    const cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
  }

  function submit(values, actions) {
    console.log("submit", values);
  }

  return (
    <div>
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
          <Form className={styles.form}>
            <label htmlFor="name">Nome</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />

            <label htmlFor="birthYear">Data de Nascimento*</label>
            <Field type="date" id="birthYear" name="birthYear" />
            <ErrorMessage name="birthYear" />

            <label htmlFor="cpf">CPF</label>
            <Field
              type="number"
              placeholder="***.***.***-**"
              id="cpf"
              name="cpf"
              onBlur={validateCpf}
            />
            <ErrorMessage name="cpf" />

            <label htmlFor="cep">CEP</label>
            <Field
              type="text"
              placeholder="******-***"
              id="cep"
              name="cep"
              onBlur={(e) => getCep(e, setFieldValue)}
            />
            <ErrorMessage name="cep" />

            <label htmlFor="logradouro">Rua</label>
            <Field type="text" id="logradouro" name="logradouro" />
            <ErrorMessage name="logradouro" />

            <label htmlFor="bairro">Bairro</label>
            <Field type="text" id="bairro" name="bairro" />
            <ErrorMessage name="bairro" />

            <label htmlFor="numero">Número</label>
            <Field type="text" id="numero" name="numero" />
            <ErrorMessage name="numero" />

            <label htmlFor="cidade">Cidade</label>
            <Field type="text" id="cidade" name="cidade" />
            <ErrorMessage name="cidade" />

            <label htmlFor="estado">Estado</label>
            <Field type="text" id="estado" name="estado" />
            <ErrorMessage name="estado" />

            <button type="submit" disabled={!isValid}>
              Finalizar Cadastro
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
