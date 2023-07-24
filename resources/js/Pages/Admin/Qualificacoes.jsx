import { FormAdminFactory } from "@/Components/FormAdminFactory";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { IoAddCircleOutline } from 'react-icons/io5'


export default function Qualificacoes({ auth }) {
    const { dados } = usePage().props;
    const [emptyFormsQualificacoes, setEmptyFormsQualificacoes] = useState([])


    return (
        <Authenticated user={auth.user}>
            <button
                className=""
                onClick={() => {
                    setEmptyFormsQualificacoes([
                        ...emptyFormsQualificacoes,
                        <FormQualificacoes dado={{}} />
                    ])
                }}
            >
                <IoAddCircleOutline size={30} />
            </button>

            <div className="w-full flex flex-row flex-wrap justify-center">
                {dados.qualificacoes &&
                    dados.qualificacoes.map((item, index) => (
                        <FormQualificacoes dado={item} key={index} />
                    ))}

                {emptyFormsQualificacoes.map((form) => (
                    form
                ))}
            </div>
        </Authenticated>
    )
}

function FormQualificacoes({ dado }) {

    const { FormAdmin, AdminTextInput, AdminFileInput, DeleteButton } = FormAdminFactory(dado, 'sobremim_qualificacoes');

    return (
        <FormAdmin className="relative justify-center rounded-lg bg-white w-[300px] m-2 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col">
                <AdminTextInput value={"title"}>
                    Título
                </AdminTextInput>

                <div className="bg-neutral-200 rounded-md flex justify-center">
                    <AdminFileInput value={"image"}>
                        Imagem
                    </AdminFileInput>
                </div>

                <DeleteButton />
            </div>
        </FormAdmin >
    )
}