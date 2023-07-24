import { ConhecaEmpresa } from "./ConhecaEmpresa";
import { Depoimentos } from "./Depoimentos";
import { Servicos } from "./Servicos";

export function Empresa() {
    return (
        <section className="text-gray-100 bg-neutral-900">
            <ConhecaEmpresa />

            <Servicos />

            <Depoimentos />
        </section>
    )
}