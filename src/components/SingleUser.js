import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

function SingleUser({ user, updateUserMutation, deleteUserMutation }) {

  const submitHandler= (e) =>{
    e.preventDefault();
    const update = {id: user.id, name: e.target.name.value, role: e.target.role.value}
    updateUserMutation.mutate(update);
    e.target.name.value = "";
    e.target.role.value = "";
  }

  return (
    <tr key={user.name}>
      <td className="px-6 py-1 text-sm text-gray-800 whitespace-nowrap">
        <div className="flex">
          <div>
            <img
              src={user.image}
              alt=""
              className="mr-3 w-8 sm:w-12 h-8 sm:h-12 rounded-full"
            />
          </div>
          <div>
            <div className="text-base font-bold tracking-wide">{user.name}</div>
            <div className="text-base text-gray-700 tracking-wide">
              {user.email}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-1 text-sm text-gray-800 whitespace-nowrap">
        <div className="rounded-full flex justify-center">
          {user.status==="Active" ? (
            <div className="relative bg-green-200 px-2 py1 rounded-full flex">
              <span className=" text-green-800 mr-1">&#x25cf;</span>
              <span className="text-md font-semibold">Active</span>
              <span className="absolute top-1 -right-2 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
          ) : (
            <div className="relative bg-gray-200 px-2 py1 rounded-full flex">
              <span className=" text-gray-600 mr-1">&#x25cf;</span>
              <span className="text-md text-gray-700 font-semibold">
                Invited
              </span>
              <span className="absolute top-1 -right-2 w-2 h-2 rounded-full bg-grey-400 animate-pulse" />
            </div>
          )}
        </div>
      </td>
      <td className="px-6 py-1 text-sm font-medium text-right whitespace-nowrap">
        <a className="hover:text-green-700" href="#">
          {user.role}
        </a>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <div className="flex flex-col">
          <a className="text-gray-700 hover:text-red-700" href="#">
            {user.login.date}
          </a>
          <a className="text-gray-700 hover:text-red-700" href="#">
            {user.login.time}
          </a>
        </div>
      </td>
      <td className="px-6 py-1 text-sm font-medium text-right whitespace-nowrap">
        <a className="hover:text-green-700 text-xl" href="#">
          <button onClick={() => deleteUserMutation.mutate(user.id)}>
            <AiOutlineDelete />
          </button>
        </a>
      </td>
      <td className="px-6 py-1 text-sm font-medium text-right whitespace-nowrap">
        <a className="hover:text-green-700 text-xl" href="#">
          <Popover>
            <PopoverTrigger>
            <button>
            <AiOutlineEdit />
          </button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader className='mr-10'>Update user</PopoverHeader>
              <PopoverBody>
                <form
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={submitHandler}
                >
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="New name"
                      name="name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Add role"
                      name="role"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onSubmit={submitHandler}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </a>
      </td>
    </tr>
  );
}

export default SingleUser;
