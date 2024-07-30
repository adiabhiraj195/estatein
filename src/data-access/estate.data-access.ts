// import "server-only";
"use server"
import API from "@/app/api/api";
import prisma from "@/db";

export const getAllEstates = async () => {
    try {
        const result = await prisma.estate_estate_and_location.findMany();
        console.log(result + "result");
        // setEstates(JSON.parse(result.÷))
        return 
    } catch (error) {
        return console.log(error);
    }
}

export const axiosGetAllEstate = async () => {
    return API.get("/api/estate");
}