import clsx from '@/lib/utils';
import React, { ReactNode } from 'react'

export default function Container({ children, className }: {
    children: ReactNode;
    className: string;
}) {
    return (
        <div className={clsx('w-full', className)}>
            {children}
        </div>
    )
}
