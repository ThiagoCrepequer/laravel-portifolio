import { FormAdminFactory } from "@/Components/FormAdminFactory";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { IoAddCircleOutline } from 'react-icons/io5'

export default function Contatos({ auth }) {
    const { dados } = usePage().props;
    const [emptyFormsContatos, setEmptyFormsContatos] = useState([])

    return (
        <Authenticated user={auth.user}>
            <button
                className=""
                onClick={() => {
                    setEmptyFormsContatos([
                        ...emptyFormsContatos,
                        <FormContatos dado={{}} />
                    ])
                }}
            >
                <IoAddCircleOutline size={30} />
            </button>

            <div className="w-full flex flex-row flex-wrap justify-center">
                {dados.contatos &&
                    dados.contatos.map((item, index) => (
                        <FormContatos dado={item} key={index} />
                    ))}

                {emptyFormsContatos.map((form) => (
                    form
                ))}
            </div>
        </Authenticated>
    )
}

function FormContatos({ dado }) {
    const { FormAdmin, AdminTextInput, AdminSelect } = FormAdminFactory(dado, 'contatos');

    const options = [
        "Email",
        "Facebook",
        "GitHub",
        "Instagram",
        "LinkedIn",
        "Twitter",
        "Telefone"
    ]

    return (
        <FormAdmin className="m-2 relative justify-center rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col">
                <AdminTextInput value={"link"} />
                <AdminSelect value={"title"} options={options} />
            </div>
        </FormAdmin>

    )
}