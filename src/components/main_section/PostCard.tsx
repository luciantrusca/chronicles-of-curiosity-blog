import { Post } from "~/generated/prisma/client";

export default function PostCard({post}: {post: Post}) {

    return (
        <section className="flex flex-col max-w-50 w-35 items-center border-2 p-3 rounded-lg border-[#5B614E] bg-[#EFD9A1]">
            <img className="w-15 m-2" src={post.coverUrl ?? undefined}/>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.updatedAt.toLocaleDateString()}</p>
        </section>
    )
}