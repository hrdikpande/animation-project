import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    {
      title: "The Future of Children's Animation in 2025",
      excerpt: "Exploring upcoming trends in animation and how they will shape children's content.",
      image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653',
      date: 'Mar 15, 2025',
      author: 'Sarah Johnson',
      category: 'Industry Trends',
    },
    {
      title: 'Creating Characters That Connect',
      excerpt: 'Tips and techniques for designing memorable characters for young audiences.',
      image: 'https://images.unsplash.com/photo-1633354931133-27c285de18c6',
      date: 'Mar 10, 2025',
      author: 'Mike Chen',
      category: 'Design Tips',
    },
    {
      title: 'Educational Animation: Learning Through Stories',
      excerpt: 'How animation can make learning more engaging and effective for children.',
      image: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e',
      date: 'Mar 5, 2025',
      author: 'Emily White',
      category: 'Education',
    },
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 neon-text">Latest Insights</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, techniques, and insights in children's
            animation and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover-card"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute top-4 right-4 px-4 py-1 rounded-full bg-neon-purple/80 text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <button className="flex items-center text-neon-blue hover:text-neon-purple transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 rounded-full border-2 border-neon-blue text-white hover:bg-neon-blue/20 transition-colors">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;