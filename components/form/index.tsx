import { Button, Input, Field } from '@chakra-ui/react';
import { Formik, Form, useFormik } from 'formik';


export const FormVaga = () => {

    const vagas = {
        cidade: '',
        empresa: '',
        url: '',
        descricao: '',
        local: '',
        status: '',
        tipo: '',
        qualidade: '',
        chance: '',
        habilidades: '',
    }


    const EnviarVaga = async (vaga: any) => {
        try {
            const response = await fetch("http://localhost:3000/api/vagas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: vaga,
            });
        }
        catch (err) {
        }
    }


    const formik = useFormik({
        initialValues: vagas,
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            EnviarVaga(JSON.stringify(values, null, 2));
        },
    });


    return <div >
        <form onSubmit={formik.handleSubmit}>


            <Field.Root >
                {(Object.keys(vagas) as Array<keyof typeof vagas>).map((key) => (
                    <div key={key}>
                        <Field.Label>{key}</Field.Label>
                        <Input
                            variant="subtle"
                            id={key}
                            name={key}
                            type="text"
                            value={formik.values[key]}
                            onChange={formik.handleChange}
                        />
                    </div>
                ))}

            </Field.Root>

            <Button colorPalette="teal" variant="solid" type="submit">
                Salvar
            </Button>
        </form>



    </div>

}