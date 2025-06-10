import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '../components/layout/Header';
import { PrismaClient } from '../../generated/prisma/client';
import LatestPost from '@/components/posts/LatestPost';
import RecentPosts from '@/components/posts/RecentPosts';

const prisma = new PrismaClient();

export default async function App(){
    const tags = await prisma.tag.findMany();
    const latestPost = await prisma.post.findFirst({
        orderBy: {
            createdAt: 'desc',
        },
        where: {
            published: false,
        },
        include: {
            author: true,
            tags: true,
        },
    });

    return (
        <main className="">
            <div className="flex bg-[#e7d9b4]">
                <Sidebar tags={tags} />
                <div className="flex-1 p-4">
                    <Header />
                    {latestPost ? <LatestPost post={latestPost} /> : <p>No latest post available</p>}
                    <RecentPosts />
                </div>  
            </div>
        </main>
    );
}
