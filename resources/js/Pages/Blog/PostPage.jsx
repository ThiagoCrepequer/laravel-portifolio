import { Header } from "@/Components/Header";
import { Link, usePage } from "@inertiajs/react";
import { NotionRenderer } from "react-notion-x";
import { IoIosArrowRoundBack } from 'react-icons/io'
import { motion, useScroll } from "framer-motion";
import 'react-notion-x/src/styles.css'
import './progressbar.css'
import { Footer } from "../Welcome/partials/Footer";

export default function PostPage() {
    const { page, data } = usePage().props
    const { scrollYProgress } = useScroll();

    return (
        <>
            <Header route={'blog'} />

            <div className="pt-16 flex justify-center bg-neutral-900">
                <Link
                    href="/blog"
                    className="absolute left-0 ml-4 text-neutral-700"
                >
                    <IoIosArrowRoundBack size={50} />
                </Link>

                <motion.div 
                    className="progress-bar z-10"
                    style={{ scaleX: scrollYProgress }}    
                />
                <div className="w-[100%] sm:w-11/12 md:max-w-[768px]">
                    <h1 className="text-3xl font-bold text-center text-neutral-50 mt-10 -mb-4">{data.title}</h1>
                    <NotionRenderer recordMap={page} fullPage={false} darkMode={true} />
                </div>
            </div>

            <Footer />
        </>
    )
}