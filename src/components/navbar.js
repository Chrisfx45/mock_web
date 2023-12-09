"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"




export default function Nav(){
    const [open, setOpen] = useState(false)
    const ActiveLink= ({ children, href })=> {
        const router = useRouter()

       
        const handleClick = (e) => {
          e.preventDefault()
          router.push(href)
        }
       
        return (
          <a href={href} onClick={handleClick} >
            {children}
          </a>
        )
      }
    
    return (
    <div> 
      <ol className="flex bg-[#3D3D3D] w-screen h-12 text-center items-center" >
        <li className="relative"><Image src={"https://images.ctfassets.net/daf64i8m3i6n/2uRAxwK6DveFhgktrgLMFq/e44c2812282d834941b15c3e8b35fa65/icon.png"
}width={40} height={40} style={{padding :"5px"}}alt="icon"/></li>
        <li className="flex-1 border-l-2 "><ActiveLink href={"/"}>Home</ActiveLink></li>
        <li className="flex-1 align-middle border-l-2"><ActiveLink href={"/teams"}>Team</ActiveLink></li>
        <li className="flex-1 align-middle border-l-2" ><ActiveLink href={"/services"}>Services</ActiveLink></li>
        <li className="flex-1 align-middle border-l-2"><ActiveLink href={"/about"}>About</ActiveLink></li>
    </ol>
    </div>

    )
}