export function FileInput({ children, url_image, ...props }) {
    return (
        <div className="mb-3">
            <label
                className="mb-2 inline-block text-neutral-700 "
            >
                {children}
            </label>
            
            <div className="flex justify-center">
                <img src={url_image} className="max-w-[300px]"/>
            </div>
            
            <input
                {...props}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                type="file"
                accept="image/*"
            />
        </div>
    )
}