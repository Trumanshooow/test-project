import React from 'react';
import Link from "next/link";
import routes from "@/routes/sidebar";

const Footer = () => {
    return (
        <div className="w-full grid grid-cols-2 min-h-24 bg-white dark:bg-gray-800 dark:text-gray-200">
            <div className="flex justify-center items-center gap-2">
                <div className="w-52 text-left ml-2 text-gray-500 dark:text-gray-400">
                    <p className="line-clamp-3">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in Lorem ipsum, or lipsum as it is sometimes known</p>
                </div>
                <div className="w-[1px] h-1/2 bg-gray-300"></div>
                <h4 className="text-xl font-bold">About Us</h4>
            </div>
            <div className="flex justify-center items-center gap-2">
                <ul className="flex flex-col items-center ml-2 gap-2">
                    {
                        routes?.map((route, index) => (
                            <li key={index} className="text-md font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500">
                                <Link href={route.path || '#'} >
                                    {route.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="w-[1px] h-1/2 bg-gray-300"></div>
                <h3 className="text-xl font-bold">Pages</h3>
            </div>
        </div>
    );
};

export default Footer;