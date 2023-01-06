import React, {useState} from "react";
import SingleUser from "./SingleUser";

function Users({currentUsers, updateUserMutation, deleteUserMutation}) {

  return (
      <tbody className="divide-y divide-gray-200">
        {currentUsers?.map((user) => (
          <SingleUser
            key={user.id}
            user={user}
            updateUserMutation={updateUserMutation}
            deleteUserMutation={deleteUserMutation}
          />
        ))}
      </tbody>
  );
}

export default Users;
