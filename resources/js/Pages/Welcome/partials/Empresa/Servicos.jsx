import { DefaultSection } from "@/Components/DefaultSection"
import { ItemServico } from "@/Components/ItemServico"
import { usePage } from "@inertiajs/react"

export function Servicos() {
    const { empresa } = usePage().props

    return (
        <>
            <DefaultSection className="flex-col lg:flex-col">
                <div className="flex justify-center">
                    <div className="text-center max-w-[700px]">
                        <p className="uppercase font-bold mb-6 text-rose-600">Serviços</p>
                        <h2 className="text-3xl font-bold mb-6">O que fazemos?</h2>
                        <p className="text-gray-500 mb-12">
                            Descubra os serviços excepcionais oferecidos pela nossa empresa.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="grid sm:mx-12 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-2">
                        {empresa.servicos.map((item, index) => (
                            <ItemServico key={index} dados={item} />
                        ))}
                    </div>
                </div>
            </DefaultSection>

        </>
    )
}


