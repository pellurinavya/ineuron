import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { User } from "../types/types";
import { useDispatch } from "react-redux";
// import { currentUser } from "../store/users/user.actions";
type props = {
  fetchUser: any;
};
const Adduser = ({ fetchUser }: props) => {
  const[lastnameErr,setLastnameErr]=useState(false)
  const[firstnameErr,setFirstNameErr]=useState(false)
  const[contactErr,setcontactErr]=useState(false)
  const dispatch = useDispatch();
 
  
  const formData: User = {
    firstName: "",
    lastName: "",
    age: 0,
    phoneNumber: "",
  };
  const inputFirstName = useRef<HTMLInputElement>(null);
  const inputLastName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputPhoneNo = useRef<HTMLInputElement>(null);
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.firstName = inputFirstName?.current?.value || "";
    formData.lastName = inputLastName?.current?.value || "";
    formData.age = parseInt(inputAge?.current?.value || "");
    formData.phoneNumber = inputPhoneNo?.current?.value || "";

    axios.post(
      "https://blue-journalist-bbrpv.ineuron.app:4000/user/create",
      formData
    );
    fetchUser();
  };
  const firstnameHandler=(e:any)=>{
    let item= e.target.value;
    if(item.length<4 ){
     setFirstNameErr(true)
    }
    else{
     setFirstNameErr(false)
    }
     }
     const lastnameHandler=(e:any)=>{
      let item= e.target.value;
    if(item.length<3 ){
     setLastnameErr(true)
    }
    else{
     setLastnameErr(false)
    }
     }
     const ageHanlder=(e:any)=>{
      let item= e.target.value;
    if(item.length>10){
     setcontactErr(true)
    }
    else{
     setcontactErr(false)
    }

     }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      <nav className="px-2 bg-white h-9 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <span className="text-white text-2xl">Admin Card</span>
      </nav>
        <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
          <div>
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                FirstName
              </label>
            </div>
            <input
            onChange={firstnameHandler}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="firstName"
              id="firstName"
              autoComplete="off"
              ref={inputFirstName}
              type="string"
              placeholder="FirstName"
              required
            />
            {firstnameErr?<span className="text-red-600 text-sm">Invalid FirstName</span>:null}
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                LastName
              </label>
            </div>
            <input
            onChange={lastnameHandler}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="lastName"
              id="lastName"
              autoComplete="off"
              ref={inputLastName}
              type="string"
              placeholder="LastName"
              required
            />
            {lastnameErr?<span className="text-red-600 text-sm">Invalid LastName</span>:null}
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
            </div>
            <input onChange={ageHanlder}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="age"
              id="Age"
              type="number"
              autoComplete="off"
              ref={inputAge}
              placeholder="Age"
            />
            
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                PhoneNumber
              </label>
            </div>
            <input
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="phoneNo"
              id="phoneNo"
              type="string"
              placeholder="PhoneNumber"
              autoComplete="off"
              ref={inputPhoneNo}
              required
            />
            {contactErr?<span className="text-red-600 text-sm">Invalid Age</span>:null}
            <div className=" pt-6 col-span-3 sm:col-span-2">
              <button
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Add User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adduser;
