import { BlocoDepoimento } from "@/Components/BlocoDepoimento"
import { DefaultSection } from "@/Components/DefaultSection"
import { usePage } from "@inertiajs/react"

export function Depoimentos() {
    const { empresa } = usePage().props

    return (
        <DefaultSection className="lg:flex-col text-center">
            <div>
                <h2 className="font-bold text-lg mb-16">Depoimentos dos nossos clientes</h2>
            </div>

            <div className="flex flex-wrap md:flex-nowrap w-full justify-center">
                {empresa.depoimentos.map((item, index) => (
                    <BlocoDepoimento key={index} dados={item} />
                ))}
            </div>
        </DefaultSection>
    )
}



