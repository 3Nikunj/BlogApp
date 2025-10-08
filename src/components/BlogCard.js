import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <div className="blog-card-category">{post.category}</div>
      </div>
      
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-card-author">By {post.author}</span>
          <span className="blog-card-date">{new Date(post.date).toLocaleDateString()}</span>
          <span className="blog-card-read-time">{post.readTime}</span>
        </div>
        
        <h3 className="blog-card-title">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <div className="blog-card-tags">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="blog-card-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <Link to={`/blog/${post.id}`} className="blog-card-read-more">
          Read More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;