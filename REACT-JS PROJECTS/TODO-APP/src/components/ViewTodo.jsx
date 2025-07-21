/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { removeTodo } from "../utils/todoSlice";
import { FiTrash2 } from "react-icons/fi";
const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="max-w-xl mx-auto mt-6 px-4">
      <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        Your Todos
      </h3>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No tasks added yet.
        </p>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                className="flex justify-between items-center bg-violet-600 px-4 py-3 rounded-lg text-white shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-violet-400" />
                  <p className="text-sm font-bold sm:text-base">{todo.text}</p>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-red-400 hover:text-red-600 transition duration-200"
                    aria-label="Delete todo"
                  >
                    <FiTrash2 className="text-xl" />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default ViewTodo;
