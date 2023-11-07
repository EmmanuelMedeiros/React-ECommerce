import { useState , useEffect } from "react"
import { CommerceContext } from "../context/CommerceContext" 
import { useContext } from "react"

import MyAccount from "./MyAccount"
import ChangePwd from "./ChangePwd"

function ProfilePage() {

    const {user} = useContext(CommerceContext)

    const [pageSection, setSection] = useState(0)

    const person = {
        name: user.name,
        company: user.company,
        email: user.email,
        cpf: "naotenho"
    }

    console.log(pageSection)

    console.log(user)

    return(
        <div className="py-11">
            

            <div className="block md:w-3/4 md:mx-auto
             mt-10">

                <div className="w-11/12 block h-52 bg-dark-border mx-auto">
                </div>
                
                <div className="text-white font-medium w-4/5 h-24 bg-dark-border mx-auto mt-7 rounded-md flex items-center justify-center gap-7">
                    <p onClick={() => setSection(0)} className="z-10 hover:cursor-pointer">My Account</p>
                    <p onClick={() => setSection(1)} className="z-10 hover:cursor-pointer">Change Password</p>
                    <span className={`h-20 z-0 bg-darkest-border absolute ${pageSection == 0 ? '-ml-40 w-28' : 'ml-28 w-36'} transition-all duration-300 rounded-lg`}></span>
                </div>

            </div>

            {pageSection == 0 ? <MyAccount/> : <ChangePwd/>}

        </div>
    )
}

export default ProfilePage