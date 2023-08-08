import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    full_name: yup.string().required("Nome é obrigatório!"),
    email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
    password: yup.string().required("Password obrigatório!"),
    rewrittenPassword: yup.string().required("Repitir seu Password é obrigatório!")
    .oneOf([yup.ref('password'), 'Passwords precisam ser iguais']),
    phone_number: yup.string().required("Número de telefone obrigatório!").test('valid-phone', 'Número de telefone inválido!', function(value) {
        
        const phoneRegex = /^[0-9]{10}$/;

        if (value) {
            return phoneRegex.test(value);
        }

        return true; 
    })
});