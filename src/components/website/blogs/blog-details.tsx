'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDateTimeToDDMMMYYYY } from '@/lib/utils';
import { IBlog, useHomeStore } from '@/store/home-store';
import { ArrowLeft, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useTopLoader } from 'nextjs-toploader';
import { useEffect } from 'react';

export default function BlogDetails() {
  const { getBlogDetails, blogDetailsLoading, blogDeatilsData } = useHomeStore();
  const params = useParams();
  const router = useRouter();
  const { start } = useTopLoader();

  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    if (id) {
      getBlogDetails({ blog_id: id });
    }
  }, [params.id, getBlogDetails]);

  if (blogDetailsLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const hasRelatedBlogs =
    blogDeatilsData?.related_blogs && blogDeatilsData.related_blogs.length > 0;

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-4 bg-white">
      <div className=" flex justify-between items-center border-b sticky top-0 bg-white z-20 mb-5 mt-5">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        {/* <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Share2 size={20} className="text-gray-600" />
        </button> */}
      </div>

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <div className="relative w-full  overflow-hidden rounded-xl shadow-xl">
                {blogDeatilsData?.image ? (
                  <Image
                    src={blogDeatilsData.image}
                    alt={blogDeatilsData?.title || 'Blog image'}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    No Image
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 flex flex-col space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                {blogDeatilsData?.created_at && (
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDateTimeToDDMMMYYYY(blogDeatilsData.created_at)}
                  </span>
                )}
                {/* <Badge
                  variant={blogDeatilsData?.status === '1' ? 'success' : 'destructive'}
                  className="text-[10px] font-bold uppercase tracking-widest"
                >
                  {blogDeatilsData?.status === '1' ? '• Active' : '• Inactive'}
                </Badge> */}
              </div>

              <h1 className="text-3xl md:text-3xl font-serif font-bold text-slate-900 leading-[1.2]">
                {blogDeatilsData?.title}
              </h1>
            </div>

            {blogDeatilsData?.tags && (
              <div className="flex gap-2">
                {Array.isArray(blogDeatilsData.tags) && blogDeatilsData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {blogDeatilsData.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border border-secondary backdrop-blur-md text-xs font-semibold text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {blogDeatilsData?.short_desc && (
              <div className="bg-slate-50 p-4 rounded-2xl border-l-8 border-primary">
                <p className="text-md text-slate-700 font-light italic leading-relaxed">
                  “{blogDeatilsData.short_desc}”
                </p>
              </div>
            )}

            {blogDeatilsData?.content && (
              <div className="relative group">
                <div
                  className="text-slate-800 leading-[1.8] text-md overflow-y-auto pr-4 custom-scrollbar"
                  style={{
                    maxHeight: 'calc(1.8rem * 10)',
                    scrollbarWidth: 'thin',
                  }}
                >
                  <div className="space-y-6 pb-10">{blogDeatilsData.content}</div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
              </div>
            )}
          </div>
        </div>
      </div>
      {hasRelatedBlogs && (
        <div className="pt-10 mb-10 border-t border-slate-100 ">
          <div className="flex flex-col mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Related Blogs</h2>
            <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {blogDeatilsData?.related_blogs?.map((blog: IBlog) => (
              <div
                key={blog.id}
                className="group rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Blog Image */}
                {/* <div className="relative h-48 w-full bg-gray-50">
                  <Image src={blog.image} alt={blog.title} fill className="object-contain" />
                </div> */}
                <div className="relative h-48 w-full bg-gray-50">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1000}
                    height={1000}
                    className="object-contain"
                  />
                </div>

                {/* Blog Info */}
                <div className="p-3 pt-2 flex flex-col flex-grow">
                  <h3 className="text-lg text-black font-semibold line-clamp-1">{blog.title}</h3>

                  <p className="text-slate-500 text-sm line-clamp-1 mb-4 leading-relaxed">
                    {blog.short_desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-1">
                    {blog.tags?.slice(0, 3).map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-secondary backdrop-blur-md text-xs font-semibold text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <div className="mt-auto">
                    <Button
                      size="sm"
                      className="mt-1 text-primary font-medium text-sm cursor-pointer bg-transparent hover:bg-transparent shadow-none"
                      onClick={() => {
                        start();
                        router.push(`/blog-details/${blog.id}`);
                      }}
                    >
                      Read More →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
