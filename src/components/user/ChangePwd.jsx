import { useState, useEffect } from 'react'

function ChangePwd() {

    const [fieldAView, setFieldA] = useState("password")
    const [fieldBView, setFieldB] = useState("password")
    const [fieldCView, setFieldC] = useState("password")


    return(
        <div className='py-3' >
            <form action="" className="md:w-2/3 md:mx-auto md:block
                                           ml-5 mx-auto">
                    
                    <ul className="mt-10 text-white">
                        <li>
                            <h3 className="md:-mx-2
                            text-xl font-semibold">Mudança de senha</h3>
                            <p className="md:-mx-2
                            opacity-80 leading-4">Após a confirmação de mudança. Um email será enviado a você!</p>
                        </li>
                    </ul>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-bold text-white text-lg">Senha antiga</h2>
                    </label>
                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none placeholder:opacity-80" 
                    type={fieldAView} name="oldpwd" id="oldpwd"/>

                    <span onClick={fieldAView == "password" ? () => setFieldA("text") : () => setFieldA("password")} 
                    className='material-icons md-white absolute -ml-7 mt-5 hover:cursor-pointer'>{fieldAView == "password" ? "visibility" : "visibility_off"}</span>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-bold text-white text-lg">Senha nova</h2>
                    </label>
                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none placeholder:opacity-80" 
                    type={fieldBView} name="newpwd" id="newpwd"/>

                    <span onClick={fieldBView == "password" ? () => setFieldB("text") : () => setFieldB("password")} 
                    className='material-icons md-white absolute -ml-7 mt-5 hover:cursor-pointer'>{fieldBView == "password" ? "visibility" : "visibility_off"}</span>

                    <label htmlFor="">
                        <h2 className="mt-6 -ml-1 font-bold text-white text-lg">Senha nova</h2>
                    </label>
                    <input className="mt-3 rounded-sm w-full h-10 px-2 -mx-2 border-none placeholder:opacity-80" 
                    type={fieldCView} name="pwdconfirm" id="pwdconfirm"/>

                    <span onClick={fieldCView == "password" ? () => setFieldC("text") : () => setFieldC("password")} 
                    className='material-icons md-white absolute -ml-7 mt-5 hover:cursor-pointer'>{fieldCView == "password" ? "visibility" : "visibility_off"}</span>
                    
                    <button className="mt-7 text-white text-xl font-bold bg-logo-blue block mx-auto rounded-md px-5 h-12 hover:bg-darkest-border" 
                    type="submit">Change Password</button>
            </form>
        </div>
    )
}

export default ChangePwd