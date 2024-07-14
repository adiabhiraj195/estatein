import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'
// import { GoArrowUpRight } from "react-icons/go";

export default function ShortcutCard({
    image,
    title,
    url
}: {
    image: StaticImageData;
    title: string;
    url: string;
}) {
    return (
        <Link href={url} className=' relative bg-gray rounded-xl py-4 px-10 flex flex-col justify-between items-center mx-2 my-1'>

            {/* <GoArrowUpRight className='relative top-1 right-1' /> */}

            <Image src={image} alt={title} width={44} height={44} />
            <p className='text-sm text-gray-400 font-light mt-3'>{title}</p>
        </Link>
    )
}
