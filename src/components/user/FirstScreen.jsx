import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CommerceContext } from '../context/CommerceContext'
import { User } from '../context/User'

function FirstScreen(props) {

    let finishButton 
    let postStatus 
    let redirection 
    let addPost
    let screenMsg

    const actualDate = Date()
    const actualHour = actualDate.split(' ')[4].substring(0, 2) 

    const {user, setUser} = useContext(CommerceContext)

    const navigate = useNavigate()
    const {register, handleSubmit, watch, formState: {errors},} = useForm()

    if(actualHour > 6 && actualHour < 12) {
        screenMsg = {
            message: "Good Morning!",
            type: "greetings"
        }
    }
    else if(actualHour > 12 && actualHour < 18) {
        screenMsg = {
            message: "Good Afternoon! Login in Blue Van and enjoy the best of E_commerce",
            type: "greetings"
        }
    }
    else if(actualHour > 18 && actualHour < 24) {
        screenMsg = {
            message: "Good Night!",
            type: "greetings"
        }
    }

    const [statusMsg, setStatusMsg] = useState(screenMsg)

    props.route === 'login' ? finishButton = 'Login' : finishButton = 'Register'

    props.route == 'login' ? redirection = "/profile" : redirection = '/' 


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

        if(props.route == 'login') {
            setUser(actualUser)
        }

        setStatusMsg(200)

    }).catch(error => {

        screenMsg = {
            message: error.response.data.error,
            type: "error"
        }

        setStatusMsg(screenMsg)
        console.error(error.response.data.error)
    })

     
    function HandleNavigate() {
        useEffect(() => {
        if(statusMsg == 200) {
            navigate(redirection)
        }
    }, [statusMsg])
    }

    return(

        <div className='md:bg-background-blue md:absolute md:h-screen md:w-1/2'>
            
            <h1 className="text-5xl text-center mr-32 my-11 -mx-3 line-clamp-2 text-logo-blue font-bold">Blue van</h1>

            {statusMsg != 200 && statusMsg.type == "error" ? 
                <div className='text-center -mb-36 text-alert-red mt-28'>
                    <h1>{statusMsg.message}</h1>
                </div> : 
                <div className='text-center -mb-36 text-white mt-28 text-md font-semibold'>
                    <h1>{statusMsg.message}</h1>    
                </div>}

            <form onSubmit = {handleSubmit(addPost)} 
                              className="grid grid-rows-3 justify-center place-items-center place-self-center my-12 space-y-8">


                <h1 className="text-white text-4xl font-bold text-left mr-48 -mt-10">{props.userLog}</h1>

                {props.route != "login" ? 
                <input id='name' name='name' {...register('name')} 
                className="rounded w-80 px-4 h-12" type="text"  placeholder="Your name"/> 
                : null}
                <input id='email' name='email' {...register('email')}
                    className="rounded w-80 px-4 h-12" type="text" placeholder="Email"/>
                <input id='pwd' name='pwd' {...register('pwd')} 
                    className="rounded w-80 px-4 h-12" type="password"  placeholder="Password"/>


                <input type="submit" onClick={HandleNavigate()} value={finishButton} className="rounded hover:bg-darkest-border hover:cursor-pointer bg-logo-blue text-white text-xl w-60 h-10" />
                
                <div className='grid grid-rows-1 justify-center -my-5'>
                    {props.route != 'login' ? 
                    <h1 className='text-white text-center text-2xl'>Already have an account?</h1> 
                    : null}
                    <Link to={props.route == 'login' ? "/register" : '/'}><button className={`${props.route != 'login' ? 'ml-4': null} rounded border-none hover:bg-darkest-border hover:border-none hover:text-white active:bg-sky-500 border-sky-500 border-2 bg-white text-sky-500 w-60 h-10 text-xl`}>{props.route == 'login' ? "Register" : 'Login'}</button></Link>
                </div>
            </form>
        </div>
    )
}

export default FirstScreen