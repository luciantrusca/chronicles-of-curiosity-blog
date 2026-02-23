'use client'

import { useEffect, useState } from "react"
import { fetchPosts } from "@/app/lib/api"
import { Post } from "@/app/lib/api"
import MainContent from "./MainContent"

export default function PostsSection(){
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts()
        .then((posts) => setPosts(posts))
        .catch((e) => console.error(e))
        .finally(() => setLoading(false))
    }, 
    []);


    if (loading) return <p>Loading......</p>;
    if (posts.length === 0) return <p>No posts found.</p>;
    return <MainContent recent_posts={posts} />
}