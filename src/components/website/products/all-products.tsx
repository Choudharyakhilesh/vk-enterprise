'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Nodata from '@/lib/no-data';
import { IProducts, useProductsStore } from '@/store/products-store';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Loader2, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary';
}

export function AllProductList() {
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);

  // Category selection — naam store karo display ke liye
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [tempSelected, setTempSelected] = useState<string[]>(['All']);

  // ✅ Active filter mein category_id (number/string) store hoga, naam nahi
  const [activeFilters, setActiveFilters] = useState<object>({});

  const {
    getAllProductsList,
    allProductsListData,
    getProductCategory,
    allCategoryListData,
    currentPage,
    lastPage,
    allProductsListLoading,
    showLessProducts,
    getSearchDetails,
  } = useProductsStore();

  useEffect(() => {
    // getAllProductsList({}, 1);
    getProductCategory();
  }, [getProductCategory]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== '') {
        // 🔥 SEARCH API CALL
        getSearchDetails({
          type: 'product',
          query: searchQuery,
        });
      } else {
        // 🔁 Normal product list
        getAllProductsList(activeFilters, 1);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, getSearchDetails, getAllProductsList, activeFilters]);

  const handleLoadMore = () => {
    if (currentPage < lastPage) {
      // ✅ activeFilters ke saath next page fetch karo
      getAllProductsList(activeFilters, currentPage + 1);
    }
  };

  const handleShowLess = () => {
    showLessProducts();
    window.scrollBy({ top: -600, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const allCategories = useMemo(() => {
    if (!allCategoryListData) return ['All'];
    return ['All', ...allCategoryListData.map((cat) => cat.name)];
  }, [allCategoryListData]);

  const visibleCategories = useMemo(() => {
    return allCategories.slice(0, isDesktop ? 6 : 4);
  }, [allCategories, isDesktop]);

  // ✅ Category name se id dhundo
  const getCategoryIdByName = (name: string): number | null => {
    const found = allCategoryListData?.find((cat) => cat.name === name);
    return found?.id ?? null;
  };

  // ✅ Single category button click (top filter buttons)
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategories([categoryName]);
    setTempSelected([categoryName]);

    if (categoryName === 'All') {
      // ✅ Clear filter — sab dikhao
      setActiveFilters({});
      getAllProductsList({}, 1);
    } else {
      const categoryId = getCategoryIdByName(categoryName);
      // ✅ category_id single value bhejo — array nahi
      const filters = categoryId ? { category_id: categoryId } : {};
      setActiveFilters(filters);
      getAllProductsList(filters, 1);
    }
  };

  // Drawer ke liye toggle
  const handleCategoryToggle = (cat: string) => {
    setTempSelected((prev) => {
      if (cat === 'All') return ['All'];
      const newSelection = prev.filter((item) => item !== 'All');
      if (newSelection.includes(cat)) {
        const filtered = newSelection.filter((item) => item !== cat);
        return filtered.length === 0 ? ['All'] : filtered;
      } else {
        return [...newSelection, cat];
      }
    });
  };

  // ✅ Drawer "Apply Filters" button
  const applyFilters = () => {
    setSelectedCategories(tempSelected);

    if (tempSelected.includes('All') || tempSelected.length === 0) {
      setActiveFilters({});
      getAllProductsList({}, 1);
    } else {
      // ✅ Multiple categories ke liye — id array bhejo
      const ids = tempSelected.map((name) => getCategoryIdByName(name)).filter(Boolean); // null/undefined hata do

      const filters = { category_id: ids };
      setActiveFilters(filters);
      getAllProductsList(filters, 1);
    }
  };

  const clearAllSelectedCategories = () => {
    setSelectedCategories(['All']);
    setTempSelected(['All']);
    setActiveFilters({});
    getAllProductsList({}, 1);
  };

  const filteredProducts = allProductsListData || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 min-h-screen">
      {/* Header Section */}
      <header className="mb-8 text-center space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 tracking-tight">
            The <span className="text-primary font-light">Full</span> Catalog
          </h1>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between pt-4 border-t border-stone-200 mb-1">
          <div className="order-2 md:order-1 flex flex-wrap items-center gap-x-3 gap-y-3 w-full">
            {visibleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)} // ✅ updated function
                className={`px-4 cursor-pointer py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                  selectedCategories.length === 1 && selectedCategories[0] === cat
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}

            {/* View More Drawer */}
            <Sheet onOpenChange={(open) => open && setTempSelected(selectedCategories)}>
              <SheetTrigger asChild>
                <Button size="sm" variant="default">
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
                    <Button size="sm" onClick={applyFilters}>
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

        {/* Selected Category Tags */}
        {!selectedCategories.includes('All') && (
          <div className="flex flex-wrap items-center gap-2">
            {selectedCategories.map((cat) => (
              <Badge
                key={cat}
                variant="secondary"
                className="bg-stone-100 text-stone-600 px-3 py-1 flex items-center gap-1 "
              >
                {cat}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => {
                    const newCats = selectedCategories.filter((c) => c !== cat);
                    if (newCats.length === 0 || newCats.includes('All')) {
                      clearAllSelectedCategories();
                    } else {
                      setSelectedCategories(newCats);
                      // Remaining categories ke ids nikalo
                      const ids = newCats.map((name) => getCategoryIdByName(name)).filter(Boolean);
                      const filters = { category_id: ids.length === 1 ? ids[0] : ids };
                      setActiveFilters(filters);
                      getAllProductsList(filters, 1);
                    }
                  }}
                />
              </Badge>
            ))}

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
          {filteredProducts?.map((product) => (
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

      {/* Load More / Show Less */}
      <div className="mt-12 flex justify-center gap-4">
        {currentPage < lastPage && (
          <Button onClick={handleLoadMore} disabled={allProductsListLoading}>
            {allProductsListLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              'More Designs'
            )}
          </Button>
        )}

        {currentPage > 1 && !allProductsListLoading && (
          <Button variant="outline" onClick={handleShowLess} className="text-black">
            Show Less
          </Button>
        )}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && !allProductsListLoading && (
        <div className="text-center">
          <Nodata title="Products" />
          <Button
            variant="default"
            onClick={() => {
              setSearchQuery('');
              clearAllSelectedCategories();
            }}
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

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
