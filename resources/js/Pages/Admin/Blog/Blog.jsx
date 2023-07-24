import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { RxNotionLogo } from 'react-icons/rx'
import { NewPost } from "./partials/NewPost";
import {
    Ripple,
    initTE,
} from "tw-elements";
import axios from "axios";
import { useEffect } from "react";
import { FormAdminFactory } from "@/Components/FormAdminFactory";
import { ModalApagarPost } from "./partials/ModalApagarPost";
import { ModalEditarPost } from "./partials/ModalEditarPost";

export default function Blog({ auth }) {
    const { pages } = usePage().props
    const [data, setData] = useState(pages)
    const [show, setShow] = useState(false);

    useEffect(() => {
        setData(pages)
    }, [pages])

    initTE({ Ripple });

    return (
        <>
            <Authenticated
                user={auth.user}
            >
                <h1 className="m-0 pt-4 text-3xl font-bold">
                    Posts do Blog
                    <span
                        className="inline-flex justify-center items-center mx-2 whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
                        Beta
                    </span>
                </h1>

                <p className="flex justify-center items-center text-xl">
                    Os posts desse blog são criados através da ferramenta Notion
                    <RxNotionLogo size={40} />
                </p>

                <div className="flex flex-row items-center justify-center">
                    <AiFillExclamationCircle />Não sabe como usar o Notion? <a className="flex items-center mx-1" href="https://www.notion.so/help/notion-academy/course/101-introduction" target="_blank">Clique aqui</a>
                </div>
                <button
                    type="button"
                    className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init
                    onClick={() => setShow(true)}
                >
                    New Post
                </button>

                <div className="flex flex-row flex-wrap items-center justify-center mt-4">
                    {data.map((page) => (
                        <CardPost dados={page} key={page.id}/>
                    ))}
                </div>
            </Authenticated>

            <NewPost show={show} setShow={setShow} />
        </>
    )
}

function CardPost({ dados }) {
    const [showDelete, setShowDelete] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

    return (
        <>
            <div className="m-2 bg-white w-10/12 sm:w-[400px] rounded-md pb-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                
                <img className="rounded-t-md w-full h-[300px] sm:w-[400px] sm:h-[300px] object-cover" src={dados.url_imagem}/>  
                
                <div className="p-2">
                    <h1 className="text-left text-xl font-bold">{dados.title}</h1>
                    <p className="py-6">{dados.description}</p>
                    <p className="text-right">Criado em: {dados.created_at}</p>
                    <p className="text-right">Views: {dados.views}</p>
                </div>
                <div className="w-full flex justify-end">
                    <button
                        type="button"
                        className="mx-2 bottom-0 z-10 rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        onClick={() => setShowDelete(true)}
                    >
                        Apagar post
                    </button>
                    <button
                        type="submit"
                        className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        onClick={() => setShowEdit(true)}
                    >
                        Atualizar
                    </button>
                </div>
            </div>

            <ModalEditarPost show={showEdit} setShow={setShowEdit} dados={dados} />
            <ModalApagarPost show={showDelete} setShow={setShowDelete} dados={dados} />
        </>
    )
}