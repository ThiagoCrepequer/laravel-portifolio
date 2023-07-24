import { CardContato } from "@/Components/CardContato"
import { DefaultSection } from "@/Components/DefaultSection"
import { useForm, usePage } from "@inertiajs/react"
import axios from "axios"

export function Contatos() {
    const { data, setData } = useForm()
    const { contatos } = usePage().props

    return (
        <DefaultSection id="contatos">
            <div className="w-full py-14">
                <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl">
                        <h2 className="mb-10 px-6 text-2xl font-bold">Formas de contato</h2>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="relative mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                        <h3 className="-top-10 absolute mb-6 text-xl font-bold">Envie uma mensagem</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault()

                            axios.post(route('email.send'), data)
                                .then((response) => {
                                    console.log(response)
                                })
                        }}>
                            <div className="w-full px-2">
                                <TextInput
                                    onChange={(e) => setData('email', e.target.value)}
                                    value={data.email}
                                    type="email"
                                >
                                    Email
                                </TextInput>
                                <TextInput
                                    onChange={(e) => setData('nome', e.target.value)}
                                    value={data.nome}
                                >
                                    Nome
                                </TextInput>
                                <TextArea
                                    onChange={(e) => setData('mensagem', e.target.value)}
                                    value={data.mensagem}
                                >
                                    Mensagem
                                </TextArea>


                                <button type="submit" data-te-ripple-init data-te-ripple-color="light"
                                    className="w-full mb-6 inline-block rounded bg-rose-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ca3b3b] transition duration-150 ease-in-out hover:bg-rose-700 hover:shadow-[0_8px_9px_-4px_rgba(202, 59, 59, 0.3),0_4px_18px_0_rgba(202, 59, 59, 0.2)] focus:bg-rose-750 focus:outline-none focus:ring-0 active:bg-rose-800 ">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div className="flex flex-wrap justify-center">
                            {contatos.map((contato, index) => (
                                <CardContato title={contato.title} link={contato.link} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DefaultSection>
    )
}

function TextInput({ children, onChange, value, type = "text" }) {
    return (
        <div className="flex flex-col w-full mb-6">
            <input
                required
                type={type}
                value={value}
                onChange={onChange}
                className="py-2 px-2 outline-none bg-transparent border border-neutral-600 rounded-md transition-all duration-200 ease-in focus:border-rose-600"
                placeholder={children}
            />
        </div>
    )
}

function TextArea({ children, onChange, value }) {
    return (
        <div className="flex flex-col w-full mb-6">
            <textarea
                required
                value={value}
                onChange={onChange}
                className="py-2 px-2 h-[120px] resize-none border-neutral-600 outline-none bg-transparent border rounded-md transition-all duration-200 ease-in focus:border-rose-600"
                placeholder={children}
            />
        </div>
    )
}

