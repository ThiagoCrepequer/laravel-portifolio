import { MinhaJornada } from "./MinhaJornada"
import { UmPoucoSobreMim } from "@/Pages/Welcome/partials/SobreMim/UmPoucoSobreMim"
import { Qualificacoes } from "./Qualificacoes"

export function SobreMim() {
    return (
        <section className='bg-neutral-900 text-slate-50 w-full pb-12'>
            <Qualificacoes />

            <UmPoucoSobreMim />

            <MinhaJornada />
        </section>
    )
}