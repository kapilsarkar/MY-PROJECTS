import { FiClipboard } from "react-icons/fi";
import AddTodo from "./components/AddTodo";
import ViewTodo from "./components/ViewTodo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sticky Header with Icon */}
      <header className="sticky top-0 z-50 bg-violet-600 text-white shadow-md py-4 px-6">
        <div className="flex items-center justify-center gap-2">
          <FiClipboard className="text-2xl" />
          <h1 className="text-2xl font-bold tracking-wide">TODO APP</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-start">
          <div className="w-full md:w-1/2">
            <AddTodo />
          </div>
          <div className="w-full md:w-1/2">
            <ViewTodo />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App