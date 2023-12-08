"use client"
import Template from "@/components/template";
import { Box, Center } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";


import useSWR from "swr";



export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "/api/hcontent",
    fetcher
  );

  if (error) {
    return <div> Failed to Load</div>;
  }

  if (isLoading) {
    return <div> Loading from SWR ... </div>;
  }
  const ImgURL= "https:" + data.home.includes.Asset[0].fields.file.url
  const ImgURLs= "https:" + data.home.includes.Asset[1].fields.file.url
  return (

    <>
    <Template>

    
      <Center display={"flex"} minHeight="500"mx={"auto"} my={"10%"}w={"80%"} className="bg-gradient-to-r from-orange-900 via-yellow-700 to-orange-900">
        <Box backgroundColor={"#000000"} w={"98%"} minHeight={"490"} m={"1%"}>
        
        <Box w={"98%"} h={"98%"} marginTop={"5%"}  m= {"1%"}>
          <Center backgroundColor={"#000000"}  padding={"10%"}w={"100%"} h={"30%"} position={"relative"} className=" border-b-2 border-gray-600">
            <Box w={"90%"} h={"90%"} m="2%"backgroundColor={"#000000"}>
            <Image src={ImgURL} fill={true} objectFit="contain" alt="logo-pic"/>
            </Box>
          </Center>
          <Box backgroundColor={"#000000"} marginTop={"5%"} w={"100%"} h={"60%"} display={"flex"} > 
            <Box position={"relative"} w={"48%"} margin={"1%"}>
              <Image src={ImgURLs}    width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="prof-pic"/>
            </Box>
            <Box  w={"48%"}  marginTop={"10%"}>
              <Box borderBottom={"2px"} borderColor={"#4A5568"} marginBottom="3%" className=" font-serif" style={{fontSize:"5vw"}}>{data.home.items[0].fields.title}</Box>
              <Box className=" font-serif " style={{fontSize:"3vw"}}>{data.home.items[0].fields.desciption}</Box>
            </Box>
          </Box>
         
        </Box>
        </Box>
      </Center>
      <Box w={"100%"} bgColor={"#000000"} bottom={"0"} minH={"100"} style={{fontSize:"2vw"}} >
        <div className="  font-serif grid grid-cols-3 gap-2">
          
          <div className >
            <Center><Link className=" border-white  border-b-2" href={"/about"}>AboutUs</Link>
            </Center>
            <Center>
            <p className=" text-center opacity-60">Learn more about our company</p>
            </Center>
          </div>
          <div >
          <Center>
            <Link className=" border-white  border-b-2" href={"/todos"}>Products</Link>
            </Center>
            <Center>
            <p className=" text-center opacity-60">See our services</p>
            </Center>
          </div>
          <div >
          <Center>
            <Link className=" border-white  border-b-2" href={"/teams"}>Teams</Link>
            </Center>
            <Center>
            <p className=" text-center opacity-60">Meet our Employees</p>
            </Center>
          </div>
          <div >
          <Center>
            <Link className=" border-white  border-b-2" href={"/home"}>Testimony</Link>
            </Center>
            <Center>
            <p className=" text-center opacity-60">See what our clients think</p>
            </Center>
          </div>

        </div>
      </Box>

    </Template>
    </>
  )
}