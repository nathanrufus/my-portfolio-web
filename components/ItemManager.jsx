"use client"

import { useState, useEffect } from "react";

const ItemManager = () => {
  const [items, setItems] = useState([]);
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    video: null, // Change from string to file object
    techstack: [],
  });
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      if (data.success) {
        setItems(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleTechStackChange = (e) => {
    setItemData({ ...itemData, techstack: e.target.value.split(",") });
  };

  const handleVideoChange = (e) => {
    setItemData({ ...itemData, video: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, description, techstack, video } = itemData;
  
    // Ensure all required fields are provided
    if (!name || !description || (!video && method === "POST")) {
      console.error("Name, description, and video are required.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("techstack", techstack);
    if (video) formData.append("video", video);
    if (itemId) formData.append("id", itemId);
  
    try {
      const response = await fetch("/api/projects", {
        method: itemId ? "PUT" : "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        fetchItems();
        resetForm();
      } else {
        console.error("Failed to submit item:", data.error);
      }
    } catch (error) {
      console.error("Failed to submit item:", error);
    }
  };
  
  

  const handleEdit = (item) => {
    setItemData({
      name: item.name,
      description: item.description,
      video: null, // Reset video input when editing
      techstack: item.techstack.join(","),
    });
    setItemId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        fetchItems();
      } else {
        console.error("Failed to delete item:", data.error);
      }
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const resetForm = () => {
    setItemData({
      name: "",
      description: "",
      video: null,
      techstack: [],
    });
    setItemId(null);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-2xl font-semibold mb-4">{itemId ? "Edit Item" : "Add New Item"}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={itemData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={itemData.description}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Video</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleVideoChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tech Stack</label>
          <input
            type="text"
            name="techstack"
            value={itemData.techstack}
            onChange={handleTechStackChange}
            required
            placeholder="e.g. React, Node.js"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {itemId ? "Update Item" : "Add Item"}
        </button>
        {itemId && (
          <button
            type="button"
            onClick={resetForm}
            className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        )}
      </form>

      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-2xl font-semibold mb-4">Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item._id} className="flex justify-between items-center py-2">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <video controls className="mt-2 max-w-full h-auto">
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-600 hover:text-blue-800 font-medium mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemManager;

