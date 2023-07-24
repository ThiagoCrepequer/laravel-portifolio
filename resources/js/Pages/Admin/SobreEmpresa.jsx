import { FormAdminFactory } from "@/Components/FormAdminFactory";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function SobreEmpresa({ auth }) {
    const { dados } = usePage().props;

    const { FormAdmin, AdminTextInput, AdminTextarea, AdminFileInput } = FormAdminFactory(dados.text, 'empresa_text');

    return (
        <Authenticated user={auth.user}>
            <div className="flex h-full justify-center items-center">
                <div className="w-11/12 md:w-1/2 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <FormAdmin>
                        <h1 className="text-2xl font-bold mb-4">Empresa - Text</h1>

                        <AdminTextInput value={"title"}>
                            Título
                        </AdminTextInput>

                        <AdminTextarea value={"text"}>
                            Texto
                        </AdminTextarea>

                        <AdminFileInput value={"image"}>
                            Imagem
                        </AdminFileInput>
                    </FormAdmin>
                </div>
            </div>
        </Authenticated>
    )
}