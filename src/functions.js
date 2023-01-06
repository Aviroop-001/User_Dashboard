import Axios from 'axios'

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

function currentDateTime() {
  const d = new Date();
  return d.toLocaleTimeString();
}
function currentDate() {
  const d = new Date();

  let st = "";
  st += months[d.getMonth()] + " ";
  st += d.getDate().toString() + ",";
  st += d.getFullYear().toString();
  return st;
}

export {currentDate, currentDateTime}

const fetchData = async () =>{
    try {
      const res = await Axios.get("https://fake-api-51ea.onrender.com/users");
      console.log("users fetched");
      return res.data;
    } catch (error) {
      console.log("User fetching Error");
    }
};

const fetchSortedData = async () =>{
  try {
    const res = await Axios.get("https://fake-api-51ea.onrender.com/users?_sort=name&_order=asc");
    console.log("sorted users fetched");
    return res.data;
  } catch (error) {
    console.log("User fetching Error");
  }
};

const userAddHandler = async (newUser) => {
  try {
    const res = await Axios.post("https://fake-api-51ea.onrender.com/users", newUser);
    console.log("User Added");
    return res;
  } catch (er) {
    console.log(er);
  }
};

const userDeleteHandler = async (id) => {
  try {
    const res = await Axios.delete(`https://fake-api-51ea.onrender.com/users/${id}`)
    alert("Do you want to delete the user ?")
    return res;
  } catch (error) {
    console.log(error)
  }
};

const userUpdateHandler = async(update) => {
  try {
    const res = await Axios.patch(`https://fake-api-51ea.onrender.com/users/${update.id}`, update);
    // alert("User edited")
    return res;
  } catch (error) {
    console.log(error)
  }
};

function sortArrayOfObjects(arr) {
  return arr.slice().sort((a, b) => (a["name"] > b["name"]) ? 1 : -1);
}

export { fetchData, userAddHandler, userDeleteHandler, userUpdateHandler, fetchSortedData, sortArrayOfObjects }