import React from "react";
import {
  keyboardType,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import RadioForm from "react-native-simple-radio-button";
import CheckboxList from "rn-checkbox-list";
import RegSchema from "./RegisterFormValidation";
import CustomInput from "../components/CustomInputComponent";
import Select from "../components/SelectComponent";

const data = [
  {
    id: "moraAtualmente",
    pergunta: "Com quem a criança mora atualmente?",
    type: "checkbox",
    alternativas: [
      { name: "Mãe", id: "mae" },
      { name: "Pai", id: "pai" },
      { name: "Madrasta", id: "madrasta" },
      { name: "Padrasto", id: "padrasto" },
      { name: "Irmãos", id: "irmaos" },
      { name: "Avô/Avó", id: "avo" },
      { name: "Tio/Tia", id: "tio" },
      { name: "Outras pessoas da família", id: "outroFamiliar" },
      { name: "Outras pessoas não familiares", id: "outroNaoFamiliar" },
    ],
  },
];

const RegisterForm = ({ submit, validation }) => {
  const [state, setState] = React.useState("peru");

  const onSelectionsChange = (values) => {
    setState(values);
  };

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
          handleBlur,
          validateForm,
          setFieldTouched,
          setFieldValue,
        }) => (
          <>
            <View style={styles.box}>
              <CustomInput
                onBlur={handleBlur("criancaNome")}
                error={errors.criancaNome}
                touched={touched.criancaNome}
                value={values.criancaNome}
                placeholder="Nome completo da criança:"
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
                errors={errors.criancaSexo}
                radio_props={[
                  { label: "Masculino", value: 0 },
                  { label: "Feminino", value: 1 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "criancaSexo",
                    [
                      { label: "Masculino", value: 0 },
                      { label: "Feminino", value: 1 },
                    ][value].label
                  )
                }
                title="Qual o sexo da criança"
              />
            </View>
            <View style={styles.box}>
              <CustomInput
                onBlur={handleBlur("cuidadorNome")}
                error={errors.cuidadorNome}
                touched={touched.cuidadorNome}
                value={values.cuidadorNome}
                placeholder="Nome completo do Cuidador(a):"
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
              radio_props={[
                { label: "Mãe biológica", value: 0 },
                { label: "Mãe adotiva", value: 1 },
                { label: "Madrastra", value: 2 },
                { label: "Pai biológico", value: 3 },
                { label: "Pai adotivo", value: 4 },
                { label: "Padrasto", value: 5 },
                { label: "Outro cuidador principal", value: 6 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                {
                  setFieldValue(
                    "cuidadorParentesco",
                    [
                      { label: "Mãe biológica", value: 0 },
                      { label: "Mãe adotiva", value: 1 },
                      { label: "Madrastra", value: 2 },
                      { label: "Pai biológico", value: 3 },
                      { label: "Pai adotivo", value: 4 },
                      { label: "Padrasto", value: 5 },
                      { label: "Outro cuidador principal", value: 6 },
                    ][value].label
                  );
                }
              }}
              title="Parentesco da criança:"
            />
            <Select
              touched={touched.cuidadorEscolaridade}
              style={styles.box}
              errors={errors.cuidadorEscolaridade}
              radio_props={[
                { label: "Ensino Fundamental Incompleto", value: 0 },
                { label: "Ensino Fundamental Completo", value: 1 },
                { label: "Ensino  Médio Incompleto", value: 2 },
                { label: "Ensino Médio Completo", value: 3 },
                { label: "Ensino Técnico", value: 4 },
                { label: "Ensino Superior Incompleto", value: 5 },
                { label: "Ensino Superior Completo", value: 6 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                {
                  setFieldValue(
                    "cuidadorEscolaridade",
                    [
                      { label: "Ensino Fundamental Incompleto", value: 0 },
                      { label: "Ensino Fundamental Completo", value: 1 },
                      { label: "Ensino  Médio Incompleto", value: 2 },
                      { label: "Ensino Médio Completo", value: 3 },
                      { label: "Ensino Técnico", value: 4 },
                      { label: "Ensino Superior Incompleto", value: 5 },
                      { label: "Ensino Superior Completo", value: 6 },
                    ][value].label
                  );
                }
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
              radio_props={[
                { label: "Estudante", value: 0 },
                { label: "Do lar", value: 1 },
                { label: "Autônomo(a)", value: 2 },
                { label: "Funcionário(a) contratado(a)", value: 3 },
                { label: "Desempregado(a)", value: 4 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                {
                  setFieldValue(
                    "cuidadorOcupacao",
                    [
                      { label: "Estudante", value: 0 },
                      { label: "Do lar", value: 1 },
                      { label: "Autônomo(a)", value: 2 },
                      { label: "Funcionário(a) contratado(a)", value: 3 },
                      { label: "Desempregado(a)", value: 4 },
                    ][value].label
                  );
                }
              }}
              title="Ocupação:"
            />
            <Select
              touched={touched.cuidadorPele}
              style={styles.box}
              errors={errors.cuidadorPele}
              radio_props={[
                { label: "Branca", value: 0 },
                { label: "Preta", value: 1 },
                { label: "Amarela", value: 2 },
                { label: "Indígena", value: 3 },
                { label: "Prefiro não declarar", value: 4 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                {
                  setFieldValue(
                    "cuidadorPele",
                    [
                      { label: "Branca", value: 0 },
                      { label: "Preta", value: 1 },
                      { label: "Amarela", value: 2 },
                      { label: "Indígena", value: 3 },
                      { label: "Prefiro não declarar", value: 4 },
                    ][value].label
                  );
                }
              }}
              title="Qual a sua cor da pele/etnia do  cuidador:"
            />
            <Select
              touched={touched.criancaPele}
              style={styles.box}
              errors={errors.criancaPele}
              radio_props={[
                { label: "Branca", value: 0 },
                { label: "Preta", value: 1 },
                { label: "Amarela", value: 2 },
                { label: "Indígena", value: 3 },
                { label: "Prefiro não declarar", value: 4 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                {
                  setFieldValue(
                    "criancaPele",
                    [
                      { label: "Branca", value: 0 },
                      { label: "Preta", value: 1 },
                      { label: "Amarela", value: 2 },
                      { label: "Indígena", value: 3 },
                      { label: "Prefiro não declarar", value: 4 },
                    ][value].label
                  );
                }
              }}
              title="Qual a sua cor da pele/etnia da  crianca:"
            />
            <Select
              touched={touched.cuidadorReligiao}
              style={styles.box}
              errors={errors.cuidadorReligiao}
              radio_props={[
                { label: "Católica", value: 0 },
                { label: "Evangélica", value: 1 },
                { label: "Espírita", value: 2 },
                { label: "Outras religiões", value: 3 },
                { label: "Não tenho religião", value: 4 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                {
                  setFieldValue(
                    "cuidadorReligiao",
                    [
                      { label: "Católica", value: 0 },
                      { label: "Evangélica", value: 1 },
                      { label: "Espírita", value: 2 },
                      { label: "Outras religiões", value: 3 },
                      { label: "Não tenho religião", value: 4 },
                    ][value].label
                  );
                }
              }}
              title="Religião:"
            />
            <Select
              touched={touched.cuidadorSituacaoConjugal}
              style={styles.box}
              errors={errors.cuidadorSituacaoConjugal}
              radio_props={[
                { label: "Casada/União estável", value: 0 },
                { label: "Solteira", value: 1 },
                { label: "Separada", value: 2 },
                { label: "Viúva", value: 3 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                setFieldValue(
                  "cuidadorSituacaoConjugal",
                  [
                    { label: "Casada/União estável", value: 0 },
                    { label: "Solteira", value: 1 },
                    { label: "Separada", value: 2 },
                    { label: "Viúva", value: 3 },
                  ][value].label
                );
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
            <Select
              touched={touched.cuidadorRecebeAuxilio}
              style={styles.box}
              errors={errors.cuidadorRecebeAuxilio}
              radio_props={[
                { label: "Sim", value: 0 },
                { label: "Não", value: 1 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                {
                  setState(
                    [
                      { label: "Sim", value: 0 },
                      { label: "Não", value: 1 },
                    ][value].label
                  );
                  setFieldValue(
                    "cuidadorRecebeAuxilio",
                    [
                      { label: "Sim", value: 0 },
                      { label: "Não", value: 1 },
                    ][value].label
                  );
                }
              }}
              title="Recebe algum auxílio do governo:"
            />
            {state === "Sim" ? (
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
              radio_props={[
                { label: "Menos de R$1000", value: 0 },
                { label: "Entre R$1.100 - R$3000", value: 1 },
                { label: "Entre R$ 3100 - R$5000", value: 2 },
                { label: "Mais de R$5000", value: 3 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) => {
                {
                  setFieldValue(
                    "cuidadorRendaMensal",
                    [
                      { label: "Menos de R$1000", value: 0 },
                      { label: "Entre R$1.100 - R$3000", value: 1 },
                      { label: "Entre R$ 3100 - R$5000", value: 2 },
                      { label: "Mais de R$5000", value: 3 },
                    ][value].label
                  );
                }
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
  label: {
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
});

export default RegisterForm;

/*
<View style={styles.label}>
            {data.map((formulario, index) => (
              <View key={index}>
                {formulario.type === "alternativa" ? (
                  <>
                    <View style={styles.box}>
                      <Text style={styles.textAlternativa}>
                        {formulario.pergunta}
                      </Text>
                      <RadioForm
                        radio_props={formulario.alternativas}
                        buttonColor="#bd786e"
                        selectedButtonColor="#bd786e"
                        labelColor="#575757"
                        animation={false}
                        initial={-1}
                        onPress={(value) => {
                          {
                            setFieldValue(
                              formulario.id,
                              formulario.alternativas[value].label
                            );
                          }
                        }}
                      />
                    </View>
                    {errors[formulario.id] && touched[formulario.id] && (
                      <Text
                        style={{
                          fontSize: 14,
                          color: "red",
                          alignSelf: "center",
                        }}
                      >
                        {errors[formulario.id]}
                      </Text>
                    )}
                  </>
                ) : formulario.type === "number" ? (
                  <>
                    <TextInput
                      placeholder={formulario.pergunta}
                      onChangeText={handleChange(formulario.id)}
                      value={values.id}
                      style={styles.box}
                      keyboardTypeType="numeric"
                      placeholderTextColor="#575757"
                    />
                    {errors[formulario.id] && (
                      <Text
                        style={{
                          fontSize: 14,
                          color: "red",
                          alignSelf: "center",
                        }}
                      >
                        {errors[formulario.id]}
                      </Text>
                    )}
                  </>
                ) : formulario.type === "checkbox" ? (
                  <>
                    <View style={styles.box}>
                      <Text style={styles.textAlternativa}>
                        {formulario.pergunta}
                      </Text>
                      <Text style={styles.textCheck}>
                        (Marcar todas que se aplicarem)
                      </Text>

                      <CheckboxList
                        listItems={formulario.alternativas}
                        onChange={({ ids }) => onSelectionsChange(ids)}
                        onLoading={() => <LoaderComponent />}
                      />
                    </View>
                    {errors[formulario.id] && (
                      <Text
                        style={{
                          fontSize: 14,
                          color: "red",
                          alignSelf: "center",
                        }}
                      >
                        {errors[formulario.id]}
                      </Text>
                    )}
                  </>
                ) : (
                  <>
                    <TextInput
                      placeholder={formulario.pergunta}
                      onChangeText={handleChange(formulario.id)}
                      value={values.id}
                      style={styles.box}
                      placeholderTextColor="#575757"
                    />
                    {errors[formulario.id] && touched[formulario.id] && (
                      <Text
                        style={{
                          fontSize: 14,
                          color: "red",
                          alignSelf: "center",
                        }}
                      >
                        {errors[formulario.id]}
                      </Text>
                    )}
                  </>
                )}
              </View>
            ))}

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                values.moraAtualmente = state;
                console.log(errors);
                handleSubmit();
              }}
            >
              <Text style={styles.textbutton}>Finalizar</Text>
            </TouchableOpacity>
          </View>


*/
