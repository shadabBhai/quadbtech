import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, toggleTaskDone, toggleTaskImportant } from '../redux/todoSlices';
import { FaStar } from 'react-icons/fa';

const TodoList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.todo.tasks);
    const status = useSelector(state => state.todo.status);
    const error = useSelector(state => state.todo.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <div className="p-4 mx-auto">
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="flex items-center justify-between mb-2 p-2 border-b border-gray-300">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={() => dispatch(toggleTaskDone(task.id))}
                                className="mr-2 h-4 w-4"
                            />
                            <span className={`${task.isDone ? 'line-through text-gray-500' : ''}`}>
                                {task.text}
                            </span>
                        </div>
                        <button onClick={() => dispatch(toggleTaskImportant(task.id))}>
                            <FaStar
                                className={`text-xl ${task.isImportant ? 'text-black' : 'text-gray-300'} hover:text-gray-800`}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
