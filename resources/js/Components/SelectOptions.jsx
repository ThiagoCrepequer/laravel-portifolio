import { useEffect } from "react";
import { Select, initTE } from "tw-elements";

export function SelectOptions({value, options, onChange, children}) {
    useEffect(() => {
        initTE({ Select });
    }, [])

    return (
        <select
            data-te-select-init
            value={value}
            onChange={onChange}
        >
            <option value=""></option>
            {options.map((item) => (
                <option key={item} value={item}>{item}</option>
            ))}
        </select>
    )
}