import { promises as fs } from "fs";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";

type PageProps = {
  params: { slug: string };
};

export default async function PostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter } = post;

  return (
    <article className="max-w-5xl mx-auto">
      <h1>{frontmatter.title}</h1>
      <p>Published {frontmatter.date}</p>
      {/* <MdxContent source={serialized} /> */}
    </article>
  );
}

async function getPost(slug: string): Promise<Post | null> {
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
        serialized,
        slug: file.replace(".mdx", ""),
      });
    }
  }

  const post = posts.find((post) => post.slug === slug);

  if (post) {
    return {
      frontmatter: post.frontmatter,
      serialized: post.serialized,
    };
  } else {
    return null;
  }
}
