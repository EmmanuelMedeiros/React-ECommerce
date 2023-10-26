import { createContext } from "react";
import { useState } from "react";
import { User } from "./User";

export const CommerceContext = createContext()

export const CommerceProvider = ({children}) => {

    let defaultUser = new User("", "", "", false, "000000", "")
    let profilePage = [
        {
            actualPage: "profilePage",
            section: "myAccount"
        },
        {
            actualPage: "changePwd",
            section: "unique"
        }
    ]

    const [user, setUser] = useState(defaultUser)
    const [profPage, setProfPage] = useState(profilePage[1])

    return <CommerceContext.Provider value={{user, setUser, profPage, setProfPage}}>{children}</CommerceContext.Provider>
}