import FirstScreen from './FirstScreen'
import { Link } from 'react-router-dom'

function UserLogin() {
    return(
        <>
            <FirstScreen userLog='Login' route="login"/>

            <div className='grid grid-rows-1 justify-center -my-5'>

                <Link to="/register"><button className="rounded hover:bg-darkest-border hover:border-none hover:text-white active:bg-sky-500 border-sky-500 border-2 bg-white text-sky-500 w-60 h-10 text-xl">Register</button></Link>

            </div>
        </>
    )
}
export default UserLogin