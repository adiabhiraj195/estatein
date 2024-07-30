import prisma from "@/db"
import { NextResponse } from "next/server";
// import { useEstateStore } from "@/states/store";

export const GET = async ()=>{
    // const setEstates = useEstateStore((state)=> state.setEstates);

    const estate = await prisma.estate_estate_and_location.findMany();
    console.log(estate);
    return NextResponse.json({estate});

}