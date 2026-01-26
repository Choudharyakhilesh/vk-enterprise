'use client';

import { BlogsSkeleton } from '@/components/skeleton/blogs-skeleton';
import { Button } from '@/components/ui/button';
import BlogCustomPagination from '@/components/ui/form/custom-pagination';
import Nodata from '@/lib/no-data';
import { formatDateTimeToDDMMMYYYY } from '@/lib/utils';
import { IBlog, useHomeStore } from '@/store/home-store';
import { Calendar, Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTopLoader } from 'nextjs-toploader';
import { useEffect, useState } from 'react';

export function AllBlogSection() {
  const router = useRouter();
  const { start } = useTopLoader();
  const [searchTerm, setSearchTerm] = useState('');

  const { getAllBlogsList, allBlogsListData, allBlogsListLoading, getSearchDetails } =
    useHomeStore();

  useEffect(() => {
    getAllBlogsList(1);
  }, [getAllBlogsList]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        getSearchDetails({ type: 'blog', query: searchTerm });
      } else {
        getAllBlogsList(1);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, getSearchDetails, getAllBlogsList]);

  const blogs = allBlogsListData?.blogs?.data || [];
  const currentPage = allBlogsListData?.blogs?.current_page || 1;
  const totalPages = allBlogsListData?.blogs?.last_page || 1;

  const handlePageChange = (targetPage: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getAllBlogsList(targetPage);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-9 items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Latest <span className="text-primary">Blogs</span>
              </h2>
              <p className="text-gray-600">
                Explore our expert tips and trends in interior design and architecture to transform
                your living space.
              </p>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="relative w-full">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  value={searchTerm} // Controlled Input
                  onChange={(e) => setSearchTerm(e.target.value)} // Value update
                  placeholder="Search Blogs"
                  className="w-full pl-10 pr-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {allBlogsListLoading ? (
          <BlogsSkeleton />
        ) : blogs.length === 0 ? (
          <div className="">
            <Nodata title="Blogs" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {blogs.map((blog: IBlog) => (
                <div
                  key={blog.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary line-clamp-1">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">{blog.short_desc}</p>

                    {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {blog.tags.map((tag: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 border border-secondary text-xs font-semibold text-primary rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-2 flex items-center justify-between">
                      <Button
                        size="sm"
                        className="relative text-primary font-medium text-sm bg-transparent shadow-none
             hover:bg-transparent px-0 pb-1
             after:absolute after:left-0 after:-bottom-0.5
             after:h-[2px] after:w-0 after:bg-primary after:rounded-full
             after:transition-all after:duration-300 after:ease-in-out
             hover:after:w-full"
                        onClick={() => {
                          start();
                          router.push(`/blog-details/${blog.id}`);
                        }}
                      >
                        Read More →
                      </Button>

                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDateTimeToDDMMMYYYY(blog.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <BlogCustomPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
