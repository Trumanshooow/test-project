'use client'
import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getUsers} from "@/lib/placeholder-data";
import usersTableColumns from "@/components/table-data/users-table-columns";
import UsersTable from "@/components/table-data/users-table";


function UsersPage() {

    const {data, isLoading, error} = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500">Error posts</p>
            </div>
        );
    }


    return (
        <>
            <UsersTable loading={isLoading} data={data} columns={usersTableColumns}/>
        </>
    );
};

export default UsersPage;