type Frontmatter = {
  title: string;
  date: string;
};

type Post = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: Frontmatter;
};

type PostWithSlug = {
  slug: string;
  frontmatter: Frontmatter;
};
