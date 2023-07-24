import { useForm } from "@inertiajs/react"
import { createContext, useContext, useState } from "react";
import TextInput from '@/Components/TextInput';
import { Textarea } from "./Textarea";
import { FileInput } from "./FileInput";
import PrimaryButton from "./PrimaryButton";
import { GreenToast, RedToast } from "./ToastsAlert";
import { MdDeleteOutline } from "react-icons/md";
import { SelectOptions } from "./SelectOptions";
import { DateInput } from "./DateInput";

export function FormAdminFactory(dadosForm, tableName) {
    const FormContext = createContext();

    function FormAdmin({ children, submitButton = true, ...props }) {
        const { data, setData, processing, post, delete: destroy } = useForm({
            table: tableName,
            ...(dadosForm && (dadosForm[0] ? dadosForm[0] : dadosForm))
        })
        const [apagar, setApagar] = useState(false)
        const [toast, setToast] = useState([])

        const handleSubmit = (e) => {
            e.preventDefault()

            post(route('admin.update'), {
                onSuccess: () => {
                    !data.id && setApagar(true)
                    setToast([
                        ...toast,
                        <GreenToast />
                    ])
                },
                onError: (error) => {
                    console.error(error)
                    setToast([
                        ...toast,
                        <RedToast />
                    ])
                }
            })
        }

        return (
            <FormContext.Provider value={{ data, setData, destroy, processing, apagar, setApagar, toast, setToast }}>
                {!apagar &&
                    <form
                        {...props}
                        onSubmit={handleSubmit}
                    >
                        {children}
                        
                        {submitButton &&
                            <PrimaryButton disabled={processing}>
                                Enviar
                            </PrimaryButton>
                        }
                    </form>
                }
            </FormContext.Provider>
        )
    }

    function AdminTextInput({ children, value, className, ...props }) {
        const { data, setData } = useContext(FormContext);

        return (
            <TextInput
                {...props}
                className={className}
                value={data[value]}
                onChange={(e) => setData(value, e.target.value)}
                required
            >
                {children}
            </TextInput>
        )
    }

    function AdminTextarea({ children, value, className, onChange, ...props }) {
        const { data, setData } = useContext(FormContext);

        return (
            <Textarea
                {...props}
                className={className}
                value={data[value]}
                onChange={(e) => {
                    setData(value, e.target.value)
                    onChange && onChange(e)
                }}
                required
            >
                {children}
            </Textarea>
        )
    }

    function AdminFileInput({ children, value, ...props }) {
        const { data, setData } = useContext(FormContext);

        return (
            <FileInput
                {...props}
                url_image={data.url_imagem}
                onChange={(e) => setData(value, e.target.files[0])}
                required={data.id ? false : true}
            >
                {children}
            </FileInput>
        )
    }

    function AdminSelect({ value, options }) {
        const { data, setData } = useContext(FormContext);

        return (
            <SelectOptions
                value={data[value]}
                options={options}
                onChange={(e) => setData(value, e.target.value)}
            />
        )
    }

    function AdminRatingInput({ value }) {
        const { data, setData } = useContext(FormContext);

        const handleChange = (e) => {
            if (e.target.value > 5) return
            if (e.target.value < 0) return

            setData(value, e.target.value)
        }
        return (
            <TextInput
                type="number"
                value={data[value]}
                onChange={handleChange}
            >
                Avaliação
            </TextInput>
        )
    }

    function AdminDateInput({ children, value }) {
        const { data, setData } = useContext(FormContext);

        return (
            <DateInput
                value={data[value]}
                onChange={(e) => setData(value, e.target.value)}
            >
                {children}
            </DateInput>
        )
    }

    function DeleteButton() {
        const { data, setApagar, destroy, processing, toast, setToast } = useContext(FormContext);

        const handleClick = () => {
            data.id
                ? destroy(route("admin.destroy"), {
                    onSuccess: () => {
                        setToast([
                            ...toast,
                            <GreenToast />
                        ])
                    }
                })
                : setApagar(true)
        }

        return (
            <button
                type="button"
                disabled={processing}
                onClick={handleClick}
            >
                <div className="absolute -right-2 z-10 top-2 border-2 rounded-full p-px border-rose-600">
                    <MdDeleteOutline size={25} className={processing ? "text-gray-500" : "text-rose-600"} />
                </div>
            </button>
        )

    }
    return {
        FormAdmin,
        AdminTextInput,
        AdminTextarea,
        AdminFileInput,
        AdminSelect,
        AdminRatingInput,
        AdminDateInput,
        DeleteButton
    }
}