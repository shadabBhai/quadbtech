
import { useSelector, useDispatch } from 'react-redux'
// import { removeTodo } from '../redux/todoSlices'
import { FaStar } from 'react-icons/fa';


const TodoItem = () => {
    const todos = useSelector(state => state.todo.todos)
    // console.log(todos)
    // const dispatch = useDispatch()

    const toggleTaskDone = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, isDone: !task.isDone } : task
        ));
    };

    const toggleTaskImportant = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
        ));
    };

    return (
        <>

            <ul className="list-none">
                {todos.map((task) => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between mb-2 p-2 border-b border-gray-300"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={() => toggleTaskDone(task.id)}
                                className="mr-2 h-4 w-4"
                            />
                            <span className={`${task.isDone ? 'line-through text-gray-500' : ''}`}>
                                {task.title}
                            </span>
                        </div>
                        <button onClick={() => toggleTaskImportant(task.id)}>
                            <FaStar
                                className={`text-xl ${task.isImportant ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-400`}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoItem