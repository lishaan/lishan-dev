import Link from "next/link";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-gradient text-bold text-center text-4xl pb-12">
        Blog
      </h1>
      {posts.map((post, key) => (
        <Link key={key} href={`blog/${post.slug}`}>
          <div className="flex justify-between">
            <h1 className="text-zinc-400 text-bold text-xl hover:text-gradient">
              {key + 1}. {post.frontmatter.title}
            </h1>
            <p className="bg-zinc-500 rounded px-2 py-1">
              {post.frontmatter.date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

async function getPosts(): Promise<PostWithSlug[]> {
  const posts = [];
  const rawFiles = await fs.readdir("src/content", "utf-8");

  for (const file of rawFiles) {
    if (file.endsWith(".mdx")) {
      const raw = await fs.readFile(`src/content/${file}`, "utf-8");

      const serialized = await serialize(raw, {
        parseFrontmatter: true,
      });

      const frontmatter = serialized.frontmatter as Frontmatter;

      posts.push({
        frontmatter,
        slug: file.replace(".mdx", ""),
      });
    }
  }

  return posts;
}
