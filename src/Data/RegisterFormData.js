import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import RegSchema from "./RegisterFormValidation";
import CustomInput from "../components/CustomInputComponent";
import Select from "../components/SelectComponent";
import MultipleCheckBox from "../components/MultipleCheckBoxComponent";

const RegisterForm = ({ submit }) => {
  const [state, setState] = React.useState(false);

  return (
    <View style={{ paddingBottom: 40, paddingTop: 10 }}>
      <Formik
        validationSchema={RegSchema}
        initialValues={{
          criancaNome: "",
          criancaNascimento: "",
          criancaIdade: "",
          cuidadorNome: "",
          criancaSexo: "",
          cuidadorNascimento: "",
          cuidadorIdade: "",
          cuidadorAnosEstudo: "",
          cuidadorLocalGrupo: "",
          cuidadorEndereco: "",
          cuidadorCep: "",
          cuidadorCidade: "",
          cuidadorEstado: "",
          cuidadorTelefones: "",
          cuidadorNumeroFilhos: "",
          cuidadorFilhos0a6Anos: "",
          cuidadorPessoasMorando: "",
          cuidadorCasoReceba: "",
          cuidadorParentesco: "",
          cuidadorEscolaridade: "",
          cuidadorOcupacao: "",
          cuidadorPele: "",
          criancaPele: "",
          cuidadorReligiao: "",
          cuidadorSituacaoConjugal: "",
          cuidadorRecebeAuxilio: "",
          cuidadorRendaMensal: "",
          moraAtualmente: "",
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          submit(values);
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          touched,
          validateForm,
          handleBlur,
          setFieldValue,
          validateField,
        }) => (
          <>
            <View style={styles.box}>
              <Text
                style={{
                  fontWeight: "bold",

                  textTransform: "uppercase",
                  padding: 10,
                }}
              >
                Dados da criança:
              </Text>

              <CustomInput
                onBlur={handleBlur("criancaNome")}
                error={errors.criancaNome}
                touched={touched.criancaNome}
                value={values.criancaNome}
                placeholder="Nome completo:"
                onChangeText={handleChange("criancaNome")}
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />

              <CustomInput
                onBlur={handleBlur("criancaNascimento")}
                error={errors.criancaNascimento}
                touched={touched.criancaNascimento}
                value={values.criancaNascimento}
                placeholder="Nascimento:"
                onChangeText={handleChange("criancaNascimento")}
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />
              <CustomInput
                onBlur={handleBlur("criancaIdade")}
                error={errors.criancaIdade}
                touched={touched.criancaIdade}
                value={values.criancaIdade}
                placeholder="Idade:"
                onChangeText={handleChange("criancaIdade")}
                keyboardType="numeric"
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />
              <Select
                touched={touched.criancaSexo}
                style={styles.box1}
                styleTitle={styles.title}
                errors={errors.criancaSexo}
                data={[
                  { key: "Masculino", id: 0, checked: false },
                  { key: "Feminino", id: 1, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.criancaSexo = selected;
                }}
                title="Sexo:"
              />
              <Select
                touched={touched.criancaPele}
                style={styles.box1}
                styleTitle={styles.title}
                errors={errors.criancaPele}
                data={[
                  { key: "Branca", id: 0, checked: false },
                  { key: "Preta", id: 1, checked: false },
                  { key: "Amarela", id: 2, checked: false },
                  { key: "Indígena", id: 3, checked: false },
                  { key: "Prefiro não declarar", id: 4, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.criancaPele = selected;
                }}
                title="cor da pele/etnia:"
              />
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  fontWeight: "bold",

                  textTransform: "uppercase",
                  padding: 10,
                }}
              >
                Dados do cuidador:
              </Text>
              <CustomInput
                onBlur={handleBlur("cuidadorNome")}
                error={errors.cuidadorNome}
                touched={touched.cuidadorNome}
                value={values.cuidadorNome}
                placeholder="Nome completo:"
                onChangeText={handleChange("cuidadorNome")}
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />
              <CustomInput
                onBlur={handleBlur("cuidadorNascimento")}
                error={errors.cuidadorNascimento}
                touched={touched.cuidadorNascimento}
                value={values.cuidadorNascimento}
                placeholder="Nascimento:"
                onChangeText={handleChange("cuidadorNascimento")}
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />

              <CustomInput
                onBlur={handleBlur("cuidadorIdade")}
                error={errors.cuidadorIdade}
                touched={touched.cuidadorIdade}
                value={values.cuidadorIdade}
                placeholder="Idade:"
                onChangeText={handleChange("cuidadorIdade")}
                keyboardType="numeric"
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />
            </View>
            <Select
              touched={touched.cuidadorParentesco}
              style={styles.box}
              errors={errors.cuidadorParentesco}
              data={[
                { key: "Mãe biológica", id: 0, checked: false },
                { key: "Mãe adotiva", id: 1, checked: false },
                { key: "Madrastra", id: 2, checked: false },
                { key: "Pai biológico", id: 3, checked: false },
                { key: "Pai adotivo", id: 4, checked: false },
                { key: "Padrasto", id: 5, checked: false },
                { key: "Outro cuidador principal", id: 6, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorParentesco = selected;
                //validateField("EPVA_18");
              }}
              title="Parentesco da criança:"
            />
            <Select
              touched={touched.cuidadorEscolaridade}
              style={styles.box}
              errors={errors.cuidadorEscolaridade}
              data={[
                { key: "Ensino Fundamental Incompleto", id: 0, checked: false },
                { key: "Ensino Fundamental Completo", id: 1, checked: false },
                { key: "Ensino  Médio Incompleto", id: 2, checked: false },
                { key: "Ensino Médio Completo", id: 3, checked: false },
                { key: "Ensino Técnico", id: 4, checked: false },
                { key: "Ensino Superior Incompleto", id: 5, checked: false },
                { key: "Ensino Superior Completo", id: 6, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorEscolaridade = selected;
                //validateField("EPVA_18");
              }}
              title="Escolaridade:"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorAnosEstudo")}
              error={errors.cuidadorAnosEstudo}
              touched={touched.cuidadorAnosEstudo}
              value={values.cuidadorAnosEstudo}
              placeholder="Anos de Estudo:"
              onChangeText={handleChange("cuidadorAnosEstudo")}
              style={styles.box}
              keyboardType="numeric"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorLocalGrupo")}
              error={errors.cuidadorLocalGrupo}
              touched={touched.cuidadorLocalGrupo}
              value={values.cuidadorLocalGrupo}
              placeholder="Local do grupo:"
              onChangeText={handleChange("cuidadorLocalGrupo")}
              style={styles.box}
            />
            <CustomInput
              onBlur={handleBlur("cuidadorEndereco")}
              error={errors.cuidadorEndereco}
              touched={touched.cuidadorEndereco}
              value={values.cuidadorEndereco}
              placeholder="Endereço da família:"
              onChangeText={handleChange("cuidadorEndereco")}
              style={styles.box}
            />
            <CustomInput
              onBlur={handleBlur("cuidadorCep")}
              error={errors.cuidadorCep}
              touched={touched.cuidadorCep}
              value={values.cuidadorCep}
              placeholder="CEP:"
              onChangeText={handleChange("cuidadorCep")}
              style={styles.box}
              keyboardType="numeric"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorCidade")}
              error={errors.cuidadorCidade}
              touched={touched.cuidadorCidade}
              value={values.cuidadorCidade}
              placeholder="Cidade:"
              onChangeText={handleChange("cuidadorCidade")}
              style={styles.box}
            />
            <CustomInput
              onBlur={handleBlur("cuidadorEstado")}
              error={errors.cuidadorEstado}
              touched={touched.cuidadorEstado}
              value={values.cuidadorEstado}
              placeholder="Estado:"
              onChangeText={handleChange("cuidadorEstado")}
              style={styles.box}
            />
            <CustomInput
              onBlur={handleBlur("cuidadorTelefones")}
              error={errors.cuidadorTelefones}
              touched={touched.cuidadorTelefones}
              value={values.cuidadorTelefones}
              placeholder="Telefones:"
              onChangeText={handleChange("cuidadorTelefones")}
              style={styles.box}
            />
            <Select
              touched={touched.cuidadorOcupacao}
              style={styles.box}
              errors={errors.cuidadorOcupacao}
              data={[
                { key: "Estudante", id: 0, checked: false },
                { key: "Do lar", id: 1, checked: false },
                { key: "Autônomo(a)", id: 2, checked: false },
                { key: "Funcionário(a) contratado(a)", id: 3, checked: false },
                { key: "Desempregado(a)", id: 4, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorOcupacao = selected;
                //validateField("EPVA_18");
              }}
              title="Ocupação:"
            />
            <Select
              touched={touched.cuidadorPele}
              style={styles.box}
              errors={errors.cuidadorPele}
              data={[
                { key: "Branca", id: 0, checked: false },
                { key: "Preta", id: 1, checked: false },
                { key: "Amarela", id: 2, checked: false },
                { key: "Indígena", id: 3, checked: false },
                { key: "Prefiro não declarar", id: 4, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorPele = selected;
                //validateField("EPVA_18");
              }}
              title="Qual a sua cor da pele/etnia do  cuidador:"
            />

            <Select
              touched={touched.cuidadorReligiao}
              style={styles.box}
              errors={errors.cuidadorReligiao}
              data={[
                { key: "Católica", id: 0, checked: false },
                { key: "Evangélica", id: 1, checked: false },
                { key: "Espírita", id: 2, checked: false },
                { key: "Outras religiões", id: 3, checked: false },
                { key: "Não tenho religião", id: 4, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorReligiao = selected;
                //validateField("EPVA_18");
              }}
              title="Religião:"
            />
            <Select
              touched={touched.cuidadorSituacaoConjugal}
              style={styles.box}
              errors={errors.cuidadorSituacaoConjugal}
              data={[
                { key: "Casada/União estável", id: 0, checked: false },
                { key: "Solteira", id: 1, checked: false },
                { key: "Separada", id: 2, checked: false },
                { key: "Viúva", id: 3, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorSituacaoConjugal = selected;
                //validateField("EPVA_18");
              }}
              title="Situação conjugal:"
            />

            <CustomInput
              onBlur={handleBlur("cuidadorNumeroFilhos")}
              error={errors.cuidadorNumeroFilhos}
              touched={touched.cuidadorNumeroFilhos}
              value={values.cuidadorNumeroFilhos}
              placeholder="Número de filhos:"
              onChangeText={handleChange("cuidadorNumeroFilhos")}
              style={styles.box}
              keyboardType="numeric"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorFilhos0a6Anos")}
              error={errors.cuidadorFilhos0a6Anos}
              touched={touched.cuidadorFilhos0a6Anos}
              value={values.cuidadorFilhos0a6Anos}
              placeholder="Quantos filhos de 0 a 6 anos:"
              onChangeText={handleChange("cuidadorFilhos0a6Anos")}
              style={styles.box}
              keyboardType="numeric"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorPessoasMorando")}
              error={errors.cuidadorPessoasMorando}
              touched={touched.cuidadorPessoasMorando}
              value={values.cuidadorPessoasMorando}
              placeholder="Quantas pessoas moram na casa?"
              onChangeText={handleChange("cuidadorPessoasMorando")}
              style={styles.box}
              keyboardType="numeric"
            />
            <MultipleCheckBox
              errors={errors.moraAtualmente}
              touched={touched.moraAtualmente}
              title="Com quem a criança mora atualmente?"
              data={[
                { id: 0, key: "Mãe", checked: false },
                { id: 1, key: "Pai", checked: false },
                { id: 2, key: "Madrasta", checked: false },
                { id: 3, key: "Padrasto", checked: false },
                { id: 4, key: "Irmãos", checked: false },
                { id: 5, key: "Avô/Avó", checked: false },
                { id: 6, key: "Tio/Tia", checked: false },
                { id: 7, key: "Outras pessoas da família", checked: false },
                { id: 8, key: "Outras pessoas não familiares", checked: false },
              ]}
              style={styles.box}
              value={values.moraAtualmente}
              onSelectionChange={(selected) => {
                values.moraAtualmente = selected;
                //validateField("moraAtualmente");
              }}
            />
            <Select
              touched={touched.cuidadorRecebeAuxilio}
              style={styles.box}
              errors={errors.cuidadorRecebeAuxilio}
              data={[
                { key: "Sim", id: 0, checked: false },
                { key: "Não", id: 1, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorRecebeAuxilio = selected;
                if (selected === "Sim") {
                  setState(true);
                } else {
                  setState(false);
                }
              }}
              title="Recebe algum auxílio do governo:"
            />
            {state === true ? (
              <CustomInput
                onBlur={handleBlur("cuidadorCasoReceba")}
                error={errors.cuidadorCasoReceba}
                touched={touched.cuidadorCasoReceba}
                value={values.cuidadorCasoReceba}
                placeholder="Se sim, qual?"
                onChangeText={handleChange("cuidadorCasoReceba")}
                style={styles.box}
              />
            ) : null}
            <Select
              touched={touched.cuidadorRendaMensal}
              style={styles.box}
              errors={errors.cuidadorRendaMensal}
              data={[
                { key: "Menos de R$1000", id: 0, checked: false },
                { key: "Entre R$1.100 - R$3000", id: 1, checked: false },
                { key: "Entre R$ 3100 - R$5000", id: 2, checked: false },
                { key: "Mais de R$5000", id: 3 },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorRendaMensal = selected;
              }}
              title="Renda Mensal:"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text style={styles.textbutton}>Finalizar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  key: {
    marginTop: 10,
    marginHorizontal: 8,
    paddingBottom: 45,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textbutton: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  button: {
    width: "80%",
    backgroundColor: "#bd786e",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    margin: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  box1: {
    padding: 10,
  },
  textCheck: {
    alignSelf: "center",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
  },
});

export default RegisterForm;
