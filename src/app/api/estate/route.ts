import prisma from "@/db"
import { NextResponse } from "next/server";

export const GET = async ()=>{
    const estate = await prisma.estate_estate_and_location.findMany()
    console.log(estate);
    return new NextResponse(JSON.stringify(estate), {
        status: 200
    })

}