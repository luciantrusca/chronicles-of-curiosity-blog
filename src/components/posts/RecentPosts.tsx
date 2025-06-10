import { PrismaClient } from '~/generated/prisma/client';
import PostCard from './PostCard';

export default async function RecentPosts() {
    const prisma = new PrismaClient();

    // Fetch 3 recent posts
    const recent_posts = await prisma.post.findMany(
        {
            orderBy: {
                createdAt: 'desc',
            },
            where: {
                published: false,
            },
            take: 3,
        }
    );
    // Close the Prisma client connection
    await prisma.$disconnect();

    // Render the recent posts
    return (<section>
        <h1>Recent posts</h1>
        <ul>
            {recent_posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    </section>)
}