import React from 'react';
import {Input} from "@/components/ui/input";
import Image from "next/image";
import SearchIcon from "@/components/Icons/SearchIcon";
import MoonIcon from "@/components/Icons/moonIcon";
import SunIcon from "@/components/Icons/sunIcon";

const Header = () => {
    return (
        <div className="w-full h-24 flex items-center justify-between bg-white border border-y-gray-400 px-16">
            <div className="flex">
                <Image src="/images/avatar.png" width={100} height={100} alt="img"
                       className="w-10 h-10 bg-amber-200 rounded-full border"/>
                <MoonIcon className="w-6"/>
                <SunIcon className="w-6"/>
            </div>
            <div className="flex gap-2">
                <Input className="w-60"/>
                <SearchIcon className="w-7"/>
            </div>
        </div>
    );
};

export default Header;