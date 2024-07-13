import React from 'react'
import Image from 'next/image'
import logo from "../../../assets/logo.png";

export default function Logo() {
    return (
        <div className='logo flex items-center'>
            <Image
                src={logo}
                alt='logo image'
                width={34}
                height={34}
            />
            <h2 className='ml-1'>Estatein</h2>
        </div>
    )
}
