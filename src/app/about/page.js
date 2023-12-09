"use client"

import Template from "@/components/template";
import { Box, Center, Grid, GridItem,Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";


import useSWR from "swr";




export default function About(){
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
      "/api/abouts",
      fetcher
    );
  
    if (error) {
      return <div> Failed to Load</div>;
    }
  
    if (isLoading) {
      return <div> Loading from SWR ... </div>;
    }
    const content = data.about.items[0].fields

    const kafe ="https:" + data.about.includes.Asset[0].fields.file.url
    const icon ="https:" + data.about.includes.Asset[1].fields.file.url

    return (
    <Template>

        <Center w={"100%"} h={"100%"}className="text-black">
            <Center  width={"90%"} h={"90%"} m={"5%"} minHeight={"600"}backgroundColor={"#390e00"}>
                <Box  width={"98%"} h={"98%"} minHeight={"588"} backgroundColor={"#FCE09B"}    rounded={"5%"}>
                <div className="grid grid-cols-4 gap-2 m-auto justify-center p-3 border-2px border-black" >
                    <div className=" col-span-2  relative">
                        <Center>
                        <Image src={kafe} width={0} height={0} sizes="100vw" style={{ width: '80%', height: 'auto' }} className=" rounded-md p-2" alt="kafe"></Image>
                        </Center>
                    </div>
                    <div className="col-span-2 relative font-serif">
                        <Center marginTop={"10%"}>
                        <Image src={icon} width={0} height={0} sizes="100vw" style={{ width: '80%', height: 'auto'}} alt="mc"></Image>
                        </Center>
                        <Box style={{ fontSize:"4vw", fontWeight:"1000",position:"absolute",bottom:"0", left:"0 "}}>
                        {content.title}
                        </Box>
                    </div>
                    <div className="col-span-4  justify-evenly font-serif">
                        <Text style={{fontSize:"3vw"}} className="text-left">{content.mission}</Text>
                    </div>
                    <div className="col-span-4  justify-evenly font-serif">
                        <Text   style={{fontSize:"3vw"}}className="text-left" >{content.desciption}</Text>
                    </div>
             
                </div>
                </Box>
            </Center>


        </Center>
    
    </Template>
    )
}