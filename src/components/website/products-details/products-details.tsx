'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { IProducts, useProductsStore } from '@/store/products-store';
import { ArrowLeft, Loader2, Tag, Shirt, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const { getProductDetails, productDetailsLoading, productDeatilsData } = useProductsStore();
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    if (id) {
      getProductDetails({ product_id: id });
      // Reset image index when product changes
      setSelectedImage(0);
      window.scrollTo(0, 0);
    }
  }, [params.id, getProductDetails]);

  if (productDetailsLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
        <Loader2 className="w-10 h-10 animate-spin text-stone-400 mb-4" />
        <p className="text-stone-600 font-serif animate-pulse">Fetching Vastra Collection...</p>
      </div>
    );
  }

  // API response mapping
  const product = productDeatilsData;
  const relatedProducts = productDeatilsData?.related_products || [];

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-stone-50 gap-4">
        <h2 className="text-2xl font-serif text-stone-800">Product Not Found</h2>
        <Button onClick={() => router.back()} variant="outline">
          Go Back
        </Button>
      </div>
    );
  }
  // bg - [#FDFBF7];
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => router.back()}
          className="group flex items-center text-stone-500 hover:text-stone-900 transition-colors"
        >
          <div className="bg-white p-2 rounded-full border border-stone-200 mr-3 group-hover:border-stone-900 transition-colors shadow-sm">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">Back to Collection</span>
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {/* LEFT COLUMN: Main Image Only */}
          <div>
            <div className="relative w-full overflow-hidden rounded-2xl bg-stone-100 group shadow-lg border border-stone-100 sticky top-24">
              <img
                src={product.images?.[selectedImage] || '/placeholder.png'}
                alt={product.title}
                className="w-full h-auto max-h-[100vh] transition-transform duration-700 group-hover:scale-105"
              />
              {product.images?.length > 1 && (
                <button
                  onClick={() =>
                    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center
               w-10 h-10 rounded-full bg-black/50 text-white
               lg:hidden"
                >
                  <ChevronLeft className="w-6 h-6 text-white stroke-[2.5px]" />
                </button>
              )}

              {/* RIGHT BUTTON */}
              {product.images?.length > 1 && (
                <button
                  onClick={() =>
                    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center
               w-10 h-10 rounded-full bg-black/50 text-white
               lg:hidden"
                >
                  <ChevronRight className="w-6 h-6 text-white stroke-[2.5px]" />
                </button>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Product Info & Gallery */}
          <div className="flex flex-col pt-4">
            <div className="space-y-4">
              {/* Title Section */}
              <div>
                <p className="text-stone-400 uppercase tracking-[0.2em] text-sm mb-3 font-bold">
                  {product.category_name}
                </p>
                <h1 className="text-2xl md:text-3xl font-serif text-stone-900 mb-5 leading-tight">
                  {product.title}
                </h1>
                <div className="inline-flex items-center px-4 py-1.5 bg-stone-900 text-stone-50 rounded-full text-sm font-medium tracking-wide">
                  Code: {product.style_code}
                </div>
              </div>

              <Separator className="bg-stone-200" />

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                  Description
                </h3>
                <p className="text-stone-600 leading-relaxed text-lg font-light">
                  {product.description}
                </p>
              </div>

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-stone-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-stone-100 rounded-lg">
                    <Shirt className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase font-bold mb-1">Fabric</p>
                    <p className="text-stone-900 font-medium text-lg">{product.fabric}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-stone-100 rounded-lg">
                    <Tag className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase font-bold mb-1">Style Code</p>
                    <p className="text-stone-900 font-medium text-lg">{product.style_code}</p>
                  </div>
                </div>
              </div>

              {/* ----- MOVED THUMBNAIL GALLERY HERE ----- */}
              <div className="pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-4">
                  Product Gallery
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {product.images?.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-[4/4] rounded-lg overflow-hidden border-2 transition-all shadow-sm ${
                        selectedImage === idx
                          ? 'border-secondary ring-2 ring-secondary-100 opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full  object-contain" />
                    </button>
                  ))}
                </div>
              </div>
              {/* ---------------------------------------- */}

              {/* Inquiry Section */}
              {/* <div className="pt-6 mt-4 border-t border-stone-100">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full py-8 text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl transition-all active:scale-[0.98] shadow-md flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Inquire via WhatsApp
                </Button>
                <p className="text-center text-stone-400 text-sm mt-4 bg-stone-50 py-2 rounded-lg">
                  Typically responds within 2 hours
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS (Unchanged) */}
        {relatedProducts.length > 0 && (
          <div className="mt-10 border-t border-stone-200 pt-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-serif text-stone-900">Related Products</h2>
              {/* <div className="h-[1px] flex-1 bg-stone-200 ml-8 hidden md:block"></div> */}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {relatedProducts.map((p: IProducts) => (
                <div
                  key={p.id}
                  onClick={() => router.push(`/productsdetails/${p.id}`)}
                  className="cursor-pointer group"
                >
                  <div className="aspect-[3/4] bg-stone-100 rounded-2xl overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-all border border-stone-50">
                    <img
                      src={p.images?.[0] || '/placeholder.png'}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-2 font-semibold">
                    {p.category_name}
                  </p>
                  <h3 className="font-serif text-xl text-stone-900 group-hover:text-stone-600 transition-colors truncate leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-stone-500 text-sm mt-2">{p.fabric}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
