import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import postsData from '../data/blog.json';
import CTAWithPopup from './BlogCtaPopup';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = postsData.posts.find((p) => p.slug === slug);

  if (!post) {
    return <main className="bg-black text-white"><div className="mx-auto max-w-5xl px-6 py-20">Post not found</div></main>;
  }

  const metaTitle = post.meta?.metaTitle || `${post.title} - Taxi Tribe`;
  const metaDescription = post.meta?.metaDescription || post.excerpt || 'Reliable corporate mobility and transfers.';
  const canonicalUrl = post.meta?.canonicalUrl || `https://localhost:5173/blog/${post.slug}`;
  const ogImage = post.meta?.ogImage || post.coverImage;

  return (
    <main className="bg-black text-white mt-10">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* OG basics (safe defaults) */}
        {ogImage ? <meta property="og:image" content={ogImage} /> : null}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <article className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.2em] text-neutral-400">
            {(post.author || 'Taxi Tribe').toUpperCase()}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white">
            {post.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            {post.readingTime ? <span>· {post.readingTime} min read</span> : null}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags?.map((t) => (
              <span
                key={t}
                className="rounded-full bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="mb-8 w-full rounded-xl object-cover ring-1 ring-white/10"
            loading="lazy"
          />
        )}

        {/* Content */}
        <div
          className={[
            'max-w-none space-y-6 leading-relaxed',
            // base text
            'text-neutral-200',
            // headings
            '[&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-white',
            '[&_h3]:mt-8 [&_h3]:font-semibold [&_h3]:text-white',
            // paragraphs
            '[&_p]:mt-4 [&_p]:text-neutral-200',
            // links
            '[&_a]:text-amber-400 hover:[&_a]:underline',
            // lists
            '[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6',
            '[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6',
            '[&_li]:mt-2',
            // emphasis
            '[&_em]:italic',
            '[&_strong]:font-semibold text-white',
            // tables
            '[&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse',
            '[&_th]:bg-neutral-900/60 [&_th]:text-left [&_th]:font-semibold',
            '[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2',
            '[&_td]:align-top [&_tr]:border-b [&_tr]:border-white/10',
            // images inside content
            '[&_img]:my-6 [&_img]:rounded-xl [&_img]:w-full [&_img]:ring-1 [&_img]:ring-white/10',
            // blockquote
            '[&_blockquote]:border-l-4 [&_blockquote]:border-amber-400/60 [&_blockquote]:pl-4 [&_blockquote]:text-neutral-200',
            // code blocks (if any)
            '[&_pre]:bg-neutral-900 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_code]:text-amber-300',
            // hr
            '[&_hr]:my-8 [&_hr]:border-white/10',
          ].join(' ')}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      {/* CTA */}
      {/* <div className="mx-auto max-w-5xl px-6 pb-12 lg:px-8">
        <CTAWithPopup />
      </div> */}
    </main>
  );
}
