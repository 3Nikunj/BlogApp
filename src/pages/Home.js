import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { getAllBlogPosts } from '../data/blogData';
import './Home.css';

const Home = () => {
  const allPosts = getAllBlogPosts();
  const featuredPosts = allPosts.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="hero-highlight">ModernBlog</span>
            </h1>
            <p className="hero-description">
              Discover insightful articles about web development, technology trends, 
              and best practices from industry experts. Stay updated with the latest 
              in modern web development.
            </p>
            <div className="hero-actions">
              <Link to="/blog" className="btn btn-primary">
                Explore Articles
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <svg viewBox="0 0 400 300" className="hero-svg">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="300" height="200" rx="20" fill="url(#gradient1)" opacity="0.8" />
                <rect x="70" y="70" width="260" height="20" rx="10" fill="white" opacity="0.9" />
                <rect x="70" y="100" width="200" height="15" rx="7" fill="white" opacity="0.7" />
                <rect x="70" y="125" width="180" height="15" rx="7" fill="white" opacity="0.7" />
                <rect x="70" y="150" width="220" height="15" rx="7" fill="white" opacity="0.7" />
                <circle cx="300" cy="200" r="30" fill="white" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="featured-posts">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-description">
              Check out our most popular and recent articles
            </p>
          </div>
          
          <div className="posts-grid">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="section-footer">
            <Link to="/blog" className="btn btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Articles Published</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Monthly Readers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Expert Authors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Content Updates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;