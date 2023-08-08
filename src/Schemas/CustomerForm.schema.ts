import * as yup from "yup";

const CustomerSchema = yup.object().shape({
    full_name: yup.string().required("Nome é obrigatório!"),
    email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
    phone_number: yup.string().required("Número de telefone obrigatório!").test('valid-phone', 'Número de telefone inválido!', function(value) {
        
        const phoneRegex = /^[0-9]{10}$/;

        if (value) {
            return phoneRegex.test(value);
        }

        return true; 
    })
});