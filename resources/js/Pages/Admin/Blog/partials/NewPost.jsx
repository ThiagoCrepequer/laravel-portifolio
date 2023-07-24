import { FileInput } from "@/Components/FileInput"
import Modal from "@/Components/Modal"
import PrimaryButton from "@/Components/PrimaryButton"
import SecondaryButton from "@/Components/SecondaryButton"
import TextInput from "@/Components/TextInput"
import { Textarea } from "@/Components/Textarea"
import axios from "axios"
import { useState } from "react"

export function NewPost({ show, setShow }) {
    const [carregando, setCarregando] = useState(false)

    const handleClickCriarPost = (e) => {
        e.preventDefault()
        setCarregando(true)

        const formData = new FormData();
        
        formData.append('table', 'blog');
        formData.append('title', e.target[0].value);
        formData.append('description', e.target[1].value);
        formData.append('image', e.target[2].files[0])

        axios.post(route('blog.createNewPost'), formData).then((response) => {
            setShow(false)
            window.open(`/admin/blog/redirect/${response.data}`, '_blank')

            setTimeout(() => {
                window.location.reload()
            }, 1000)
        })
    }

    return (
        <Modal show={show} maxWidth="md">
            <form
                className="p-4 flex items-center flex-col"
                onSubmit={handleClickCriarPost}
            >
                Tem certeza que deseja criar um novo post?
                <div className="w-full">
                    <TextInput required>
                        Título do Post
                    </TextInput>

                    <Textarea required>
                        Descrição do Post
                    </Textarea>

                    <FileInput required>
                        Imagem do Post
                    </FileInput>
                </div>

                <div className="flex flex-row gap-2">
                    <SecondaryButton
                        type="button"
                        onClick={() => setShow(false)}
                    >
                        Cancelar
                    </SecondaryButton>
                    <PrimaryButton
                        disabled={carregando}
                        type="submit"
                    >
                        Criar Post
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    )
}