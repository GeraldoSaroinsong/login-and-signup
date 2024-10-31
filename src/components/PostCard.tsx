"use client";
import React from "react";

interface IPostCard {
  id: number;
  title: string;
  body: string;
}
const PostCard: React.FC<IPostCard> = ({ id, title, body }) => {
  return (
    <div className="my-4 w-full flex flex-row items-center justify-start gap-6">
      <img
        src={`https://robohash.org/${id}`}
        alt="avatar"
        className="rounded-full shadow-md w-24 absolute bg-slate-100"
      />
      <div className="bg-slate-200 h-28 flex flex-col justify-center items-start ml-10 pl-16">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="post text-lg text-gray-600">{body}</p>
      </div>
    </div>
  );
};
export default PostCard;
