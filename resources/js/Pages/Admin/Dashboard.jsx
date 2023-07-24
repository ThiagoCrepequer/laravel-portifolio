import { FormAdminFactory } from '@/Components/FormAdminFactory';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { dados } = usePage().props;

    const { FormAdmin, AdminTextInput, AdminTextarea, AdminFileInput } = FormAdminFactory(dados.header, 'header');

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="w-full sm:p-10">
                <h1 className="font-bold text-left text-2xl mb-12">
                    Olá novamente, {auth.user.name}!
                </h1>

                <div className='flex-1 mx-4 my-4 p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg'>
                    <h1>Configurações básicas do site</h1>

                    <FormAdmin>
                        <div className='flex flex-row'>
                            <AdminTextInput value={"title"}>
                                Título do site
                            </AdminTextInput>
                        </div>

                        <AdminTextInput value={"keywords"}>
                            Palavras-chave
                        </AdminTextInput>

                        <AdminTextarea value={"description"}>
                            Descrição do site
                        </AdminTextarea>

                        <AdminFileInput value={"image"}>
                            Icon do site
                        </AdminFileInput>
                    </FormAdmin>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
