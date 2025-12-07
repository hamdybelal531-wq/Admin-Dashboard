"use client";
import React, { useState } from "react";

const MOCK_USER_DATA = {
  name: "Belal Hamdy",
  username: "@alex_vance",
  tagline: "Product Designer & Digital Creator",
  coverImage: "https://placehold.co/1200x300/1E3A8A/ffffff?text=Profile+Cover",
  avatar: "https://placehold.co/150x150/4F46E5/ffffff?text=BH",
  location: "San Francisco, CA",
  joined: "October 2022",
  bio: "Designing interfaces that spark joy. Focused on clean UX, accessibility, and the future of interaction. Let's connect and build something amazing.",
  followers: 512,
  following: 158,
};

const MOCK_FRIENDS = [
  {
    id: 1,
    name: "Jessica Lee",
    avatar: "https://placehold.co/40x40/DC2626/ffffff?text=JL",
  },
  {
    id: 2,
    name: "Mark Jensen",
    avatar: "https://placehold.co/40x40/059669/ffffff?text=MJ",
  },
  {
    id: 3,
    name: "Sarah Khan",
    avatar: "https://placehold.co/40x40/FBBF24/ffffff?text=SK",
  },
  {
    id: 4,
    name: "David Chen",
    avatar: "https://placehold.co/40x40/3B82F6/ffffff?text=DC",
  },
  {
    id: 5,
    name: "Emily Rod",
    avatar: "https://placehold.co/40x40/9333EA/ffffff?text=ER",
  },
];

const MOCK_POSTS = [
  {
    id: 1,
    text: "Just wrapped up a massive project launch! The new dashboard interface is officially live. Huge thanks to the whole team for the late nights and dedication. On to the next challenge!",
    time: "2 hours ago",
  },
  {
    id: 2,
    text: "Thinking about the philosophy of design systems. Consistency isn't just about aesthetics; it's about reducing cognitive load for the user. What are your favorite design systems?",
    time: "Yesterday",
  },
  {
    id: 3,
    text: "A beautiful day for coding outdoors in the park. Sometimes all you need is fresh air and a good IDE.",
    time: "3 days ago",
  },
];

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-gray-500 dark:text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.727A8 8 0 0112 20c-3.535 0-6.727-2.484-7.939-5.996C3.12 11.455 4 8.212 6.544 6.64L12 2l5.456 4.64c2.544 1.572 3.424 4.815 2.152 8.164-1.212 3.512-4.404 5.996-7.939 5.996z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 13a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-gray-500 dark:text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-gray-500 dark:text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const ProfilePage = () => {
  const user = MOCK_USER_DATA;
  const friends = MOCK_FRIENDS;
  const posts = MOCK_POSTS;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-inter">
      <header className="w-full relative shadow-lg">
        {/* Cover Image */}
        <div className="h-48 md:h-64 bg-gray-700 overflow-hidden">
          <img
            src={user.coverImage}
            alt="User Cover"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1200x300/1E3A8A/ffffff?text=Profile+Cover";
            }}
          />
        </div>

        {/* Profile Avatar and Info Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end -mt-16 sm:-mt-20">
            {/* Avatar */}
            <div className="rounded-full border-4 border-white dark:border-gray-900 shadow-xl bg-gray-200">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-28 w-28 sm:h-36 sm:w-36 object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x150/4F46E5/ffffff?text=AV";
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 p-4 sm:p-0">
              <button className="flex items-center space-x-1 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"
                  />
                </svg>
                <span>Message</span>
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg hover:bg-indigo-700 transition transform hover:scale-105">
                + Follow
              </button>
            </div>
          </div>

          {/* User Names and Tagline */}
          <div className="mt-4 pb-6">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">{user.username}</p>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
              {user.tagline}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details and Friends (1/3 width on desktop) */}
        <div className="space-y-6 lg:col-span-1">
          {/* Profile Details Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              About
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-wrap">
              {user.bio}
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <LocationIcon />
                <span className="text-gray-700 dark:text-gray-300">
                  Lives in{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {user.location}
                  </span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon />
                <span className="text-gray-700 dark:text-gray-300">
                  Joined <span className="font-semibold">{user.joined}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <UserIcon />
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {user.followers}
                  </span>{" "}
                  Followers ·{" "}
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {user.following}
                  </span>{" "}
                  Following
                </span>
              </div>
            </div>
          </div>

          {/* Friends/Connections Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Connections ({friends.length})
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg transition duration-150 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="h-8 w-8 rounded-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/40x40/4F46E5/ffffff?text=${friend.name.charAt(
                        0
                      )}`;
                    }}
                  />
                  <span className="text-sm font-medium truncate">
                    {friend.name}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full py-2 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition">
              View All Connections
            </button>
          </div>
        </div>

        {/* Right Column: Activity Feed/Posts (2/3 width on desktop) */}
        <div className="space-y-6 lg:col-span-2">
          {/* Create Post Box */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg">
            <div className="flex items-start space-x-3">
              <img
                src={user.avatar}
                className="h-10 w-10 rounded-full"
                alt="Avatar"
              />
              <input
                className="flex-grow p-2.5 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 dark:placeholder-gray-400 transition"
                placeholder="What's on your mind, Alexander?"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition">
                Post Update
              </button>
            </div>
          </div>

          {/* Posts List */}
          <h2 className="text-2xl font-bold mb-4 pt-2">Recent Activity</h2>
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-400 transition duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/150x150/4F46E5/ffffff?text=AV";
                    }}
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user.username} · {post.time}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                {post.text}
              </p>

              {/* Post Actions */}
              <div className="flex space-x-4 border-t border-gray-100 dark:border-gray-700 pt-3">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-sm">12 Likes</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.649A9.957 9.957 0 0112 12V6a6 6 0 00-6 6z"
                    />
                  </svg>
                  <span className="text-sm">3 Comments</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
