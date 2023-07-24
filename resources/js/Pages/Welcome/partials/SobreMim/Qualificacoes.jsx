import { usePage } from "@inertiajs/react"
import { motion } from "framer-motion"

export function Qualificacoes() {
    const { sobremim } = usePage().props

    return (
        <div className="relative pb-32 hidden md:flex justify-center ">
            <div
                className="absolute py-2 flex flex-row"
            >
                {sobremim.qualificacoes.map((qualificacao, index) => (
                    <CardQualificacoes key={index} index={index}>
                        <img className="w-[50px]" src={qualificacao.url_imagem} />
                        {qualificacao.title}
                    </CardQualificacoes>
                ))}

            </div>
        </div>
    )
}

function CardQualificacoes({ children, index }) {
    function CardQualificacoesWithMotion({ children, className = '' }) {
        return (
            <motion.div
                animate={{ y: -70, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: `0.${index}` }}
                className={className}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <CardQualificacoesWithMotion
            className={`bg-cardQualificacoes opacity-0 rounded-md backdrop-blur-[30px]  w-[150px] py-2 mx-2 text-center text-md font-bold flex justify-center items-center flex-col`}
        >
            {children}
        </CardQualificacoesWithMotion>
    )
}

//style={{
//    backgroundColor: ""
//}}