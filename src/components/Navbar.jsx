import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {


    return (
        <nav className="bg-green-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch">
                        <div className="flex space-x-4">
                            <CiMenuBurger className="mt-2 text-2xl font-bold" />
                            <h1 className="text-red-700 text-3xl font-bold ">

                                DoIt

                            </h1>
                        </div>
                        <div className="hidden sm:flex sm:ml-auto">
                            <div className="flex space-x-4">
                                <a href="#" className="  px-3 py-2 rounded-md"><PiMagnifyingGlassLight style={{ fontSize: '24px' }} /></a>
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium"><CgMenuGridO style={{ fontSize: '24px' }} /></a>
                                <a href="#" className="  px-3 py-2 rounded-md text-sm font-medium"><BsMoonStars style={{ fontSize: '24px' }} /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </nav>
    );
}




