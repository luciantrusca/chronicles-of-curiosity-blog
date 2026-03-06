'use client'

import { useParams } from "next/navigation";


export default async function PostPage() {
    const {params} = useParams();
    const { slug } = params as { slug?: string };
    console.log(slug);

    return (
        <div>
            <h1>Post: {slug}</h1>
        </div>
    );
}