// import { socialLinks } from '@/lib/links/social-links'
import Link from 'next/link'
import React from 'react'
import Logo from '../ui/logo'
import { about_links_footer, contact_links_footer, home_links_footer, properties_links_footer, services_links_footer } from '@/lib/links/footer-links'
import FooterLinksCard from '../ui/footer-links-card'

export default function Footer() {
    return (
        <div className='footer '>
            <div className='flex justify-between items-center border-y border-[#262626] px-10 py-10'>
                <div className='flex flex-col items-left justify-between'>
                    <h1 className='text-3xl mb-3'>Start Your Real Estate Journey Today</h1>
                    <p className='text-sm font-light text-gray-500 pr-10'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice,<br></br> Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties<br></br> or get in touch with our team for personalized assistance.</p>
                </div>
                <div className='items-center flex'>
                    <Link href={"/properties"} className='p-4 bg-[#703BF7] rounded-md hover:bg-[#693adffc]'>Explore Properties</Link>
                </div>
            </div>

            <div className='flex justify-between px-10 py-5'>
                <div className='flex flex-col items-start justify-start'>
                    <Logo />
                    <div className='border border-gray-600 rounded-md px-2 my-2'>
                        <input className='bg-transparent outline-none text-gray-400 font-light text-sm' placeholder='Enter your Email'></input>
                    </div>
                </div>

                {/* <div className='flex'> */}
                <FooterLinksCard title="Home" links={home_links_footer} />
                <FooterLinksCard title="About us" links={about_links_footer} />
                <FooterLinksCard title="Properties" links={properties_links_footer} />
                <FooterLinksCard title="Services" links={services_links_footer} />
                <FooterLinksCard title="Contact us" links={contact_links_footer} />

                {/* </div> */}
            </div>

            <div className='flex justify-between px-10 py-4 bg-[#1A1A1A]'>
                <div className='flex justify-between items-center'>
                    <p className='text-sm font-light text-gray-400'>@2023 Estatein. All Rights Reserved.</p>
                    <p className='text-sm font-light text-gray-400 ml-5'>Terms & Conditions</p>
                </div>

                <div className='flex items-center'>
                    {/* {socialLinks.map(({ image, url, name }) => {
                        return (
                            <Link href={url} key={name} className='mr-2'>
                                <Image
                                    src={image}
                                    alt={name}
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        )
                    })} */}
                </div>
            </div>
        </div>
    )
}
