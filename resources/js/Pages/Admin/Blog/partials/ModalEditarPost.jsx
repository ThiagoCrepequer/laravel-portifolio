import { FormAdminFactory } from "@/Components/FormAdminFactory";
import Modal from "@/Components/Modal";
import { GrClose } from 'react-icons/gr'

export function ModalEditarPost({ dados, show, setShow }) {

    const { FormAdmin, AdminTextInput, AdminTextarea, AdminFileInput } = FormAdminFactory(dados, 'blog')

    return (
        <Modal show={show}>
            <div className="flex justify-center items-center">
                <FormAdmin
                    submitButton={false}
                    className='lg:w-[800px] p-4 bg-white'
                >
                    <div className="flex justify-end">
                        <button className="pb-2 pr-1" onClick={() => setShow(false)}>
                            <GrClose />
                        </button>
                    </div>

                    <AdminTextInput value={'title'}>
                        Título do post
                    </AdminTextInput>

                    <AdminTextarea value={'description'}>
                        Descrição do post
                    </AdminTextarea>

                    <AdminFileInput value={'image'}>
                        Imagem do post
                    </AdminFileInput>

                    <div className="w-full flex justify-end">
                        <button
                            type="button"
                            className="mr-2 inline-block rounded border-2 border-info px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            onClick={() => {
                                window.open(`/admin/blog/redirect/${dados.url_arquivo}`, '_blank')
                            }}
                        >
                            Editar conteúdo
                        </button>

                        <button
                            type="submit"
                            className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                        >
                            Salvar
                        </button>
                    </div>
                </FormAdmin>
            </div>
        </Modal>
    )
}