
import Template from "@/components/template";
import { getCont } from "@/utils/services/getcons";
import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";

// static metadata
// export const metadata = {
//   title: "Services - List ",
//   description: " List of services and price",
// };

export const revalidate= 1;

export default async function Page({ params }) {
  const { id } = params;
  const content = await getCont(id);
  console.log(content.fields)
  const img = ""+ content.fields.link

  return (
    <Template>
    <div className=" font-serif">
        <Box w={"90%"} m={"5%"} borderColor={"white"} border={"2px"} rounded={"10px"} className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-950 ">
            <Center  roundedTop={"8px"} bg={"white"}style={{fontSize:"5vw", color:"#996515"}} >{content.fields.name}</Center>
            <div className=" grid grid-cols-4  font-serif">
                <div className=" col-span-2 row-span-1 relative m-2 align-middle">
                    <Image src={img}   width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="prof-pic"/>               
                </div>
                <div className=" col-span-2 m-2" style={{fontSize:"3vw"}}>
                    <Box>{content.fields.desciption}</Box>
                </div>
                {content.fields.kinds?.map((index,item)=>{
                    return(
                    <div key={index} className=" col-span-1"style={{fontSize:"3vw"}}>
                        <Box bg={"black"} borderColor={"white"} borderX={"1px"} marginTop={"10%"}>
                            <Center w={"100%"}>{content.fields.kinds[item]}</Center>
                            <Center w={"100%"}>{content.fields.price[item]}</Center>
                        </Box>
                    </div>)
                })}


            </div>

        </Box>
    </div>
    </Template>
  );
}