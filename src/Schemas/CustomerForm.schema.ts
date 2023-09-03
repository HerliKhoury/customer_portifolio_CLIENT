import * as yup from "yup";

export const CustomerSchema = yup.object().shape({
    full_name: yup.string().required("Nome é obrigatório!"),
    email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
    phone_number: yup.string().required("Número de telefone obrigatório!")
});

export const CustomerSchemaRes = yup.object({
    id: yup.number().required(),
    full_name: yup.string().required(),
    email: yup.string().required(),
    phone_number: yup.string().required(),
    created_at: yup.string().required(), 
})