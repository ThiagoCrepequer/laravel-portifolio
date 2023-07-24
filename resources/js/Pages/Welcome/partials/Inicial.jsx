import { Header } from "@/Components/Header";
import { motion } from "framer-motion"

export function Inicial() {
    
    function TitleWithMotion({children, className = ''}) {
        return (
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className={className}
            >
                {children}
            </motion.h1>
        )
    }

    return (
        <section className='bg-neutral-950 text-slate-50 w-full h-[80vh]'>
            <Header route={'home'}/>

            <div
                className='bg-cover bg-center w-full h-full shadow-inner shadow-neutral-900 text-center flex justify-center items-center flex-col font-extrabold'
            >
                <TitleWithMotion className="text-5xl sm:text-6xl">
                    Pedro Santana
                </TitleWithMotion>

                    
                <TitleWithMotion className='text-2xl sm:text-4xl text-rose-600'>
                    Scrum Master
                </TitleWithMotion>
            </div>
        </section>
    )
}
