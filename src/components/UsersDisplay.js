import React, { useState } from "react";
import Pagination from "./Pagination"
import Users from "./Users";


function UsersDisplay({ users, updateUserMutation, deleteUserMutation, setSort, Sort }) {
   
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-md font-bold text-left text-gray-500 uppercase "
                      >
                        <button onClick={() => setSort(!Sort)}><input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></button>  Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Last login
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      ></th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      ></th>
                    </tr>
                  </thead>
                  <Users currentUsers={currentUsers} updateUserMutation={updateUserMutation} deleteUserMutation={deleteUserMutation}/>
                </table>
                <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersDisplay;
