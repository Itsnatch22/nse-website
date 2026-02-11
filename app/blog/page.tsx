import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'The Future of Solar Project Management: 5 Trends Shaping 2025',
    excerpt: 'From AI-powered forecasting to blockchain-based PPAs, we explore the technologies transforming how solar businesses operate.',
    author: 'Alexandra Chen',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Industry Trends',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800'
  };

  const posts = [
    {
      title: 'How IPPs Can Maximize PPA Revenue in Volatile Markets',
      excerpt: 'Strategies for optimizing power purchase agreements in an era of fluctuating energy prices.',
      author: 'Marcus Thompson',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Asset Management'
    },
    {
      title: 'EPC Best Practices: Reducing Construction Delays by 30%',
      excerpt: 'Lessons from top-performing solar construction teams on hitting milestones consistently.',
      author: 'David Park',
      date: 'January 5, 2025',
      readTime: '5 min read',
      category: 'Construction'
    },
    {
      title: 'The Complete Guide to Solar Asset Due Diligence',
      excerpt: 'What acquirers look for when evaluating operating solar assets and how to prepare.',
      author: 'Sarah Okonkwo',
      date: 'December 28, 2024',
      readTime: '10 min read',
      category: 'Finance'
    },
    {
      title: 'Interconnection Queue Management: Strategies That Work',
      excerpt: 'Navigate utility interconnection processes more effectively with these proven approaches.',
      author: 'James Rodriguez',
      date: 'December 20, 2024',
      readTime: '7 min read',
      category: 'Development'
    },
    {
      title: 'Building High-Performance Solar O&M Teams',
      excerpt: 'How leading asset managers structure their operations teams for maximum efficiency.',
      author: 'Elena Vasquez',
      date: 'December 15, 2024',
      readTime: '6 min read',
      category: 'Operations'
    },
    {
      title: 'Solar Financing in 2025: What Developers Need to Know',
      excerpt: 'Tax credit transferability, IRA updates, and new financing structures changing the game.',
      author: 'Michael Chen',
      date: 'December 10, 2024',
      readTime: '9 min read',
      category: 'Finance'
    },
  ];

  const categories = ['All', 'Industry Trends', 'Asset Management', 'Construction', 'Development', 'Finance', 'Operations'];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-12 bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              OneGrid Blog
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insights, best practices, and industry news for solar professionals.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-slate-200 hover:border-emerald-200 hover:shadow-xl transition-all cursor-pointer">
            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-slate-500">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-emerald-600">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" className="px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-linear-to-br from-emerald-600 to-teal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-emerald-100 mb-8">
            Get the latest solar industry insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-lg border-0 focus:ring-2 focus:ring-emerald-300"
            />
            <Button className="h-12 bg-white hover:bg-emerald-50 text-emerald-700 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
