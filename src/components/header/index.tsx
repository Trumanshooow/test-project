'use client'
import React from 'react';
import {Input} from "@/components/ui/input";
import Image from "next/image";
import SearchIcon from "@/components/icons/searchIcon";
import MoonIcon from "@/components/icons/moonIcon";
import SunIcon from "@/components/icons/sunIcon";
import {Button} from "@/components/ui/button";
import {useMenuStore, useThemeStore} from "@/lib/store";
import DashboardIcon from "@/components/icons/dashboardIcon";
import {Menu} from "lucide-react"

const Header = () => {

    const {theme, toggleTheme} = useThemeStore();
    // const { isOpen, toggle, close } = useMenuStore();


    return (
        <div
            className="w-full grid grid-cols-12 min-h-24 items-center justify-between bg-white dark:bg-gray-800"
        >
            <div className="flex col-span-2 w-full justify-center items-center">
                <Button className="sm:hidden">
                    <Menu className="dark:text-white w-16 h-16 text-gray-800"/>
                </Button>
                <DashboardIcon className="w-8 text-gray-700 dark:text-gray-200 hidden sm:block"/>
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 hidden sm:block">Sidebar</h3>
            </div>
            <div className="col-span-10 flex justify-between px-10">
                <div className="flex">
                    <Image
                        src="/images/avatar.png"
                        width={100}
                        height={100}
                        alt="img"
                        className="w-10 h-10 ml-2 bg-amber-200 rounded-full border"
                    />
                    <Button size="icon-lg" onClick={toggleTheme}>
                        {
                            theme === "dark" ?
                                <SunIcon className="w-12 text-amber-300"/>
                                :
                                <MoonIcon className="w-12"/>
                        }
                    </Button>

                </div>
                <div className="flex gap-2 items-center">
                    <Input className="w-60 border-2 bg-white border-gray-300  dark:bg-gray-100 dark:text-gray-800 "/>
                    <SearchIcon className="w-7 text-gray-800  dark:text-gray-200 mb-1"/>
                </div>

            </div>
        </div>
    );
};

export default Header;