import Image, { StaticImageData } from 'next/image'
import React from 'react'
import HybridButton from '../hybrid-button';

export default function PropertyCardTwo({
    image,
    prop_name,
    description,
    keyFeature,
    price,
    url
}: {
    image: StaticImageData
    prop_name: string
    description: string
    keyFeature?: string 
    price: number
    url: string
}) {


    return (
        <div className='flex flex-col border border-gray p-5 max-w-96 rounded-xl mr-10'>
            <div className='image-container w-full overflow-hidden mb-4'>
                <Image src={image} alt={prop_name} className='' />
            </div>

            {/* <div className=' px-3 py-1 bg-gray  text-gray-200 rounded-2xl mr-2 border border-gray'>
                <p className='flex justfy-between items-center text-sm font-light '>
                    {keyFeature}
                </p>
            </div> */}

            <h2 className='text-xl mb-2'>{prop_name}</h2>

            <p className='text-sm font-light text-gray-300 mb-4'>{description}</p>


            {/* <div className=''> */}
            <p className='font-light text-gray-300 text-sm'>Price</p>
            <div className='flex justify-between items-center'>
                <h2>${price}</h2>
                <HybridButton href={url} className='items-end rounded-md bg-purple text-sm font-light px-3 py-2 hover:bg-gray-500'>
                    View Property Details
                </HybridButton>
            </div>
            {/* </div> */}
        </div>
    )
}
