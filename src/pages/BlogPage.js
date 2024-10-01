// src/pages/BlogPage.js

import React from 'react';
import BlogPostCard from '../components/BlogComponents/BlogPostCard.js';
import blogPosts from '../data/BlogPosts.js';

function BlogPage() {
  return (
    <section className="blog-page container my-5 pt-16">
      <h1 className="text-center m-5 text-4xl font-bold">
      <span className="color-b">Blog</span>
        ✨
        <span className="color-p">Page</span>
      </h1>

      {/* Render Blog Posts */}
      {blogPosts.map((post) => (
        <BlogPostCard
          key={post.id}
          title={post.title}
          content={post.content}
          imageSrc={post.imageSrc}  // You can add images in your blogPosts data if needed
        />
      ))}
    </section>
  );
}


export default BlogPage;
