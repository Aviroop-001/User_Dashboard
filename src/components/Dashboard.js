import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import UsersDisplay from "./UsersDisplay";

function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
    // fetchImages();
    console.log("Data Reloaded");
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

//   const fetchImages=async () =>{
//     await fetch("https://randomuser.me/api/?results=500")
//       .then((res) => res.json())
//       .then((data) => setimages(data))
//       .catch((err) => {
//         console.log(err);
//       });
// }

  const userAddHandler = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userDeleteHandler = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userUpdateHandler = async(id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    name: name,
    email:email
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  // .then((json) => console.log(json));
  }

  return (
    <div>
      <DashboardHeader users={users} userAddHandler={userAddHandler}/>
      <UsersDisplay users={users} userDeleteHandler={userDeleteHandler}/>
    </div>
  );
}

export default Dashboard;
