
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