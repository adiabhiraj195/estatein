import Link from 'next/link';
import React from 'react'

type links = {
    id: string;
    name: String;
    url: string;
}
type FooterLinks = {
    title: String;
    links: Array<links>
}
export default function FooterLinksCard({
    title,
    links
}: FooterLinks) {
    return (
        <div className='flex flex-col items-start'>
            <h2 className='text-gray-400 font-light text-sm '>{title}</h2>

            {links.map(({ id, name, url }) => {
                return (
                    <Link key={id}
                        href={url}
                        className='font-light text-sm mt-1 text-gray-200'
                    >
                        {name}
                    </Link>
                )
            })}
        </div>
    )
}
