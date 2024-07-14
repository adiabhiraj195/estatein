import Image from 'next/image'
import React from 'react'
import hero from "@/assets/hero.png";
import HybridButton from '../hybrid-button';
import ReviewCard from './review-card';

export default function HeroSection() {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col items-start justify-center px-20'>
                <div className='flex flex-col'>
                    <h1 className='text-5xl mb-5'>Discover Your Dream <br />Property with Estatein</h1>
                    <p className='text-sm text-gray-400 font-light '>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                </div>
                <div className='my-10'>
                    <HybridButton className='border border-gray rounded-md text-sm font-light px-3 py-2 hover:bg-purple mr-3'>Learn more</HybridButton>
                    <HybridButton href={"/properties"} className='rounded-md bg-purple text-sm font-light px-3 py-2 hover:bg-gray-500'>Browse Properties</HybridButton>
                </div>
                

                {/* map this information  */}
                <div className='flex justify-between items-center'>
                    <ReviewCard title='Happy Customers' value='200'/>
                    <ReviewCard title='Properties For Clients' value='10k'/>
                    <ReviewCard title='Year Of Experience' value='16'/>
                </div>

            </div>
            <Image src={hero} alt='hero-image'></Image>
        </div>
    )
}


