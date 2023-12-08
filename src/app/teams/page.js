"use client";


import useSWR from "swr";
import Template from "../../components/template";
import Image from "next/image";
import { useState } from 'react';


export  default function Blog() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "/api/team",
    fetcher
  );

  if (error) {
    return <div> Failed to Load</div>;
  }

  if (isLoading) {
    return <div> Loading from SWR ... </div>;
  }  
  const user_data = data.team.results[0]

  return(
    <Template className="items-center   " style={{fontSize:"2vw"}}>
        <button onClick={console.log(user_data)}> click me</button>
            <div className="  m-auto  text-xl justify-center text-center p-10" >
                <h1 className="font-mono font-medium">Meet our Employees!!</h1>
            </div>
            <div className=" font-serif m-auto justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-4/5 p-1 rounded-lg">           
            <div className="grid grid-cols-4 gap-1 m-auto justify-center  border-white rounded-lg  bg-cyan-950 p-2" >
                <div className="  m-auto justify-center row-span-3">
                <Image className="rounded-full  self-center" src={user_data.picture.large} width={150} height={150} alt="profile pic"/>
                </div>  
                <div className=" text-lg inline-block align-middle mx-auto col-span-2 w-full S">
                    <p>{user_data.name.title}. {user_data.name.first} {user_data.name.last}</p>
                </div>
                <div className=" text-lg  align-text-bottom mx-auto  row-span-2">
                    <p className=" align-middle">Gender : {user_data.gender}</p>
                </div>
                <div className="  text-lg items-center col-span-2">
                    <p>{user_data.location.country}, {user_data.location.state}, {user_data.location.city}</p>
                </div>
                <div className="  text-lg items-center col-span-2" >
                    <p>Date of birth: {user_data.dob.date}</p>
                </div>
                <div className=" text-lg  align-text-bottom mx-auto">
                    <p>Age: {user_data.dob.age}</p>
                </div>
                <div className=" h-full col-span-4">
                    <p> </p>
                </div>
                <div className=" top-3 text-lg items-center col-span-1" >
                    <p>Email </p>
                </div>
                <div className=" flex-auto items-center col-span-3" >
                    <p>: {user_data.email} </p>
                </div>
                <div className=" text-lg items-center col-span-1" >
                    <p>Cell</p>
                </div>
                <div className=" text-lg items-center col-span-3" >
                    <p>: {user_data.cell} </p>
                </div>
            </div>
        </div>
 
 
    </Template>
  )
  }