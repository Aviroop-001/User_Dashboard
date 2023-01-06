import React, {useState} from "react";
import SingleUser from "./SingleUser";

function Users({currentUsers, userUpdateHandler, userDeleteHandler}) {

  return (
      <tbody className="divide-y divide-gray-200">
        {currentUsers?.map((user) => (
          <SingleUser
            key={user.id}
            user={user}
            userUpdateHandler={userUpdateHandler}
            userDeleteHandler={userDeleteHandler}
          />
        ))}
      </tbody>
  );
}

export default Users;
