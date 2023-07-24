import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import {
    Sidenav,
    Ripple,
    initTE,
} from "tw-elements";

export function ItemCompostoSideBar({ children, itens, hrefs, method = 'get' }) {
    useEffect(() => {
        initTE({ Sidenav, Ripple });
    }, [])

    return (
        <li className="relative">
            <a
                className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                data-te-sidenav-link-ref
            >
                {children}
                <span
                    className="absolute right-0 ml-auto mr-[0.8rem] rotate-180 transition-all duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600"
                    data-te-sidenav-rotate-icon-ref>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                            d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                </span>
            </a>
            <ul
                className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                data-te-sidenav-collapse-ref
                data-te-collapse-show>
                {itens.map((item, index) => (
                    <li key={index} className="relative">

                        <Link
                            className="flex h-6 w-full cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                            data-te-sidenav-link-ref
                            href={hrefs[index]}
                            method={method}
                            as="button">
                            {item}
                        </Link>
                    </li>
                ))}

            </ul>
        </li>
    )
}