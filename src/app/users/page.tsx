'use client'
import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {DataTableDemo} from "@/components/TableData/data-table";
import {getUsers} from "@/lib/placeholder-data";
import usersTableColumns from "@/components/TableData/usersTableColumns";


function UsersPage() {

    const {data, isLoading, error} = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    });
    console.log(data, 32213123123)

    return (
        <>
            <DataTableDemo data={data} columns={usersTableColumns}/>
        </>
    );
};

export default UsersPage;