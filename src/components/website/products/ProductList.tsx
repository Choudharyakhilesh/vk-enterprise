"use client";
import { IProducts, useProductsStore } from "@/store/products-store";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { QuickViewModal } from "./QuickViewModal";
import { useRouter } from "next/navigation";
import { useTopLoader } from "nextjs-toploader";
import Nodata from "@/lib/no-data";

export function ProductList() {
  const { start } = useTopLoader();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: IProducts) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const { getAllProductsList, allProductsListData } = useProductsStore();

  useEffect(() => {
    getAllProductsList();
  }, [getAllProductsList]);

  // Limit to 8 products for landing page
  const displayProducts = allProductsListData?.slice(0, 8) || [];

  return (
    <div className="max-w-7xl mx-auto  py-5 bg-stone-50/50 ">
      {/* Header Section */}
      <div className="text-center mb-5 space-y-4">
        <h2 className="text-3xl md:text-5xl text-stone-900">Latest Collections</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        <h3 className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
          Explore our exclusive range of premium women's wear, crafted for elegance and comfort.
        </h3>
      </div>

      <div className="px-3">
        {displayProducts.length === 0 ? (
          <div className="">
            <div className="">
              <Nodata title="Products" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>
        )}
      </div>

      {displayProducts.length > 7 && (
        <div className="mt-16 text-center">
          <Button
            onClick={() => {
              start();
              router.push(`/all-products`);
            }}
            size="lg"
            className=""
          >
            View All Collection
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      )}

      <QuickViewModal
        product={selectedProduct}
        open={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  );
}
