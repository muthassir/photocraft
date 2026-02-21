import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiFilter, FiGrid, FiList, FiHeart, FiCamera,
  FiChevronDown, FiSearch, FiX, FiStar, FiMaximize,
  FiHome, FiImage
} from 'react-icons/fi';

const Walls = () => {
  const [view, setView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [selectedOrientation, setSelectedOrientation] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Wall Art' },
    { id: 'canvas', name: 'Canvas Prints' },
    { id: 'poster', name: 'Posters' },
    { id: 'framed', name: 'Framed Art' },
    { id: 'metal', name: 'Metal Prints' },
    { id: 'acrylic', name: 'Acrylic Prints' },
    { id: 'tapestry', name: 'Tapestries' },
  ];

  const sizes = [
    { id: 'all', name: 'All Sizes' },
    { id: 'small', name: 'Small (Up to 12")' },
    { id: 'medium', name: 'Medium (12"-24")' },
    { id: 'large', name: 'Large (24"-36")' },
    { id: 'xlarge', name: 'Extra Large (36"+ )' },
  ];

  const styles = [
    { id: 'all', name: 'All Styles' },
    { id: 'modern', name: 'Modern' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'minimalist', name: 'Minimalist' },
    { id: 'vintage', name: 'Vintage' },
    { id: 'bohemian', name: 'Bohemian' },
    { id: 'industrial', name: 'Industrial' },
  ];

  const orientations = [
    { id: 'all', name: 'All Orientations' },
    { id: 'landscape', name: 'Landscape', icon: <FiMaximize className="rotate-90" /> },
    { id: 'portrait', name: 'Portrait', icon: <FiMaximize /> },
    { id: 'square', name: 'Square', icon: <FiMaximize className="rotate-45 scale-75" /> },
    { id: 'panorama', name: 'Panorama', icon: <FiMaximize className="scale-150" /> },
  ];

  const wallArt = [
    {
      id: 1,
      name: "Mountain Lake Canvas",
      description: "Beautiful mountain landscape with serene lake, perfect for living room",
      price: 2499,
      originalPrice: 3999,
      discount: 37,
      rating: 4.8,
      reviews: 156,
      category: "canvas",
      size: "large",
      style: "landscape",
      orientation: "landscape",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
      badge: "Best Seller",
      dimensions: "36\" x 24\"",
      inStock: true
    },
    {
      id: 2,
      name: "Abstract Gold Leaf",
      description: "Modern abstract art with gold leaf accents, adds luxury to any space",
      price: 3299,
      originalPrice: 4999,
      discount: 34,
      rating: 4.6,
      reviews: 89,
      category: "canvas",
      size: "medium",
      style: "abstract",
      orientation: "portrait",
      image: "https://images.unsplash.com/photo-1549887552-cb1071e3e7f4?w=500",
      badge: "Premium",
      dimensions: "24\" x 36\"",
      inStock: true
    },
    {
      id: 3,
      name: "Beach Sunset Poster",
      description: "Vibrant beach sunset scene, brings coastal vibes to your home",
      price: 899,
      originalPrice: 1499,
      discount: 40,
      rating: 4.5,
      reviews: 203,
      category: "poster",
      size: "medium",
      style: "landscape",
      orientation: "landscape",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
      badge: "Popular",
      dimensions: "18\" x 24\"",
      inStock: true
    },
    {
      id: 4,
      name: "Black & White Cityscape",
      description: "Dramatic black and white city photography, perfect for modern decor",
      price: 1899,
      originalPrice: 2799,
      discount: 32,
      rating: 4.7,
      reviews: 112,
      category: "framed",
      size: "large",
      style: "modern",
      orientation: "landscape",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500",
      badge: "New",
      dimensions: "30\" x 20\"",
      inStock: true
    },
    {
      id: 5,
      name: "Botanical Print Set of 3",
      description: "Set of three botanical prints, perfect for gallery wall",
      price: 3499,
      originalPrice: 4999,
      discount: 30,
      rating: 4.9,
      reviews: 67,
      category: "poster",
      size: "medium",
      style: "vintage",
      orientation: "portrait",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a3?w=500",
      badge: "Trending",
      dimensions: "12\" x 16\" each",
      inStock: true
    },
    {
      id: 6,
      name: "Metal Abstract Wave",
      description: "Brushed aluminum print with abstract wave design",
      price: 4499,
      originalPrice: 6499,
      discount: 31,
      rating: 4.6,
      reviews: 45,
      category: "metal",
      size: "medium",
      style: "abstract",
      orientation: "landscape",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
      badge: "Premium",
      dimensions: "24\" x 16\"",
      inStock: true
    },
    {
      id: 7,
      name: "Forest Pathway Acrylic",
      description: "High-gloss acrylic print of peaceful forest path",
      price: 3999,
      originalPrice: 5999,
      discount: 33,
      rating: 4.7,
      reviews: 78,
      category: "acrylic",
      size: "large",
      style: "landscape",
      orientation: "portrait",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
      badge: "",
      dimensions: "30\" x 40\"",
      inStock: true
    },
    {
      id: 8,
      name: "Bohemian Wall Tapestry",
      description: "Large bohemian tapestry with mandala design",
      price: 1899,
      originalPrice: 2799,
      discount: 32,
      rating: 4.5,
      reviews: 134,
      category: "tapestry",
      size: "xlarge",
      style: "bohemian",
      orientation: "square",
      image: "https://images.unsplash.com/photo-1618220179428-22790b4615e1?w=500",
      badge: "Bestseller",
      dimensions: "60\" x 80\"",
      inStock: true
    },
    {
      id: 9,
      name: "Minimalist Line Art",
      description: "Simple elegant line art print, modern and sophisticated",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      rating: 4.8,
      reviews: 92,
      category: "poster",
      size: "small",
      style: "minimalist",
      orientation: "portrait",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500",
      badge: "New",
      dimensions: "11\" x 14\"",
      inStock: true
    },
    {
      id: 10,
      name: "Vintage World Map",
      description: "Antique-style world map, perfect for home office",
      price: 2799,
      originalPrice: 3999,
      discount: 30,
      rating: 4.6,
      reviews: 156,
      category: "poster",
      size: "large",
      style: "vintage",
      orientation: "landscape",
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500",
      badge: "",
      dimensions: "36\" x 24\"",
      inStock: true
    },
    {
      id: 11,
      name: "Industrial Metal Wall Art",
      description: "3D metal wall sculpture with industrial design",
      price: 5499,
      originalPrice: 7999,
      discount: 31,
      rating: 4.7,
      reviews: 43,
      category: "metal",
      size: "large",
      style: "industrial",
      orientation: "landscape",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500",
      badge: "Limited",
      dimensions: "40\" x 30\"",
      inStock: true
    },
    {
      id: 12,
      name: "Framed Floral Print",
      description: "Elegant floral print in white frame, ready to hang",
      price: 2199,
      originalPrice: 3299,
      discount: 33,
      rating: 4.5,
      reviews: 67,
      category: "framed",
      size: "medium",
      style: "vintage",
      orientation: "portrait",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500",
      badge: "",
      dimensions: "20\" x 24\"",
      inStock: true
    }
  ];

  // Filter wall art based on selected filters
  const filteredArt = wallArt.filter(art => {
    if (selectedCategory !== 'all' && art.category !== selectedCategory) return false;
    if (selectedSize !== 'all' && art.size !== selectedSize) return false;
    if (selectedStyle !== 'all' && art.style !== selectedStyle) return false;
    if (selectedOrientation !== 'all' && art.orientation !== selectedOrientation) return false;
    if (art.price < priceRange.min || art.price > priceRange.max) return false;
    if (searchTerm && !art.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  // Sort wall art
  const sortedArt = [...filteredArt].sort((a, b) => {
    switch(sortBy) {
      case 'popular':
        return b.rating - a.rating;
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
    setSelectedSize('all');
    setSelectedStyle('all');
    setSelectedOrientation('all');
    setPriceRange({ min: 0, max: 10000 });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header Banner */}
      <section className="relative h-64 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Wall Photos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg max-w-2xl mx-auto"
            >
              Transform your walls with stunning photo art and designs
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
                className="lg:w-72 flex-shrink-0"
              >
                <div className="bg-base-200 rounded-2xl p-6 sticky top-24">
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
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <div className="join w-full">
                      <input
                        type="text"
                        placeholder="Search wall art..."
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

                  {/* Categories */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="select select-bordered w-full select-sm"
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Style */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Style</label>
                    <select
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="select select-bordered w-full select-sm"
                    >
                      {styles.map(style => (
                        <option key={style.id} value={style.id}>{style.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Size */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Size</label>
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="select select-bordered w-full select-sm"
                    >
                      {sizes.map(size => (
                        <option key={size.id} value={size.id}>{size.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Orientation */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Orientation</label>
                    <div className="grid grid-cols-2 gap-2">
                      {orientations.map(orient => (
                        <button
                          key={orient.id}
                          onClick={() => setSelectedOrientation(orient.id)}
                          className={`
                            p-3 rounded-lg flex flex-col items-center gap-1 transition-all
                            ${selectedOrientation === orient.id 
                              ? 'bg-primary text-primary-content' 
                              : 'bg-base-300 hover:bg-base-300/80'
                            }
                          `}
                        >
                          <span className="text-xl">{orient.icon}</span>
                          <span className="text-xs">{orient.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
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
                  {(selectedCategory !== 'all' || selectedSize !== 'all' || selectedStyle !== 'all' || selectedOrientation !== 'all' || searchTerm) && (
                    <div className="mt-4 pt-4 border-t border-base-300">
                      <h4 className="text-sm font-medium mb-2">Active Filters:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {categories.find(c => c.id === selectedCategory)?.name}
                            <button onClick={() => setSelectedCategory('all')}>✕</button>
                          </span>
                        )}
                        {selectedStyle !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {styles.find(s => s.id === selectedStyle)?.name}
                            <button onClick={() => setSelectedStyle('all')}>✕</button>
                          </span>
                        )}
                        {selectedSize !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {sizes.find(s => s.id === selectedSize)?.name}
                            <button onClick={() => setSelectedSize('all')}>✕</button>
                          </span>
                        )}
                        {selectedOrientation !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {orientations.find(o => o.id === selectedOrientation)?.name}
                            <button onClick={() => setSelectedOrientation('all')}>✕</button>
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
                Showing <span className="font-bold text-primary">{sortedArt.length}</span> wall art pieces
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

            {/* Products Grid/List */}
            {sortedArt.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🖼️</div>
                <h3 className="text-2xl font-bold mb-2">No wall art found</h3>
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
                {sortedArt.map((art, index) => (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all ${
                      view === 'list' ? 'card-side flex-col sm:flex-row' : ''
                    }`}
                  >
                    <figure className={view === 'list' ? 'sm:w-48 h-48 sm:h-auto' : 'h-56'}>
                      <img 
                        src={art.image} 
                        alt={art.name}
                        className="w-full h-full object-cover"
                      />
                      {art.badge && (
                        <div className="absolute top-2 left-2 badge badge-secondary">
                          {art.badge}
                        </div>
                      )}
                    </figure>
                    
                    <div className="card-body p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg line-clamp-1">{art.name}</h3>
                          <p className="text-sm text-base-content/60 line-clamp-2">{art.description}</p>
                        </div>
                        <button className="btn btn-ghost btn-sm btn-circle">
                          <FiHeart />
                        </button>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <FiStar className="text-warning fill-current" />
                          <span className="text-sm font-medium">{art.rating}</span>
                        </div>
                        <span className="text-xs text-base-content/60">({art.reviews} reviews)</span>
                      </div>

                      {/* Dimensions */}
                      <div className="flex items-center gap-2 text-xs text-base-content/70 mt-1">
                        <FiMaximize />
                        <span>{art.dimensions}</span>
                      </div>

                      {/* Category Tags */}
                      <div className="flex gap-1 mt-2">
                        <span className="badge badge-outline badge-sm">{art.category}</span>
                        <span className="badge badge-outline badge-sm">{art.style}</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-2xl font-bold text-primary">₹{art.price}</span>
                        {art.originalPrice && (
                          <>
                            <span className="text-sm line-through text-base-content/40">
                              ₹{art.originalPrice}
                            </span>
                            <span className="text-xs text-success">
                              Save {art.discount}%
                            </span>
                          </>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="card-actions justify-end mt-4">
                        <Link 
                          to={`/product/${art.id}`}
                          className="btn btn-outline btn-sm"
                        >
                          View Details
                        </Link>
                        <Link 
                          to="/upload"
                          className="btn btn-primary btn-sm gap-2"
                        >
                          <FiCamera />
                          Customize
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {sortedArt.length > 0 && (
              <div className="text-center mt-12">
                <button className="btn btn-outline btn-wide">
                  Load More Wall Art
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walls;