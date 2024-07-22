"use client"
import Container from '@/components/ui/container'
import React from 'react'
import InputField from '@/components/ui/inputs'
import { useState } from 'react'
import HybridButton from '@/components/ui/hybrid-button'
import Options from '@/components/ui/inputs/options'
import ArrowButton from '@/components/ui/arrows-buttons'
// import PropertyCardTwo from '@/components/ui/propertie-card/propety-card-two';
import { locations } from '@/lib/options/location'
import { getAllEstates } from '@/data-access/estate-and-location'

// import propImg from "@/assets/Image (1).png";


export default function PropertiesPage() {
    const [searchValue, setSearchValue] = useState("");
  const allEstates = getAllEstates()


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
                    <div className='flex items-center justify-between bg-black p-2 rounded-md'>
                        <InputField
                            name='search-input'
                            placeholder='Search for a Property'
                            value={searchValue}
                            type='text'
                            onInput={(e: React.SetStateAction<string>) => { setSearchValue(e) }}
                            className="bg-transparent px-1"
                        />

                        <HybridButton className='px-4 py-3 bg-[#703BF7] font-light text-sm rounded-md hover:bg-[#693adffc] min-w-fit'>
                            Find Property
                        </HybridButton>
                    </div>
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


            <Container className="px-20 py-20 ">
                <div className="mb-20">
                    <h1 className="text-3xl mb-2 ">Discover a World of Possibilities</h1>
                    <p className="text-sm text-gray-400 font-light ">Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home</p>
                </div>

                {/* property cards  */}
                {/* /**************************** */}
                <div className="property-card-container flex ">
                    {/* {
                        allEstates.map(({
                            id,
                            estateName,
                            estateDescription,
                            estateType,
                            bathrooms,
                            bedrooms,

                        }) => {
                            return <PropertyCardTwo
                                key={id}
                                image={propImg}
                                prop_name={estateName}
                                description={estateDescription.slice(0, 100) + `...`}
                                bedroom={bedrooms}
                                bathroom={bathrooms}
                                prop_type={estateType}
                                price={5500000}
                                url={`/properties/${id}`}
                            />
                        })
                    } */}

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

        </main>
    )
}
