import { Link } from "@inertiajs/react";

export function Header({ route }) {
    const handleRoute = (rotaComparacao) => {
        return (
            route === rotaComparacao ? 'py-[7px] px-[8px] border-2 border-rose-600 text-rose-600' : 'text-lg m-4 py-2 px-3 text-neutral-50'
        )
    }

    return (
        <nav className='absolute h-16 flex justify-center sm:justify-end shadow-xl items-center w-full bg-neutral-900'>
            <ul className='flex flex-row sm:justify-end sm:items-end sm:mr-8 font-extrabold'>
                <li>
                    <Link href="/" className={handleRoute('home')}>
                        HOME
                    </Link>
                </li>
                <li>
                    <a href="/#contatos" className='text-lg m-4 py-2 px-3 text-neutral-50'>
                        CONTATO
                    </a>
                </li>
                <li>
                    <Link href="/blog" className={handleRoute('blog')}>
                        BLOG
                    </Link>
                </li>
            </ul>
        </nav>
    )
}