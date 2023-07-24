import { useEffect } from "react";
import {
    Input,
    initTE,
} from "tw-elements";

export function Textarea({children, ...props}) {
    useEffect(() => {
        initTE({ Input });
    }, [])

    return (
        <div className="relative mb-3" data-te-input-wrapper-init>
            <textarea
                {...props}
                className={`peer block min-h-[auto] w-full h-44 resize-none rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                rows="3"
            >
            </textarea>
            <label
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                {children}
            </label>
        </div>
    )
}