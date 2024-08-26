import { RxAvatar } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuClipboardList } from "react-icons/lu";
import { TbChecklist } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import CircularGraph from "./CircularGraph";




const Profile = () => {
    return (
        <div className="mt-[10vh] w-[20vw] h-[83vh] bg-[#EEF6EF] p-4">
            <div >
                <div className="flex justify-center items-center ">

                    <h1 className="text-center text-9xl -mt-[8vh]">
                        <RxAvatar />
                    </h1>
                </div>
                <h4 className="text-center">Hey, ABCD</h4>
                <div className="bg-white m-1 pt-2 pb-2  ">
                    {/* Task Section */}
                    <div className="mb-4 flex flex-col pl-3 pt-2 ">
                        <div className="text-md mb-1 flex  space-x-4 hover:bg-[#EEF6EF] cursor-pointer ">
                            <LuClipboardList />
                            <h1>All Tasks</h1>
                        </div>
                        <div className=" text-md mb-1 flex  space-x-4 hover:bg-[#EEF6EF] cursor-pointer">
                            <CiCalendar />

                            <h1>Today</h1>
                        </div>
                        <div className=" text-md mb-1 flex  space-x-4 hover:bg-[#EEF6EF] cursor-pointer">
                            <CiStar />
                            <h1>Important</h1>
                        </div>
                        <div className=" text-md mb-1 flex  space-x-4 hover:bg-[#EEF6EF] cursor-pointer">
                            <CiMap />
                            <h1> Planned</h1>
                        </div>
                        <div className=" text-md mb-1 flex  space-x-4 hover:bg-[#EEF6EF] cursor-pointer">
                            <TbChecklist />
                            <h1>Assigned Items</h1>
                        </div>
                    </div>
                </div>

                {/* Add List Section */}
                <div className=" mt-2 mb-2 p-4 bg-white h-[8vh]  flex space-x-4 hover:bg-[#EEF6EF] cursor-pointer ">
                    <h1 className=" text-2xl"><IoMdAdd /></h1>
                    <h2 className="">Add List</h2>
                </div>

                {/* Graph Section */}
                <div className="mt-[2vh]">
                    <div className="p-[1vw] bg-white">
                        <div className=" flex  justify-between ">
                            <div className="text-md font-bold">Today's Task</div>
                            <h3 className="text-1xl font-bold cursor-pointer"><IoInformationCircleOutline /></h3>
                        </div>
                        <div className="text-3xl mb-2">11</div>
                    </div>
                    <div className="mt-1 bg-white ">
                        <div className="lex justify-center items-center ">
                            <CircularGraph />
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default Profile