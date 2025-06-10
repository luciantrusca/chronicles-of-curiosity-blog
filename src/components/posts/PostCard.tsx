import { Post } from "~/generated/prisma";

export default function PostCard({post}: {post: Post}) {

    return (
        <section className="flex flex-col items-center border-2 p-4 rounded-lg border-[#C4C296] bg-[#F4EAD0]">
            <img src={post.coverUrl ?? undefined}/>
            <h2>{post.title}</h2>
            <p>{post.updatedAt.toLocaleDateString()}</p>
        </section>
    )
}