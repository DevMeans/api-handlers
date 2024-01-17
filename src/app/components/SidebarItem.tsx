'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {

    const pathName = usePathname()
    console.log(path)
    console.log(pathName)
    return (
        <li>
            <Link href={path}
                className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group ${path == pathName ? 'text-white bg-gradient-to-tr from-sky-600 to-cyan-400' : ''}`}>
                {icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>

    )
}
