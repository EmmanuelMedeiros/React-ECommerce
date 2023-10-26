import { useState , useEffect } from "react"

function ProfileHeader() {

    const [lineA, setLineA] = useState(false)
    const [lineB, setLineB] = useState(false)

    return(
        <div className="mb-4">
            <ul className="md:gap-9 md:mx-auto md:w-3/4 md:justify-normal
            flex justify-around mt-14 font-bold text-2xl text-white">
                <li className="hover:cursor-pointer">
                    <h2 onMouseEnter={() => setLineA(true)} onMouseLeave={() => setLineA(false)}>Minha Conta</h2>
                    <span id="" className={`transition-all ease-in-out mx-auto duration-700 block h-1 bg-white ${lineA ? 'w-32' : 'w-0'}`}></span>
                </li>
                <li className="hover:cursor-pointer">
                    <h2 onMouseEnter={() => setLineB(true)} onMouseLeave={() => setLineB(false)}>Lista de Desejos</h2>
                    <span id="" className={`transition-all ease-in-out mx-auto duration-700 block h-1 bg-white ${lineB ? 'w-36' : 'w-0'}`}></span>
                </li>
            </ul>
        </div>
    )
}


export default ProfileHeader