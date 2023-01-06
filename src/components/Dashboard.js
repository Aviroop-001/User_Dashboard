import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import UsersDisplay from "./UsersDisplay";
import Axios from 'axios'
import { currentDate, currentDateTime } from "./randomData";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("Data Reloaded");
  }, []);

  const fetchData = async () =>{
      await Axios.get("https://fake-api-51ea.onrender.com/users")
      .then( res =>{
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log("users fetched");
  }

  const userAddHandler = async (name, email, role, status, phone) => {
    const newUser = {
      name: name,
      email: email,
      role: role,
      status: status,
      phone: phone,
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      login: {date: currentDate(), time: currentDateTime()}
    };
    try {
      const res = await Axios.post("https://fake-api-51ea.onrender.com/users", newUser);
      console.log("User Added");
      fetchData();
    } catch (er) {
      console.log(er);
    }
  };

  const userDeleteHandler = async (id) => {
    const res = await Axios.delete(`https://fake-api-51ea.onrender.com/users/${id}`)
    try {
      alert("User deleted")
      console.log("User deleted");
      fetchData();
    } catch (error) {
      console.log(error)
    }
  };

  const userUpdateHandler = async(id, nm, rl) => {
    const update = {name: nm, role: rl}
    const res = await Axios.patch(`https://fake-api-51ea.onrender.com/users/${id}`, update);
    try {
      alert("User edited")
      console.log("User deleted");
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{height:'100vh'}}>
      <DashboardHeader users={users} userAddHandler={userAddHandler}/>
      <UsersDisplay users={users} userDeleteHandler={userDeleteHandler} userUpdateHandler={userUpdateHandler}/>
    </div>
  );
}

export default Dashboard;
