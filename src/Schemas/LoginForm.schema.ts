import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
    password: yup.string().required("Password obrigatório!")
});