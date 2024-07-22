import clsx from '@/lib/utils';
import React from 'react'

export default function Options({
    options,
    className,
    name
}: {
    options: Array<string>
    name: string;
    className: string;
    optionClass?: string
}) {
    return (
        <div className='flex items-center justify-between bg-black px-2 rounded-md border border-gray  '>
            <select name={name} className={clsx("m-1 min-w-28 outline-none p-3 text-gray-400 font-light text-sm rounded-md", className)}>
                <option className='text-gray-300 font-light text-sm min-w-28'>{name}</option>
                {options.map((value) => {
                    return <option className="text-gray-300 font-light text-sm min-w-28" value={value}>{value}</option>
                })}
            </select>
        </div>

    )
}
