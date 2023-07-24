import { usePage } from "@inertiajs/react"
import { TituloComLinha } from "@/Components/TituloComLinha"
import { DefaultSection } from "@/Components/DefaultSection"

export function ConhecaEmpresa() {
    const { empresa } = usePage().props
    const dados = empresa.text[0]

    const arrayText = dados.title.split(' ')
    const title = arrayText[arrayText.length - 1]

    arrayText.pop()

    const text = arrayText.join(' ')

    return (
        <DefaultSection>
            <div className="flex-1 flex flex-col flex-wrap justify-center px-8">

                <TituloComLinha>
                    {text} <span className="text-rose-600">{title}</span>
                </TituloComLinha>

                <p>{dados.text}</p>

                <div className="flex justify-center mt-8">
                    <a href="#contatos">
                        <button
                            type="button"
                            className="rounded bg-rose-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-rose-600 transition duration-150 ease-in-out hover:bg-rose-800 active:bg-rose-700 active:shadow-rose-700">
                            CONTRATE-NOS!
                        </button>
                    </a>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img className="w-11/12 sm:w-[500px]" src={dados.url_imagem} />
            </div>
        </DefaultSection>
    )
}