import React from 'react'
import ClientCard from './client-card'

interface ReviewCardHomeTypes{
    title: string,
    body: string,
    client_id?: string
}

export default function ReviewCardHome({
    title,
    body
}: ReviewCardHomeTypes) {
  return (
    <div className='border border-gray rounded-xl p-6 max-w-96'>
        <h3 className='text-xl mb-2'>{title}</h3>
        <p className='text-gray-400 font-light text-sm'>{body}</p>

        <ClientCard/>
    </div>
  )
}
