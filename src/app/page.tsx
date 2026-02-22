'use client'

import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '../components/header/Header';
import { fetchPosts, Post } from './lib/api';
import MainContent from '@/components/main_section/MainContent';

export default function App(){
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts()
            .then(setPosts)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <main className="p-4 bg-[#EFD9A1] min-h-screen max-h-screen flex flex-col">
            <Header />
            <div className="flex h-lvh">
                <Sidebar />
                {loading ? <p>Loading...</p> : posts.length > 0 && <MainContent recent_posts={posts} />}
            </div>
        </main>
    );
}
