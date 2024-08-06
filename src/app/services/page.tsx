import React from 'react'
import { hero_shortcut_links } from "@/lib/links/hero-shortcut-links";
import ShortcutCard from '@/components/ui/hero/shortcut-card';

type Props = {}

export default function Services({ }: Props) {
    return (
        <main>
            <div className='flex flex-col justify-center px-20 py-24 bg-gradient-to-r from-[#262626] to-[#26262600] border-y border-gray'>
                <h1 className='text-3xl mb-5'>Elevate Your Real Estate Experience</h1>
                <p className='text-gray-400 text-sm font-light'>
                    Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
                </p>
            </div>

            <div className='flex items-center justify-around p-3'>
                {hero_shortcut_links.map(({ title, url, image }) => {
                    return (
                        <ShortcutCard title={title} url={url} image={image} key={title} />
                    )
                })}
            </div>

            <div className='px-20'>
                <div className="mb-20">
                    <h1 className="text-3xl mb-2 ">Unlock Property Value</h1>
                    <p className="text-sm text-gray-400 font-light ">
                        Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.
                    </p>
                </div>

                <div>
                    <div className='flex bg-yellow-200'>
                       
                    </div>
                </div>
            </div>
        </main>
    )
}