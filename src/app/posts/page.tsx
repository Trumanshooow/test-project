'use client'
import React from 'react';
import PostsTable from "@/components/table-data/posts-table";
import {getPosts} from "@/lib/placeholder-data";
import {useQuery} from "@tanstack/react-query";
import PostsTableColumns from "@/components/table-data/posts-table-columns";


function PostsPage () {

    const {data, isLoading, error} = useQuery({
        queryKey: ['Posts'],
        queryFn: getPosts,
    });

    return (
        <>
            <PostsTable data={data} columns={PostsTableColumns}/>
        </>
    );
}
export default PostsPage;

