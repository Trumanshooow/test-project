'use client';
import React from 'react';
import PostsTable from '@/components/table-data/posts-table';
import { getPosts } from '@/lib/placeholder-data';
import { useQuery } from '@tanstack/react-query';
import PostsTableColumns from '@/components/table-data/posts-table-columns';
import { Spinner } from '@/components/ui/spinner';

function PostsPage() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['Posts'],
        queryFn: getPosts,
    });

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500">Error posts</p>
            </div>
        );
    }

    return <PostsTable loading={isLoading} data={data || []} columns={PostsTableColumns} />;
}

export default PostsPage;