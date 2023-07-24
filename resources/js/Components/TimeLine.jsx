import { usePage } from "@inertiajs/react"

export function TimeLine() {
    const { sobremim } = usePage().props

    return (
        <ol
            className="mx-2 md:mx-0 md:px-2 border-l border-rose-600 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t"
        >
            {sobremim.jornada.map((item, index) => (
                <Item key={index} dados={item}/>
            ))}
        </ol>
    )
}

function Item({dados}) {
    const {date, text, title} = dados

    return (
        <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-rose-600 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-gray-500 ">
                    {date ? date : "Atual"}
                </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">{title}</h4>
                <p className="mb-3 text-gray-500 text-sm">
                    {text}
                </p>
            </div>
        </li>
    )
}