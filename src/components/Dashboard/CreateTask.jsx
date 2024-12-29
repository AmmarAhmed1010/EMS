import React from 'react'

const CreateTask = () => {
  return (
    <div className="max-w-4xl mx-auto bg-[#2D2D2D] mt-10 p-6 rounded-lg shadow-lg">
            <form>
                <h3 className="text-white text-xl font-semibold mb-4">Task Title</h3>
                <input 
                    type="text" 
                    placeholder="Make a UI design" 
                    className="w-full p-3 bg-[#3C3C3C] text-white border border-[#444] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />

                <h3 className="text-white text-xl font-semibold mb-4">Description</h3>
                <textarea 
                    name="" 
                    cols={30} 
                    rows={5} 
                    placeholder="Describe the task here..." 
                    className="w-full p-3 bg-[#3C3C3C] text-white border border-[#444] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <h3 className="text-white text-xl font-semibold mb-4">Date</h3>
                <input 
                    type="date" 
                    className="w-full p-3 bg-[#3C3C3C] text-white border border-[#444] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />

                <h3 className="text-white text-xl font-semibold mb-4">Assign to</h3>
                <input 
                    type="text" 
                    placeholder="Employee name" 
                    className="w-full p-3 bg-[#3C3C3C] text-white border border-[#444] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <h3 className="text-white text-xl font-semibold mb-4">Category</h3>
                <input 
                    type="text" 
                    placeholder="Design, dev, etc." 
                    className="w-full p-3 bg-[#3C3C3C] text-white border border-[#444] rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />

                <button 
                    type="submit" 
                    className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Create Task
                </button>
            </form>
        </div>
  )
}

export default CreateTask