import '@/../css/custom-tags.css'
import { motion } from "framer-motion"

export function TituloComLinha({ children }) {
    return (
        <motion.h1
            className='line-before-left text-2xl text-left font-extrabold p-2'>
            {children}
        </motion.h1>
    )
}