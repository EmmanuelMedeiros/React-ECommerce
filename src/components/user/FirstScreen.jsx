import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CommerceContext } from '../context/CommerceContext'
import { User } from '../context/User'

function FirstScreen(props) {

    const {user, setUser} = useContext(CommerceContext)
    const [statusMsg, setStatusMsg] = useState(1)

    const navigate = useNavigate()

    let finishButton 
    let postStatus 
    let redirection 

    props.route === 'login' ? finishButton = 'Login' : finishButton = 'Register'

    props.route == 'login' ? redirection = "/profile" : redirection = '/' 
    
    const {register, handleSubmit, watch, formState: {errors},} = useForm()
    let addPost

    addPost = data => axios.post(`http://localhost:5000/user/${props.route}`, data)
    .then((response) => {
        console.log(response.data)
        console.log(response.data.message.userName)

        let email = response.data.message.userEmail
        let userId = response.data.message.userId
        let userName = response.data.message.userName
        let userToken = response.data.message.token 
        let isSeller = response.data.message.seller 

        const actualUser = new User(email, isSeller, userId, userName, userToken)

        setStatusMsg(response.status)

        if(props.route == 'login') {
            setUser(actualUser)
        }

    }).catch(error => {
        console.error(error.response.data.error)
        postStatus = error.response.status
        setStatusMsg(error.response.data.error)
    })

     
    function HandleNavigate() {
        useEffect(() => {
        if(statusMsg == 200) {
            navigate(redirection)
        }
    }, [statusMsg])
    }

    return(
        <div>
            
            <h1 className="text-5xl text-center mr-32 my-11 -mx-3 line-clamp-2 text-logo-blue font-bold">Blue van</h1>

            {statusMsg != 200 && statusMsg != 1 ? <div className='text-center -mb-40 text-alert-red mt-28'><h1>{statusMsg}</h1></div> : null}

            <form onSubmit ={handleSubmit(addPost)}
                className="grid grid-rows-3 justify-center place-items-center place-self-center my-12 space-y-8">
                <h1 
                    className="text-white text-4xl font-bold text-left mr-48">{props.userLog}</h1>

                {props.route != "login" ? 
                <input id='name' name='name' {...register('name')} 
                className="rounded w-80 px-4 h-12" type="text"  placeholder="Your name"/> 
                : null}
                <input id='email' name='email' {...register('email')}
                    className="rounded w-80 px-4 h-12" type="text" placeholder="Email"/>
                <input id='pwd' name='pwd' {...register('pwd')} 
                    className="rounded w-80 px-4 h-12" type="password"  placeholder="Password"/>


                <input type="submit" onClick={HandleNavigate()} value={finishButton} className="rounded hover:bg-darkest-border hover:cursor-pointer bg-logo-blue text-white text-xl w-60 h-10" />
            </form>
        </div>
    )
}

export default FirstScreen