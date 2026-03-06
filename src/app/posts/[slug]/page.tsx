import { fetchPost, fetchPosts } from "@/app/lib/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
    const posts = await fetchPosts();
    return posts.map(post => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await fetchPost(params.slug);

    return (
        <div>
            <h1>{post.title}</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
    );
}
