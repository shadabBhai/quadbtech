import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { actionResponse, profileResponse } from "../redux/responsiveSlice";
const Navbar = () => {
    const isProfileVisible = useSelector(state => state.responsive.isProfileVisible)
    const isActionVisible = useSelector(state => state.responsive.isActionVisible)
    const dispatch = useDispatch()

    const handleProfile = () => {
        dispatch(profileResponse(!isProfileVisible))
    }
    const handleAction = () => {
        dispatch(actionResponse(!isActionVisible))
    }



    return (
        <nav className="bg-green-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch">
                        <div className="flex space-x-4">
                            <CiMenuBurger className="mt-2 text-2xl font-bold cursor-pointer" onClick={handleProfile} />
                            <h1 className="text-red-700 text-3xl font-bold ">

                                DoIt

                            </h1>
                        </div>
                        <div className="hidden sm:flex sm:ml-auto">
                            <div className="flex space-x-4">
                                <p className="  px-3 py-2 rounded-md"><PiMagnifyingGlassLight style={{ fontSize: '24px' }} /></p>
                                <p className=" px-3 py-2 rounded-md text-sm font-medium"><CgMenuGridO style={{ fontSize: '24px' }} onClick={handleAction} /></p>
                                <p className="  px-3 py-2 rounded-md text-sm font-medium"><BsMoonStars style={{ fontSize: '24px' }} /></p>

                            </div>
                        </div>
                    </div>
                </div >
            </div >



        </nav >
    );
}

export default Navbar;


