import React from "react";

interface IBlog {
  params: Promise<{
    slug?: string[];
  }>;
}

const Blog = async ({ params }: IBlog) => {
  const { slug = [] } = await params;

  const path = slug.join("/") || "home";

  return (
    <div>
      <h1>Currently on blog: {path}</h1>
    </div>
  );
};

export default Blog;
