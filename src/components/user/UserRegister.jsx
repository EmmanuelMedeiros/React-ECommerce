import FirstScreen from './FirstScreen'
import { Link } from 'react-router-dom'

function UserRegister() {
    return(
        <>
            <FirstScreen userLog='Register' route='register'/>

            <div className='grid grid-rows-2 justify-center -my-8'>
                <h1 className='text-white text-center text-2xl'>Already have an account?</h1>
                <Link to="/"><button className="rounded hover:bg-darkest-border hover:border-none hover:text-white active:bg-sky-500 border-sky-500 border-2 bg-white text-sky-500 w-60 h-10 mx-4 text-xl">Login page</button></Link>
            </div>
        </>
    )
}

export default UserRegister