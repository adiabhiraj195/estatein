"use server"
import prisma from "@/db";


export const getAllEstates = async ()=>{
    return await prisma.estate_estate_and_location.findMany();
}   