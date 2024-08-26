
import Action from './Action'
import Navbar from './Navbar'
import Profile from './Profile'
import Todo from './Todo'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className='ml-[20vw] grid grid-flow-col '>
                <Profile />
                <Todo />
                <Action />
            </div>
        </div>
    )
}

export default Layout