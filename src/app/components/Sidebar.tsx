import Image from 'next/image'
import React from 'react'
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import { SidebarItem } from '.'
import { IoBaseballOutline, IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPerson } from 'react-icons/io5';
import { getServerSession } from 'next-auth';
import { authOption } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { LogoutButton } from './LogoutButton';
interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}

const menuItems: Props[] = [
    {
        icon: <IoCalendarOutline />,
        title: 'Dashboard',
        path: '/dashboard'

    },
    {
        icon: <IoCheckboxOutline />,
        title: 'REST TODOS',
        path: '/dashboard/rest-todos'

    },
    {
        icon: <IoListOutline />,
        title: 'Server Action',
        path: '/dashboard/server-todos'

    },
    {
        icon: <IoCodeWorkingOutline />,
        title: 'Cookies',
        path: '/dashboard/cookies'

    },
    {
        icon: <IoBasketOutline />,
        title: 'Products',
        path: '/dashboard/products'

    },
    {
        icon: <IoPerson />,
        title: 'Profile',
        path: '/dashboard/profile'

    },
]
export const Sidebar = async () => {
    const session = await getServerSession(authOption)
    if (!session) {
        redirect('/api/auth/signin')
    }
    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    {/* TODO: Next/Link hacia dashboard */}
                    <a href="#" title="home">
                        {/* Next/Image */}
                        <Image
                            src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                            className="w-32"
                            alt="tailus logo"
                            width={150}
                            height={150}
                        />
                    </a>
                </div>
                <div className="mt-8 text-center">
                    {/* Next/Image */}
                    <Image
                        src={session.user?.image || ''}
                        alt=""
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        width={150}
                        height={150}
                    />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session.user?.name || 'User'}</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>
                <ul className="space-y-2 tracking-wide mt-8">
                    {
                        menuItems.map((item) => {
                            return <SidebarItem key={item.path} {...item} />
                        })
                    }
                </ul>
            </div>
            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <LogoutButton></LogoutButton>
            </div>
        </aside>

    )
}
