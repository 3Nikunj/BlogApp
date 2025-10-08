import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBlogPost } from '../data/blogData';
import './AddBlog.css';

const AddBlog = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    imageUrl: '',
    readTime: ''
  });

  const [errors, setErrors] = useState({});

  const categories = [
    'Technology',
    'Web Development',
    'Programming',
    'Design',
    'Career',
    'Productivity',
    'Tutorial',
    'Opinion',
    'News',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters long';
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    } else if (formData.excerpt.length < 20) {
      newErrors.excerpt = 'Excerpt must be at least 20 characters long';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    } else if (formData.content.length < 100) {
      newErrors.content = 'Content must be at least 100 characters long';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author name is required';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.readTime.trim()) {
      newErrors.readTime = 'Read time is required';
    } else if (!/^\d+$/.test(formData.readTime)) {
      newErrors.readTime = 'Read time must be a number (in minutes)';
    }

    if (formData.imageUrl && !isValidUrl(formData.imageUrl)) {
      newErrors.imageUrl = 'Please enter a valid URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newPost = {
        title: formData.title.trim(),
        excerpt: formData.excerpt.trim(),
        content: formData.content.trim(),
        author: formData.author.trim(),
        category: formData.category,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        imageUrl: formData.imageUrl.trim() || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        readTime: `${formData.readTime} min read`
      };

      const createdPost = addBlogPost(newPost);
      
      // Navigate to the newly created post
      navigate(`/blog/${createdPost.id}`);
    } catch (error) {
      console.error('Error creating blog post:', error);
      setErrors({ submit: 'Failed to create blog post. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All changes will be lost.')) {
      navigate('/blog');
    }
  };

  return (
    <div className="add-blog-page">
      <div className="container">
        <div className="add-blog-header">
          <h1>Create New Blog Post</h1>
          <p>Share your thoughts and ideas with the world</p>
        </div>

        <div className="add-blog-content">
          <form className="blog-form" onSubmit={handleSubmit}>
            {errors.submit && (
              <div className="error-message">
                {errors.submit}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter an engaging title for your blog post"
                  className={errors.title ? 'error' : ''}
                />
                {errors.title && <span className="field-error">{errors.title}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="excerpt">Excerpt *</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Write a brief summary of your blog post (this will appear in the blog list)"
                  rows="3"
                  className={errors.excerpt ? 'error' : ''}
                />
                {errors.excerpt && <span className="field-error">{errors.excerpt}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="content">Content *</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your full blog post content here..."
                  rows="12"
                  className={errors.content ? 'error' : ''}
                />
                {errors.content && <span className="field-error">{errors.content}</span>}
                <div className="character-count">
                  {formData.content.length} characters
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="author">Author *</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.author ? 'error' : ''}
                />
                {errors.author && <span className="field-error">{errors.author}</span>}
              </div>

              <div className="form-group half-width">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={errors.category ? 'error' : ''}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && <span className="field-error">{errors.category}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Enter tags separated by commas (e.g., react, javascript, tutorial)"
                />
                <small>Separate multiple tags with commas</small>
              </div>

              <div className="form-group half-width">
                <label htmlFor="readTime">Read Time (minutes) *</label>
                <input
                  type="number"
                  id="readTime"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  placeholder="5"
                  min="1"
                  max="60"
                  className={errors.readTime ? 'error' : ''}
                />
                {errors.readTime && <span className="field-error">{errors.readTime}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="imageUrl">Featured Image URL</label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg (optional - a default image will be used if not provided)"
                  className={errors.imageUrl ? 'error' : ''}
                />
                {errors.imageUrl && <span className="field-error">{errors.imageUrl}</span>}
                <small>Leave empty to use a default image</small>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Publishing...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                      <polyline points="17,21 17,13 7,13 7,21"/>
                      <polyline points="7,3 7,8 15,8"/>
                    </svg>
                    Publish Blog Post
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;