
import Action from './Action'
import Navbar from './Navbar'
import Profile from './Profile'
import Todo from './Todo'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-3 w-full ">
                <Profile />
                <Todo />
                <Action />
            </div>
        </div>
    )
}

export default Layout