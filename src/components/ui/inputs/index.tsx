import clsx from '@/lib/utils';
import React from 'react'

export default function InputField({
    value,
    type,
    onInput,
    name,
    placeholder,
    ref,
    focus,
    onKeyPress,
    className
}: {
    value: string;
    onInput: Function;
    type: 'text' | 'password' | 'email';
    placeholder?: string;
    ref?: any;
    focus?: boolean;
    onKeyPress?: Function;
    name: string;
    className: string;
}) {
    return (
        <div className='w-full p-0'>
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onInput={(e)=> onInput((e.target as HTMLTextAreaElement).value)}
                ref={ref}
                className={clsx('w-full outline-none text-gray-300 font-light text-sm', className)}    
            />
        </div>
    )
}
