'use client'

import Header from "@/components/header/Header";
import { useRouter } from "next/navigation";
import { createPost } from "@/app/lib/api";
import { useState } from "react";

export default function UploadPage()
{
    const [submitting, setSubmitting] = useState(false);                                          
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true)
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const response = await createPost({ title, content, tags: [], published: true });
        setSubmitting(false)
        if (!response.ok) {
            throw new Error('Failed to submit blog post');
        }
        router.push('/')
    }

    return (
        <main className="min-h-screen bg-[#F7E6B6] m-6">
            <Header/>
            <div className="border-2 border-t-0 flex flex-col p-10 gap-[5vw] mx-auto">
                <h1 className="text-4xl font-bold">Upload Post</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Post Title</h2>
                        <input
                            name='title'
                            className="border border-gray-300 p-2 w-full rounded"
                            type="text"
                            placeholder="Enter post title"
                        />
                        <p className="mt-2 mb-4">
                            <img className="inline w-12 mr-2" src="/icons/upload_trim_bgrem.png" alt="Upload image" />
                            Upload image (optional)
                        </p>
                    </div>

                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Post Content</h2>
                        <input name='content'
                            className="border border-gray-300 p-2 rounded h-32 w-full"
                            type="text"
                            placeholder="Enter post content"
                        />
                    </div>

                    <button type="submit" disabled={submitting} className="bg-[#9EB373] text-(--text-color) p-2 rounded border-4 text-2xl">{submitting ? 'Publishing...' : 'Publish Post'}</button>
                </form>
            </div>
        </main>
    )
}
