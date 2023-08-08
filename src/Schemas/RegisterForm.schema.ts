import * as yup from "yup";

const RegisterSchema = yup.object().shape({
    full_name: yup.string().required("Nome é obrigatório!"),
    email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
    password: yup.string().required("Password obrigatório!"),
    rewrittenPassword: yup.string().required("Repitir seu Password é obrigatório!"),
    phone_number: yup.string().required("Número de telefone obrigatório!")/*  */
});