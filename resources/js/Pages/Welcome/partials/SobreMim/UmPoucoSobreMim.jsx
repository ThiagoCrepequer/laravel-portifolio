import { usePage } from "@inertiajs/react";
import { TituloComLinha } from "@/Components/TituloComLinha";
import { DefaultSection } from "@/Components/DefaultSection";

export function UmPoucoSobreMim() {
    const { sobremim } = usePage().props
    const dados = sobremim.text[0]

    return (
        <DefaultSection>
            <div className='w-full flex flex-wrap justify-center items-center flex-col xl:flex-row'>
                <div className='flex-1 flex text-center text-sm sm:text-base flex-col w-11/12 sm:w-[500px] px-2'>

                    <TituloComLinha>
                        {dados.title}
                    </TituloComLinha>
                    <p>
                        {dados.paragraph_1}
                    </p>

                    <p>
                        {dados.paragraph_2}
                    </p>
                </div>
                <div className='flex-1 flex justify-center'>
                    <div className='border-2 border-rose-600'>
                        <img className=" sm:min-w-[350px] max-w-[400px]" src={dados.url_imagem} />
                    </div>
                </div>
            </div>
        </DefaultSection>
    )
}