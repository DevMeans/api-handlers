import Link from 'next/link'
import React from 'react'
import { CiBookmarkCheck } from 'react-icons/ci'

export const SidebarItem = () => {
    return (
        <li>
            <Link href="/dashboard/rest-todos" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <CiBookmarkCheck size={30} />
                <span className="-mr-1 font-medium">Dashboard</span>
            </Link>
        </li>

    )
}
