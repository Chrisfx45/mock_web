"use client";

import Link from "next/link";
import useSWR from "swr";
import Template from "@/components/template";
import { Center, position } from "@chakra-ui/react";
import Image from "next/image"


export default function Services() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "/api/services",
    fetcher
  );

  if (error) {
    return <div> Failed to Load</div>;
  }

  if (isLoading) {
    return <div> Loading from SWR ... </div>;
  }
  const url1 ="https:" + data.content.includes.Asset[0].fields.file.url
  const url2 ="https:" + data.content.includes.Asset[1].fields.file.url
  const url3 ="https:" + data.content.includes.Asset[2].fields.file.url

  const desc = data.content

  return (

    <Template >
      <Center>
      <h1 className="font-serif" style={{fontSize:"4vw", margin:"3%"}}> Products and Services </h1>
 
      </Center>
      <hr></hr>
      <button onClick={()=>  console.log( desc, url1, url2,url3)}>click me</button>
      <Center>
      <div className="grid grid-cols-1 gap-3 w-4/5 font-serif"style={{fontSize:"3vw", marginTop:"5%"}}>

        <div className="col-span-1 border-white border-2 rounded-lg  bg-black" >
          <div className=" grid grid-cols-3 gap-2">
          <div className="col-span-1 row-span-2 my-2 p-2 border-r-2  border-white " >
          <Image src={url3}   width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto'}} alt="cafe"/>
          </div>
          <div className=" col-span-2  border-b-2 m-2 border-white relative">
          <Link href={`/services/${desc.items[0].sys.id}`}  style={{width: "60%", position: "absolute", left:"2", bottom:"2"}}>{desc.items[0].fields.name}</Link>
          </div>
          <div className="col-span-2  m-2">
          <p style={{  display:"inline-block",
                        fontSize:"2vw",
                        whiteSpace:"nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "30ch"}}>{desc.items[0].fields.desciption}</p>
          </div>
          </div>
        </div>

        <div className="col-span-1 border-white border-2 rounded-lg  bg-gradient-to-r bg-black" >
          <div className=" grid grid-cols-3 gap-2">
          <div className="col-span-1 row-span-2 my-2 p-2 border-r-2  border-white " >
          <Image src={url1}   width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto'}} alt="cafe"/>
          </div>
          <div className=" col-span-2  border-b-2 m-2 border-white relative">
          <Link href={`/services/${desc.items[1].sys.id}`}  style={{width: "60%", position: "absolute", left:"2", bottom:"2"}}>{desc.items[1].fields.name}</Link>
          </div>
          <div className="col-span-2  m-2">
          <p style={{  display:"inline-block",
                        fontSize:"2vw",
                        whiteSpace:"nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "30ch"}}>{desc.items[1].fields.desciption}</p>
          </div>
          </div>
        </div>
        <div className="col-span-1 border-white border-2 rounded-lg   bg-black" >
          <div className=" grid grid-cols-3 gap-2">
          <div className="col-span-1 row-span-2 my-2 p-2 border-r-2  border-white " >
          <Image src={url2}   width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto'}} alt="cafe"/>
          </div>
          <div className=" col-span-2  border-b-2 m-2 border-white relative">
          <Link href={`/services/${desc.items[2].sys.id}`}  style={{width: "60%", position: "absolute", left:"2", bottom:"2"}}>{desc.items[2].fields.name}</Link>
          </div>
          <div className="col-span-2  m-2">
          <p style={{  display:"inline-block",
                        fontSize:"2vw",
                        whiteSpace:"nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "30ch"}}>{desc.items[2].fields.desciption}</p>
          </div>
          </div>
        </div>
      </div>
      </Center>

    </Template>
  );
}