import { motion } from "framer-motion"

export function DefaultSection({children, className, ...props}) {
    return (
        <motion.section 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.2 }}
            className={"flex w-full text-slate-50 flex-col lg:flex-row " + className }
            {...props}
        >
            {children}
        </motion.section>
    )
}