import { FormAdminFactory } from "@/Components/FormAdminFactory";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { IoAddCircleOutline } from 'react-icons/io5'


export default function Servicos({ auth }) {
    const { dados } = usePage().props;
    const [emptyFormsServicos, setEmptyFormsServicos] = useState([])

    return (
        <Authenticated user={auth.user}>
            <button
                className=""
                onClick={() => {
                    setEmptyFormsServicos([
                        ...emptyFormsServicos,
                        <FormServicos dado={{}} />
                    ])
                }}
            >
                <IoAddCircleOutline size={30} />
            </button>

            <div className="w-full flex flex-row flex-wrap justify-center">
                {dados.servicos &&
                    dados.servicos.map((item, index) => (
                        <FormServicos dado={item} key={index} />
                    ))}

                {emptyFormsServicos.map((form) => (
                    form
                ))}
            </div>
        </Authenticated>
    )
}

function FormServicos({ dado }) {
    const { FormAdmin, AdminTextInput, AdminTextarea } = FormAdminFactory(dado, 'empresa_servicos');

    return (
        <FormAdmin className="relative justify-center rounded-lg bg-white w-[300px] m-2 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col">
                <AdminTextInput value={"title"}>
                    Título
                </AdminTextInput>

                <AdminTextarea value={"text"}>
                    Texto
                </AdminTextarea>
            </div>
        </FormAdmin >
    )
}