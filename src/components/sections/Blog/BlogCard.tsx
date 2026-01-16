import React from 'react';
import type { BlogPost } from '../../../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <a 
      href={post.link}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0F1005] transition-all duration-300 hover:border-primary/50 md:flex-row md:items-stretch"
    >
     
      <div className="h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-48 lg:w-56">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Right Side: Content */}
      <div className="flex flex-1 flex-col justify-center p-6">
        {/* Tag */}
        <span className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
          {post.tag}
        </span>
        
        {/* Title */}
        <h3 className="mb-3 text-lg font-bold leading-tight text-white transition-colors group-hover:text-primary md:text-xl">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-sm leading-relaxed text-text-muted">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
};