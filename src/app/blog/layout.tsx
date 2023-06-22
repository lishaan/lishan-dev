export const metadata = {
  title: "lishan.dev | Blog",
  description:
    "My personal blog where I write about web development, programming, and other things I find interesting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-full min-h-screen p-8">{children}</main>;
}
