"use client";
import Header from "@/components/header/Header";

export default function UploadPage() {
    return (
        <main className="min-h-screen bg-[#F7E6B6] m-6">
            <Header/>
            {/* Main content area below header*/}
            <div className="border-2 border-t-0 flex flex-col p-10 gap-[5vw] mx-auto"> 
                <h1 className="text-4xl font-bold">Upload Post</h1>


                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Post Title</h2>
                    <input
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
                    <input
                        className="border border-gray-300 p-2 rounded h-32 w-full"
                        type="text"
                        placeholder="Enter post content"
                    />
                </div>

                <button className="bg-[#9EB373] text-(--text-color) p-2 rounded border-4 text-2xl">Publish Post</button>
            </div>
        </main>
    )
}