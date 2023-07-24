import { FormAdminFactory } from "@/Components/FormAdminFactory";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { IoAddCircleOutline } from 'react-icons/io5'

export default function Jornada({ auth }) {
    const { dados } = usePage().props;
    const [emptyFormsJornada, setEmptyFormsJornada] = useState([])

    return (
        <Authenticated user={auth.user}>
            <button
                className=""
                onClick={() => {
                    setEmptyFormsJornada([
                        ...emptyFormsJornada,
                        <FormJornada dado={{}} />
                    ])
                }}
            >
                <IoAddCircleOutline size={30} />
            </button>

            <div className="w-full flex flex-row flex-wrap justify-center">
                {dados.jornada.map((item, index) => (
                    <FormJornada dado={item} key={index} />
                ))}

                {emptyFormsJornada.map((form) => (
                    form
                ))}
            </div>
        </Authenticated>
    )
}

function FormJornada({ dado }) {
    const { FormAdmin, AdminTextInput, AdminTextarea, AdminDateInput, DeleteButton } = FormAdminFactory(dado, 'sobremim_jornada');

    return (
        <FormAdmin className="relative w-[300px] md:w-[500px] m-2 justify-center rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col">
                <DeleteButton />
                
                <AdminDateInput value={"date"}>
                    Data
                </AdminDateInput>

                <AdminTextInput value={"title"}>
                    Título
                </AdminTextInput>

                <AdminTextarea value={"text"}>
                    Texto
                </AdminTextarea>
            </div>
        </FormAdmin>
    )
}