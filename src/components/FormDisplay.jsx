
import React from "react";

const FormDisplay = ({ category, formName }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-purple-dark mb-4">{formName} Form</h2>
      <p className="text-gray-600 mb-6">Category: {category}</p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-light"
            placeholder="Enter name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-light"
            placeholder="Enter email"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-light"
            placeholder="Enter description"
          />
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-purple text-white rounded-md hover:bg-purple-dark">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormDisplay;
