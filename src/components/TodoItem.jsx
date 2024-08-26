import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const TodoItem = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Learn React', isDone: false, isImportant: false },
        { id: 2, text: 'Build a To-Do App', isDone: false, isImportant: false },
    ]);

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
        <div className="p-4  mx-auto">
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="flex items-center justify-between mb-2 p-2 border-b border-gray-300">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={() => toggleTaskDone(task.id)}
                                className="mr-2 h-4 w-4"
                            />
                            <span className={`${task.isDone ? 'line-through text-gray-500' : ''}`}>
                                {task.text}
                            </span>
                        </div>
                        <button onClick={() => toggleTaskImportant(task.id)}>
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

export default TodoItem;
