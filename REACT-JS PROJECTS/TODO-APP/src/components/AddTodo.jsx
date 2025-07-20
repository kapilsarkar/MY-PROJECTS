const AddTodo = () => {
  return (
    <div className=" bg-slate-300">
      <h2 className=" bg-violet-500 text-white p-2">TODO-APP</h2>
      <form className="space-x-3 flex flex-wrap p-3 m-1">
        <input  className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou" type="text" />
        <button className=" bg-purple-700 text-white px-3 py-2 rounded-full m-1">
          +
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
