import { MdArrowDropDown } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { BsRepeat } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import TodoItem from "./TodoItem";

const Todo = () => {
    return (
        <div className="bg-red-50 -ml-[13vw]" >
            {/* Heading */}
            <div className="flex items-end border-b-2 border-gray-300 pt-[7vh] pb-[1vh] ">
                <h1 className="text-lg font-semibold">To Do</h1>
                <h1 className=" text-lg">
                    <MdArrowDropDown />
                </h1>
            </div>
            {/* add task  */}
            <div className="border-b-2  ">
                <input type="text" className="bg-transparent outline-none h-[23vh] w-full placeholder:text-3xl placeholder:pl-[2vw]" placeholder="Add A Task" />
                <div className="flex justify-between">
                    {/* icons */}
                    <div className="text-3xl  flex space-x-8 ml-[2vw] cursor-pointer">
                        <FaRegBell />
                        <BsRepeat />
                        <CiCalendar />

                    </div >
                    <button className="bg-[#357937] text-white font-semibold py-2 px-4 rounded-md shadow-lg m-[1vh] ">
                        ADD TASK
                    </button>
                </div>
            </div>
            {/*list of todo */}
            <div className="w-full">
                <TodoItem />
            </div>
            {/* compeleted todo */}
            <div>
                <h1>Compeleted</h1>
            </div>

        </div>
    )
}

export default Todo