import React from 'react'

export default function ReviewCard({
    title,
    value
}: {
    title: string,
    value: string
}) {
  return (
    <div className='border-gray bg-[#1A1A1A] rounded-xl px-5 py-4 mr-3 min-w-14 '>
        <h1 className='font-bold text-2xl'>{value}+</h1>
        <p className='text-sm text-gray-400 font-light '>{title}</p>
    </div>
  )
}
