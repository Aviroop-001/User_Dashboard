import React from "react";
import { roles } from "./randomData";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { images } from "./randomData";

function SingleUser({ user, userDeleteHandler }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function randomDateTime(start, end) {
    const d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return d.toLocaleTimeString();
  }
  function randomDate(start, end) {
    const d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    let st = "";
    st += months[d.getMonth()] + " ";
    st += d.getDate().toString() + ",";
    st += d.getFullYear().toString();
    return st;
  }

  function getRandomInt() {
    return Math.floor(Math.random() * (10000 - 5)) + 4;
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    userDeleteHandler(id);
  };

  return (
    <tr key={user.name}>
      <td className="px-6 py-1 text-sm text-gray-800 whitespace-nowrap">
        <div className="flex">
          <div>
            <img
              src={images[Math.floor((Math.random() * 1000) % 21)]}
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
          {Math.floor((Math.random() * 1000) % 2) ? (
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
          {roles[Math.floor((Math.random() * 1000) % 8)]}
        </a>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <div className="flex flex-col">
          <a className="text-gray-700 hover:text-red-700" href="#">
            {randomDate(new Date(2022, 6, 5), new Date())}
          </a>
          <a className="text-gray-700 hover:text-red-700" href="#">
            {randomDateTime(new Date(2022, 6, 5), new Date())}
          </a>
        </div>
      </td>
      <td className="px-6 py-1 text-sm font-medium text-right whitespace-nowrap">
        <a className="hover:text-green-700 text-xl" href="#">
          <button onClick={() => userDeleteHandler(user.id)}>
            <AiOutlineDelete />
          </button>
        </a>
      </td>
      <td className="px-6 py-1 text-sm font-medium text-right whitespace-nowrap">
        <a className="hover:text-green-700 text-xl" href="#">
          <button>
            <AiOutlineEdit />
          </button>
        </a>
      </td>
    </tr>
  );
}

export default SingleUser;
