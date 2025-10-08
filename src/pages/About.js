import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">About ModernBlog</h1>
          <p className="about-subtitle">
            Sharing knowledge and insights about modern web development
          </p>
        </section>

        {/* Main Content */}
        <section className="about-content">
          <div className="content-grid">
            <div className="content-main">
              <h2>Our Mission</h2>
              <p>
                ModernBlog is dedicated to providing high-quality, up-to-date content about 
                web development, technology trends, and best practices. We believe in making 
                complex topics accessible to developers of all skill levels.
              </p>
              
              <h2>What We Cover</h2>
              <p>
                Our articles span a wide range of topics including React development, 
                JavaScript fundamentals, CSS techniques, accessibility, performance optimization, 
                and emerging web technologies. We focus on practical, actionable content that 
                you can apply to your projects immediately.
              </p>

              <h2>Our Approach</h2>
              <p>
                We believe in learning by doing. Each article includes practical examples, 
                code snippets, and real-world applications. Our goal is not just to explain 
                concepts, but to help you understand how to implement them effectively in 
                your own work.
              </p>
            </div>

            <div className="content-sidebar">
              <div className="stats-card">
                <h3>By the Numbers</h3>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Articles Published</div>
                </div>
                <div className="stat">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Monthly Readers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Expert Contributors</div>
                </div>
              </div>

              <div className="topics-card">
                <h3>Popular Topics</h3>
                <ul className="topics-list">
                  <li>React Development</li>
                  <li>JavaScript ES6+</li>
                  <li>CSS Grid & Flexbox</li>
                  <li>Web Accessibility</li>
                  <li>Performance Optimization</li>
                  <li>Modern Frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">Meet Our Contributors</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">SJ</div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">React Specialist</p>
              <p className="member-bio">
                Frontend developer with 8+ years of experience in React and modern JavaScript.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">MC</div>
              <h3>Michael Chen</h3>
              <p className="member-role">Tech Futurist</p>
              <p className="member-bio">
                Technology strategist focused on emerging trends and their practical applications.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">ER</div>
              <h3>Emily Rodriguez</h3>
              <p className="member-role">CSS Expert</p>
              <p className="member-bio">
                UI/UX developer specializing in modern CSS techniques and responsive design.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">DK</div>
              <h3>David Kim</h3>
              <p className="member-role">JavaScript Guru</p>
              <p className="member-bio">
                Full-stack developer with deep expertise in JavaScript and web standards.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">LT</div>
              <h3>Lisa Thompson</h3>
              <p className="member-role">Accessibility Advocate</p>
              <p className="member-bio">
                Passionate about creating inclusive web experiences for all users.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">AM</div>
              <h3>Alex Martinez</h3>
              <p className="member-role">State Management Expert</p>
              <p className="member-bio">
                Specialist in React state management and application architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M3 12c0 5.5 4.5 10 10 10s10-4.5 10-10"/>
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>Every article is thoroughly researched, tested, and reviewed to ensure accuracy and usefulness.</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Community Focused</h3>
              <p>We write for the developer community, addressing real challenges and sharing practical solutions.</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We stay at the forefront of web development, exploring new technologies and methodologies.</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from writing to code examples to user experience.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;