import { createContext } from "react";
import { useState } from "react";
import { User } from "./User";

export const CommerceContext = createContext()

export const CommerceProvider = ({children}) => {

    let defaultUser = new User("", "", "", false, "000000", "")
    let profilePage = [
        {
            actualPage: "profilePage",
            section: ["myAccount", 'changePwd']
        },
        {
            actualPage: "wishList",
            section: ["unique"]
        }
    ]

    const [user, setUser] = useState(defaultUser)
    const [profPage, setProfPage] = useState(profilePage[0])

    return <CommerceContext.Provider value={{user, setUser, profPage, setProfPage, profilePage}}>{children}</CommerceContext.Provider>
}