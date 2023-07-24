export function HeaderProfile({user}) {
    return (
        <div className="pt-6">
            <div id="header-content" className="pl-4">
                <h4 className="mb-2 text-2xl font-medium leading-[1.2]">{user.name}</h4>
                <p className="mb-4">{user.email}</p>
            </div>
            <hr className="border-gray-300" />
        </div>
    )
}

//<img
//    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
//    alt="Avatar"
//    className="mb-4 h-auto rounded-full align-middle"
//    style={{ maxWidth: '50px' }} />