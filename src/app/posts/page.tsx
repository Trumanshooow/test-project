'use client'
import React from 'react';
import {DataTableDemo} from "@/components/TableData/data-table";
import {getPosts} from "@/lib/placeholder-data";
import {useQuery} from "@tanstack/react-query";
import PostsTableColumns from "@/components/TableData/postsTableColumns";


function UsersPage () {

    const {data, isLoading, error} = useQuery({
        queryKey: ['Posts'],
        queryFn: getPosts,
    });
    console.log(data, 32213123123)

    return (
        <>
            <DataTableDemo data={data} columns={PostsTableColumns}/>
        </>
    );
}
export default UsersPage;

