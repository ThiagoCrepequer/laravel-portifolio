import { usePage } from "@inertiajs/react"

export function Footer() {
    const { header } = usePage().props

    return (
        <footer
            className="bg-neutral-900 text-center lg:text-left"
        >
            <hr className="w-full border-neutral-700" />
            <div className="p-4 py-6 text-center text-neutral-200 ">
                © 2023 Copyright:
                <a
                    className=""
                    href=""
                >{header.title}</a
                >
            </div>
        </footer>
    )
}