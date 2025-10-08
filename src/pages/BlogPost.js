import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPostById, getAllBlogPosts } from '../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const post = getBlogPostById(id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get all posts for related posts calculation
  const allPosts = getAllBlogPosts();
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/blog">Blog</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{post.title}</span>
        </nav>

        {/* Post Header */}
        <header className="post-header">
          <div className="post-category">{post.category}</div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <div className="post-author">
              <div className="author-avatar">
                {post.author.split(' ').map(name => name[0]).join('')}
              </div>
              <div className="author-info">
                <div className="author-name">By {post.author}</div>
                <div className="post-date">{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</div>
              </div>
            </div>
            <div className="post-stats">
              <span className="read-time">{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Post Content */}
        <article className="post-content">
          <div className="post-excerpt">
            {post.excerpt}
          </div>
          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Post Tags */}
        <div className="post-tags">
          <h3>Tags</h3>
          <div className="tags-list">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="post-share">
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button className="share-btn twitter" onClick={() => {
              const url = window.location.href;
              const text = `Check out this article: ${post.title}`;
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </button>
            <button className="share-btn linkedin" onClick={() => {
              const url = window.location.href;
              window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
            <button className="share-btn copy" onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="related-posts">
            <h3>Related Articles</h3>
            <div className="related-posts-grid">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="related-post">
                  <img src={relatedPost.image} alt={relatedPost.title} />
                  <div className="related-post-content">
                    <h4>{relatedPost.title}</h4>
                    <p>{relatedPost.excerpt.substring(0, 100)}...</p>
                    <span className="related-post-meta">{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="post-navigation">
          <Link to="/blog" className="btn btn-outline">
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;