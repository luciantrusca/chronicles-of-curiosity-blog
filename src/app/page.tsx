import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '../components/header/Header';
import { fetchPosts } from './lib/api';
import MainContent from '@/components/main_section/MainContent';

export default async function App(){
    const latestPosts = await fetchPosts();

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
