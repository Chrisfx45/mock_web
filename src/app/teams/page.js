"use client";


import useSWR from "swr";
import Template from "../../components/template";
import Image from "next/image";
import { useState } from 'react';
import { Center } from "@chakra-ui/react";


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
  const user_data= data.team?.results

  return(


    <Template className="items-center   " style={{fontSize:"2vw"}}>


        <div  className="  m-auto  text-xl justify-center text-center p-10" >
                <h1 className="font-mono font-medium">Meet our Employees!!</h1>
        </div>
        {data.team?.results?.map((item, index)=>{
            return(

            <>
            <Center>
            <div key={index} className=" font-serif my-10 justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-4/5 p-1 rounded-lg">           
            <div className="grid grid-cols-4 gap-1 m-auto justify-center  border-white rounded-lg  bg-cyan-950 p-2" >
                <div className="  m-auto justify-center row-span-3">
                <Image className="rounded-full  self-center" src={item.picture.large} width={150} height={150} alt="profile pic"/>
                </div>  
                <div className=" text-lg inline-block align-middle mx-auto col-span-2 w-full S">
                    <p>{item.name.title}. {item.name.first} {item.name.last}</p>
                </div>
                <div className=" text-lg  align-text-bottom mx-auto  row-span-2">
                    <p className=" align-middle">Gender : {item.gender}</p>
                </div>
                <div className="  text-lg items-center col-span-2">
                    <p>{item.location.country}, {item.location.state}, {item.location.city}</p>
                </div>
                <div className="  text-lg items-center col-span-2" >
                    <p>Date of birth: {item.dob.date}</p>
                </div>
                <div className=" text-lg  align-text-bottom mx-auto">
                    <p>Age: {item.dob.age}</p>
                </div>
                <div className=" h-full col-span-4">
                    <p> </p>
                </div>
                <div className=" top-3 text-lg items-center col-span-1" >
                    <p>Email </p>
                </div>
                <div className=" flex-auto items-center col-span-3" >
                    <p>: {item.email} </p>
                </div>
                <div className=" text-lg items-center col-span-1" >
                    <p>Cell</p>
                </div>
                <div className=" text-lg items-center col-span-3" >
                    <p>: {item.cell} </p>
                </div>
            </div>
        </div> 
        </Center>
       
            </>

            )


        })}
        {/* <button onClick={console.log(user_data)}> click me</button> */}

           
 
    </Template>
  )
  }