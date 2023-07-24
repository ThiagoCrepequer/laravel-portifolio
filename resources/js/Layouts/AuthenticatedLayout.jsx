import { HeaderProfile } from "@/Components/HeaderProfile";
import { ItemCompostoSideBar } from "@/Components/ItemCompostoSideBar";
import { ItemSimplesSideBar } from "@/Components/ItemSimplesSideBar";
import { BsFillBuildingFill, BsFillPersonFill } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
import { BiLogOut } from 'react-icons/bi';
import { MdAdminPanelSettings } from 'react-icons/md';
import { LuContact } from 'react-icons/lu';
import {
    Sidenav,
    Ripple,
    initTE,
} from "tw-elements";

export default function Authenticated({ user, children }) {
    initTE({ Sidenav, Ripple });

    const Empresa = {
        itens: ["Text", "Serviços", "Depoimentos"],
        links: [route('empresa.text'), route('empresa.servicos'), route('empresa.depoimentos')]
    }

    const SobreMim = {
        itens: ["Qualificações", "Text", "Jornada"],
        links: [route('sobremim.qualificacoes'), route('sobremim.text'), route('sobremim.jornada')]
    }

    return (
        <>
            <nav
                id="full-screen-example"
                className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] md:data-[te-sidenav-hidden='false']:translate-x-0"
                data-te-sidenav-init
                data-te-sidenav-mode-breakpoint-over="0"
                data-te-sidenav-mode-breakpoint-side="sm"
                data-te-sidenav-hidden="false"
                data-te-sidenav-color="dark"
                data-te-sidenav-content="#content"
                data-te-sidenav-scroll-container="#scrollContainer">

                <HeaderProfile user={user} />

                <div id="scrollContainer">
                    <ul
                        className="relative m-0 list-none px-[0.2rem]"
                        data-te-sidenav-menu-ref>

                        <ItemSimplesSideBar href={route('admin')}>
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 ">
                                <MdAdminPanelSettings />
                            </span>
                            <span>Dashboard</span>
                        </ItemSimplesSideBar>

                        <ItemSimplesSideBar href={route('admin.blog')}>
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 ">
                                <FaBlogger />
                            </span>
                            <span>Blog</span>
                        </ItemSimplesSideBar>
                        <ItemSimplesSideBar href={route('contatos')}>
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 ">
                                <LuContact />
                            </span>
                            <span>Contatos</span>
                        </ItemSimplesSideBar>
                        <ItemCompostoSideBar itens={SobreMim.itens} hrefs={SobreMim.links}>
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 ">
                                <IoPersonCircle />
                            </span>
                            <span>Sobre mim</span>
                        </ItemCompostoSideBar>

                        <ItemCompostoSideBar itens={Empresa.itens} hrefs={Empresa.links}>
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 ">
                                <BsFillBuildingFill />
                            </span>
                            <span>Empresa</span>
                        </ItemCompostoSideBar>

                    </ul>
                    <hr className="border-gray-300" />
                    <ul className="relative m-0 list-none px-[0.2rem]">
                        <ItemSimplesSideBar href={route('profile.edit')}>
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 ">
                                <BsFillPersonFill />
                            </span>
                            <span>Profile</span>
                        </ItemSimplesSideBar>
                        <ItemSimplesSideBar href={route('logout')} method="post">
                            <span
                                className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 ">
                                <BiLogOut />
                            </span>
                            <span>Log Out</span>
                        </ItemSimplesSideBar>
                    </ul>
                </div>
                <div className="absolute bottom-0 h-24 w-full bg-inherit text-center">
                    <hr className="mb-6 border-gray-300" />
                    <p>Made by: Thiago Crepequer</p>
                </div>
            </nav>

            <div
                className="h-max xl:h-full bg-gray-100 !pl-0 text-center sm:!pl-60"
                id="content">
                <div className="text-center">
                    <button
                        id="toggler"
                        className="m-12 inline-block rounded bg-zinc-800 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-900 active:shadow-lg sm:hidden"
                        data-te-sidenav-toggle-ref
                        data-te-target="#full-screen-example"
                        data-te-ripple-init
                        data-te-ripple-color="white">
                        <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </div>

                {children}

            </div>
        </>
    )
}