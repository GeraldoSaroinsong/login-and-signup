"use client";
import React from "react";
interface IUserCard {
  id: number;
  name: string;
  phone: string;
}
const UserCard: React.FC<IUserCard> = ({ id, name, phone }) => {
  return (
    <div className="p-2 rounded-md shadow-md bg-slate-200 flex flex-row items-center gap-4">
      <img
        src={`https://robohash.org/${id}`}
        alt="avatar"
        className="rounded-full w-20 shadow-md"
      />
      <div className="flex flex-col">
        <h1 className="text-lg">{name}</h1>
        <p className="text-sm text-gray-600">{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
