import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiFilter, FiGrid, FiList, FiHeart, FiCamera,
  FiChevronDown, FiSearch, FiX, FiStar, FiShoppingCart
} from 'react-icons/fi';

const Frames = () => {
  const [view, setView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Frames' },
    { id: 'wooden', name: 'Wooden Frames' },
    { id: 'metal', name: 'Metal Frames' },
    { id: 'plastic', name: 'Plastic Frames' },
    { id: 'glass', name: 'Glass Frames' },
    { id: 'collage', name: 'Collage Frames' },
  ];

  const materials = [
    { id: 'all', name: 'All Materials' },
    { id: 'wood', name: 'Wood' },
    { id: 'metal', name: 'Metal' },
    { id: 'plastic', name: 'Plastic' },
    { id: 'glass', name: 'Glass' },
    { id: 'acrylic', name: 'Acrylic' },
  ];

  const colors = [
    { id: 'all', name: 'All Colors' },
    { id: 'black', name: 'Black', class: 'bg-black' },
    { id: 'white', name: 'White', class: 'bg-white border border-gray-300' },
    { id: 'brown', name: 'Brown', class: 'bg-amber-800' },
    { id: 'gold', name: 'Gold', class: 'bg-yellow-600' },
    { id: 'silver', name: 'Silver', class: 'bg-gray-400' },
    { id: 'rose-gold', name: 'Rose Gold', class: 'bg-rose-400' },
  ];

  const frames = [
    {
      id: 1,
      name: "Classic Wooden Frame",
      description: "Handcrafted solid wood frame with elegant finish",
      price: 499,
      originalPrice: 999,
      discount: 50,
      rating: 4.5,
      reviews: 128,
      category: "wooden",
      material: "wood",
      color: "brown",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
      badge: "Best Seller",
      sizes: ['4x6', '5x7', '8x10'],
      inStock: true
    },
    {
      id: 2,
      name: "Modern Metal Frame Set of 3",
      description: "Sleek metal frames perfect for contemporary decor",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      rating: 4.3,
      reviews: 89,
      category: "metal",
      material: "metal",
      color: "black",
      image: "https://images.unsplash.com/photo-1618215089823-c4e5ae2c1fa6?w=500",
      badge: "New",
      sizes: ['4x6', '5x7', '6x8'],
      inStock: true
    },
    {
      id: 3,
      name: "Vintage Gold Ornate Frame",
      description: "Antique-style gold frame with intricate details",
      price: 899,
      originalPrice: 1499,
      discount: 40,
      rating: 4.7,
      reviews: 256,
      category: "wooden",
      material: "wood",
      color: "gold",
      image: "https://images.unsplash.com/photo-1583168403830-6b8f5e5a3f8d?w=500",
      badge: "-40%",
      sizes: ['5x7', '8x10', '11x14'],
      inStock: true
    },
    {
      id: 4,
      name: "Minimalist White Frame",
      description: "Clean, simple design for modern photographs",
      price: 299,
      originalPrice: 599,
      discount: 50,
      rating: 4.6,
      reviews: 67,
      category: "plastic",
      material: "plastic",
      color: "white",
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500",
      badge: "Limited",
      sizes: ['4x6', '5x7', '8x10'],
      inStock: true
    },
    {
      id: 5,
      name: "Rustic Barn Wood Frame",
      description: "Reclaimed wood frame with rustic charm",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      rating: 4.8,
      reviews: 145,
      category: "wooden",
      material: "wood",
      color: "brown",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
      badge: "Eco-Friendly",
      sizes: ['5x7', '8x10', '11x14'],
      inStock: true
    },
    {
      id: 6,
      name: "Rose Gold Metal Frame",
      description: "Trendy rose gold finish for a touch of elegance",
      price: 699,
      originalPrice: 1199,
      discount: 42,
      rating: 4.4,
      reviews: 92,
      category: "metal",
      material: "metal",
      color: "rose-gold",
      image: "https://images.unsplash.com/photo-1618215089823-c4e5ae2c1fa6?w=500",
      badge: "Trending",
      sizes: ['4x6', '5x7', '6x8'],
      inStock: true
    },
    {
      id: 7,
      name: "Black Glass Floating Frame",
      description: "Modern floating frame with glass front",
      price: 999,
      originalPrice: 1599,
      discount: 37,
      rating: 4.5,
      reviews: 78,
      category: "glass",
      material: "glass",
      color: "black",
      image: "https://images.unsplash.com/photo-1583168403830-6b8f5e5a3f8d?w=500",
      badge: "Premium",
      sizes: ['8x10', '11x14', '16x20'],
      inStock: true
    },
    {
      id: 8,
      name: "Collage Frame Set of 4",
      description: "Create beautiful photo collages with this set",
      price: 1499,
      originalPrice: 2499,
      discount: 40,
      rating: 4.6,
      reviews: 112,
      category: "collage",
      material: "plastic",
      color: "black",
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500",
      badge: "Popular",
      sizes: ['4x6 each'],
      inStock: true
    },
    {
      id: 9,
      name: "Silver Metal Frame",
      description: "Classic silver frame for any decor",
      price: 599,
      originalPrice: 999,
      discount: 40,
      rating: 4.3,
      reviews: 56,
      category: "metal",
      material: "metal",
      color: "silver",
      image: "https://images.unsplash.com/photo-1618215089823-c4e5ae2c1fa6?w=500",
      badge: "",
      sizes: ['4x6', '5x7', '8x10'],
      inStock: true
    },
    {
      id: 10,
      name: "Acrylic Clear Frame",
      description: "Invisible frame for a modern look",
      price: 449,
      originalPrice: 899,
      discount: 50,
      rating: 4.2,
      reviews: 34,
      category: "plastic",
      material: "acrylic",
      color: "clear",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
      badge: "",
      sizes: ['4x6', '5x7'],
      inStock: true
    },
    {
      id: 11,
      name: "Oak Wood Frame",
      description: "Natural oak finish with distressed look",
      price: 849,
      originalPrice: 1399,
      discount: 39,
      rating: 4.7,
      reviews: 89,
      category: "wooden",
      material: "wood",
      color: "brown",
      image: "https://images.unsplash.com/photo-1583168403830-6b8f5e5a3f8d?w=500",
      badge: "Handmade",
      sizes: ['5x7', '8x10'],
      inStock: true
    },
    {
      id: 12,
      name: "Gold Metal Frame",
      description: "Elegant gold finish for special photos",
      price: 749,
      originalPrice: 1249,
      discount: 40,
      rating: 4.5,
      reviews: 67,
      category: "metal",
      material: "metal",
      color: "gold",
      image: "https://images.unsplash.com/photo-1618215089823-c4e5ae2c1fa6?w=500",
      badge: "",
      sizes: ['4x6', '5x7', '8x10'],
      inStock: true
    }
  ];

  // Filter frames based on selected filters
  const filteredFrames = frames.filter(frame => {
    if (selectedCategory !== 'all' && frame.category !== selectedCategory) return false;
    if (selectedMaterial !== 'all' && frame.material !== selectedMaterial) return false;
    if (selectedColor !== 'all' && frame.color !== selectedColor) return false;
    if (frame.price < priceRange.min || frame.price > priceRange.max) return false;
    if (searchTerm && !frame.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  // Sort frames
  const sortedFrames = [...filteredFrames].sort((a, b) => {
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
    setSelectedMaterial('all');
    setSelectedColor('all');
    setPriceRange({ min: 0, max: 5000 });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header Banner */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Photo Frames
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg max-w-2xl mx-auto"
            >
              Discover the perfect frame for your precious memories
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
                className="lg:w-64 flex-shrink-0"
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
                        placeholder="Search frames..."
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

                  {/* Material */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Material</label>
                    <select
                      value={selectedMaterial}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="select select-bordered w-full select-sm"
                    >
                      {materials.map(mat => (
                        <option key={mat.id} value={mat.id}>{mat.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Color */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Color</label>
                    <div className="flex flex-wrap gap-2">
                      {colors.map(color => (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color.id)}
                          className={`
                            w-8 h-8 rounded-full ${color.class} 
                            ${selectedColor === color.id ? 'ring-2 ring-primary ring-offset-2' : ''}
                            hover:scale-110 transition-transform
                          `}
                          title={color.name}
                        />
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
                  {(selectedCategory !== 'all' || selectedMaterial !== 'all' || selectedColor !== 'all' || searchTerm) && (
                    <div className="mt-4 pt-4 border-t border-base-300">
                      <h4 className="text-sm font-medium mb-2">Active Filters:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {categories.find(c => c.id === selectedCategory)?.name}
                            <button onClick={() => setSelectedCategory('all')}>✕</button>
                          </span>
                        )}
                        {selectedMaterial !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {materials.find(m => m.id === selectedMaterial)?.name}
                            <button onClick={() => setSelectedMaterial('all')}>✕</button>
                          </span>
                        )}
                        {selectedColor !== 'all' && (
                          <span className="badge badge-primary gap-1">
                            {colors.find(c => c.id === selectedColor)?.name}
                            <button onClick={() => setSelectedColor('all')}>✕</button>
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
                Showing <span className="font-bold text-primary">{sortedFrames.length}</span> frames
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
            {sortedFrames.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🖼️</div>
                <h3 className="text-2xl font-bold mb-2">No frames found</h3>
                <p className="text-base-content/60 mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid ${
                view === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                  : 'grid-cols-1 gap-4'
              }`}>
                {sortedFrames.map((frame, index) => (
                  <motion.div
                    key={frame.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all ${
                      view === 'list' ? 'card-side flex-col sm:flex-row' : ''
                    }`}
                  >
                    <figure className={view === 'list' ? 'sm:w-48 h-48 sm:h-auto' : 'h-48'}>
                      <img 
                        src={frame.image} 
                        alt={frame.name}
                        className="w-full h-full object-cover"
                      />
                      {frame.badge && (
                        <div className="absolute top-2 left-2 badge badge-secondary">
                          {frame.badge}
                        </div>
                      )}
                    </figure>
                    
                    <div className="card-body p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg line-clamp-1">{frame.name}</h3>
                          <p className="text-sm text-base-content/60 line-clamp-2">{frame.description}</p>
                        </div>
                        <button className="btn btn-ghost btn-sm btn-circle">
                          <FiHeart />
                        </button>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <FiStar className="text-warning fill-current" />
                          <span className="text-sm font-medium">{frame.rating}</span>
                        </div>
                        <span className="text-xs text-base-content/60">({frame.reviews} reviews)</span>
                      </div>

                      {/* Sizes */}
                      <div className="flex gap-1 mt-2">
                        {frame.sizes.map(size => (
                          <span key={size} className="badge badge-outline badge-sm">{size}</span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-2xl font-bold text-primary">₹{frame.price}</span>
                        {frame.originalPrice && (
                          <>
                            <span className="text-sm line-through text-base-content/40">
                              ₹{frame.originalPrice}
                            </span>
                            <span className="text-xs text-success">
                              Save {frame.discount}%
                            </span>
                          </>
                        )}
                      </div>

                      {/* Stock Status */}
                      <div className="text-xs text-success flex items-center gap-1 mt-1">
                        <span className="w-2 h-2 bg-success rounded-full"></span>
                        In Stock
                      </div>

                      {/* Actions */}
                      <div className="card-actions justify-end mt-4">
                        <Link 
                          to={`/product/${frame.id}`}
                          className="btn btn-outline btn-sm"
                        >
                          View Details
                        </Link>
                        <Link 
                          to="/upload"
                          className="btn btn-primary btn-sm gap-2"
                        >
                          <FiCamera />
                          Add Photo
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {sortedFrames.length > 0 && (
              <div className="text-center mt-12">
                <button className="btn btn-outline btn-wide">
                  Load More Frames
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frames;