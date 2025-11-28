import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Users, Heart, Search, Filter, X, Banknote } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { PRODUCTS } from '../constants';

const ITEMS_PER_PAGE = 6;

const parsePrice = (priceStr: string) => {
  return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
};

export const Store: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({ min: '', max: '' });
  
  // Extract unique categories and count
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.type)))];
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return PRODUCTS.length;
    return PRODUCTS.filter(p => p.type === cat).length;
  };

  // Filter Logic
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.type === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const price = parsePrice(product.price);
    const min = priceRange.min ? parseInt(priceRange.min, 10) : 0;
    const max = priceRange.max ? parseInt(priceRange.max, 10) : Infinity;
    const matchesPrice = price >= min && price <= max;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, priceRange]);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setPriceRange({ min: '', max: '' });
  };

  const hasActiveFilters = selectedCategory !== 'All' || searchQuery || priceRange.min || priceRange.max;

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Hero Section - Full Width */}
      <section className="container mx-auto px-6 mb-12">
        <FadeIn>
          <div className="bg-gray-900 dark:bg-gray-900 rounded-3xl p-10 md:p-16 shadow-2xl text-center relative overflow-hidden border border-gray-800 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-cyan-500"></div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-brand-900/50 border border-brand-500/30 rounded-full px-4 py-1.5 text-brand-400 font-bold uppercase tracking-wider text-xs mb-4 backdrop-blur-sm">
                <Heart size={12} className="fill-current" /> Official Community Merch
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">EC Community Store</h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Wear your passion. Represent the movement. Exclusive apparel designed for the developers, dreamers, and creators of the EC family.
              </p>
            </div>
            {/* Decorative Icons */}
            <ShoppingBag className="absolute -bottom-10 -right-10 text-gray-800 opacity-40 transform rotate-12 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105" size={240} />
            <Users className="absolute top-10 -left-10 text-gray-800 opacity-20 transform -rotate-12 transition-transform duration-700 group-hover:-rotate-6" size={180} />
          </div>
        </FadeIn>
      </section>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* SIDEBAR - Fixed/Sticky on Desktop, Hidden on Mobile */}
        <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-32 space-y-8 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar">
          
          {/* Search Widget */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Search size={18} className="text-brand-600" /> Search
            </h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Categories Widget */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Filter size={18} className="text-brand-600" /> Categories
            </h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedCategory === cat 
                        ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 font-bold' 
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === cat
                        ? 'bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                    }`}>
                      {getCategoryCount(cat)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Banknote size={18} className="text-brand-600" /> Price Range
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">Min (KES)</label>
                  <input 
                      type="number" 
                      placeholder="0"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                  />
              </div>
              <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">Max (KES)</label>
                  <input 
                      type="number" 
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                  />
              </div>
            </div>
          </div>

          {/* Active Filters / Reset */}
          {hasActiveFilters && (
            <FadeIn>
              <button 
                onClick={clearFilters}
                className="w-full py-3 border border-dashed border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-xl hover:border-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-sm font-medium flex items-center justify-center gap-2"
              >
                <X size={16} /> Clear Filters
              </button>
            </FadeIn>
          )}
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 w-full">
          
          {/* Results Count & Mobile Search Check */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Showing <span className="font-bold text-gray-900 dark:text-white">{filteredProducts.length}</span> results
            </p>
            
            {/* Mobile Only: Simple Category Filter Scroll */}
            <div className="lg:hidden w-full overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:pb-0 flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <>
              {/* Product Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {currentProducts.map((product, idx) => (
                  <FadeIn key={product.id} delay={idx * 50} direction="up">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand-100 dark:hover:shadow-brand-900/20 transition-all duration-300 group flex flex-col h-full border border-gray-100 dark:border-gray-800 hover:border-brand-500/30">
                      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-95 dark:opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-500/30 shadow-lg">
                          {product.type}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-lg font-bold text-brand-600 dark:text-brand-300">{product.price}</span>
                          <Button to={`/store/${product.id}`} variant="outline" className="text-sm px-4 py-2 hover:bg-brand-600 hover:text-white border-brand-500 text-brand-600 dark:text-brand-400 hover:border-brand-600">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-800">
                    <button 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-full font-medium text-sm transition-all ${
                          currentPage === page 
                            ? 'bg-brand-600 text-white shadow-lg shadow-brand-200 dark:shadow-brand-900/50' 
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
              <ShoppingBag size={48} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No products found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={clearFilters}
                className="mt-6 text-brand-600 font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};