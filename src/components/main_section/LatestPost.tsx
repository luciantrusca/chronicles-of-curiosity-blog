import { Post } from "@/app/lib/api";
import Link from "next/link";

export default function LatestPost({post, className}: {post: Post; className?: string[]}) {
    const preview = post.content.slice(0, 100) + "...";

    return (
        <section className={`bg-[#F7E6B8] border-2 border-[#6B7133] p-4 ${className?.join(" ")}`}>
            <h1 className="text-lg font-bold">Latest Post</h1>
            <Link href={`/posts/${post.slug}`}>
                <h1>{post.title}</h1>
            </Link>
            <div style={{ display: "flex", gap: "1rem" }}>
            {post.coverUrl && (<img className="w-45 p-4" src={post.coverUrl} alt={post.title} />)}
                <article>{preview}</article>
            </div>
        </section>
    )
}
