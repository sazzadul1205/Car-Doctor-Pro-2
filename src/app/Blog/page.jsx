import Image from "next/image";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and technologies shaping the web...",
    image: "https://via.placeholder.com/300",
    author: "John Doe",
    date: "Nov 30, 2024",
  },
  {
    id: 2,
    title: "10 Tips for Effective Remote Work",
    excerpt: "Maximize your productivity and stay connected...",
    image: "https://via.placeholder.com/300",
    author: "Jane Smith",
    date: "Nov 28, 2024",
  },
  {
    id: 3,
    title: "How to Build a Personal Brand",
    excerpt: "Stand out in your field by crafting a unique identity...",
    image: "https://via.placeholder.com/300",
    author: "Chris Adams",
    date: "Nov 27, 2024",
  },
  {
    id: 4,
    title: "The Impact of Artificial Intelligence on Society",
    excerpt:
      "Understanding the effects of AI on daily life and future trends...",
    image: "https://via.placeholder.com/300",
    author: "Alice Brown",
    date: "Nov 25, 2024",
  },
  {
    id: 5,
    title: "5 Strategies for Successful E-commerce Businesses",
    excerpt: "Grow your online store with these proven methods...",
    image: "https://via.placeholder.com/300",
    author: "Robert Taylor",
    date: "Nov 24, 2024",
  },
  {
    id: 6,
    title: "The Art of Minimalist Living",
    excerpt: "Simplify your life with practical tips for minimalism...",
    image: "https://via.placeholder.com/300",
    author: "Emma Wilson",
    date: "Nov 22, 2024",
  },
  {
    id: 7,
    title: "Top 7 Programming Languages to Learn in 2025",
    excerpt: "Discover the most in-demand coding languages...",
    image: "https://via.placeholder.com/300",
    author: "Daniel Martinez",
    date: "Nov 20, 2024",
  },
  {
    id: 8,
    title: "Exploring Sustainable Travel Options",
    excerpt:
      "Learn how to travel responsibly and reduce your carbon footprint...",
    image: "https://via.placeholder.com/300",
    author: "Sophia Anderson",
    date: "Nov 18, 2024",
  },
  {
    id: 9,
    title: "How to Master Time Management Skills",
    excerpt: "Get more done with these effective time management techniques...",
    image: "https://via.placeholder.com/300",
    author: "Michael Johnson",
    date: "Nov 16, 2024",
  },
  {
    id: 10,
    title: "The Rise of Blockchain in Finance",
    excerpt: "Explore how blockchain is transforming the financial industry...",
    image: "https://via.placeholder.com/300",
    author: "Olivia Moore",
    date: "Nov 15, 2024",
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
        <p className="text-lg mt-4">
          Discover insights, tips, and stories from industry experts.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
