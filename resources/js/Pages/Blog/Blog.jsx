import { Header } from "@/Components/Header";
import { switchRedesSociais } from "@/assets/js/switchRedesSociais";
import { Head, usePage } from "@inertiajs/react";
import { Footer } from "../Welcome/partials/Footer";

export default function Blog() {
    const { posts, contatos, maisFamosos, header } = usePage().props

    return (
        <>
            <Head>

                <title>{`Blog | ${header.title}`}</title>
            </Head>

            <Header route={'blog'} />

            <section className="pt-20 h-full bg-neutral-900 ">
                <div className="w-full flex flex-row justify-center">
                    <div className="">
                        <div className="w-full flex flex-col flex-wrap items-center">
                            {posts &&
                                posts.map((post, index) => (
                                    <CardPostBlog key={index} dados={post} />
                                ))}
                        </div>
                    </div>

                    <aside className="hidden md:flex flex-col justify-start pr-6 pt-6">
                        <div>
                            <h1 className="text-xl font-bold text-center text-neutral-50">Contatos</h1>

                            <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 " />

                            <div className="flex flex-row justify-center">
                                {contatos &&
                                    contatos.map((contato, index) => (
                                        <CardContato key={index} dados={contato} />
                                    ))
                                }
                            </div>
                        </div>


                        <div>
                            <h1 className="text-neutral-50 text-xl font-bold text-center mt-8">Veja os posts mais <span className="text-rose-600">recentes</span></h1>

                            <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 " />

                            {posts &&
                                posts.map((post, index) => (
                                    index < 4 && <PostMaisRecentes key={index} dados={post} />
                                ))
                            }
                        </div>

                        <div>
                            <h1 className="text-neutral-50 text-xl font-bold text-center mt-8">Confira os posts mais <span className="text-rose-600">famosos</span></h1>

                            <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 " />

                            {maisFamosos &&
                                maisFamosos.map((post, index) => (
                                    <PostMaisRecentes key={index} dados={post} />
                                ))
                            }
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </>
    )
}

function CardContato({ dados }) {
    const Icon = switchRedesSociais(dados.title)

    return (
        <div className="mx-1 p-[6px] rounded-full bg-rose-600">
            <a target="_blank" href={`https://${dados.link}`}>
                <Icon color="white" size={30} />
            </a>
        </div>
    )
}

function PostMaisRecentes({ dados }) {
    return (
        <div className="relative rounded-md  object-cover border-rose-600 text-neutral-100">
            <h1 className="text-lg underline">{dados.title}</h1>
        </div>
    )
}

function CardPostBlog({ dados }) {
    const data = dados.created_at.split(' ')[0]
    const dataFormatada = data.split('-').reverse().join('/')

    return (
        <a className="relative flex flex-row items-center hover:shadow-md shadow-black/40 m-2 max-w-[950px] object-cover border-rose-600 text-neutral-100"
            href={`/blog/post/${dados.url_arquivo}`}
        >
            <img className="w-1/4 sm:w-[150px] h-[100px] sm:h-[150px] object-cover" src={dados.url_imagem} />
            <div className="p-2 h-max">
                <h1 className="text-md sm:text-xl font-extrabold">{dados.title}</h1>
                <p className="text-center mt-4 mb-2 text-sm sm:text-base">{dados.description}</p>
                <div className="flex flex-wrap text-neutral-700 justify-center items-center text-[12px] sm:text-base">
                    <span className="mr-1 sm:mr-6">Por: Pedro Santana</span>
                    <div>
                        <span>Views: {dados.views}</span>
                        <div className="inline mx-0.5 sm:mx-2 w-0.5 h-3 sm:h-5 border-neutral-700 border-l" />
                        <span className="text-right">{dataFormatada}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}