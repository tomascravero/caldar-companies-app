import React, { useState } from "react";
import "./aside.css";

function Aside() {
  const date = new Date().toDateString();
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="container-aside">
      <div id="logo">
        <h1>caldAR</h1>
      </div>
      <div id="categories">
        <ul id="list-categories">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Appointments</a>
          </li>
          <li>
            <a href="#">Companies</a>
          </li>
          <li>
            <a href="#">Buildings</a>
          </li>
          <li>
            <a href="#">Boilers</a>
          </li>
          <li>
            <a href="#">Boiler Types</a>
          </li>
        </ul>
      </div>
      <div id="date">
        <i class="far fa-calendar-minus"></i>
        <span>{date}</span>
        <span>{ctime}</span>
      </div>
    </div>
  );
}

export default Aside;
