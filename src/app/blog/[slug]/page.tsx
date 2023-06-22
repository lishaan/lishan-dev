import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";

type PageProps = {
  params: { slug: string };
};

export default async function PostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  // if (!post) {
  //   notFound();
  // }

  const { frontmatter } = post;

  return (
    <article className="max-w-5xl mx-auto">
      <h1>{frontmatter.title}</h1>
      <p>Published {frontmatter.date}</p>
      {/* <MdxContent source={serialized} /> */}
    </article>
  );
}

async function getPost(slug: string): Promise<PostWithSlug> {
  const raw = await fs.readFile(`src/content/${slug}.mdx`, "utf-8");

  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  const frontmatter = serialized.frontmatter as Frontmatter;

  return {
    frontmatter,
    slug,
  };
}
