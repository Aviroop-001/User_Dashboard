import React from "react";
import SingleUser from "./SingleUser";

function Users({currentUsers, userDeleteHandler}) {
  return (
      <tbody className="divide-y divide-gray-200">
        {currentUsers?.map((user) => (
          <SingleUser
            key={user.id}
            user={user}
            userDeleteHandler={userDeleteHandler}
          />
        ))}
      </tbody>
  );
}

export default Users;
