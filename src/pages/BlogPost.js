import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      
      import(`../blogs/${slug}.md`)
        .then(res => {
          fetch(res.default)
            .then(response => response.text())
            .then(text => {
              setContent(text);
              setLoading(false);
            })
            .catch(() => {
              setContent('# Blog post content not found\n\nThis blog post is coming soon!');
              setLoading(false);
            });
        })
        .catch(() => {
          setContent('# Blog post content not found\n\nThis blog post is coming soon!');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn-primary">
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Serhat Soysal</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <article className="section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mb-8 transition-colors duration-200"
              >
                <FiArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 mb-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  {post.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            className="rounded-lg"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
                            {children}
                          </code>
                        );
                      }
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Thanks for Reading!
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you enjoyed this post, feel free to share it and check out my other articles.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/blog" className="btn-primary">
                    Read More Articles
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost; 