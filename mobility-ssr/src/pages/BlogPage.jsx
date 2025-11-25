import { Link } from 'react-router-dom';
import postsData from '../data/blog.json';

export default function BlogPage() {
  const posts = postsData.posts;

  return (
    <main
      className="mt-20 text-gray-900"
      style={{ backgroundColor: "#FFFAFA" }}
    >
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          
          {/* Page Header */}
          <h1 className="text-4xl font-semibold text-gray-900">
            Our <span className="text-amber-600">Blog</span>
          </h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Insights on strategy, growth, and performance marketing.
          </p>

          {/* Blog Grid */}
          <div className="mt-10 grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg hover:border-amber-500/50"
              >
                {/* Blog Image */}
                {post.coverImage ? (
                  <div className="overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                {/* Blog Text */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    {post.readingTime ? (
                      <span>· {post.readingTime} min read</span>
                    ) : null}
                  </div>

                  <h2 className="mt-1 text-lg font-semibold leading-snug group-hover:text-amber-600 text-gray-900">
                    {post.title}
                  </h2>

                  <p className="mt-2 line-clamp-3 text-gray-700">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags?.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
