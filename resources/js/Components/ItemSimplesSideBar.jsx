import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import {
    Sidenav,
    Ripple,
    initTE,
} from "tw-elements";

export function ItemSimplesSideBar({ children, href, method = 'get' }) {

    useEffect(() => {
        initTE({ Sidenav, Ripple });
    }, [])

    return (
        <li className="relative">
            <Link
                className="group w-full flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                data-te-sidenav-link-ref
                href={href}
                method={method}
                as="button"
            >
                {children}
            </Link>
        </li>
    )
}