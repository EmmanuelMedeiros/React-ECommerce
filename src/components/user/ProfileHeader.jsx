import { useState , useEffect } from "react"
import { useContext } from "react"
import { CommerceContext } from "../context/CommerceContext"
import WishList from "./WishList"
import ProfilePage from "./ProfilePage"

function ProfileHeader() {

    const [lineA, setLineA] = useState(false)
    const [lineB, setLineB] = useState(false)

    const {profPage, setProfPage, profilePage} = useContext(CommerceContext)

    useEffect(() => {
        console.log(profPage)
    }, [profPage])

    const EnterMyAccount = () => {
        setLineA(true)
        setLineB(false)
        setProfPage(profilePage[0])
    }

    const EnterWishList = () => {
        setLineA(false)
        setLineB(true)
        setProfPage(profilePage[1])
    }

    return(
        <div className="md:bg-background-blue md:absolute md:w-full
        mb-4">
            <ul className="md:gap-9 md:mx-auto md:w-3/4 md:justify-normal
            flex justify-around mt-14 font-bold text-2xl text-white">
                <li className="hover:cursor-pointer">
                    <h2 onClick={ () => EnterMyAccount() }>Minha Conta</h2>
                    <span id="" className={`hover:cursor-pointer transition-all ease-in-out mx-auto duration-700 block h-1 bg-white ${lineA ? 'w-32' : 'w-0'}`}></span>
                </li>
                <li className="hover:cursor-pointer">
                    <h2 onClick={ () => EnterWishList() } >Lista de Desejos</h2>
                    <span id="" className={`hover:cursor-pointer transition-all ease-in-out mx-auto duration-700 block h-1 bg-white ${lineB ? 'w-36' : 'w-0'}`}></span>
                </li>
            </ul>

            {profPage.actualPage == 'profilePage' ? <ProfilePage/> : <WishList/>}
        </div>
    )
}


export default ProfileHeader