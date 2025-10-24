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

    return (
        <>
            <UsersTable data={data} columns={usersTableColumns}/>
        </>
    );
};

export default UsersPage;