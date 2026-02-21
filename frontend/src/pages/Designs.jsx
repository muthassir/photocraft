import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiFilter, FiGrid, FiList, FiHeart, FiCamera,
  FiChevronDown, FiSearch, FiX, FiStar, FiPenTool,
  FiEdit, FiChrome, FiLayers, FiUser, FiCalendar,
  FiAward, FiTrendingUp
} from 'react-icons/fi';
import polaroid from '../assets/polaroid.png'
import collage from '../assets/collage-1.jpg'
import singleFrame from '../assets/frame-single.jpg'
import valentines from '../assets/edit-frame-1.jpg'
import heart from '../assets/heart.jpg'
import timeline from '../assets/cp-frame-timeline-2.jpg'

const Designs = () => {
  const [view, setView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'wedding', name: 'Wedding Designs', icon: '💍' },
    { id: 'birthday', name: 'Birthday Designs', icon: '🎂' },
    { id: 'anniversary', name: 'Anniversary Designs', icon: '💑' },
    { id: 'baby', name: 'Baby Shower', icon: '👶' },
    { id: 'holiday', name: 'Holiday & Christmas', icon: '🎄' },
    { id: 'album', name: 'Photo Album', icon: '📷' },
    { id: 'collage', name: 'Collage Templates', icon: '🖼️' },
    { id: 'card', name: 'Greeting Cards', icon: '💌' },
  ];

  const themes = [
    { id: 'all', name: 'All Themes' },
    { id: 'vintage', name: 'Vintage', icon: '📻' },
    { id: 'modern', name: 'Modern', icon: '🏢' },
    { id: 'minimalist', name: 'Minimalist', icon: '◻️' },
    { id: 'bohemian', name: 'Bohemian', icon: '🌺' },
    { id: 'rustic', name: 'Rustic', icon: '🌲' },
    { id: 'glamorous', name: 'Glamorous', icon: '✨' },
    { id: 'artistic', name: 'Artistic', icon: '🎨' },
    { id: 'cartoon', name: 'Cartoon', icon: '🐼' },
  ];

  const occasions = [
    { id: 'all', name: 'All Occasions' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'anniversary', name: 'Anniversary' },
    { id: 'baby-shower', name: 'Baby Shower' },
    { id: 'holiday', name: 'Holiday' },
    { id: 'valentines', name: "Valentine's Day" },
    { id: 'mothers-day', name: "Mother's Day" },
    { id: 'fathers-day', name: "Father's Day" },
    { id: 'polaroid', name: 'polaroid' },
  ];

  const complexities = [
    { id: 'all', name: 'All Levels' },
    { id: 'simple', name: 'Simple', icon: '⭐' },
    { id: 'medium', name: 'Medium', icon: '⭐⭐' },
    { id: 'complex', name: 'Complex', icon: '⭐⭐⭐' },
  ];

  const designs = [
  
  
    {
      id: 4,
      name: "Couple Single Frame",
      description: "Dreamy boho-inspired baby shower design with dream catchers and feathers",
      price: 899,
      originalPrice: 1499,
      discount: 40,
      rating: 4.8,
      reviews: 112,
      category: "baby",
      theme: "bohemian",
      occasion: "baby-shower",
      complexity: "medium",
      image: singleFrame,
      badge: "Trending",
      downloads: 678,
      designer: "Priya Patel",
      inStock: true
    },
    {
      id: 5,
      name: "Artistic Photo Collage",
      description: "Creative photo collage template with artistic overlays and textures",
      price: 1199,
      originalPrice: 1999,
      discount: 40,
      rating: 4.6,
      reviews: 145,
      category: "collage",
      theme: "artistic",
      occasion: "all",
      complexity: "complex",
      image: collage,
      badge: "Editor's Pick",
      downloads: 445,
      designer: "Alex Thompson",
      inStock: true
    },
    {
      id: 6,
      name: "Rustic Anniversary Album",
      description: "Warm and cozy anniversary album with wood textures and natural elements",
      price: 1299,
      originalPrice: 2199,
      discount: 41,
      rating: 4.8,
      reviews: 98,
      category: "anniversary",
      theme: "rustic",
      occasion: "anniversary",
      complexity: "complex",
      image: heart,
      badge: "Premium",
      downloads: 334,
      designer: "Emma Wilson",
      inStock: true
    },
    {
      id: 8,
      name: "Christmas Magic Card",
      description: "Festive Christmas card design with snowflakes and holiday cheer",
      price: 399,
      originalPrice: 799,
      discount: 50,
      rating: 4.6,
      reviews: 234,
      category: "holiday",
      theme: "artistic",
      occasion: "holiday",
      complexity: "simple",
      image: timeline,
      badge: "Seasonal",
      downloads: 1234,
      designer: "Maria Garcia",
      inStock: true
    },
    {
      id: 9,
      name: "Valentine's Day Love Story",
      description: "Romantic design with hearts, roses, and elegant typography",
      price: 499,
      originalPrice: 899,
      discount: 44,
      rating: 4.9,
      reviews: 178,
      category: "card",
      theme: "glamorous",
      occasion: "valentines",
      complexity: "medium",
      image: valentines,
      badge: "Romantic",
      downloads: 892,
      designer: "Sophie Turner",
      inStock: true
    },
    {
      id: 10,
      name: "Polaroid  Design",
      description: "Traditional Indian design with diyas, rangoli, and festive colors",
      price: 299,
      originalPrice: 499,
      discount: 43,
      rating: 4.9,
      reviews: 212,
      category: "holiday",
      theme: "artistic",
      occasion: "polaroid",
      complexity: "complex",
      image: polaroid,
      badge: "Festival Special",
      downloads: 678,
      designer: "Rajesh Kumar",
      inStock: true
    },
   
   
  ];

  // Filter designs based on selected filters
  const filteredDesigns = designs.filter(design => {
    if (selectedCategory !== 'all' && design.category !== selectedCategory) return false;
    if (selectedTheme !== 'all' && design.theme !== selectedTheme) return false;
    if (selectedOccasion !== 'all' && design.occasion !== selectedOccasion) return false;
    if (selectedComplexity !== 'all' && design.complexity !== selectedComplexity) return false;
    if (design.price < priceRange.min || design.price > priceRange.max) return false;
    if (searchTerm && !design.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  // Sort designs
  const sortedDesigns = [...filteredDesigns].sort((a, b) => {
    switch(sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'newest':
        return b.id - a.id;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTheme('all');
    setSelectedOccasion('all');
    setSelectedComplexity('all');
    setPriceRange({ min: 0, max: 5000 });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header Banner */}
      <section className="relative h-64 bg-gradient-to-r from-orange-500 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Design Photos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg max-w-2xl mx-auto"
            >
              Creative templates and designs to make your photos truly unique
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-primary w-full gap-2"
          >
            <FiFilter />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <AnimatePresence mode="wait">
            {(showFilters || window.innerWidth >= 1024) && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="lg:w-80 flex-shrink-0"
              >
                <div className="bg-base-200 rounded-2xl p-6 sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Clear All
                    </button>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Search Designs</label>
                    <div className="join w-full">
                      <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input input-bordered join-item w-full input-sm"
                      />
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm('')}
                          className="btn btn-ghost join-item btn-sm"
                        >
                          <FiX />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Categories with Icons */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`
                            p-2 rounded-lg text-left transition-all flex items-center gap-2
                            ${selectedCategory === cat.id 
                              ? 'bg-primary text-primary-content' 
                              : 'bg-base-300 hover:bg-base-300/80'
                            }
                          `}
                        >
                          <span className="text-lg">{cat.icon}</span>
                          <span className="text-xs truncate">{cat.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theme */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Theme</label>
                    <div className="grid grid-cols-2 gap-2">
                      {themes.map(theme => (
                        <button
                          key={theme.id}
                          onClick={() => setSelectedTheme(theme.id)}
                          className={`
                            p-2 rounded-lg text-left transition-all flex items-center gap-2
                            ${selectedTheme === theme.id 
                              ? 'bg-primary text-primary-content' 
                              : 'bg-base-300 hover:bg-base-300/80'
                            }
                          `}
                        >
                          <span className="text-lg">{theme.icon}</span>
                          <span className="text-xs truncate">{theme.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Occasion */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Occasion</label>
                    <select
                      value={selectedOccasion}
                      onChange={(e) => setSelectedOccasion(e.target.value)}
                      className="select select-bordered w-full select-sm"
                    >
                      {occasions.map(occ => (
                        <option key={occ.id} value={occ.id}>{occ.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Complexity */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Complexity Level</label>
                    <div className="flex gap-2">
                      {complexities.map(comp => (
                        <button
                          key={comp.id}
                          onClick={() => setSelectedComplexity(comp.id)}
                          className={`
                            flex-1 p-2 rounded-lg text-center transition-all
                            ${selectedComplexity === comp.id 
                              ? 'bg-primary text-primary-content' 
                              : 'bg-base-300 hover:bg-base-300/80'
                            }
                          `}
                        >
                          <span className="text-sm">{comp.icon}</span>
                          <span className="text-xs block">{comp.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Price Range (₹)</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                        className="input input-bordered input-sm w-1/2"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                        className="input input-bordered input-sm w-1/2"
                      />
                    </div>
                  </div>

                  {/* Active Filters */}
                  {(selectedCategory !== 'all' || selectedTheme !== 'all' || selectedOccasion !== 'all' || selectedComplexity !== 'all' || searchTerm) && (
                    <div className="mt-4 pt-4 border-t border-base-300">
                      <h4 className="text-sm font-medium mb-2">Active Filters:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {categories.find(c => c.id === selectedCategory)?.name}
                            <button onClick={() => setSelectedCategory('all')}>✕</button>
                          </span>
                        )}
                        {selectedTheme !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {themes.find(t => t.id === selectedTheme)?.name}
                            <button onClick={() => setSelectedTheme('all')}>✕</button>
                          </span>
                        )}
                        {selectedOccasion !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {occasions.find(o => o.id === selectedOccasion)?.name}
                            <button onClick={() => setSelectedOccasion('all')}>✕</button>
                          </span>
                        )}
                        {selectedComplexity !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {complexities.find(c => c.id === selectedComplexity)?.name}
                            <button onClick={() => setSelectedComplexity('all')}>✕</button>
                          </span>
                        )}
                        {searchTerm && (
                          <span className="badge badge-primary gap-1">
                            "{searchTerm}"
                            <button onClick={() => setSearchTerm('')}>✕</button>
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <div className="text-sm text-base-content/60">
                Showing <span className="font-bold text-primary">{sortedDesigns.length}</span> designs
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="select select-bordered select-sm"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>

                {/* View Toggle */}
                <div className="flex gap-1 border border-base-300 rounded-lg p-1">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded-md transition-all ${
                      view === 'grid' ? 'bg-primary text-primary-content' : 'hover:bg-base-200'
                    }`}
                  >
                    <FiGrid />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded-md transition-all ${
                      view === 'list' ? 'bg-primary text-primary-content' : 'hover:bg-base-200'
                    }`}
                  >
                    <FiList />
                  </button>
                </div>
              </div>
            </div>

            {/* Designs Grid/List */}
            {sortedDesigns.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-2">No designs found</h3>
                <p className="text-base-content/60 mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid ${
                view === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6' 
                  : 'grid-cols-1 gap-4'
              }`}>
                {sortedDesigns.map((design, index) => (
                  <motion.div
                    key={design.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all ${
                      view === 'list' ? 'card-side flex-col sm:flex-row' : ''
                    }`}
                  >
                    <figure className={view === 'list' ? 'sm:w-48 h-48 sm:h-auto' : 'h-48'}>
                      <img 
                        src={design.image} 
                        alt={design.name}
                        className="w-full h-full object-cover"
                      />
                      {design.badge && (
                        <div className="absolute top-2 left-2 badge badge-secondary">
                          {design.badge}
                        </div>
                      )}
                    </figure>
                    
                    <div className="card-body p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg line-clamp-1">{design.name}</h3>
                          <p className="text-sm text-base-content/60 line-clamp-2">{design.description}</p>
                        </div>
                        <button className="btn btn-ghost btn-sm btn-circle">
                          <FiHeart />
                        </button>
                      </div>

                      {/* Rating & Downloads */}
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-1">
                          <FiStar className="text-warning fill-current" />
                          <span className="text-sm font-medium">{design.rating}</span>
                          <span className="text-xs text-base-content/60">({design.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-base-content/60">
                          <FiTrendingUp />
                          <span>{design.downloads} ordered</span>
                        </div>
                      </div>


                      {/* Category Tags */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className="badge badge-outline badge-sm gap-1">
                          {categories.find(c => c.id === design.category)?.icon}
                          {design.category}
                        </span>
                        <span className="badge badge-outline badge-sm">{design.theme}</span>
                        <span className="badge badge-outline badge-sm">{design.complexity}</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-2xl font-bold text-primary">₹{design.price}</span>
                        {design.originalPrice && (
                          <>
                            <span className="text-sm line-through text-base-content/40">
                              ₹{design.originalPrice}
                            </span>
                            <span className="text-xs text-success">
                              Save {design.discount}%
                            </span>
                          </>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="card-actions justify-end mt-4">
                        <Link 
                          to={`/product/${design.id}`}
                          className="btn btn-outline btn-sm"
                        >
                          Preview Design
                        </Link>
                        <Link 
                          to="/upload"
                          className="btn btn-primary btn-sm gap-2"
                        >
                          <FiCamera />
                          Use This Design
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {sortedDesigns.length > 0 && (
              <div className="text-center mt-12">
                <button className="btn btn-outline btn-wide">
                  Load More Designs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designs;