import { useState } from "react"
import {
    Toast,
    initTE,
} from "tw-elements";


export function GreenToast() {
    initTE({ Toast });
    const [time, setTime] = useState(30)

    setTimeout(() => {
        if(time <= 0) {
            setTime(undefined)
        } else {
            setTime(time - 1)
        }
    }, 1000)

    return (
        time ?
        <div
            class="pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
            id="static-example"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-te-autohide="false"
            data-te-toast-init
            data-te-toast-show>
            <div
                class="flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5">
                <p class="flex items-center font-bold text-success-700">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check-circle"
                        class="mr-2 h-4 w-4 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    Atualizado
                </p>
                <div class="flex items-center">
                    <p class="text-xs text-success-700"></p>
                    <button
                        type="button"
                        class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-toast-dismiss
                        id="green-button"
                        aria-label="Close">
                        <span
                            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div
                class="break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700">
                Dados atualizados com sucesso!
            </div>
        </div>
        : <></>
    )
}

export function RedToast() {
    const [time, setTime] = useState(30)


    setTimeout(() => {
        if(time <= 0) {
            setTime(undefined)
        } else {
            setTime(time - 1)
        }
    }, 1000)

    return (
        time ?
        <div
            class="pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
            id="static-example"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-te-autohide="false"
            data-te-toast-init
            data-te-toast-show>
            <div
                class="flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-danger-100 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700">
                <p class="flex items-center font-bold text-danger-700">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="times-circle"
                        class="mr-2 h-4 w-4 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                    </svg>
                    Erro
                </p>
                <div class="flex items-center">
                    <p class="text-xs text-danger-700">{time} segundos</p>
                    <button
                        type="button"
                        id="red-button"
                        class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-toast-dismiss
                        aria-label="Close">
                        <span
                            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div
                class="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700">
                Erro inesperado, tente novamente!
            </div>
        </div>
        : <></>
    )
}