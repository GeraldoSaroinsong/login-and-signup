"use client";

import React, { useEffect, useState } from "react";
import { callAPI } from "@/config/axios";
import { FaImage } from "react-icons/fa";
import { FaLocationPin, FaNoteSticky } from "react-icons/fa6";
import PostCard from "@/components/PostCard";
import UserCard from "@/components/UserCard";

const Posts = () => {
  const [postData, setPostData] = useState<any>([]);
  const [userData, setUserData] = useState<any>([]);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const post = await callAPI.get("/posts");
      const user = await callAPI.get("/users");
      setPostData(post.data);
      setUserData(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[70%] mx-auto my-20 flex flex-row gap-6">
      <div className="w-3/4">
        <div className="my-4 flex flex-row items-center gap-4">
          <img
            src="https://robohash.org/1"
            alt="avatar"
            className="w-24 rounded-full shadow-md"
          />
          <div className="w-full rounded-md shadow-md">
            <input
              type="text"
              placeholder="title"
              className="w-full py-2 px-4"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="relative w-full">
              <textarea
                name=""
                id=""
                placeholder="Type your story"
                className="w-full p-2"
              />
              <span className="absolute text-sm text-gray-500 right-2 bottom-2">
                {charCount}
              </span>
            </div>
            <hr className="border border-slate-300 w-[98%] m-auto" />
            <div className="flex flex-row justify-between items-center p-2">
              <div className="flex flex-row gap-2">
                <FaImage />
                <FaNoteSticky />
                <FaLocationPin />
              </div>
              <button className="rounded-full py-2 px-4 text-white bg-gray-600">
                Post
              </button>
            </div>
          </div>
        </div>
        <hr className="border border-slate-300 w-full" />
        {postData.map((val: any, index: number) => {
          return (
            <PostCard
              id={val.id}
              title={val.title}
              body={val.body}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        {userData.map((val: any, index: number) => {
          return (
            <UserCard
              id={val.id}
              name={val.name}
              phone={val.phone}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
