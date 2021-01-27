import * as Yup from "yup";

const RegSchema = Yup.object().shape({
  criancaNome: Yup.string().required("Necessário nome da criança"),
  criancaIdade: Yup.string().required("Necessário idade da criança"),
  criancaNascimento: Yup.string().required("Necessário nascimento da criança"),
  cuidadorNome: Yup.string().required("Necessário nome do cuidador(a)"),
  cuidadorIdade: Yup.string().required("Necessário idade do cuidador(a)"),
  cuidadorNascimento: Yup.string().required(
    "Necessário nascimento do cuidador(a)"
  ),
  cuidadorAnosEstudo: Yup.string().required(
    "Necessário anos de estudo do cuidador"
  ),
  cuidadorLocalGrupo: Yup.string().required(
    "Necessário local do grupo cuidador(a)"
  ),
  cuidadorEndereco: Yup.string().required("Necessário endereço do cuidador(a)"),
  cuidadorCep: Yup.string().required("Necessário CEP do cuidador"),
  cuidadorCidade: Yup.string().required("Necessário cidade do cuidador"),
  cuidadorEstado: Yup.string().required("Necessário estado do cuidador"),
  cuidadorTelefones: Yup.string().required("Necessário telefones do cuidador"),
  cuidadorNumeroFilhos: Yup.string().required(
    "Necessário número de filhos do cuidador"
  ),
  cuidadorFilhos0a6Anos: Yup.string().required(
    "Necessário número de filhos de 0 a 6 anos  do cuidador"
  ),
  cuidadorPessoasMorando: Yup.string().required(
    "Necessário número de pessoas que moram na casa"
  ),
  cuidadorCasoReceba: Yup.string().required("Necessário informar o auxilío"),
});

export default RegSchema;
