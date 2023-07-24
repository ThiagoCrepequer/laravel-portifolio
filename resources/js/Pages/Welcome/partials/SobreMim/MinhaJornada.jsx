import { DefaultSection } from "@/Components/DefaultSection";
import { TimeLine } from "@/Components/TimeLine";

export function MinhaJornada() {
    return (
        <DefaultSection>
            <div className="w-full mt-12 bg-neutral-900 text-slate-50">
                <h1 className='uppercase font-bold mb-6 text-center text-rose-600'>Minha jornada</h1>

                <div className="flex justify-center">
                    <p className="mb-12 text-gray-500 text-center max-w-2xl">Descubra a trajetória que percorri ao longo da minha carreira e descubra as experiências, desafios e conquistas que moldaram quem sou hoje.</p>
                </div>

                <TimeLine />
            </div>
        </DefaultSection>
    )
}