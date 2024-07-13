"use client"

import React from 'react'
import Image from 'next/image';
import Logo from '../ui/logo';
import { navlinks } from '@/lib/links/nav-links';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from '@/lib/utils';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    let isActive = false;

    return (
        <div className='nav-container flex justify-between items-center px-10 py-4 bg-[#1A1A1A]' >
            <Logo />

            <div className='flex justify-between items-center'>
                {navlinks.map(({ name, url }) => {


                    isActive = pathname === url || pathname.startsWith(`${router}/`);

                    return (
                        <Link key={name} href={url} className={clsx("flex items-center justify-center px-4 py-2 mx-1 text-sm cursor-pointer", isActive && "bg-[#141414] border-[#262626] border rounded-md")}>
                            {name}
                        </Link>
                    )
                })}
            </div>

            <div className='flex items-center justify-center'>

                <Link href="/contactus" className={clsx('flex items-center justify-center px-4 py-2 mx-1 text-sm cursor-pointer bg-[#141414] border-[#262626] border rounded-md', isActive && "bg-[#703BF7]")}>
                    Contact Us
                </Link>
            </div>
        </div>
    )
}
