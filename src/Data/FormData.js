import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";

import Select from "../components/SelectComponent";
import MultipleCheckBox from "../components/MultipleCheckBoxComponent";
import FormSchema from "./FormValidation";

const Form = ({ submit, family }) => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  return (
    <View style={styles.geral}>
      <Formik
        validateOnChange={false}
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

          errors,
          touched,

          setFieldValue,
          validateField,
        }) => (
          <>
            <Select
              touched={touched.participouOutro}
              style={styles.box}
              errors={errors.participouOutro}
              data={[
                { key: "Sim", id: 0, checked: false },
                { key: "Não", id: 1, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.participouOutro = selected;
                if (selected === "Sim") {
                  setState(true);
                } else {
                  setState(false);
                }
              }}
              title="Você participou ou está participando de algum programa de intervenção para pais nos últimos 12 meses ?"
            />

            {state === true ? (
              <MultipleCheckBox
                errors={errors.casoParticipe}
                touched={touched.casoParticipe}
                title="Se sim qual ?"
                data={[
                  {
                    id: 0,
                    key: "Crescendo e Aprendendo",
                    checked: "unchecked",
                  },
                  { id: 1, key: "Criança Feliz", checked: "unchecked" },
                  { id: 2, key: "PADIN", checked: "unchecked" },
                  { id: 3, key: "Outros", checked: "unchecked" },
                ]}
                style={styles.box}
                value={values.casoParticipe}
                onSelectionChange={(selected) => {
                  values.casoParticipe = selected;
                  //validateField("casoParticipe");
                }}
              />
            ) : null}

            {family.formulariosPreenchidos === 0 ? (
              <View>
                <View style={styles.box}>
                  <Text style={styles.text}>
                    Quantidade de itens de conforto:
                  </Text>

                  <Select
                    touched={touched.ABEP_1}
                    style={styles.box1}
                    errors={errors.ABEP_1}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_1 = selected;
                      //validateField("ABEP_1");
                    }}
                    title="Banheiros"
                  />
                  <Select
                    touched={touched.ABEP_2}
                    style={styles.box1}
                    errors={errors.ABEP_2}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_2 = selected;
                      //validateField("ABEP_2");
                    }}
                    title="Empregados domésticos"
                  />
                  <Select
                    touched={touched.ABEP_3}
                    style={styles.box1}
                    errors={errors.ABEP_3}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_3 = selected;
                      //validateField("ABEP_3");
                    }}
                    title="Automóveis"
                  />
                  <Select
                    touched={touched.ABEP_4}
                    style={styles.box1}
                    errors={errors.ABEP_4}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_4 = selected;
                      //validateField("ABEP_4");
                    }}
                    title="Microcomputador"
                  />
                  <Select
                    touched={touched.ABEP_5}
                    style={styles.box1}
                    errors={errors.ABEP_5}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_5 = selected;
                      //validateField("ABEP_5");
                    }}
                    title="Lava louça"
                  />
                  <Select
                    touched={touched.ABEP_6}
                    style={styles.box1}
                    errors={errors.ABEP_6}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_6 = selected;
                      //validateField("ABEP_6");
                    }}
                    title="Geladeira"
                  />
                  <Select
                    touched={touched.ABEP_7}
                    style={styles.box1}
                    errors={errors.ABEP_7}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_7 = selected;
                      //validateField("ABEP_7");
                    }}
                    title="Freezer"
                  />
                  <Select
                    touched={touched.ABEP_8}
                    style={styles.box1}
                    errors={errors.ABEP_8}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_8 = selected;
                      //validateField("ABEP_8");
                    }}
                    title="Lava roupa"
                  />
                  <Select
                    touched={touched.ABEP_9}
                    style={styles.box1}
                    errors={errors.ABEP_9}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_9 = selected;
                      //validateField("ABEP_9");
                    }}
                    title="DVD"
                  />
                  <Select
                    touched={touched.ABEP_10}
                    style={styles.box1}
                    errors={errors.ABEP_10}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_10 = selected;
                      //validateField("ABEP_10");
                    }}
                    title="Microondas"
                  />
                  <Select
                    touched={touched.ABEP_11}
                    style={styles.box1}
                    errors={errors.ABEP_11}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_11 = selected;
                      //validateField("ABEP_11");
                    }}
                    title="Motocicleta"
                  />
                  <Select
                    touched={touched.ABEP_12}
                    style={styles.box1}
                    errors={errors.ABEP_12}
                    data={[
                      { key: "0", id: 0, checked: false },
                      { key: "1", id: 1, checked: false },
                      { key: "2", id: 2, checked: false },
                      { key: "3", id: 3, checked: false },
                      { key: "4", id: 4, checked: false },
                      { key: "4 ou +", id: 5, checked: false },
                    ]}
                    onSelectionChange={(selected) => {
                      values.ABEP_12 = selected;
                      //validateField("ABEP_12");
                    }}
                    title="Secadora roupa"
                  />
                </View>
                <Select
                  touched={touched.ABEP_13}
                  style={styles.box}
                  errors={errors.ABEP_13}
                  data={[
                    {
                      key: "Analfabeto/Fundamental I incompleto",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Fundamental I comepleto/Fundamental II incompleto",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Fundamental II completo/Médio incompleto",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Médio completo/Superior incompleto",
                      id: 3,
                      checked: false,
                    },
                    { key: "Superior completo", id: 4, checked: false },
                  ]}
                  onSelectionChange={(selected) => {
                    values.ABEP_13 = selected;
                    //validateField("ABEP_13");
                  }}
                  title="Qual é o grau de instrução do chefe da família ?"
                />
                <Select
                  touched={touched.ABEP_14}
                  style={styles.box}
                  errors={errors.ABEP_14}
                  data={[
                    {
                      key: "Rede geral de distribuiçao",
                      id: 0,
                      checked: false,
                    },
                    { key: "Poço ou nascente", id: 1, checked: false },
                    { key: "Outro meio", id: 2, checked: false },
                  ]}
                  onSelectionChange={(selected) => {
                    values.ABEP_14 = selected;
                    //validateField("ABEP_14");
                  }}
                  title="A água neste domicilio é proveniente de?"
                />
                <Select
                  touched={touched.ABEP_15}
                  style={styles.box}
                  errors={errors.ABEP_15}
                  data={[
                    { key: "Asfaltada/pavimentada", id: 0, checked: false },
                    { key: "Terra/cascalho", id: 1, checked: false },
                  ]}
                  onSelectionChange={(selected) => {
                    values.ABEP_15 = selected;
                    //validateField("ABEP_15");
                  }}
                  title="Considerando o trecho da rua do seu domicílio, você diria que a rua é:"
                />
              </View>
            ) : null}

            <View style={styles.box}>
              <Text style={styles.text}>
                Nos últimos 3 dias, você ou alguém maior de 15 anos fez as
                seguintes atividades com a criança:
              </Text>

              <Select
                touched={touched.MICS_1}
                style={styles.box1}
                errors={errors.MICS_1}
                data={[
                  { key: "Sim", id: 0, checked: false },
                  { key: "Não", id: 1, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.MICS_1 = selected;
                  //validateField("MICS_1");
                }}
                title="...Leu ou olhou figuras em livros, revistas e jornais com a criança?"
              />
              <Select
                touched={touched.MICS_2}
                style={styles.box1}
                errors={errors.MICS_2}
                data={[
                  { key: "Sim", id: 0, checked: false },
                  { key: "Não", id: 1, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.MICS_2 = selected;
                  //validateField("MICS_2");
                }}
                title="...Contou estórias a criança?"
              />
              <Select
                touched={touched.MICS_3}
                style={styles.box1}
                errors={errors.MICS_3}
                data={[
                  { key: "Sim", id: 0, checked: false },
                  { key: "Não", id: 1, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.MICS_3 = selected;
                  //validateField("MICS_3");
                }}
                title="...Cantou músicas com a crianca ou para crianca  incluindo cantigas de ninar"
              />
              <Select
                touched={touched.MICS_4}
                style={styles.box1}
                errors={errors.MICS_4}
                data={[
                  { key: "Sim", id: 0, checked: false },
                  { key: "Não", id: 1, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.MICS_4 = selected;
                  //validateField("MICS_4");
                }}
                title="...Levou a criança para fora de casa,no quintal,jardim ou cercado?"
              />

              <Select
                touched={touched.MICS_5}
                style={styles.box1}
                errors={errors.MICS_5}
                data={[
                  { key: "Sim", id: 0, checked: false },
                  { key: "Não", id: 1, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.MICS_5 = selected;
                  //validateField("MICS_5");
                }}
                title="...Brincou com a crianca?"
              />
              <Select
                touched={touched.MICS_6}
                style={styles.box1}
                errors={errors.MICS_6}
                data={[
                  { key: "Sim", id: 0, checked: false },
                  { key: "Não", id: 1, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.MICS_6 = selected;
                  //validateField("MICS_6");
                }}
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
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_1 = selected;
                  //validateField("PSOC_1");
                }}
                title="Os problemas de cuidar de uma criança são faceis de resolver"
              />

              <Select
                touched={touched.PSOC_2}
                style={styles.box1}
                errors={errors.PSOC_2}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_2 = selected;
                  //validateField("PSOC_2");
                }}
                title="Mesmo que ser mãe/pai seja gratificante, isso é dificil agora"
              />
              <Select
                touched={touched.PSOC_3}
                style={styles.box1}
                errors={errors.PSOC_3}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_3 = selected;
                  //validateField("PSOC_3");
                }}
                title="Eu vou dormir me sentindo como se não tivesse feito muito"
              />
              <Select
                touched={touched.PSOC_4}
                style={styles.box1}
                errors={errors.PSOC_4}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_4 = selected;
                  //validateField("PSOC_4");
                }}
                title="Ás vezes, quando eu deveria estar no controle, eu sinto que estou sendo controlada"
              />
              <Select
                touched={touched.PSOC_5}
                style={styles.box1}
                errors={errors.PSOC_5}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_5 = selected;
                  //validateField("PSOC_5");
                }}
                title="Meus pais foram melhor preparados para serem bons pais que eu"
              />
              <Select
                touched={touched.PSOC_6}
                style={styles.box1}
                errors={errors.PSOC_6}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_6 = selected;
                  //validateField("PSOC_6");
                }}
                title="Eu gostaria de ser um  bom modelo pára uma nova mãe/novo pai"
              />
              <Select
                touched={touched.PSOC_7}
                style={styles.box1}
                errors={errors.PSOC_7}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_7 = selected;
                  //validateField("PSOC_7");
                }}
                title="Os problemas relacionados a ser mãe/pai são facilmentes resolvidos"
              />
              <Select
                touched={touched.PSOC_8}
                style={styles.box1}
                errors={errors.PSOC_8}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_8 = selected;
                  //validateField("PSOC_8");
                }}
                title="Um problema de ser mãe/pai é não saber se você está fazendo um bom trabalho "
              />
              <Select
                touched={touched.PSOC_9}
                style={styles.box1}
                errors={errors.PSOC_9}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_9 = selected;
                  //validateField("PSOC_9");
                }}
                title="Às vezes eu sinto que não estou fazendo nada"
              />
              <Select
                touched={touched.PSOC_10}
                style={styles.box1}
                errors={errors.PSOC_10}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_10 = selected;
                  //validateField("PSOC_10");
                }}
                title="Eu sinto que sou tão habilidoso quanto preciso para cuidar do meu filho/minha filha"
              />
              <Select
                touched={touched.PSOC_11}
                style={styles.box1}
                errors={errors.PSOC_11}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_11 = selected;
                  //validateField("PSOC_11");
                }}
                title="Se qualquer pessoa pode encontrar a resposta sobre oque está pertubando meu filho eu também posso"
              />
              <Select
                touched={touched.PSOC_12}
                style={styles.box1}
                errors={errors.PSOC_12}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_12 = selected;
                  //validateField("PSOC_12");
                }}
                title="Eu faço um bom trabalho cuidando do meu filho/minha filha"
              />

              <Select
                touched={touched.PSOC_13}
                style={styles.box1}
                errors={errors.PSOC_13}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_13 = selected;
                  //validateField("PSOC_13");
                }}
                title="Eu estou mais interessado em outras coisas do que sem ser mãe/pai"
              />
              <Select
                touched={touched.PSOC_14}
                style={styles.box1}
                errors={errors.PSOC_14}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_14 = selected;
                  //validateField("PSOC_14");
                }}
                title="Considerando o tempo o que eu sou mãe/pai, eu sei o que estou fazendo"
              />
              <Select
                touched={touched.PSOC_15}
                style={styles.box1}
                errors={errors.PSOC_15}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_15 = selected;
                  //validateField("PSOC_15");
                }}
                title="Eu seria uma mãe/um pai melhor se cuidar dos filhos fosse mais interessante"
              />
              <Select
                touched={touched.PSOC_16}
                style={styles.box1}
                errors={errors.PSOC_16}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_16 = selected;
                  //validateField("PSOC_16");
                }}
                title="Eu tenho todas as habilidades para ser uma boa mãe/bom pai"
              />
              <Select
                touched={touched.PSOC_17}
                style={styles.box1}
                errors={errors.PSOC_17}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_17 = selected;
                  //validateField("PSOC_17");
                }}
                title="Ser mãe/pai deixa-me tenso e nervoso"
              />
              <Select
                touched={touched.PSOC_18}
                style={styles.box1}
                errors={errors.PSOC_18}
                data={[
                  { key: "Discordo muito", id: 0, checked: false },
                  { key: "Discordo", id: 1, checked: false },
                  { key: "Concordo", id: 2, checked: false },
                  { key: "Concordo muito", id: 3, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.PSOC_18 = selected;
                  //validateField("PSOC_18");
                }}
                title="Ser uma boa mãe/bom pai é gratificante "
              />
            </View>
            <View style={styles.box}>
              <Select
                touched={touched.ACT_EP2}
                style={styles.box1}
                errors={errors.ACT_EP2}
                data={[
                  {
                    key: "Fico de mal humor e sou exigente com meu filho/filha",
                    id: 0,
                    checked: false,
                  },
                  {
                    key:
                      "Não fico de mal humor nem sou mais exigente com meu filho/filha",
                    id: 1,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_EP2 = selected;
                  //validateField("ACT_EP2");
                }}
                title="Quando não estou bem ou estou estressado(a)..."
              />
              <Select
                touched={touched.ACT_EP4}
                style={styles.box1}
                errors={errors.ACT_EP4}
                data={[
                  {
                    key: "Faço um sermão longo",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Converso e vou direto ao assunto",
                    id: 1,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_EP4 = selected;
                  //validateField("ACT_EP4");
                }}
                title="Quando meu filho/filha se comporta mal..."
              />
              <Select
                touched={touched.ACT_EP5}
                style={styles.box1}
                errors={errors.ACT_EP5}
                data={[
                  {
                    key: "Levanto a voz ou grito",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Falo com meu filho/minha filha com calma",
                    id: 1,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_EP5 = selected;
                  //validateField("ACT_EP5");
                }}
                title="Quando meu filho/filha se comporta mal..."
              />
              <Select
                touched={touched.ACT_EP6}
                style={styles.box1}
                errors={errors.ACT_EP6}
                data={[
                  {
                    key: "Eu guardo rancor e ressentimento",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "As coisas voltam á normalidade rapidamente",
                    id: 1,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_EP6 = selected;
                  //validateField("ACT_EP6");
                }}
                title="Depois que tive problema com meu filho/filha "
              />
              <Select
                touched={touched.ACT_EP7}
                style={styles.box1}
                errors={errors.ACT_EP7}
                data={[
                  {
                    key:
                      "As coisas pioram e faço coisa que não tinha a intenção de fazer",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Não perco o controle da situação",
                    id: 1,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_EP7 = selected;
                  //validateField("ACT_EP7");
                }}
                title="Quando tenho um problema com meu filho/filha"
              />
              <Select
                touched={touched.ACT_EP8}
                style={styles.box1}
                errors={errors.ACT_EP8}
                data={[
                  {
                    key: "Nunca ou raramente",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "A maioria das vezes ",
                    id: 1,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_EP8 = selected;
                  //validateField("ACT_EP8");
                }}
                title="Quando meu filho ou filha se comporta mal dou lhe uma surra, dou uma bofetada, agarro com força ou bato nele/nela"
              />
              <Select
                touched={touched.ACT_EP10}
                style={styles.box1}
                errors={errors.ACT_EP10}
                data={[
                  {
                    key: "Raramente xingo ou uso palavrão",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Quase sempre uso palavrões",
                    id: 1,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_EP10 = selected;
                  //validateField("ACT_EP10");
                }}
                title="Quando meu filho/filha se comporta mal..."
              />
              <Select
                touched={touched.ACT_EP11}
                style={styles.box1}
                errors={errors.ACT_EP11}
                data={[
                  {
                    key: "Nunca ou raramente",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "A maioria das vezes",
                    id: 1,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_EP11 = selected;
                  //validateField("ACT_EP11");
                }}
                title="Quando meu filho ou filha faz algo que eu não gosto, insulto meu filho ou filha e digo coisa horriveis ou xingo"
              />
              <Select
                touched={touched.ACT_CP1}
                style={styles.box1}
                errors={errors.ACT_CP1}
                data={[
                  {
                    key: "Nunca",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Às vezes",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Com frequência",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "Muitas vezes",
                    id: 3,
                    checked: false,
                  },
                  {
                    key: "Sempre",
                    id: 4,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_CP1 = selected;
                  //validateField("ACT_CP1");
                }}
                title="Fico atento ao que eu digo e na faço na frente dos meus filhos"
              />

              <Select
                touched={touched.ACT_CP2}
                style={styles.box1}
                errors={errors.ACT_CP2}
                data={[
                  {
                    key: "Nunca",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Às vezes",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Com frequência",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "Muitas vezes",
                    id: 3,
                    checked: false,
                  },
                  {
                    key: "Sempre",
                    id: 4,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_CP2 = selected;
                  //validateField("ACT_CP2");
                }}
                title="Controlo minha raiva quando tenho dificuldades com meus filhos"
              />
              <Select
                touched={touched.ACT_CP3}
                style={styles.box1}
                errors={errors.ACT_CP3}
                data={[
                  {
                    key: "Nunca",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Às vezes",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Com frequência",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "Muitas vezes",
                    id: 3,
                    checked: false,
                  },
                  {
                    key: "Sempre",
                    id: 4,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_CP3 = selected;
                  //validateField("ACT_CP3");
                }}
                title="Ensino a meus filhos como resolver conflitos com outras pessoas usando palavras, não violência"
              />
              <Select
                touched={touched.ACT_CP4}
                style={styles.box1}
                errors={errors.ACT_CP4}
                data={[
                  {
                    key: "Nunca",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Às vezes",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Com frequência",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "Muitas vezes",
                    id: 3,
                    checked: false,
                  },
                  {
                    key: "Sempre",
                    id: 4,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_CP4 = selected;
                  //validateField("ACT_CP4");
                }}
                title="Limito a quantidade de violência que meus filhos podem ver na televisão, filmes e jogos"
              />
              <Select
                touched={touched.ACT_CP5}
                style={styles.box1}
                errors={errors.ACT_CP5}
                data={[
                  {
                    key: "Nunca",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Às vezes",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Com frequência",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "Muitas vezes",
                    id: 3,
                    checked: false,
                  },
                  {
                    key: "Sempre",
                    id: 4,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_CP5 = selected;
                  //validateField("ACT_CP5");
                }}
                title="Ajudo meus filhos a expressarem seus sentimentos e a compreenderem os sentimentos dos outros"
              />

              <Select
                touched={touched.ACT_CP6}
                style={styles.box1}
                errors={errors.ACT_CP6}
                data={[
                  {
                    key: "Nunca",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Às vezes",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Com frequência",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "Muitas vezes",
                    id: 3,
                    checked: false,
                  },
                  {
                    key: "Sempre",
                    id: 4,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_CP6 = selected;
                  //validateField("ACT_CP6");
                }}
                title="Quando estou com raiva, eu me acalmo para que meus filhos aprendam a como fazer o mesmo"
              />
              <Select
                touched={touched.ACT_CP8}
                style={styles.box1}
                errors={errors.ACT_CP8}
                data={[
                  {
                    key: "Nunca",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Às vezes",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Com frequência",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "Muitas vezes",
                    id: 3,
                    checked: false,
                  },
                  {
                    key: "Sempre",
                    id: 4,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.ACT_CP8 = selected;
                  //validateField("ACT_CP8");
                }}
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
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_1 = selected;
                  //validateField("PAFAS_1");
                }}
                title="Se meu/minha filho/filha não faz oque peço, eu desisto e eu mesmo faço"
              />
              <Select
                touched={touched.PAFAS_2}
                style={styles.box1}
                errors={errors.PAFAS_2}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_2 = selected;
                  //validateField("PAFAS_2");
                }}
                title="Quando meu/minha filho/filha se comporta mal, eu ameaço(por exemplo, desligar a televisão), mas eu não cumpro"
              />
              <Select
                touched={touched.PAFAS_3}
                style={styles.box1}
                errors={errors.PAFAS_3}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_3 = selected;
                  //validateField("PAFAS_3");
                }}
                title="Eu grito ou fico brava com meu/minha filho/filha quando ele/ela se comporta mal"
              />
              <Select
                touched={touched.PAFAS_4}
                style={styles.box1}
                errors={errors.PAFAS_4}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_4 = selected;
                  //validateField("PAFAS_4");
                }}
                title="Eu elogio meu/minha filho/filha quando ele/ela se comporta bem"
              />

              <Select
                touched={touched.PAFAS_5}
                style={styles.box1}
                errors={errors.PAFAS_5}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_5 = selected;
                  //validateField("PAFAS_5");
                }}
                title="Eu tento fazer meu/minha filho/filha se sentir mal(por exemplo, culpado ou envergonhado) por se comportar mal, para lhe ensinar uma lição"
              />
              <Select
                touched={touched.PAFAS_6}
                style={styles.box1}
                errors={errors.PAFAS_6}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_6 = selected;
                  //validateField("PAFAS_6");
                }}
                title="Eu dou atenção ao meu/minha filho/filha como um abraço, uma piscada de olho, um sorriso ou um beijo, quando ele/ela se comporta bem"
              />
              <Select
                touched={touched.PAFAS_7}
                style={styles.box1}
                errors={errors.PAFAS_7}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_7 = selected;
                  //validateField("PAFAS_7");
                }}
                title="Eu do uma palmada no meu filho/filha quando ele/ela se comporta mal"
              />
              <Select
                touched={touched.PAFAS_8}
                style={styles.box1}
                errors={errors.PAFAS_8}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_8 = selected;
                  //validateField("PAFAS_8");
                }}
                title="Eu dou ao meu/minha filho/filha o que ele/ela quer quando ele/ela fica com raiva ou chateado(a)"
              />
              <Select
                touched={touched.PAFAS_9}
                style={styles.box1}
                errors={errors.PAFAS_9}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_9 = selected;
                  //validateField("PAFAS_9");
                }}
                title="Eu fico irritado com o/a meu/minha filho/filha"
              />

              <Select
                touched={touched.PAFAS_11}
                style={styles.box1}
                errors={errors.PAFAS_11}
                data={[
                  {
                    key: "Nem um pouco",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Um pouco(Algum tempo)",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "Uma boa parte do tempo",
                    id: 2,
                    checked: false,
                  },
                  {
                    key: "A maior parte do tempo",
                    id: 3,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.PAFAS_2 = selected;
                  //validateField("PAFAS_11");
                }}
                title="eu gosto de dar abraços, beijos e carinho ao meu/minha filho/filha"
              />
            </View>
            <View style={styles.box}>
              <Select
                touched={touched.SDQ_1}
                style={styles.box1}
                errors={errors.SDQ_1}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_1 = selected;
                  //validateField("SDQ_1");
                }}
                title="Tem consideração pelos sentimentos de outras pessoas"
              />
              <Select
                touched={touched.SDQ_2}
                style={styles.box1}
                errors={errors.SDQ_2}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_2 = selected;
                  //validateField("SDQ_2");
                }}
                title="Não consegue parar sentado quando tem que fazer lição ou comer, mexe-se muito, esbarrando em coisas, derrubando coisas"
              />
              <Select
                touched={touched.SDQ_3}
                style={styles.box1}
                errors={errors.SDQ_3}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_3 = selected;
                  //validateField("SDQ_3");
                }}
                title="Muitas vezes se queixa de dor de cabeça, dor de barriga ou enjôo"
              />
              <Select
                touched={touched.SDQ_4}
                style={styles.box1}
                errors={errors.SDQ_4}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_4 = selected;
                  //validateField("SDQ_4");
                }}
                title="Tem boa vontade para compartilhar doces, brinquedos, lápis ... com outras crianças"
              />
              <Select
                touched={touched.SDQ_5}
                style={styles.box1}
                errors={errors.SDQ_5}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_5 = selected;
                  //validateField("SDQ_5");
                }}
                title="Frequentemente tem acessos de raiva ou crises de birra"
              />
              <Select
                touched={touched.SDQ_6}
                style={styles.box1}
                errors={errors.SDQ_6}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_6 = selected;
                  //validateField("SDQ_6");
                }}
                title="É solitario, predere brincar sozinho"
              />
              <Select
                touched={touched.SDQ_7}
                style={styles.box1}
                errors={errors.SDQ_7}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_7 = selected;
                  //validateField("SDQ_7");
                }}
                title="Geralmente é obediente e faz normalmente o que os adultos lhe pedem"
              />
              <Select
                touched={touched.SDQ_8}
                style={styles.box1}
                errors={errors.SDQ_8}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_8 = selected;
                  //validateField("SDQ_8");
                }}
                title="Tem muitas preocupações, muitas vezes parece preocupado com tudo"
              />
              <Select
                touched={touched.SDQ_9}
                style={styles.box1}
                errors={errors.SDQ_9}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_9 = selected;
                  //validateField("SDQ_9");
                }}
                title="Tenta ser atencioso se alguém parece magoado, aflito ou se sentindo mal"
              />
              <Select
                touched={touched.SDQ_10}
                style={styles.box1}
                errors={errors.SDQ_10}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_10 = selected;
                  //validateField("SDQ_10");
                }}
                title="Está sempre agitado, balançando as pernas ou mexendo as mãos"
              />
              <Select
                touched={touched.SDQ_11}
                style={styles.box1}
                errors={errors.SDQ_11}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_11 = selected;
                  //validateField("SDQ_11");
                }}
                title="Tem pelo menos um bom amigo ou amiga"
              />
              <Select
                touched={touched.SDQ_12}
                style={styles.box1}
                errors={errors.SDQ_12}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_12 = selected;
                  //validateField("SDQ_12");
                }}
                title="Frequentemente briga com outras crianças ou as amedronta"
              />
              <Select
                touched={touched.SDQ_13}
                style={styles.box1}
                errors={errors.SDQ_13}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_13 = selected;
                  //validateField("SDQ_13");
                }}
                title="Frequentemente parece triste, desanimado ou choroso"
              />
              <Select
                touched={touched.SDQ_14}
                style={styles.box1}
                errors={errors.SDQ_14}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_14 = selected;
                  //validateField("SDQ_14");
                }}
                title="Em geral, é querido por outras crianças"
              />
              <Select
                touched={touched.SDQ_15}
                style={styles.box1}
                errors={errors.SDQ_15}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_15 = selected;
                  //validateField("SDQ_15");
                }}
                title="Facilmente perde a concentração"
              />
              <Select
                touched={touched.SDQ_16}
                style={styles.box1}
                errors={errors.SDQ_16}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_16 = selected;
                  //validateField("SDQ_16");
                }}
                title="Fica inseguro quando tem que fazer alguma coisa pela primeira vez, facilmete perde a confiança em si mesmo"
              />
              <Select
                touched={touched.SDQ_17}
                style={styles.box1}
                errors={errors.SDQ_17}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_17 = selected;
                  //validateField("SDQ_17");
                }}
                title="É gentil com as crianças mais novas"
              />

              {family.crianca.idade <= 3 && family.crianca.idade >= 2 ? (
                <Select
                  touched={touched["SDQ_18(2-3)"]}
                  style={styles.box1}
                  errors={errors["SDQ_18(2-3)"]}
                  data={[
                    {
                      key: "Falso",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Mais ou menos verdadeiro",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "verdadeiro",
                      id: 2,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values["SDQ_18(2-3)"] = selected;
                    //validateField("SDQ_18(2-3)");
                  }}
                  title="Geralmente discute com adultos"
                />
              ) : family.crianca.idade >= 4 && family.crianca.idade <= 8 ? (
                <Select
                  touched={touched["SDQ_18(4-8)"]}
                  style={styles.box1}
                  errors={errors["SDQ_18(4-8)"]}
                  data={[
                    {
                      key: "Falso",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Mais ou menos verdadeiro",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "verdadeiro",
                      id: 2,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values["SDQ_18(4-8)"] = selected;
                    //validateField("SDQ_18(4-8)");
                  }}
                  title="Frequentemente engana ou mente"
                />
              ) : null}

              <Select
                touched={touched.SDQ_19}
                style={styles.box1}
                errors={errors.SDQ_19}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_19 = selected;
                  //validateField("SDQ_19");
                }}
                title="Outras crianças pegam no pé"
              />

              <Select
                touched={touched.SDQ_20}
                style={styles.box1}
                errors={errors.SDQ_20}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_20 = selected;
                  //validateField("SDQ_20");
                }}
                title="Frequentemente se oferece para ajudar outras pessoas(pais,professores,outras crianças)"
              />

              {family.crianca.idade >= 2 && family.crianca.idade <= 3 ? (
                <Select
                  touched={touched["SDQ_21(2-3)"]}
                  style={styles.box1}
                  errors={errors["SDQ_21(2-3)"]}
                  data={[
                    {
                      key: "Falso",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Mais ou menos verdadeiro",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "verdadeiro",
                      id: 2,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values["SDQ_21(2-3)"] = selected;
                    //validateField("SDQ_21(2-3)");
                  }}
                  title="Consegue parar e pensar nas coisas antes de fazê las"
                />
              ) : family.crianca.idade >= 4 && family.crianca.idade <= 8 ? (
                <Select
                  touched={touched["SDQ_21(4-8)"]}
                  style={styles.box1}
                  errors={errors["SDQ_21(4-8)"]}
                  data={[
                    {
                      key: "Falso",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Mais ou menos verdadeiro",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "verdadeiro",
                      id: 2,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values["SDQ_21(4-8)"] = selected;
                    //validateField("SDQ_21(4-8)");
                  }}
                  title="Pensa nas coisas antes de fazê-las"
                />
              ) : null}
              {family.crianca.idade >= 2 && family.crianca.idade <= 3 ? (
                <Select
                  touched={touched["SDQ_22(2-3)"]}
                  style={styles.box1}
                  errors={errors["SDQ_22(2-3)"]}
                  data={[
                    {
                      key: "Falso",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Mais ou menos verdadeiro",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "verdadeiro",
                      id: 2,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values["SDQ_22(2-3)"] = selected;
                    //validateField("SDQ_22(2-3)");
                  }}
                  title="Ás vezes é malicioso"
                />
              ) : family.crianca.idade >= 4 && family.crianca.idade <= 8 ? (
                <Select
                  touched={touched["SDQ_22(4-8)"]}
                  style={styles.box1}
                  errors={errors["SDQ_22(4-8)"]}
                  data={[
                    {
                      key: "Falso",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Mais ou menos verdadeiro",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "verdadeiro",
                      id: 2,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values["SDQ_22(4-8)"] = selected;
                    //validateField("SDQ_22(4-8)");
                  }}
                  title="Rouba coisas de casa, da escola ou de outros lugares"
                />
              ) : null}

              <Select
                touched={touched.SDQ_23}
                style={styles.box1}
                errors={errors.SDQ_23}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_23 = selected;
                  //validateField("SDQ_23");
                }}
                title="Se da melhor com adultos do que com outras crianças"
              />
              <Select
                touched={touched.SDQ_24}
                style={styles.box1}
                errors={errors.SDQ_24}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_24 = selected;
                  //validateField("SDQ_24");
                }}
                title="Tem muitos medos, assusta-se facilmente"
              />
              <Select
                touched={touched.SDQ_25}
                style={styles.box1}
                errors={errors.SDQ_25}
                data={[
                  {
                    key: "Falso",
                    id: 0,
                    checked: false,
                  },
                  {
                    key: "Mais ou menos verdadeiro",
                    id: 1,
                    checked: false,
                  },
                  {
                    key: "verdadeiro",
                    id: 2,
                    checked: false,
                  },
                ]}
                onSelectionChange={(selected) => {
                  values.SDQ_25 = selected;
                  //validateField("SDQ_25");
                }}
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
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_3 = selected;
                    //validateField("EPVA_3");
                  }}
                  title="Gostaria de continuar a acreditar na força de Deus"
                />

                <Select
                  touched={touched.EPVA_4}
                  style={styles.box1}
                  errors={errors.EPVA_4}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_4 = selected;
                    //validateField("EPVA_4");
                  }}
                  title="Pretendo estar estudando para adquirir mais conhecimento"
                />

                <Select
                  touched={touched.EPVA_5}
                  style={styles.box1}
                  errors={errors.EPVA_5}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_5 = selected;
                    //validateField("EPVA_5");
                  }}
                  title="Pretendo ter condições de fazer viagens nacionais e internacionais"
                />
                <Select
                  touched={touched.EPVA_8}
                  style={styles.box1}
                  errors={errors.EPVA_8}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_8 = selected;
                    //validateField("EPVA_8");
                  }}
                  title="Gostaria de retribuir as pessoas que me ajudaram"
                />

                <Select
                  touched={touched.EPVA_10}
                  style={styles.box1}
                  errors={errors.EPVA_10}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_10 = selected;
                    //validateField("EPVA_10");
                  }}
                  title="Gostaria de ter sucesso em meus estudos"
                />
                <Select
                  touched={touched.EPVA_12}
                  style={styles.box1}
                  errors={errors.EPVA_12}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_12 = selected;
                    //validateField("EPVA_12");
                  }}
                  title="Gostaria de me tornar uma pessoa cada vez melhor"
                />

                <Select
                  touched={touched.EPVA_14}
                  style={styles.box1}
                  errors={errors.EPVA_14}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_14 = selected;
                    //validateField("EPVA_14");
                  }}
                  title="Gostaria de estar me relacionando com pessoas com a mesma fé que eu"
                />
                <Select
                  touched={touched.EPVA_15}
                  style={styles.box1}
                  errors={errors.EPVA_15}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_15 = selected;
                    //validateField("EPVA_15");
                  }}
                  title="Pretendo recorrer a Deus para resolver as minhas dificuldades"
                />
                <Select
                  touched={touched.EPVA_16}
                  style={styles.box1}
                  errors={errors.EPVA_16}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_16 = selected;
                    //validateField("EPVA_16");
                  }}
                  title="Gostaria de estar trabalhando em algo que faça a diferença na vida de outras pessoas"
                />

                <Select
                  touched={touched.EPVA_18}
                  style={styles.box1}
                  errors={errors.EPVA_18}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_18 = selected;
                    //validateField("EPVA_18");
                  }}
                  title="Gostaria de estudar algo no qual possa desempenhar minhas capacidades"
                />
                <Select
                  touched={touched.EPVA_20}
                  style={styles.box1}
                  errors={errors.EPVA_20}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_20 = selected;
                    //validateField("EPVA_20");
                  }}
                  title="Pretendo ser uma pessoa mais generosa"
                />
                <Select
                  touched={touched.EPVA_21}
                  style={styles.box1}
                  errors={errors.EPVA_21}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_21 = selected;
                    //validateField("EPVA_21");
                  }}
                  title="Pretendo ser uma pessoa mais feliz do que sou hoje"
                />
                <Select
                  touched={touched.EPVA_23}
                  style={styles.box1}
                  errors={errors.EPVA_23}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_23 = selected;
                    //validateField("EPVA_23");
                  }}
                  title="Gostaria de estar formado no curso técnico ou na faculdade"
                />
                <Select
                  touched={touched.EPVA_24}
                  style={styles.box1}
                  errors={errors.EPVA_24}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_24 = selected;
                    //validateField("EPVA_24");
                  }}
                  title="Gostaria de conseguir um bom trabalho graças aos meus estudos"
                />
                <Select
                  touched={touched.EPVA_26}
                  style={styles.box1}
                  errors={errors.EPVA_26}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_26 = selected;
                    //validateField("EPVA_26");
                  }}
                  title="Gostaria de melhorar de vida em função o meu estudo"
                />
                <Select
                  touched={touched.EPVA_28}
                  style={styles.box1}
                  errors={errors.EPVA_28}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_28 = selected;
                    //validateField("EPVA_28");
                  }}
                  title="Não pretendo estar fazendo um curso técnico nem faculdade"
                />
                <Select
                  touched={touched.EPVA_31}
                  style={styles.box1}
                  errors={errors.EPVA_31}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_31 = selected;
                    //validateField("EPVA_31");
                  }}
                  title=" Gostaria de estar me tornando uma pessoa melhor por meio da minha fé"
                />
                <Select
                  touched={touched.EPVA_32}
                  style={styles.box1}
                  errors={errors.EPVA_32}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_32 = selected;
                    //validateField("EPVA_32");
                  }}
                  title="Não gostaria de estar vivendo a minha vida com base em ensinamentos religiosos"
                />

                <Select
                  touched={touched.EPVA_34}
                  style={styles.box1}
                  errors={errors.EPVA_34}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_34 = selected;
                    //validateField("EPVA_34");
                  }}
                  title="Gostaria de estar cursando/ter concluído uma faculdade"
                />
                <Select
                  touched={touched.EPVA_36}
                  style={styles.box1}
                  errors={errors.EPVA_36}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_36 = selected;
                    //validateField("EPVA_36");
                  }}
                  title="Gostaria de estar fazendo o bem para as pessoas"
                />
                <Select
                  touched={touched.EPVA_38}
                  style={styles.box1}
                  errors={errors.EPVA_38}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_38 = selected;
                    //validateField("EPVA_38");
                  }}
                  title="Gostaria estar trabalhando para poder manter meus estudos"
                />
                <Select
                  touched={touched.EPVA_40}
                  style={styles.box1}
                  errors={errors.EPVA_40}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_40 = selected;
                    //validateField("EPVA_40");
                  }}
                  title=" Gostaria que Deus me ajudasse a conseguir tudo o que planejo"
                />
                <Select
                  touched={touched.EPVA_42}
                  style={styles.box1}
                  errors={errors.EPVA_42}
                  data={[
                    {
                      key: "Discordo totalmete",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Discordo parcialmente",
                      id: 1,
                      checked: false,
                    },
                    {
                      key: "Não sei avaliar",
                      id: 2,
                      checked: false,
                    },
                    {
                      key: "Concordo parcialmente",
                      id: 3,
                      checked: false,
                    },
                    {
                      key: "Concordo",
                      id: 4,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.EPVA_42 = selected;
                    //validateField("EPVA_42");
                  }}
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
                  data={[
                    {
                      key: "Sim ",
                      id: 0,
                      checked: false,
                    },
                    {
                      key: "Não",
                      id: 1,
                      checked: false,
                    },
                  ]}
                  onSelectionChange={(selected) => {
                    values.VI_1 = selected;
                    //validateField("VI_1");
                    if (selected === "Sim") {
                      setState2(true);
                    } else {
                      setState2(false);
                    }
                  }}
                  title="Você vivenciou algum tipo de violência na sua vida"
                />
                {state2 === true ? (
                  <>
                    <MultipleCheckBox
                      errors={errors.VI_2}
                      touched={touched.VI_2}
                      title="Em qual fase da sua vida?"
                      data={[
                        { id: 0, key: "Infância", checked: "unchecked" },
                        { id: 1, key: "Adolêscencia", checked: "unchecked" },
                        { id: 2, key: "Fase adulta", checked: "unchecked" },
                      ]}
                      style={styles.box1}
                      value={values.VI_2}
                      onSelectionChange={(selected) => {
                        values.VI_2 = selected;
                        //validateField("VI_2");
                      }}
                    />
                    <MultipleCheckBox
                      errors={errors.VI_3}
                      touched={touched.VI_3}
                      title="Qual foi o tipo de violência?"
                      data={[
                        { id: 0, key: "Abuso fisico", checked: "unchecked" },
                        {
                          id: 1,
                          key: "Abuso psicológico(ex:humilhou)",
                          checked: "unchecked",
                        },
                        { id: 2, key: "Abuso sexual", checked: "unchecked" },
                        {
                          id: 3,
                          key:
                            "Negligência(ex: falta de alimentação e cuidados)",
                          checked: "unchecked",
                        },
                      ]}
                      style={styles.box1}
                      value={values.VI_3}
                      onSelectionChange={(selected) => {
                        values.VI_3 = selected;
                        //validateField("VI_3");
                      }}
                    />
                    <MultipleCheckBox
                      errors={errors.VI_4}
                      touched={touched.VI_4}
                      title="Quem cometeu a violência"
                      data={[
                        { id: 0, key: "Pai", checked: "unchecked" },
                        { id: 1, key: "Mãe", checked: "unchecked" },
                        { id: 2, key: "Avós", checked: "unchecked" },
                        { id: 3, key: "Tios", checked: "unchecked" },
                        { id: 4, key: "Companheiro", checked: "unchecked" },
                        { id: 5, key: "Outro", checked: "unchecked" },
                      ]}
                      style={styles.box1}
                      value={values.VI_4}
                      onSelectionChange={(selected) => {
                        values.VI_4 = selected;
                        //validateField("VI_4");
                      }}
                    />
                  </>
                ) : null}
              </View>
            ) : null}

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
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
  key: {
    marginTop: 10,
    marginHorizontal: 8,
    paddingBottom: 45,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    paddingLeft: 10,
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
  geral: { paddingBottom: 40, paddingTop: 10 },
});

export default Form;
