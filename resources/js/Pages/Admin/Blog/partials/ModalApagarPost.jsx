import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";

export function ModalApagarPost({ show, setShow, dados }) {
    const { post, processing } = useForm({
        id: dados.id,
        url_arquivo: dados.url_arquivo
    })

    return (
        <Modal show={show} maxWidth="md">
            <div className="p-4 flex flex-col text-center">
                Tem certeza que deseja apagar o post {dados.title}?

                <div className="flex justify-end pt-5">
                    <SecondaryButton
                        onClick={() => setShow(false)}
                        className="mr-2"
                    >
                        Cancelar
                    </SecondaryButton>

                    <PrimaryButton
                        disabled={processing}
                        onClick={() => {
                            post(route('blog.destroy'), {
                                onSuccess: () => {
                                    setShow(false)
                                },
                                onError: () => {
                                    setShow(false)
                                    console.error('Erro ao apagar post')
                                }
                            })
                        }}
                    >
                        Apagar
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    )
}