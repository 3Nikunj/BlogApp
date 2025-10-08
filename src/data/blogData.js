// Mutable array to support adding new posts
export let blogPosts = [
  {
    id: 1,
    title: "Getting Started with Modern React Development",
    excerpt: "Learn the fundamentals of modern React development with hooks, context, and best practices for building scalable applications.",
    content: `
      <p>React has evolved significantly over the years, and modern React development focuses on functional components, hooks, and improved developer experience. In this comprehensive guide, we'll explore the key concepts that every React developer should master.</p>
      
      <h3>Understanding React Hooks</h3>
      <p>Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components. The most commonly used hooks include useState, useEffect, and useContext.</p>
      
      <h3>Component Architecture</h3>
      <p>Building maintainable React applications requires thoughtful component architecture. We'll discuss patterns like composition over inheritance, prop drilling solutions, and when to lift state up.</p>
      
      <h3>Performance Optimization</h3>
      <p>Modern React provides several tools for optimizing performance, including React.memo, useMemo, and useCallback. Understanding when and how to use these tools is crucial for building fast applications.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "React",
    tags: ["React", "JavaScript", "Web Development", "Frontend"],
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch",
    excerpt: "Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to new frameworks.",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies and methodologies emerging regularly. As we look toward the future, several key trends are beginning to shape how we build and interact with web applications.</p>
      
      <h3>AI-Powered Development Tools</h3>
      <p>Artificial intelligence is increasingly being integrated into development workflows, from code completion tools to automated testing and deployment processes. These tools are making developers more productive and helping to reduce common errors.</p>
      
      <h3>Edge Computing and Performance</h3>
      <p>With the rise of edge computing, we're seeing a shift toward distributing application logic closer to users. This trend is driving new architectural patterns and optimization strategies.</p>
      
      <h3>Sustainable Web Development</h3>
      <p>Environmental consciousness is becoming increasingly important in web development, with developers focusing on creating more energy-efficient applications and reducing digital carbon footprints.</p>
    `,
    author: "Michael Chen",
    date: "2024-01-12",
    category: "Technology",
    tags: ["Web Development", "AI", "Future Tech", "Sustainability"],
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Building Responsive Designs with CSS Grid and Flexbox",
    excerpt: "Master the art of creating flexible, responsive layouts using CSS Grid and Flexbox. Learn when to use each and how to combine them effectively.",
    content: `
      <p>Creating responsive web designs has become easier with modern CSS layout methods. CSS Grid and Flexbox are powerful tools that, when used correctly, can help you build flexible and maintainable layouts.</p>
      
      <h3>Understanding CSS Grid</h3>
      <p>CSS Grid is perfect for two-dimensional layouts where you need to control both rows and columns. It excels at creating complex layouts with precise positioning and alignment.</p>
      
      <h3>Flexbox for One-Dimensional Layouts</h3>
      <p>Flexbox shines when dealing with one-dimensional layouts, whether in a row or column. It's ideal for distributing space and aligning items within a container.</p>
      
      <h3>Combining Grid and Flexbox</h3>
      <p>The real power comes from combining these technologies. Use Grid for the overall page layout and Flexbox for component-level layouts and alignment.</p>
    `,
    author: "Emily Rodriguez",
    date: "2024-01-10",
    category: "CSS",
    tags: ["CSS", "Responsive Design", "Grid", "Flexbox"],
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "JavaScript ES2024: New Features and Improvements",
    excerpt: "Discover the latest features introduced in ES2024 and how they can improve your JavaScript development workflow and code quality.",
    content: `
      <p>JavaScript continues to evolve with each new ECMAScript specification. ES2024 brings several exciting features that enhance developer productivity and code expressiveness.</p>
      
      <h3>New Array Methods</h3>
      <p>ES2024 introduces new array methods that make data manipulation more intuitive and functional. These methods follow the same patterns established by previous additions to the Array prototype.</p>
      
      <h3>Improved Error Handling</h3>
      <p>New error handling mechanisms provide better debugging experiences and more precise error reporting, making it easier to identify and fix issues in production applications.</p>
      
      <h3>Performance Enhancements</h3>
      <p>Under-the-hood improvements in the JavaScript engine provide better performance for common operations, especially in areas like string manipulation and object property access.</p>
    `,
    author: "David Kim",
    date: "2024-01-08",
    category: "JavaScript",
    tags: ["JavaScript", "ES2024", "Programming", "Features"],
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Accessibility in Modern Web Applications",
    excerpt: "Learn how to build inclusive web applications that work for everyone. Explore WCAG guidelines, testing tools, and implementation strategies.",
    content: `
      <p>Web accessibility is not just a legal requirement—it's a moral imperative that ensures the web is usable by everyone, regardless of their abilities or disabilities. Building accessible applications from the start is much easier than retrofitting accessibility later.</p>
      
      <h3>Understanding WCAG Guidelines</h3>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for making web content accessible. Understanding the four principles—Perceivable, Operable, Understandable, and Robust—is essential.</p>
      
      <h3>Semantic HTML and ARIA</h3>
      <p>Using semantic HTML elements and ARIA attributes correctly forms the foundation of accessible web applications. These technologies help assistive technologies understand and navigate your content.</p>
      
      <h3>Testing and Validation</h3>
      <p>Regular accessibility testing using both automated tools and manual testing with screen readers ensures your applications remain accessible as they evolve.</p>
    `,
    author: "Lisa Thompson",
    date: "2024-01-05",
    category: "Accessibility",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "UX"],
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "State Management in React: Redux vs Context API",
    excerpt: "Compare different state management solutions for React applications and learn when to use Redux, Context API, or other alternatives.",
    content: `
      <p>State management is one of the most important architectural decisions in React applications. Choosing the right solution depends on your application's complexity, team size, and specific requirements.</p>
      
      <h3>React Context API</h3>
      <p>The Context API is built into React and provides a way to share state across components without prop drilling. It's perfect for smaller applications or specific use cases like theming and authentication.</p>
      
      <h3>Redux for Complex Applications</h3>
      <p>Redux offers a predictable state container with powerful debugging tools and middleware support. It's ideal for large applications with complex state interactions and multiple developers.</p>
      
      <h3>Alternative Solutions</h3>
      <p>Modern alternatives like Zustand, Jotai, and Valtio offer different approaches to state management, each with their own benefits and trade-offs.</p>
    `,
    author: "Alex Martinez",
    date: "2024-01-03",
    category: "React",
    tags: ["React", "State Management", "Redux", "Context API"],
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
  }
];

// Function to add a new blog post
export const addBlogPost = (postData) => {
  const newPost = {
    id: Math.max(...blogPosts.map(post => post.id)) + 1,
    ...postData,
    date: new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
  };
  
  blogPosts.unshift(newPost); // Add to beginning of array
  return newPost;
};

// Function to get a blog post by ID
export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

// Function to get all blog posts
export const getAllBlogPosts = () => {
  return [...blogPosts]; // Return a copy to prevent direct mutation
};