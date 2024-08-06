import Container from '@/components/ui/container'
import React from 'react'
import Options from '@/components/ui/inputs/options'
import ArrowButton from '@/components/ui/arrows-buttons'
import { locations } from '@/lib/options/location'
import PropertyCardTwoMaper from '@/components/ui/propertie-card/property-car-two-maper'
import prisma from '@/db'
import { EstateTypes } from '@/lib/types/estate.types'
import InputFilter from '@/components/filters/input-filter'
import Form from '@/components/ui/form/property-details-form'

export default async function PropertiesPage() {
    
    // const estates = await prisma.estate_estate_and_location.findMany();

    let variable = 0;
    return (
        <main>
            <div className='flex flex-col justify-center px-20 py-24 bg-gradient-to-r from-[#262626] to-[#26262600] border-y border-gray'>
                <h1 className='text-3xl mb-5'>Find Your Dream Property</h1>
                <p className='text-gray-400 text-sm font-light'>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
            </div>

            {/* filter container  */}
            <Container className='flex flex-col items-center justify-center px-20'>
                <div className='bg-[#1A1A1A] w-9/12 p-1 rounded-md'>
                    <InputFilter/>
                </div>

                <div className='filters bg-[#1A1A1A] w-full items-center flex justify-between rounded-md p-1'>
                    {/* map options */}
                    <Options
                        name='location'
                        options={locations}
                        className='bg-black w-48'
                    />
                    <Options
                        name='Property Type'
                        options={locations}
                        className='bg-black w-48'
                    />
                    <Options
                        name='Price Range'
                        options={locations}
                        className='bg-black w-48'
                    />
                    <Options
                        name='Propety Size'
                        options={locations}
                        className='bg-black w-48'
                    />
                    <Options
                        name='Build Year'
                        options={locations}
                        className='bg-black w-48'
                    />
                </div>
            </Container>


            <Container className="px-20 py-10 ">
                <div className="mb-20">
                    <h1 className="text-3xl mb-2 ">Discover a World of Possibilities</h1>
                    <p className="text-sm text-gray-400 font-light ">Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home</p>
                </div>

                {/* property cards  */}
                {/* /**************************** */}
                <div className="property-card-container flex ">
                    <PropertyCardTwoMaper
                    // estates={estates as unknown as EstateTypes[]}
                    />

                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray my-10">
                    <p className="font-light text-sm text-gray-400"><span>{1}</span> of {60}</p>

                    <div className="flex ">
                        <ArrowButton direction="left" variable={variable} />
                        <ArrowButton direction="right" variable={variable} />
                    </div>
                </div>
                {/* /*********************************************** */}
            </Container>

            <Container className='px-20'>

                <h1 className='text-3xl mb-5'>Let's Make it Happen</h1>
                <p className='text-gray-400 text-sm font-light'>
                    Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
                </p>

                <div>
                    <Form/>
                </div>
            </Container>

        </main>
    )
}
