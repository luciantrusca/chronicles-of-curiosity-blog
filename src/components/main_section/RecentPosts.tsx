import { Post, PrismaClient } from '~/generated/prisma/client';
import PostCard from './PostCard';

export default async function RecentPosts({ recent_posts }: { recent_posts: Post[] }) {
    recent_posts = recent_posts.slice(0, 3); // Limit to 3 recent posts

    // Render the recent posts
    return (
    <section className="bg-[#F2E6C6] border-2 border-[#6B7133] p-4">
        <h1 className="text-lg font-bold">Recent posts</h1>
            <div className="flex flex-row gap-4 justify-center">
                {recent_posts.map((post: Post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
    </section>)
}