import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import CustomInput from "../components/CustomInputComponent";
import Select from "../components/SelectComponent";
import MultipleCheckBox from "../components/MultipleCheckBoxComponent";
import FormSchema from "./FormValidation";

const Form = ({ submit, family }) => {
  const [state, setState] = React.useState("");
  return (
    <View style={{ paddingBottom: 40, paddingTop: 10 }}>
      <Formik
        validationSchema={FormSchema}
        initialValues={{
          familia: "",
          participouOutro: "",
          casoParticipe: "",
          ABEP_1: "",
          ABEP_2: "",
          ABEP_3: "",
          ABEP_4: "",
          ABEP_5: "",
          ABEP_6: "",
          ABEP_7: "",
          ABEP_8: "",
          ABEP_9: "",
          ABEP_10: "",
          ABEP_11: "",
          ABEP_12: "",
          ABEP_13: "",
          ABEP_14: "",
          ABEP_15: "",
          MICS_1: "",
          MICS_2: "",
          MICS_3: "",
          MICS_4: "",
          MICS_5: "",
          MICS_6: "",
          PSOC_1: "",
          PSOC_2: "",
          PSOC_3: "",
          PSOC_4: "",
          PSOC_5: "",
          PSOC_6: "",
          PSOC_7: "",
          PSOC_8: "",
          PSOC_9: "",
          PSOC_10: "",
          PSOC_11: "",
          PSOC_12: "",
          PSOC_13: "",
          PSOC_14: "",
          PSOC_15: "",
          PSOC_16: "",
          PSOC_17: "",
          PSOC_18: "",
          ACT_EP2: "",
          ACT_EP4: "",
          ACT_EP5: "",
          ACT_EP6: "",
          ACT_EP7: "",
          ACT_EP8: "",
          ACT_EP10: "",
          ACT_EP11: "",
          ACT_CP1: "",
          ACT_CP2: "",
          ACT_CP3: "",
          ACT_CP4: "",
          ACT_CP5: "",
          ACT_CP6: "",
          ACT_CP8: "",

          PAFAS_1: "",
          PAFAS_2: "",
          PAFAS_3: "",
          PAFAS_4: "",
          PAFAS_5: "",
          PAFAS_6: "",
          PAFAS_7: "",
          PAFAS_8: "",
          PAFAS_9: "",
          PAFAS_11: "",

          SDQ_1: "",
          SDQ_2: "",
          SDQ_3: "",
          SDQ_4: "",
          SDQ_5: "",
          SDQ_6: "",
          SDQ_7: "",
          SDQ_8: "",
          SDQ_9: "",
          SDQ_10: "",
          SDQ_11: "",
          SDQ_12: "",
          SDQ_13: "",
          SDQ_14: "",
          SDQ_15: "",
          SDQ_16: "",
          SDQ_17: "",
          "SDQ_18(2-3)": "",
          "SDQ_18(4-8)": "",
          SDQ_19: "",
          SDQ_20: "",
          "SDQ_21(2-3)": "",
          "SDQ_21(4-8)": "",
          "SDQ_22(2-3)": "",
          "SDQ_22(4-8)": "",
          SDQ_23: "",
          SDQ_24: "",
          SDQ_25: "",
          EPVA_3: "",
          EPVA_4: "",
          EPVA_5: "",
          EPVA_8: "",
          EPVA_10: "",
          EPVA_12: "",
          EPVA_14: "",
          EPVA_15: "",
          EPVA_16: "",
          EPVA_17: "",
          EPVA_18: "",
          EPVA_20: "",
          EPVA_21: "",
          EPVA_23: "",
          EPVA_24: "",
          EPVA_26: "",
          EPVA_28: "",
          EPVA_31: "",
          EPVA_32: "",
          EPVA_34: "",
          EPVA_36: "",
          EPVA_38: "",
          EPVA_40: "",
          EPVA_42: "",
          VI_1: "",
          VI_2: "",
          VI_3: "",
          VI_4: "",
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
          setFieldValue,
          validateField,
        }) => (
          <>
            <Select
              touched={touched.participouOutro}
              style={styles.box}
              errors={errors.participouOutro}
              radio_props={[
                { label: "Sim", value: 0 },
                { label: "Não", value: 1 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) =>
                setFieldValue(
                  "participouOutro",
                  [
                    { label: "Sim", value: 0 },
                    { label: "Não", value: 1 },
                  ][value].label
                )
              }
              title="Você participou ou está participando de algum programa de intervenção para pais nos últimos 12 meses ?"
            />

            {values.participouOutro === "Sim" ? (
              <MultipleCheckBox
                errors={errors.casoParticipe}
                touched={touched.casoParticipe}
                title="Se sim qual ?"
                data={[
                  { id: 0, key: "Crescendo e Aprendendo", checked: false },
                  { id: 1, key: "Criança Feliz", checked: false },
                  { id: 2, key: "PADIN", checked: false },
                  { id: 3, key: "Outros", checked: false },
                ]}
                style={styles.box}
                value={values.casoParticipe}
                onSelectionChange={(selected) => {
                  values.casoParticipe = selected;
                  validateField("casoParticipe");
                }}
              />
            ) : null}
            {family.formulariosPreenchidos === 0 ? (
              <View style={styles.box}>
                <Text style={styles.text}>
                  Quantidade de itens de conforto:
                </Text>

                <Select
                  touched={touched.ABEP_1}
                  style={styles.box1}
                  errors={errors.ABEP_1}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_1",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Banheiros"
                />
                <Select
                  touched={touched.ABEP_2}
                  style={styles.box1}
                  errors={errors.ABEP_2}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_2",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Empregados domésticos"
                />
                <Select
                  touched={touched.ABEP_3}
                  style={styles.box1}
                  errors={errors.ABEP_3}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_3",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Automóveis"
                />
                <Select
                  touched={touched.ABEP_4}
                  style={styles.box1}
                  errors={errors.ABEP_4}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_4",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Microcomputador"
                />
                <Select
                  touched={touched.ABEP_5}
                  style={styles.box1}
                  errors={errors.ABEP_5}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_5",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Lava louça"
                />
                <Select
                  touched={touched.ABEP_6}
                  style={styles.box1}
                  errors={errors.ABEP_6}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_6",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Geladeira"
                />
                <Select
                  touched={touched.ABEP_7}
                  style={styles.box1}
                  errors={errors.ABEP_7}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_7",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Freezer"
                />
                <Select
                  touched={touched.ABEP_8}
                  style={styles.box1}
                  errors={errors.ABEP_8}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_8",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Lava roupa"
                />
                <Select
                  touched={touched.ABEP_9}
                  style={styles.box1}
                  errors={errors.ABEP_9}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_9",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="DVD"
                />
                <Select
                  touched={touched.ABEP_10}
                  style={styles.box1}
                  errors={errors.ABEP_10}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_10",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Microondas"
                />
                <Select
                  touched={touched.ABEP_11}
                  style={styles.box1}
                  errors={errors.ABEP_11}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_11",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Motocicleta"
                />
                <Select
                  touched={touched.ABEP_12}
                  style={styles.box1}
                  errors={errors.ABEP_12}
                  radio_props={[
                    { label: "0", value: 0 },
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "4 ou +", value: 5 },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "ABEP_12",
                      [
                        { label: "0", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "4 ou +", value: 5 },
                      ][value].label
                    )
                  }
                  title="Secadora roupa"
                />
              </View>
            ) : null}

            <Select
              touched={touched.ABEP_13}
              style={styles.box}
              errors={errors.ABEP_13}
              radio_props={[
                { label: "Analfabeto/Fundamental I incompleto", value: 0 },
                {
                  label: "Fundamental I comepleto/Fundamental II incompleto",
                  value: 1,
                },
                {
                  label: "Fundamental II completo/Médio incompleto",
                  value: 2,
                },
                { label: "Médio completo/Superior incompleto", value: 3 },
                { label: "Superior completo", value: 4 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) =>
                setFieldValue(
                  "ABEP_13",
                  [
                    { label: "Analfabeto/Fundamental I incompleto", value: 0 },
                    {
                      label:
                        "Fundamental I comepleto/Fundamental II incompleto",
                      value: 1,
                    },
                    {
                      label: "Fundamental II completo/Médio incompleto",
                      value: 2,
                    },
                    { label: "Médio completo/Superior incompleto", value: 3 },
                    { label: "Superior completo", value: 4 },
                  ][value].label
                )
              }
              title="Qual é o grau de instrução do chefe da família ?"
            />
            <Select
              touched={touched.ABEP_14}
              style={styles.box}
              errors={errors.ABEP_14}
              radio_props={[
                { label: "Rede geral de distribuiçao", value: 0 },
                { label: "Poço ou nascente", value: 1 },
                { label: "Outro meio", value: 2 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) =>
                setFieldValue(
                  "ABEP_14",
                  [
                    { label: "Rede geral de distribuiçao", value: 0 },
                    { label: "Poço ou nascente", value: 1 },
                    { label: "Outro meio", value: 2 },
                    ,
                  ][value].label
                )
              }
              title="A água neste domicilio é proveniente de?"
            />
            <Select
              touched={touched.ABEP_15}
              style={styles.box}
              errors={errors.ABEP_15}
              radio_props={[
                { label: "Asfaltada/pavimentada", value: 0 },
                { label: "Terra/cascalho", value: 1 },
              ]}
              buttonColor="#bd786e"
              selectedButtonColor="#bd786e"
              labelColor="#575757"
              animation={false}
              initial={-1}
              onPress={(value) =>
                setFieldValue(
                  "ABEP_15",
                  [
                    { label: "Asfaltada/pavimetada", value: 0 },
                    { label: "Terra/cascalho", value: 1 },

                    ,
                  ][value].label
                )
              }
              title="Considerando o trecho da rua do seu domicílio, você diria que a rua é:"
            />

            <View style={styles.box}>
              <Text style={styles.text}>
                Nos últimos 3 dias, você ou alguém maior de 15 anos fez as
                seguintes atividades com a criança:
              </Text>

              <Select
                touched={touched.MICS_1}
                style={styles.box1}
                errors={errors.MICS_1}
                radio_props={[
                  { label: "Sim", value: 0 },
                  { label: "Não", value: 1 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "MICS_1",
                    [
                      { label: "Sim", value: 0 },
                      { label: "Não", value: 1 },
                    ][value].label
                  )
                }
                title="...Leu ou olhou figuras em livros, revistas e jornais com a criança?"
              />
              <Select
                touched={touched.MICS_2}
                style={styles.box1}
                errors={errors.MICS_2}
                radio_props={[
                  { label: "Sim", value: 0 },
                  { label: "Não", value: 1 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "MICS_2",
                    [
                      { label: "Sim", value: 0 },
                      { label: "Não", value: 1 },
                    ][value].label
                  )
                }
                title="...Contou estórias a criança?"
              />
              <Select
                touched={touched.MICS_3}
                style={styles.box1}
                errors={errors.MICS_3}
                radio_props={[
                  { label: "Sim", value: 0 },
                  { label: "Não", value: 1 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "MICS_3",
                    [
                      { label: "Sim", value: 0 },
                      { label: "Não", value: 1 },
                    ][value].label
                  )
                }
                title="...Cantou músicas com a crianca ou para crianca  incluindo cantigas de ninar"
              />
              <Select
                touched={touched.MICS_4}
                style={styles.box1}
                errors={errors.MICS_4}
                radio_props={[
                  { label: "Sim", value: 0 },
                  { label: "Não", value: 1 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "MICS_4",
                    [
                      { label: "Sim", value: 0 },
                      { label: "Não", value: 1 },
                    ][value].label
                  )
                }
                title="...Levou a criança para fora de casa,no quintal,jardim ou cercado?"
              />

              <Select
                touched={touched.MICS_5}
                style={styles.box1}
                errors={errors.MICS_5}
                radio_props={[
                  { label: "Sim", value: 0 },
                  { label: "Não", value: 1 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "MICS_5",
                    [
                      { label: "Sim", value: 0 },
                      { label: "Não", value: 1 },
                    ][value].label
                  )
                }
                title="...Brincou com a crianca?"
              />
              <Select
                touched={touched.MICS_6}
                style={styles.box1}
                errors={errors.MICS_6}
                radio_props={[
                  { label: "Sim", value: 0 },
                  { label: "Não", value: 1 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "MICS_6",
                    [
                      { label: "Sim", value: 0 },
                      { label: "Não", value: 1 },
                    ][value].label
                  )
                }
                title="...Cantou, contou número ou fez desenhos com criança"
              />
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>
                Agora eu gostaria de ler algumas afirmações sobre como você se
                sente sobre ser mãe/pai.
              </Text>

              <Select
                touched={touched.PSOC_1}
                style={styles.box1}
                errors={errors.PSOC_1}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_1",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Os problemas de cuidar de uma criança são faceis de resolver"
              />

              <Select
                touched={touched.PSOC_2}
                style={styles.box1}
                errors={errors.PSOC_2}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_2",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Mesmo que ser mãe/pai seja gratificante, isso é dificil agora"
              />
              <Select
                touched={touched.PSOC_3}
                style={styles.box1}
                errors={errors.PSOC_3}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_3",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Eu vou dormir me sentindo como se não tivesse feito muito"
              />
              <Select
                touched={touched.PSOC_4}
                style={styles.box1}
                errors={errors.PSOC_4}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_4",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Ás vezes, quando eu deveria estar no controle, eu sinto que estou sendo controlada"
              />
              <Select
                touched={touched.PSOC_5}
                style={styles.box1}
                errors={errors.PSOC_5}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_5",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Meus pais foram melhor preparados para serem bons pais que eu"
              />
              <Select
                touched={touched.PSOC_6}
                style={styles.box1}
                errors={errors.PSOC_6}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_6",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Eu gostaria de ser um  bom modelo pára uma nova mãe/novo pai"
              />
              <Select
                touched={touched.PSOC_7}
                style={styles.box1}
                errors={errors.PSOC_7}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_7",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Os problemas relacionados a ser mãe/pai são facilmentes resolvidos"
              />
              <Select
                touched={touched.PSOC_8}
                style={styles.box1}
                errors={errors.PSOC_8}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_8",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Um problema de ser mãe/pai é não saber se você está fazendo um bom trabalho "
              />
              <Select
                touched={touched.PSOC_9}
                style={styles.box1}
                errors={errors.PSOC_9}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_9",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Às vezes eu sinto que não estou fazendo nada"
              />
              <Select
                touched={touched.PSOC_10}
                style={styles.box1}
                errors={errors.PSOC_10}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_10",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Eu sinto que sou tão habilidoso quanto preciso para cuidar do meu filho/minha filha"
              />
              <Select
                touched={touched.PSOC_11}
                style={styles.box1}
                errors={errors.PSOC_11}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_11",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Se qualquer pessoa pode encontrar a resposta sobre oque está pertubando meu filho eu também posso"
              />
              <Select
                touched={touched.PSOC_12}
                style={styles.box1}
                errors={errors.PSOC_12}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_12",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Eu faço um bom trabalho cuidando do meu filho/minha filha"
              />

              <Select
                touched={touched.PSOC_13}
                style={styles.box1}
                errors={errors.PSOC_13}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_13",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Eu estou mais interessado em outras coisas do que sem ser mãe/pai"
              />
              <Select
                touched={touched.PSOC_14}
                style={styles.box1}
                errors={errors.PSOC_14}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_14",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Considerando o tempo o que eu sou mãe/pai, eu sei o que estou fazendo"
              />
              <Select
                touched={touched.PSOC_15}
                style={styles.box1}
                errors={errors.PSOC_15}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_15",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Eu seria uma mãe/um pai melhor se cuidar dos filhos fosse mais interessante"
              />
              <Select
                touched={touched.PSOC_16}
                style={styles.box1}
                errors={errors.PSOC_16}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_16",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Eu tenho todas as habilidades para ser uma boa mãe/bom pai"
              />
              <Select
                touched={touched.PSOC_17}
                style={styles.box1}
                errors={errors.PSOC_17}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_17",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Ser mãe/pai deixa-me tenso e nervoso"
              />
              <Select
                touched={touched.PSOC_18}
                style={styles.box1}
                errors={errors.PSOC_18}
                radio_props={[
                  { label: "Discordo muito", value: 0 },
                  { label: "Discordo", value: 1 },
                  { label: "Concordo", value: 2 },
                  { label: "Concordo muito", value: 3 },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PSOC_18",
                    [
                      { label: "Discordo muito", value: 0 },
                      { label: "Discordo", value: 1 },
                      { label: "Concordo", value: 2 },
                      { label: "Concordo muito", value: 3 },
                    ][value].label
                  )
                }
                title="Ser uma boa mãe/bom pai é gratificante "
              />
            </View>
            <View style={styles.box}>
              <Select
                touched={touched.ACT_EP2}
                style={styles.box1}
                errors={errors.ACT_EP2}
                radio_props={[
                  {
                    label:
                      "Fico de mal humor e sou exigente com meu filho/filha",
                    value: 0,
                  },
                  {
                    label:
                      "Não fico de mal humor nem sou mais exigente com meu filho/filha",
                    value: 1,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_EP2",
                    [
                      {
                        label:
                          "Fico de mal humor e sou exigente com meu filho/filha",
                        value: 0,
                      },
                      {
                        label:
                          "Não fico de mal humor nem sou mais exigente com meu filho/filha",
                        value: 1,
                      },
                    ][value].label
                  )
                }
                title="Quando não estou bem ou estou estressado(a)..."
              />
              <Select
                touched={touched.ACT_EP4}
                style={styles.box1}
                errors={errors.ACT_EP4}
                radio_props={[
                  {
                    label: "Faço um sermão longo",
                    value: 0,
                  },
                  {
                    label: "Converso e vou direto ao assunto",
                    value: 1,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_EP4",
                    [
                      {
                        label: "Faço um sermão longo",
                        value: 0,
                      },
                      {
                        label: "Converso e vou direto ao assunto",
                        value: 1,
                      },
                    ][value].label
                  )
                }
                title="Quando meu filho/filha se comporta mal..."
              />
              <Select
                touched={touched.ACT_EP5}
                style={styles.box1}
                errors={errors.ACT_EP5}
                radio_props={[
                  {
                    label: "Levanto a voz ou grito",
                    value: 0,
                  },
                  {
                    label: "Falo com meu filho/minha filha com calma",
                    value: 1,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_EP5",
                    [
                      {
                        label: "Levanto a voz ou grito",
                        value: 0,
                      },
                      {
                        label: "Falo com meu filho/minha filha com calma",
                        value: 1,
                      },
                    ][value].label
                  )
                }
                title="Quando meu filho/filha se comporta mal..."
              />
              <Select
                touched={touched.ACT_EP6}
                style={styles.box1}
                errors={errors.ACT_EP6}
                radio_props={[
                  {
                    label: "Eu guardo rancor e ressentimento",
                    value: 0,
                  },
                  {
                    label: "As coisas voltam á normalidade rapidamente",
                    value: 1,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_EP6",
                    [
                      {
                        label: "Eu guardo rancor e ressentimento",
                        value: 0,
                      },
                      {
                        label: "As coisas voltam á normalidade rapidamente",
                        value: 1,
                      },
                    ][value].label
                  )
                }
                title="Depois que tive problema com meu filho/filha "
              />
              <Select
                touched={touched.ACT_EP7}
                style={styles.box1}
                errors={errors.ACT_EP7}
                radio_props={[
                  {
                    label:
                      "As coisas pioram e faço coisa que não tinha a intenção de fazer",
                    value: 0,
                  },
                  {
                    label: "Não perco o controle da situação",
                    value: 1,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_EP7",
                    [
                      {
                        label:
                          "As coisas pioram e faço coisa que não tinha a intenção de fazer",
                        value: 0,
                      },
                      {
                        label: "Não perco o controle da situação",
                        value: 1,
                      },
                    ][value].label
                  )
                }
                title="Quando tenho um problema com meu filho/filha"
              />
              <Select
                touched={touched.ACT_EP8}
                style={styles.box1}
                errors={errors.ACT_EP8}
                radio_props={[
                  {
                    label: "Nunca ou raramente",
                    value: 0,
                  },
                  {
                    label: "A maioria das vezes ",
                    value: 1,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_EP8",
                    [
                      {
                        label: "Nunca ou raramente",
                        value: 0,
                      },
                      {
                        label: "A maioria das vezes ",
                        value: 1,
                      },
                    ][value].label
                  )
                }
                title="Quando meu filho ou filha se comporta mal dou lhe uma surra, dou uma bofetada, agarro com força ou bato nele/nela"
              />
              <Select
                touched={touched.ACT_EP10}
                style={styles.box1}
                errors={errors.ACT_EP10}
                radio_props={[
                  {
                    label: "Raramente xingo ou uso palavrão",
                    value: 0,
                  },
                  {
                    label: "Quase sempre uso palavrões",
                    value: 1,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_EP10",
                    [
                      {
                        label: "Raramente xingo ou uso palavrão",
                        value: 0,
                      },
                      {
                        label: "Quase sempre uso palavrões",
                        value: 1,
                      },
                    ][value].label
                  )
                }
                title="Quando meu filho/filha se comporta mal..."
              />
              <Select
                touched={touched.ACT_EP11}
                style={styles.box1}
                errors={errors.ACT_EP11}
                radio_props={[
                  {
                    label: "Nunca ou raramente",
                    value: 0,
                  },
                  {
                    label: "A maioria das vezes",
                    value: 1,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_EP11",
                    [
                      {
                        label: "Nunca ou raramente",
                        value: 0,
                      },
                      {
                        label: "A maioria das vezes",
                        value: 1,
                      },
                    ][value].label
                  )
                }
                title="Quando meu filho ou filha faz algo que eu não gosto, insulto meu filho ou filha e digo coisa horriveis ou xingo"
              />
              <Select
                touched={touched.ACT_CP1}
                style={styles.box1}
                errors={errors.ACT_CP1}
                radio_props={[
                  {
                    label: "Nunca",
                    value: 0,
                  },
                  {
                    label: "Às vezes",
                    value: 1,
                  },
                  {
                    label: "Com frequência",
                    value: 2,
                  },
                  {
                    label: "Muitas vezes",
                    value: 3,
                  },
                  {
                    label: "Sempre",
                    value: 4,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_CP1",
                    [
                      {
                        label: "Nunca",
                        value: 0,
                      },
                      {
                        label: "Às vezes",
                        value: 1,
                      },
                      {
                        label: "Com frequência",
                        value: 2,
                      },
                      {
                        label: "Muitas vezes",
                        value: 3,
                      },
                      {
                        label: "Sempre",
                        value: 4,
                      },
                    ][value].label
                  )
                }
                title="Fico atento ao que eu digo e na faço na frente dos meus filhos"
              />

              <Select
                touched={touched.ACT_CP2}
                style={styles.box1}
                errors={errors.ACT_CP2}
                radio_props={[
                  {
                    label: "Nunca",
                    value: 0,
                  },
                  {
                    label: "Às vezes",
                    value: 1,
                  },
                  {
                    label: "Com frequência",
                    value: 2,
                  },
                  {
                    label: "Muitas vezes",
                    value: 3,
                  },
                  {
                    label: "Sempre",
                    value: 4,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_CP2",
                    [
                      {
                        label: "Nunca",
                        value: 0,
                      },
                      {
                        label: "Às vezes",
                        value: 1,
                      },
                      {
                        label: "Com frequência",
                        value: 2,
                      },
                      {
                        label: "Muitas vezes",
                        value: 3,
                      },
                      {
                        label: "Sempre",
                        value: 4,
                      },
                    ][value].label
                  )
                }
                title="Controlo minha raiva quando tenho dificuldades com meus filhos"
              />
              <Select
                touched={touched.ACT_CP3}
                style={styles.box1}
                errors={errors.ACT_CP3}
                radio_props={[
                  {
                    label: "Nunca",
                    value: 0,
                  },
                  {
                    label: "Às vezes",
                    value: 1,
                  },
                  {
                    label: "Com frequência",
                    value: 2,
                  },
                  {
                    label: "Muitas vezes",
                    value: 3,
                  },
                  {
                    label: "Sempre",
                    value: 4,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_CP3",
                    [
                      {
                        label: "Nunca",
                        value: 0,
                      },
                      {
                        label: "Às vezes",
                        value: 1,
                      },
                      {
                        label: "Com frequência",
                        value: 2,
                      },
                      {
                        label: "Muitas vezes",
                        value: 3,
                      },
                      {
                        label: "Sempre",
                        value: 4,
                      },
                    ][value].label
                  )
                }
                title="Ensino a meus filhos como resolver conflitos com outras pessoas usando palavras, não violência"
              />
              <Select
                touched={touched.ACT_CP4}
                style={styles.box1}
                errors={errors.ACT_CP4}
                radio_props={[
                  {
                    label: "Nunca",
                    value: 0,
                  },
                  {
                    label: "Às vezes",
                    value: 1,
                  },
                  {
                    label: "Com frequência",
                    value: 2,
                  },
                  {
                    label: "Muitas vezes",
                    value: 3,
                  },
                  {
                    label: "Sempre",
                    value: 4,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_CP4",
                    [
                      {
                        label: "Nunca",
                        value: 0,
                      },
                      {
                        label: "Às vezes",
                        value: 1,
                      },
                      {
                        label: "Com frequência",
                        value: 2,
                      },
                      {
                        label: "Muitas vezes",
                        value: 3,
                      },
                      {
                        label: "Sempre",
                        value: 4,
                      },
                    ][value].label
                  )
                }
                title="Limito a quantidade de violência que meus filhos podem ver na televisão, filmes e jogos"
              />
              <Select
                touched={touched.ACT_CP5}
                style={styles.box1}
                errors={errors.ACT_CP5}
                radio_props={[
                  {
                    label: "Nunca",
                    value: 0,
                  },
                  {
                    label: "Às vezes",
                    value: 1,
                  },
                  {
                    label: "Com frequência",
                    value: 2,
                  },
                  {
                    label: "Muitas vezes",
                    value: 3,
                  },
                  {
                    label: "Sempre",
                    value: 4,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_CP5",
                    [
                      {
                        label: "Nunca",
                        value: 0,
                      },
                      {
                        label: "Às vezes",
                        value: 1,
                      },
                      {
                        label: "Com frequência",
                        value: 2,
                      },
                      {
                        label: "Muitas vezes",
                        value: 3,
                      },
                      {
                        label: "Sempre",
                        value: 4,
                      },
                    ][value].label
                  )
                }
                title="Ajudo meus filhos a expressarem seus sentimentos e a compreenderem os sentimentos dos outros"
              />

              <Select
                touched={touched.ACT_CP6}
                style={styles.box1}
                errors={errors.ACT_CP6}
                radio_props={[
                  {
                    label: "Nunca",
                    value: 0,
                  },
                  {
                    label: "Às vezes",
                    value: 1,
                  },
                  {
                    label: "Com frequência",
                    value: 2,
                  },
                  {
                    label: "Muitas vezes",
                    value: 3,
                  },
                  {
                    label: "Sempre",
                    value: 4,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_CP6",
                    [
                      {
                        label: "Nunca",
                        value: 0,
                      },
                      {
                        label: "Às vezes",
                        value: 1,
                      },
                      {
                        label: "Com frequência",
                        value: 2,
                      },
                      {
                        label: "Muitas vezes",
                        value: 3,
                      },
                      {
                        label: "Sempre",
                        value: 4,
                      },
                    ][value].label
                  )
                }
                title="Quando estou com raiva, eu me acalmo para que meus filhos aprendam a como fazer o mesmo"
              />
              <Select
                touched={touched.ACT_CP8}
                style={styles.box1}
                errors={errors.ACT_CP8}
                radio_props={[
                  {
                    label: "Nunca",
                    value: 0,
                  },
                  {
                    label: "Às vezes",
                    value: 1,
                  },
                  {
                    label: "Com frequência",
                    value: 2,
                  },
                  {
                    label: "Muitas vezes",
                    value: 3,
                  },
                  {
                    label: "Sempre",
                    value: 4,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "ACT_CP8",
                    [
                      {
                        label: "Nunca",
                        value: 0,
                      },
                      {
                        label: "Às vezes",
                        value: 1,
                      },
                      {
                        label: "Com frequência",
                        value: 2,
                      },
                      {
                        label: "Muitas vezes",
                        value: 3,
                      },
                      {
                        label: "Sempre",
                        value: 4,
                      },
                    ][value].label
                  )
                }
                title="Elogio meus filhos quando se comportam bem ou fazem coisas boas"
              />
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>
                Até que ponto isto é verdade cada afirmação
              </Text>
              <Select
                touched={touched.PAFAS_1}
                style={styles.box1}
                errors={errors.PAFAS_1}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_1",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Se meu/minha filho/filha não faz oque peço, eu desisto e eu mesmo faço"
              />
              <Select
                touched={touched.PAFAS_2}
                style={styles.box1}
                errors={errors.PAFAS_2}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_2",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Quando meu/minha filho/filha se comporta mal, eu ameaço(por exemplo, desligar a televisão), mas eu não cumpro"
              />
              <Select
                touched={touched.PAFAS_3}
                style={styles.box1}
                errors={errors.PAFAS_3}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_3",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Eu grito ou fico brava com meu/minha filho/filha quando ele/ela se comporta mal"
              />
              <Select
                touched={touched.PAFAS_4}
                style={styles.box1}
                errors={errors.PAFAS_4}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_4",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Eu elogio meu/minha filho/filha quando ele/ela se comporta bem"
              />

              <Select
                touched={touched.PAFAS_5}
                style={styles.box1}
                errors={errors.PAFAS_5}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_5",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Eu tento fazer meu/minha filho/filha se sentir mal(por exemplo, culpado ou envergonhado) por se comportar mal, para lhe ensinar uma lição"
              />
              <Select
                touched={touched.PAFAS_6}
                style={styles.box1}
                errors={errors.PAFAS_6}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_6",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Eu dou atenção ao meu/minha filho/filha como um abraço, uma piscada de olho, um sorriso ou um beijo, quando ele/ela se comporta bem"
              />
              <Select
                touched={touched.PAFAS_7}
                style={styles.box1}
                errors={errors.PAFAS_7}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_7",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Eu do uma palmada no meu filho/filha quando ele/ela se comporta mal"
              />
              <Select
                touched={touched.PAFAS_8}
                style={styles.box1}
                errors={errors.PAFAS_8}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_8",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Eu dou ao meu/minha filho/filha o que ele/ela quer quando ele/ela fica com raiva ou chateado(a)"
              />
              <Select
                touched={touched.PAFAS_9}
                style={styles.box1}
                errors={errors.PAFAS_9}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_9",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="Eu fico irritado com o/a meu/minha filho/filha"
              />

              <Select
                touched={touched.PAFAS_11}
                style={styles.box1}
                errors={errors.PAFAS_11}
                radio_props={[
                  {
                    label: "Nem um pouco",
                    value: 0,
                  },
                  {
                    label: "Um pouco(Algum tempo)",
                    value: 1,
                  },
                  {
                    label: "Uma boa parte do tempo",
                    value: 2,
                  },
                  {
                    label: "A maior parte do tempo",
                    value: 3,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "PAFAS_11",
                    [
                      {
                        label: "Nem um pouco",
                        value: 0,
                      },
                      {
                        label: "Um pouco(Algum tempo)",
                        value: 1,
                      },
                      {
                        label: "Uma boa parte do tempo",
                        value: 2,
                      },
                      {
                        label: "A maior parte do tempo",
                        value: 3,
                      },
                    ][value].label
                  )
                }
                title="eu gosto de dar abraços, beijos e carinho ao meu/minha filho/filha"
              />
            </View>
            <View style={styles.box}>
              <Select
                touched={touched.SDQ_1}
                style={styles.box1}
                errors={errors.SDQ_1}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_1",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Tem consideração pelos sentimentos de outras pessoas"
              />
              <Select
                touched={touched.SDQ_2}
                style={styles.box1}
                errors={errors.SDQ_2}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_2",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Não consegue parar sentado quando tem que fazer lição ou comer, mexe-se muito, esbarrando em coisas, derrubando coisas"
              />
              <Select
                touched={touched.SDQ_3}
                style={styles.box1}
                errors={errors.SDQ_3}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_3",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Muitas vezes se queixa de dor de cabeça, dor de barriga ou enjôo"
              />
              <Select
                touched={touched.SDQ_4}
                style={styles.box1}
                errors={errors.SDQ_4}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_4",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Tem boa vontade para compartilhar doces, brinquedos, lápis ... com outras crianças"
              />
              <Select
                touched={touched.SDQ_5}
                style={styles.box1}
                errors={errors.SDQ_5}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_5",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Frequentemente tem acessos de raiva ou crises de birra"
              />
              <Select
                touched={touched.SDQ_6}
                style={styles.box1}
                errors={errors.SDQ_6}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_6",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="É solitario, predere brincar sozinho"
              />
              <Select
                touched={touched.SDQ_7}
                style={styles.box1}
                errors={errors.SDQ_7}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_7",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Geralmente é obediente e faz normalmente o que os adultos lhe pedem"
              />
              <Select
                touched={touched.SDQ_8}
                style={styles.box1}
                errors={errors.SDQ_8}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_8",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Tem muitas preocupações, muitas vezes parece preocupado com tudo"
              />
              <Select
                touched={touched.SDQ_9}
                style={styles.box1}
                errors={errors.SDQ_9}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_9",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Tenta ser atencioso se alguém parece magoado, aflito ou se sentindo mal"
              />
              <Select
                touched={touched.SDQ_10}
                style={styles.box1}
                errors={errors.SDQ_10}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_10",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Está sempre agitado, balançando as pernas ou mexendo as mãos"
              />
              <Select
                touched={touched.SDQ_11}
                style={styles.box1}
                errors={errors.SDQ_11}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_11",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Tem pelo menos um bom amigo ou amiga"
              />
              <Select
                touched={touched.SDQ_12}
                style={styles.box1}
                errors={errors.SDQ_12}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_12",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Frequentemente briga com outras crianças ou as amedronta"
              />
              <Select
                touched={touched.SDQ_13}
                style={styles.box1}
                errors={errors.SDQ_13}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_13",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Frequentemente parece triste, desanimado ou choroso"
              />
              <Select
                touched={touched.SDQ_14}
                style={styles.box1}
                errors={errors.SDQ_14}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_14",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Em geral, é querido por outras crianças"
              />
              <Select
                touched={touched.SDQ_15}
                style={styles.box1}
                errors={errors.SDQ_15}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_15",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Facilmente perde a concentração"
              />
              <Select
                touched={touched.SDQ_16}
                style={styles.box1}
                errors={errors.SDQ_16}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_16",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Fica inseguro quando tem que fazer alguma coisa pela primeira vez, facilmete perde a confiança em si mesmo"
              />
              <Select
                touched={touched.SDQ_17}
                style={styles.box1}
                errors={errors.SDQ_17}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_17",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="É gentil com as crianças mais novas"
              />

              {family.crianca.idade <= 3 && family.crianca.idade >= 2 ? (
                <Select
                  touched={touched["SDQ_18(2-3)"]}
                  style={styles.box1}
                  errors={errors["SDQ_18(2-3)"]}
                  radio_props={[
                    {
                      label: "Falso",
                      value: 0,
                    },
                    {
                      label: "Mais ou menos verdadeiro",
                      value: 1,
                    },
                    {
                      label: "verdadeiro",
                      value: 2,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "SDQ_18(2-3)",
                      [
                        {
                          label: "Falso",
                          value: 0,
                        },
                        {
                          label: "Mais ou menos verdadeiro",
                          value: 1,
                        },
                        {
                          label: "verdadeiro",
                          value: 2,
                        },
                      ][value].label
                    )
                  }
                  title="Geralmente discute com adultos"
                />
              ) : family.crianca.idade >= 4 && family.crianca.idade <= 8 ? (
                <Select
                  touched={touched["SDQ_18(4-8)"]}
                  style={styles.box1}
                  errors={errors["SDQ_18(4-8)"]}
                  radio_props={[
                    {
                      label: "Falso",
                      value: 0,
                    },
                    {
                      label: "Mais ou menos verdadeiro",
                      value: 1,
                    },
                    {
                      label: "verdadeiro",
                      value: 2,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "SDQ_18(4-8)",
                      [
                        {
                          label: "Falso",
                          value: 0,
                        },
                        {
                          label: "Mais ou menos verdadeiro",
                          value: 1,
                        },
                        {
                          label: "verdadeiro",
                          value: 2,
                        },
                      ][value].label
                    )
                  }
                  title="Frequentemente engana ou mente"
                />
              ) : null}

              <Select
                touched={touched.SDQ_19}
                style={styles.box1}
                errors={errors.SDQ_19}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_19",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Outras crianças pegam no pé"
              />

              <Select
                touched={touched.SDQ_20}
                style={styles.box1}
                errors={errors.SDQ_20}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_20",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Frequentemente se oferece para ajudar outras pessoas(pais,professores,outras crianças)"
              />

              {family.crianca.idade >= 2 && family.crianca.idade <= 3 ? (
                <Select
                  touched={touched["SDQ_21(2-3)"]}
                  style={styles.box1}
                  errors={errors["SDQ_21(2-3)"]}
                  radio_props={[
                    {
                      label: "Falso",
                      value: 0,
                    },
                    {
                      label: "Mais ou menos verdadeiro",
                      value: 1,
                    },
                    {
                      label: "verdadeiro",
                      value: 2,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "SDQ_21(2-3)",
                      [
                        {
                          label: "Falso",
                          value: 0,
                        },
                        {
                          label: "Mais ou menos verdadeiro",
                          value: 1,
                        },
                        {
                          label: "verdadeiro",
                          value: 2,
                        },
                      ][value].label
                    )
                  }
                  title="Consegue parar e pensar nas coisas antes de fazê las"
                />
              ) : family.crianca.idade >= 4 && family.crianca.idade <= 8 ? (
                <Select
                  touched={touched["SDQ_21(4-8)"]}
                  style={styles.box1}
                  errors={errors["SDQ_21(4-8)"]}
                  radio_props={[
                    {
                      label: "Falso",
                      value: 0,
                    },
                    {
                      label: "Mais ou menos verdadeiro",
                      value: 1,
                    },
                    {
                      label: "verdadeiro",
                      value: 2,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "SDQ_21(4-8)",
                      [
                        {
                          label: "Falso",
                          value: 0,
                        },
                        {
                          label: "Mais ou menos verdadeiro",
                          value: 1,
                        },
                        {
                          label: "verdadeiro",
                          value: 2,
                        },
                      ][value].label
                    )
                  }
                  title="Pensa nas coisas antes de fazê-las"
                />
              ) : null}
              {family.crianca.idade >= 2 && family.crianca.idade <= 3 ? (
                <Select
                  touched={touched["SDQ_22(2-3)"]}
                  style={styles.box1}
                  errors={errors["SDQ_22(2-3)"]}
                  radio_props={[
                    {
                      label: "Falso",
                      value: 0,
                    },
                    {
                      label: "Mais ou menos verdadeiro",
                      value: 1,
                    },
                    {
                      label: "verdadeiro",
                      value: 2,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "SDQ_22(2-3)",
                      [
                        {
                          label: "Falso",
                          value: 0,
                        },
                        {
                          label: "Mais ou menos verdadeiro",
                          value: 1,
                        },
                        {
                          label: "verdadeiro",
                          value: 2,
                        },
                      ][value].label
                    )
                  }
                  title="Ás vezes é malicioso"
                />
              ) : family.crianca.idade >= 4 && family.crianca.idade <= 8 ? (
                <Select
                  touched={touched["SDQ_22(4-8)"]}
                  style={styles.box1}
                  errors={errors["SDQ_22(4-8)"]}
                  radio_props={[
                    {
                      label: "Falso",
                      value: 0,
                    },
                    {
                      label: "Mais ou menos verdadeiro",
                      value: 1,
                    },
                    {
                      label: "verdadeiro",
                      value: 2,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "SDQ_22(4-8)",
                      [
                        {
                          label: "Falso",
                          value: 0,
                        },
                        {
                          label: "Mais ou menos verdadeiro",
                          value: 1,
                        },
                        {
                          label: "verdadeiro",
                          value: 2,
                        },
                      ][value].label
                    )
                  }
                  title="Rouba coisas de casa, da escola ou de outros lugares"
                />
              ) : null}

              <Select
                touched={touched.SDQ_23}
                style={styles.box1}
                errors={errors.SDQ_23}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_23",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Se da melhor com adultos do que com outras crianças"
              />
              <Select
                touched={touched.SDQ_24}
                style={styles.box1}
                errors={errors.SDQ_24}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_24",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Tem muitos medos, assusta-se facilmente"
              />
              <Select
                touched={touched.SDQ_25}
                style={styles.box1}
                errors={errors.SDQ_25}
                radio_props={[
                  {
                    label: "Falso",
                    value: 0,
                  },
                  {
                    label: "Mais ou menos verdadeiro",
                    value: 1,
                  },
                  {
                    label: "verdadeiro",
                    value: 2,
                  },
                ]}
                buttonColor="#bd786e"
                selectedButtonColor="#bd786e"
                labelColor="#575757"
                animation={false}
                initial={-1}
                onPress={(value) =>
                  setFieldValue(
                    "SDQ_25",
                    [
                      {
                        label: "Falso",
                        value: 0,
                      },
                      {
                        label: "Mais ou menos verdadeiro",
                        value: 1,
                      },
                      {
                        label: "verdadeiro",
                        value: 2,
                      },
                    ][value].label
                  )
                }
                title="Completa as tarefas que começa, tem boa concentração"
              />
            </View>

            {family.formulariosPreenchidos === 0 &&
            family.cuidador.idade < 18 ? (
              <View style={styles.box}>
                <Text style={styles.text}>Daqui a dez anos</Text>
                <Select
                  touched={touched.EPVA_3}
                  style={styles.box1}
                  errors={errors.EPVA_3}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_3",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de continuar a acreditar na força de Deus"
                />

                <Select
                  touched={touched.EPVA_4}
                  style={styles.box1}
                  errors={errors.EPVA_4}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_4",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Pretendo estar estudando para adquirir mais conhecimento"
                />

                <Select
                  touched={touched.EPVA_5}
                  style={styles.box1}
                  errors={errors.EPVA_5}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_5",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Pretendo ter condições de fazer viagens nacionais e internacionais"
                />
                <Select
                  touched={touched.EPVA_8}
                  style={styles.box1}
                  errors={errors.EPVA_8}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_8",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de retribuir as pessoas que me ajudaram"
                />

                <Select
                  touched={touched.EPVA_10}
                  style={styles.box1}
                  errors={errors.EPVA_10}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_10",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de ter sucesso em meus estudos"
                />
                <Select
                  touched={touched.EPVA_12}
                  style={styles.box1}
                  errors={errors.EPVA_12}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_12",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de me tornar uma pessoa cada vez melhor"
                />

                <Select
                  touched={touched.EPVA_14}
                  style={styles.box1}
                  errors={errors.EPVA_14}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_14",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de estar me relacionando com pessoas com a mesma fé que eu"
                />
                <Select
                  touched={touched.EPVA_15}
                  style={styles.box1}
                  errors={errors.EPVA_15}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_15",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Pretendo recorrer a Deus para resolver as minhas dificuldades"
                />
                <Select
                  touched={touched.EPVA_16}
                  style={styles.box1}
                  errors={errors.EPVA_16}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_16",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de estar trabalhando em algo que faça a diferença na vida de outras pessoas"
                />
                <Select
                  touched={touched.EPVA_17}
                  style={styles.box1}
                  errors={errors.EPVA_17}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_17",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Pretendo ensinar meus valores para a familia que irei construir"
                />
                <Select
                  touched={touched.EPVA_18}
                  style={styles.box1}
                  errors={errors.EPVA_18}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_18",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de estudar algo no qual possa desempenhar minhas capacidades"
                />
                <Select
                  touched={touched.EPVA_20}
                  style={styles.box1}
                  errors={errors.EPVA_20}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_20",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Pretendo ser uma pessoa mais generosa"
                />
                <Select
                  touched={touched.EPVA_21}
                  style={styles.box1}
                  errors={errors.EPVA_21}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_21",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Pretendo ser uma pessoa mais feliz do que sou hoje"
                />
                <Select
                  touched={touched.EPVA_23}
                  style={styles.box1}
                  errors={errors.EPVA_23}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_23",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de estar formado no curso técnico ou na faculdade"
                />
                <Select
                  touched={touched.EPVA_24}
                  style={styles.box1}
                  errors={errors.EPVA_24}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_24",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de conseguir um bom trabalho graças aos meus estudos"
                />
                <Select
                  touched={touched.EPVA_26}
                  style={styles.box1}
                  errors={errors.EPVA_26}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_26",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de melhorar de vida em função o meu estudo"
                />
                <Select
                  touched={touched.EPVA_28}
                  style={styles.box1}
                  errors={errors.EPVA_28}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_28",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Não pretendo estar fazendo um curso técnico nem faculdade"
                />
                <Select
                  touched={touched.EPVA_31}
                  style={styles.box1}
                  errors={errors.EPVA_31}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_31",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title=" Gostaria de estar me tornando uma pessoa melhor por meio da minha fé"
                />
                <Select
                  touched={touched.EPVA_32}
                  style={styles.box1}
                  errors={errors.EPVA_32}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_32",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Não gostaria de estar vivendo a minha vida com base em ensinamentos religiosos"
                />

                <Select
                  touched={touched.EPVA_34}
                  style={styles.box1}
                  errors={errors.EPVA_34}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_34",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de estar cursando/ter concluído uma faculdade"
                />
                <Select
                  touched={touched.EPVA_36}
                  style={styles.box1}
                  errors={errors.EPVA_36}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_36",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de estar fazendo o bem para as pessoas"
                />
                <Select
                  touched={touched.EPVA_38}
                  style={styles.box1}
                  errors={errors.EPVA_38}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_38",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria estar trabalhando para poder manter meus estudos"
                />
                <Select
                  touched={touched.EPVA_40}
                  style={styles.box1}
                  errors={errors.EPVA_40}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_40",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title=" Gostaria que Deus me ajudasse a conseguir tudo o que planejo"
                />
                <Select
                  touched={touched.EPVA_42}
                  style={styles.box1}
                  errors={errors.EPVA_42}
                  radio_props={[
                    {
                      label: "Discordo totalmete",
                      value: 0,
                    },
                    {
                      label: "Discordo parcialmente",
                      value: 1,
                    },
                    {
                      label: "Não sei avaliar",
                      value: 2,
                    },
                    {
                      label: "Concordo parcialmente",
                      value: 3,
                    },
                    {
                      label: "Concordo",
                      value: 4,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "EPVA_42",
                      [
                        {
                          label: "Discordo totalmete",
                          value: 0,
                        },
                        {
                          label: "Discordo parcialmente",
                          value: 1,
                        },
                        {
                          label: "Não sei avaliar",
                          value: 2,
                        },
                        {
                          label: "Concordo parcialmente",
                          value: 3,
                        },
                        {
                          label: "Concordo",
                          value: 4,
                        },
                      ][value].label
                    )
                  }
                  title="Gostaria de fazer um curso superior, pois isso é importante para conseguir as coisas que quero"
                />
              </View>
            ) : null}

            {family.formulariosPreenchidos === 1 ? (
              <View style={styles.box}>
                <Select
                  touched={touched.VI_1}
                  style={styles.box1}
                  errors={errors.VI_1}
                  radio_props={[
                    {
                      label: "Sim ",
                      value: 0,
                    },
                    {
                      label: "Não",
                      value: 1,
                    },
                  ]}
                  buttonColor="#bd786e"
                  selectedButtonColor="#bd786e"
                  labelColor="#575757"
                  animation={false}
                  initial={-1}
                  onPress={(value) =>
                    setFieldValue(
                      "VI_1",
                      [
                        {
                          label: "Não",
                          value: 0,
                        },
                        {
                          label: "Sim",
                          value: 1,
                        },
                      ][value].label
                    )
                  }
                  title="Você vivenciou algum tipo de violência na sua vida"
                />
                {values.VI_1 === "Sim" ? (
                  <>
                    <MultipleCheckBox
                      errors={errors.VI_2}
                      touched={touched.VI_2}
                      title="Em qual fase da sua vida?"
                      data={[
                        { id: 0, key: "Infância", checked: false },
                        { id: 1, key: "Adolêscencia", checked: false },
                        { id: 2, key: "Fase adulta", checked: false },
                      ]}
                      style={styles.box1}
                      value={values.VI_2}
                      onSelectionChange={(selected) => {
                        values.VI_2 = selected;
                        validateField("VI_2");
                      }}
                    />
                    <MultipleCheckBox
                      errors={errors.VI_3}
                      touched={touched.VI_3}
                      title="Qual foi o tipo de violência?"
                      data={[
                        { id: 0, key: "Abuso fisico", checked: false },
                        {
                          id: 1,
                          key: "Abuso psicológico(ex:humilhou)",
                          checked: false,
                        },
                        { id: 2, key: "Abuso sexual", checked: false },
                        {
                          id: 3,
                          key:
                            "Negligência(ex: falta de alimentação e cuidados)",
                          checked: false,
                        },
                      ]}
                      style={styles.box1}
                      value={values.VI_3}
                      onSelectionChange={(selected) => {
                        values.VI_3 = selected;
                        validateField("VI_3");
                      }}
                    />
                    <MultipleCheckBox
                      errors={errors.VI_4}
                      touched={touched.VI_4}
                      title="Quem cometeu a violência"
                      data={[
                        { id: 0, key: "Pai", checked: false },
                        { id: 1, key: "Mãe", checked: false },
                        { id: 2, key: "Avós", checked: false },
                        { id: 3, key: "Tios", checked: false },
                        { id: 4, key: "Companheiro", checked: false },
                        { id: 5, key: "Outro", checked: false },
                      ]}
                      style={styles.box1}
                      value={values.VI_4}
                      onSelectionChange={(selected) => {
                        values.VI_4 = selected;
                        validateField("VI_4");
                      }}
                    />
                  </>
                ) : null}
              </View>
            ) : null}

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log(errors);
                values.familia = family;
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
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center",
    textTransform: "uppercase",
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
});

export default Form;
