"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { IoBed } from "react-icons/io5";
import { FaBath, FaBuilding } from "react-icons/fa";
import HybridButton from '../hybrid-button';
import {GET} from "@/app/api/estate/route";

interface PropertieCardtypes {
    image: StaticImageData;
    prop_name: string;
    about: string;
    bedroom: number;
    bathroom: number;
    prop_type: string;
    price: number;
    url: string;
}

export default function PropertieCard({
    image,
    prop_name,
    about,
    bedroom,
    bathroom,
    prop_type,
    price,
    url
}: PropertieCardtypes) {

    const handelCall = async()=>{
        GET();
    }

    return (
        <div className='flex flex-col border border-gray p-5 max-w-96 rounded-xl'>
            <div className='image-container w-full overflow-hidden mb-4'>
                <Image src={image} alt={prop_name} className='' />
            </div>

            <h2 className='text-xl mb-2'>{prop_name}</h2>

            <p className='text-sm font-light text-gray-300 mb-4'>{about}</p>

            <div className='features flex items-center mb-3'>
                <div className=' px-3 py-1 bg-gray  text-gray-200 rounded-2xl mr-2'>
                    <p className='flex justfy-between items-center text-sm font-light '>
                        <IoBed className='mr-1' />
                        {bedroom}-Bedroom
                    </p>
                </div>
                <div className=' px-3 py-1 bg-gray  text-gray-200 rounded-2xl mr-2'>
                    <p className='flex justfy-between items-center text-sm font-light '>
                        <FaBath className='mr-1' />
                        {bathroom}-Bathroom
                    </p>
                </div>
                <div className=' px-3 py-1 bg-gray  text-gray-200 rounded-2xl'>
                    <p className='flex justfy-between items-center text-sm font-light '>
                        <FaBuilding className='mr-1' />
                        {prop_type}
                    </p>
                </div>
            </div>

            {/* <div className=''> */}
                <p className='font-light text-gray-300 text-sm'>Price</p>
                <div className='flex justify-between items-center'>
                    <h2>${price}</h2>
                    <HybridButton onClick={handelCall}   className='h-1/2 items-end rounded-md bg-purple text-sm font-light px-3 py-2 hover:bg-gray-500'>
                        View Property Details
                    </HybridButton>
                </div>
            {/* </div> */}
        </div>
    )
}
