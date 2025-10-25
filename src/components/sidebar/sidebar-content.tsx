"use client"
import Link from 'next/link'
import routes, {routeIsActive} from "@/routes/sidebar";
import { usePathname } from 'next/navigation';


function SidebarContent() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col w-full text-gray-500 dark:text-gray-300 pt-10">
            <ul>
                {routes.map((route) => (
                        <li className='relative py-1' key={route.name}>
                            <Link
                                href={route.path || '#'}
                                scroll={false}
                                className={`inline-flex w-full text-md font-semibold transition-colors duration-150 py-2 px-6 ${
                                    routeIsActive(pathname, route)
                                        ? 'text-amber-300 hover:text-amber-300 dark:hover:text-amber-300'
                                        : 'hover:text-gray-800 dark:hover:text-gray-500'
                                }`}
                            >
                                {routeIsActive(pathname, route) && (
                                    <span
                                        className='absolute inset-y-0 left-0 w-1 bg-amber-300 rounded-tr-lg rounded-br-lg'
                                        aria-hidden='true'
                                    ></span>
                                )}

                                {/*<Icon*/}
                                {/*  className='w-5 h-5'*/}
                                {/*  aria-hidden='true'*/}
                                {/*  icon={route.icon || ''}*/}
                                {/*/>*/}
                                <span className='ml-4'>{route.name}</span>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default SidebarContent