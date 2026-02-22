const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type Post = {
  slug: string;
  title: string;
  content: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
  coverUrl?: string;
};

type LambdaPost = {
  slug: string;
  Title: string;
  Content?: string;
  Tags?: string[];
  Published: boolean;
  CreatedAt: string;
  UpdatedAt: string;
};

function mapPost(raw: LambdaPost): Post {
  return {
    slug: raw.slug,
    title: raw.Title,
    content: raw.Content ?? "",
    tags: raw.Tags ?? [],
    published: raw.Published,
    createdAt: raw.CreatedAt,
    updatedAt: raw.UpdatedAt,
  };
}

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${API_BASE_URL}/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data: LambdaPost[] = await res.json();
  return data.map(mapPost);
}

export async function fetchPost(slug: string): Promise<Post> {
  const res = await fetch(`${API_BASE_URL}/posts/${slug}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch post: ${slug}`);
  const data: LambdaPost = await res.json();
  return mapPost(data);
}

export async function createPost(post: {
  title: string;
  content: string;
  tags?: string[];
  published?: boolean;
}): Promise<Response> {
  const res = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET ?? "",
    },
    body: JSON.stringify({
      Title: post.title,
      Content: post.content,
      Tags: post.tags ?? [],
      Published: post.published ?? true,
    }),
  });
  return res;
}
