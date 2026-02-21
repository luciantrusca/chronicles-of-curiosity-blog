'use server'

import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '../components/header/Header';
import { prisma } from './lib/prisma';
import MainContent from '@/components/main_section/MainContent';

export default async function App(){
    const latestPosts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            author: true,
            tags: true,
        },
        take: 4
    });

    return (
        <main className="p-4 bg-[#EFD9A1] min-h-screen max-h-screen flex flex-col">
            <Header />
            <div className="flex h-lvh">
                <Sidebar />
                <MainContent recent_posts={latestPosts} />
            </div>
        </main>
    );
}
