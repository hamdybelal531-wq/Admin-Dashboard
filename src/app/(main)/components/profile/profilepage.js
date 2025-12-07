"use client";
import React, { useState } from "react";

const initialAdminData = {
  firstName: "designer",
  lastName: "One",
  email: "designer_one@admin.com",
  bio: "Web Developer with 10 years of experience in building scalable web applications.",
  role: "Administrator",
  avatarUrl: "https://placehold.co/150x150/4F46E5/ffffff?text=D",
};
const inputDataobj = {
  firstName: initialAdminData.firstName,
  lastName: initialAdminData.lastName,
  email: initialAdminData.email,
  bio: initialAdminData.bio,
  role: initialAdminData.role,
  avatarUrl: initialAdminData.avatarUrl,
};

const ProfilePage = () => {
  const [formData, setFormData] = useState(initialAdminData);
  const [inputData, setinputData] = useState(inputDataobj);
  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputData({ ...inputData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setFormData(inputData);
    setIsEditing(false);
  };
  return (
    <div className="p-6 md:p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        My Profile
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl max-w-4xl mx-auto p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
          <div className="relative mb-4 sm:mb-0 sm:ml-6">
            <img
              className="h-24 w-24 rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400"
              src={formData.avatarUrl}
              alt="My Photo"
            />
            <button
              className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white p-1 rounded-full text-xs shadow-md"
              title="تغيير الصورة"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.863-1.438A2 2 0 0110.453 4h3.094a2 2 0 011.664.89l.863 1.438A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>

          <div className="m-5">
            <h2 className="text-2xl font-semibold text-gray-900  dark:text-white">
              {formData.firstName} {formData.lastName}
            </h2>
            <p className="text-md text-indigo-600 dark:text-indigo-400">
              {formData.role}
            </p>
          </div>
        </div>

        <form className="space-y-6">
          {isEditing ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    first Name
                  </label>
                  <input
                    pattern=""
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={inputData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={inputData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  My Gmail
                </label>
                <input
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  type="email"
                  name="email"
                  id="email"
                  value={inputData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  About Me
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  rows="3"
                  value={inputData.bio}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="py-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  My Name
                </p>
                <p className="mt-1 text-md text-gray-900 dark:text-white">
                  {formData.firstName} {formData.lastName}
                </p>
              </div>
              <div className="py-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  My Gmail
                </p>
                <p className="mt-1 text-md text-gray-900 dark:text-white">
                  {formData.email}
                </p>
              </div>
              <div className="py-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  My Job Role
                </p>
                <p className="mt-1 text-md text-gray-900 dark:text-white">
                  {formData.role}
                </p>
              </div>
              <div className="py-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  About Me{" "}
                </p>
                <p className="mt-1 text-md text-gray-900 dark:text-white">
                  {formData.bio}
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-end pt-4 ">
            {isEditing ? (
              <>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setFormData(inputData);
                  }}
                  type="button"
                  className="px-6 py-2 mr-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setinputData(formData);
                    setIsEditing(false);
                  }}
                  type="button"
                  className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setIsEditing(true);
                }}
                type="button"
                className="px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edite Your Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
