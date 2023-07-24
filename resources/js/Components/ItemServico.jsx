export function ItemServico({dados}) {
    const {title, text} = dados

    return (
        <div className="mb-12 ">
            <div className="flex">
                <div className="shrink-0 mt-1">
                    <svg className="w-4 h-4 text-rose-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                    </svg>
                </div>
                <div className="grow ml-4">
                    <p className="font-bold mb-1">{title}</p>
                    <p className="text-gray-500">{text}</p>
                </div>
            </div>
        </div>
    )
}