import { Post } from "@/app/lib/api";

export default function PostCard({post}: {post: Post}) {

    return (
        <section className="flex flex-col max-w-50 w-35 items-center border-2 p-3 rounded-lg border-[#5B614E] bg-[#EFD9A1]">
            {post.coverUrl && <img className="w-15 m-2" src={post.coverUrl}/>}
            <h2 className="font-bold">{post.title}</h2>
            <p>{new Date(post.updatedAt).toLocaleDateString()}</p>
        </section>
    )
}
