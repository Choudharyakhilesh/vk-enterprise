"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"; // Checkbox install kar lena agar nahi hai
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"; // Shadcn Sheet component
import { IProducts, useProductsStore } from "@/store/products-store";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, Filter, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { QuickViewModal } from "./QuickViewModal";
import Nodata from "@/lib/no-data";

export function AllProductList() {
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  // 1. Multiple Category Selection State
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const [tempSelected, setTempSelected] = useState<string[]>(["All"]); // Drawer ke liye temporary state

  const { getAllProductsList, allProductsListData, getProductCategory, allCategoryListData } =
    useProductsStore();

  useEffect(() => {
    getAllProductsList();
    getProductCategory();
  }, [getAllProductsList, getProductCategory]);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const allCategories = useMemo(() => {
    if (!allCategoryListData) return ["All"];
    return ["All", ...allCategoryListData.map((cat) => cat.name)];
  }, [allCategoryListData]);

  // const visibleCategories = allCategories.slice(0, 6);
  const visibleCategories = useMemo(() => {
    return allCategories.slice(0, isDesktop ? 6 : 4);
  }, [allCategories, isDesktop]);

  const handleCategoryToggle = (cat: string) => {
    setTempSelected((prev) => {
      if (cat === "All") return ["All"];

      const newSelection = prev.filter((item) => item !== "All");
      if (newSelection.includes(cat)) {
        const filtered = newSelection.filter((item) => item !== cat);
        return filtered.length === 0 ? ["All"] : filtered;
      } else {
        return [...newSelection, cat];
      }
    });
  };

  const applyFilters = () => {
    setSelectedCategories(tempSelected);
  };

  // 3. Updated Filtering Logic for Multiple Categories
  const filteredProducts = useMemo(() => {
    return (
      allProductsListData?.filter((product) => {
        const matchesSearch = product.title?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategories.includes("All") ||
          selectedCategories.includes(product.category_name);

        return matchesSearch && matchesCategory;
      }) || []
    );
  }, [allProductsListData, searchQuery, selectedCategories]);

  const clearAllSelectedCategories = () => {
    setSelectedCategories(["All"]);
    setTempSelected(["All"]); // drawer state bhi reset rahe
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-5  min-h-screen">
      {/* Header Section */}
      <header className="mb-8 text-center space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 tracking-tight">
            The <span className=" text-primary font-light">Full</span> Catalog
          </h1>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between pt-4 border-t border-stone-200 mb-1">
          <div className="order-2 md:order-1 flex flex-wrap items-center gap-x-3 gap-y-3 w-full">
            {visibleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategories([cat])}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold  uppercase tracking-widest transition-all border ${
                  selectedCategories.length === 1 && selectedCategories[0] === cat
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-white text-stone-500 border-stone-200 hover:border-stone-300"
                }`}
              >
                {cat}
              </button>
            ))}

            {/* View More Drawer Trigger */}
            <Sheet onOpenChange={(open) => open && setTempSelected(selectedCategories)}>
              <SheetTrigger asChild>
                <Button size="sm" variant="default" className="">
                  View More <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px] px-3 py-3">
                <SheetHeader className="pb-2 border-b">
                  <SheetTitle className="text-xl text-start font-serif text-black">
                    Filter Categories
                  </SheetTitle>
                </SheetHeader>

                <div className="py-0 space-y-2 h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                  {allCategories.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center space-x-3 p-2 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Checkbox
                        checked={tempSelected.includes(cat)}
                        onCheckedChange={() => handleCategoryToggle(cat)}
                        className="cursor-pointer"
                      />

                      <label
                        onClick={() => handleCategoryToggle(cat)}
                        className="text-sm font-medium text-stone-700 cursor-pointer flex-1"
                      >
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>

                <SheetFooter className="absolute bottom-0 left-0 w-full p-6 border-t bg-white">
                  <SheetClose asChild>
                    <Button size="sm" onClick={applyFilters} className="">
                      Apply Filters
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* Search Input */}
          <div className="order-1 md:order-2 relative w-full md:w-60 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <Input
              placeholder="Search designs..."
              className="pl-10 rounded-full border-stone-200 shadow-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Selected Tags Display */}
        {!selectedCategories.includes("All") && (
          <div className="flex flex-wrap items-center gap-2">
            {selectedCategories.map((cat) => (
              <Badge
                key={cat}
                variant="secondary"
                className="bg-stone-100 text-stone-600 px-3 py-1 flex items-center gap-1"
              >
                {cat}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => {
                    const newCats = selectedCategories.filter((c) => c !== cat);
                    setSelectedCategories(newCats.length === 0 ? ["All"] : newCats);
                  }}
                />
              </Badge>
            ))}

            {/* 🔥 Clear All Button */}
            <Button
              size="sm"
              variant="ghost"
              onClick={clearAllSelectedCategories}
              className="text-xs text-red-500 hover:text-red-600 ml-2 hover:bg-transparent"
            >
              Clear All
            </Button>
          </div>
        )}
      </header>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductCard
                product={product}
                onQuickView={(p) => {
                  setSelectedProduct(p);
                  setIsQuickViewOpen(true);
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center">
          <Nodata title="Products" />
          <Button
            variant="default"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategories(["All"]);
            }}
            className=" text-black"
          >
            Clear All Filters
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

// Helper components missing in snippet
function Badge({ children, className, variant }: any) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
