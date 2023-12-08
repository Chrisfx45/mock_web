"use client"
import Nav from "./navbar";
export default function Template ({children})
{
    return (
        <div className=" text-indigo-100" style={{backgroundColor:"#212121"}}>
        <Nav></Nav>
        {children}
        </div>
        )
}