import React, { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "./store/users/user.selector";
import { currentUser } from "./store/users/user.actions";
import { User } from "./types/types";
import axios from "axios";
import AddUser from "./components/Adduser";
import Dashboard from "./components/dashboard";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    fetchUser();
  }, [user]);

  const fetchUser = async () => {
    const res = await axios.get(
      "https://blue-journalist-bbrpv.ineuron.app:4000/users"
    );

    const data: User[] = [];
    res.data.data.map((item: any) => {
      data.push({
        id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        phoneNumber: item.phoneNumber,
        age: item.age,
      });
    });

    if (res.status === 200) {
      dispatch(currentUser(data));
    } else {
    }
  };

  return (
    <div className="App">
      <AddUser fetchUser={fetchUser} />
      <Dashboard fetchUser={fetchUser} />
    </div>
  );
}

export default App;
