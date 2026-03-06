import { fetchPost } from "@/app/lib/api";

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await fetchPost(params.slug);
    // const post = posts.find((p) => p.slug === params.slug);
    return ( 
    <div>
        <h1>Post: {post.title}</h1>
        <p>{post.content}</p>
    </div>
    
    );
}
