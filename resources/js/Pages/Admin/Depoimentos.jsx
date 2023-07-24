import { FormAdminFactory } from "@/Components/FormAdminFactory";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { IoAddCircleOutline } from 'react-icons/io5'


export default function Depoimentos({ auth }) {
    const { dados } = usePage().props;
    const [emptyFormsJornada, setEmptyFormsJornada] = useState([])

    return (
        <Authenticated user={auth.user}>
            <button
                className=""
                onClick={() => {
                    setEmptyFormsJornada([
                        ...emptyFormsJornada,
                        <FormDepoiments dado={{}} />
                    ])
                }}
            >
                <IoAddCircleOutline size={30} />
            </button>

            <div className="w-full flex flex-row flex-wrap justify-center">
                {dados.depoimentos &&
                    dados.depoimentos.map((item, index) => (
                        <FormDepoiments dado={item} key={index} />
                    ))}

                {emptyFormsJornada.map((form) => (
                    form
                ))}
            </div>
        </Authenticated>
    )
}

function FormDepoiments({ dado }) {
    const { FormAdmin, AdminTextInput, AdminTextarea, AdminFileInput, AdminRatingInput, DeleteButton } = FormAdminFactory(dado, 'empresa_depoimentos');

    return (
        <FormAdmin
            className="relative justify-center rounded-lg bg-white m-2 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        >
            <div className="flex flex-col">
                <AdminTextInput value={"nome"}>
                    Nome
                </AdminTextInput>
                
                <AdminTextInput value={"funcao"}>
                    Função
                </AdminTextInput>
                
                <AdminTextarea value={"descricao"}>
                    Descrição
                </AdminTextarea>
                
                <AdminRatingInput value={"rating"} />
                
                <AdminFileInput value={"image"}>
                    Imagem
                </AdminFileInput>

                <DeleteButton />
            </div>
        </FormAdmin >
    )
}