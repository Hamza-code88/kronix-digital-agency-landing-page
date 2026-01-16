import React from 'react';
import { MOCK_BLOG_POSTS } from '../../../services/mockData';
import { BlogCard } from './BlogCard';
import { Button } from '../../common/Button';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="bg-[#111204] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            Blogs
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            News & Articles
          </h2>
          <p className="mt-4 text-sm text-white">
            Best Articles to get started
          </p>
        </div>

        {/* Blog Grid */}
        {/* Desktop par 2 Columns hain image ke hisaab se */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {MOCK_BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <Button 
            variant="ghost" 
            className="border border-white/20 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary hover:text-black hover:border-primary transition-all"
          >
            Load More
          </Button>
        </div>

      </div>
    </section>
  );
};