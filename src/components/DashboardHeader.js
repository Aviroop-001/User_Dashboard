import React, { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor, useDisclosure
} from '@chakra-ui/react'

function DashboardHeader({users, userAddHandler }) {

  const submitHandler= (e) =>{
    e.preventDefault();
    userAddHandler(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  }

  return (
    <div>
      <div className="w-full flex justify-between px-10 mt-1">
        <div>
          <span className="font-bold text-lg px-3 ">Users </span>
          <span className="font-bold text-green-800 rounded-sm bg-green-100 px-3 py-1"> {users.length}</span>
          <div>Manage your team members and account permissions</div>
        </div>
        <div className=" w-1/4 flex justify-between">
          <button className="rounded-full bg-sky-500 px-4">Download CSV</button>
          <Popover>
  <PopoverTrigger>
    <button className="rounded-full bg-teal-500 px-8">Add User</button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>
      New User
    </PopoverHeader>
    <PopoverBody>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        User Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Aviroop Banerjee' name="name"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='banerjee@gmail.com' name='email'/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onSubmit={submitHandler}>
        Add User
      </button>
    </div>
  </form>
    </PopoverBody>
  </PopoverContent>
</Popover>
          
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader