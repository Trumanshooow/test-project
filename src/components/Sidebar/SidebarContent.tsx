"use client"
import Link from 'next/link'
import routes, {routeIsActive} from "@/routes/sidebar";
import SidebarSubmenu from './SidebarSubmenu'
import { useRouter } from 'next/router'
import {Button} from "@/components/ui/button";
import DashboardIcon from "@/components/Icons/dashboard";

function SidebarContent() {
  // const { pathname } = useRouter();

  return (
    <div className="flex flex-col text-gray-500 bg-amber-200 dark:text-gray-400">
      <div className="flex w-full items-center">
          <DashboardIcon className="w-10"/>
          <h3>Sidebar</h3>
      </div>
      <ul>
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className='relative px-6 py-3' key={route.name}>
              <Link
                href={route.path || '#'}
                scroll={false}
                className={`inline-flex w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                    routeIsActive("pathname", route)
                        ? 'dark:text-gray-100 text-gray-800'
                        : ''
                }`}
              >
                  {routeIsActive("pathname", route) && (
                    <span
                      className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
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