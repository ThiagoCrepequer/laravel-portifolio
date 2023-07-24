import { switchRedesSociais } from "@/assets/js/switchRedesSociais"

export function CardContato({ title, link }) {

    const ArrayUser = link.split('/')
    const user = ArrayUser[ArrayUser.length - 1]

    const Icon = switchRedesSociais(title)

    return (
        <div className="mb-12 w-[300px] shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <a target="_blank" href={`https://${link}`}>
                <div className="flex items-start">
                    <div className="shrink-0">
                        <div
                            className="inline-block rounded-md p-4 text-rose-600"
                            style={{
                                backgroundColor: "rgba(202, 59, 59, 0.1)"
                            }}
                        >
                            <Icon size={35} />
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold">
                            {title}
                        </p>
                        <p className="text-neutral-500">
                            {user}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

