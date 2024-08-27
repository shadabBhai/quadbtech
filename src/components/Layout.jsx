
import { useSelector } from 'react-redux'
import Action from './Action'
import Navbar from './Navbar'
import Profile from './Profile'
import Todo from './Todo'

const Layout = () => {
    const isProfileVisible = useSelector(state => state.responsive.isProfileVisible)
    const isActionVisible = useSelector(state => state.responsive.isActionVisible)


    return (
        <div>
            <Navbar />
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {isProfileVisible && <Profile />}
                {!isProfileVisible && !isActionVisible ? (
                    <Todo className="w-full " />
                ) : (
                    <Todo className="col-span-2 md:col-span-1" />
                )}
                {isActionVisible && <Action />}
            </div>
        </div>
    )
}

export default Layout