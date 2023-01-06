import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import UsersDisplay from "./UsersDisplay";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query';
import Axios from 'axios'
import {fetchData, userAddHandler, userDeleteHandler, userUpdateHandler, fetchSortedData, sortArrayOfObjects } from '../functions'

function Dashboard() {

  const [sort, setsort] = useState(false);
  
  const queryClient = useQueryClient();

  const {data:users, isLoading, isError, error } = useQuery('users',fetchData)

  const addUserMutation = useMutation(userAddHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const deleteUserMutation = useMutation(userDeleteHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const updateUserMutation = useMutation(userUpdateHandler, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  let content
  if (isLoading) {
    return (<p>LOADING...</p>)
  }
  else if (isError) {
    return <p>{error.message}</p>
  }
  else if(sort){
     content=users;
    let d= sortArrayOfObjects(content);
      return (
        <div style={{height:'100vh'}}>
          <DashboardHeader users={d} addUserMutation={addUserMutation}/>
          <UsersDisplay users={d} setSort={setsort} Sort={sort} deleteUserMutation={deleteUserMutation} updateUserMutation={updateUserMutation}/>
        </div>
      );
    }
  return (
    <div style={{height:'100vh'}}>
      <DashboardHeader users={users} addUserMutation={addUserMutation}/>
      <UsersDisplay users={users} setSort={setsort} Sort={sort} deleteUserMutation={deleteUserMutation} updateUserMutation={updateUserMutation}/>
    </div>
  );
}

export default Dashboard;
