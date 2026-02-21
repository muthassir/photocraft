import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiHeart,
  FiArrowRight, FiArrowLeft, FiTag, FiTruck, FiShield,
  FiClock, FiPercent, FiGift, FiCreditCard
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const Cart = () => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [selectedItems, setSelectedItems] = useState([1, 2, 3]); // All items selected by default
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Vintage Wooden Frame",
      description: "Handcrafted solid wood frame with elegant finish",
      price: 499,
      originalPrice: 999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300",
      category: "frames",
      customization: {
        photo: "wedding-photo.jpg",
        size: "8x10 inches",
        message: "Our wedding day"
      },
      inStock: true,
      maxQuantity: 5
    },
    {
      id: 2,
      name: "Canvas Wall Art - Mountain Lake",
      description: "Beautiful mountain landscape with serene lake",
      price: 2499,
      originalPrice: 3999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300",
      category: "walls",
      customization: {
        photo: "vacation-photo.jpg",
        size: "24x36 inches",
        frame: "Gallery Wrap"
      },
      inStock: true,
      maxQuantity: 3
    },
    {
      id: 3,
      name: "Wedding Album Design",
      description: "Elegant wedding album template with floral accents",
      price: 1499,
      originalPrice: 2499,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300",
      category: "designs",
      customization: {
        photos: 24,
        pages: 30,
        theme: "Romantic"
      },
      inStock: true,
      maxQuantity: 10
    }
  ]);

  const [wishlistItems, setWishlistItems] = useState([4, 5]);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    if (selectedItems.includes(item.id)) {
      return sum + (item.price * item.quantity);
    }
    return sum;
  }, 0);

  const discount = cartItems.reduce((sum, item) => {
    if (selectedItems.includes(item.id) && item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);

  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const couponDiscount = couponApplied ? Math.round(subtotal * 0.1) : 0; // 10% off
  const total = subtotal + shipping + tax - couponDiscount;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const item = cartItems.find(i => i.id === id);
    if (newQuantity > item.maxQuantity) {
      toast.error(`Maximum ${item.maxQuantity} items allowed`);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    setSelectedItems(prev => prev.filter(itemId => itemId !== id));
    toast.success('Item removed from cart');
  };

  const handleToggleSelect = (id) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id));
    }
  };

  const handleMoveToWishlist = (id) => {
    handleRemoveItem(id);
    setWishlistItems(prev => [...prev, id]);
    toast.success('Moved to wishlist');
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10' || couponCode.toUpperCase() === 'WELCOME20') {
      setCouponApplied(true);
      toast.success('Coupon applied successfully!');
    } else {
      toast.error('Invalid coupon code');
    }
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      toast.error('Please select items to checkout');
      return;
    }
    navigate('/checkout', {
      state: {
        items: cartItems.filter(item => selectedItems.includes(item.id)),
        total
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      {/* Header */}
      <section className="bg-base-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <FiShoppingCart className="text-3xl text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-base-content/70">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            {/* Select All Bar */}
            {cartItems.length > 0 && (
              <div className="bg-base-200 rounded-xl p-4 mb-4 flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === cartItems.length}
                    onChange={handleSelectAll}
                    className="checkbox checkbox-primary"
                  />
                  <span className="font-medium">Select All ({cartItems.length} items)</span>
                </label>
                
                <button
                  onClick={() => {
                    cartItems.forEach(item => handleRemoveItem(item.id));
                  }}
                  className="btn btn-ghost btn-sm text-error gap-2"
                >
                  <FiTrash2 />
                  Remove All
                </button>
              </div>
            )}

            {/* Cart Items List */}
            {cartItems.length === 0 ? (
              <div className="text-center py-16 bg-base-200 rounded-2xl">
                <div className="text-6xl mb-4 opacity-30">🛒</div>
                <h3 className="text-2xl font-bold mb-2">Your cart is empty</h3>
                <p className="text-base-content/60 mb-6">
                  Looks like you haven't added any items yet
                </p>
                <Link to="/frames" className="btn btn-primary gap-2">
                  <FiArrowLeft />
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow mb-4 p-4 border border-base-200"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Select Checkbox */}
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleToggleSelect(item.id)}
                          className="checkbox checkbox-primary mt-1"
                        />
                      </div>

                      {/* Product Image */}
                      <div className="sm:w-24 h-24 rounded-lg overflow-hidden bg-base-200 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div>
                            <Link to={`/product/${item.id}`}>
                              <h3 className="font-bold text-lg hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-base-content/60 line-clamp-1">
                              {item.description}
                            </p>
                            
                            {/* Category Badge */}
                            <div className="mt-1">
                              <span className="badge badge-outline badge-sm">
                                {item.category}
                              </span>
                            </div>

                            {/* Customization Details */}
                            {item.customization && (
                              <div className="mt-2 text-xs bg-base-200 p-2 rounded-lg">
                                <p className="font-medium mb-1">Customization:</p>
                                {Object.entries(item.customization).map(([key, value]) => (
                                  <div key={key} className="flex gap-2">
                                    <span className="text-base-content/50 capitalize">{key}:</span>
                                    <span>{value}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Price */}
                          <div className="text-right mt-2 sm:mt-0">
                            <div className="text-2xl font-bold text-primary">
                              ₹{item.price * item.quantity}
                            </div>
                            {item.originalPrice && (
                              <div className="text-sm line-through text-base-content/40">
                                ₹{item.originalPrice * item.quantity}
                              </div>
                            )}
                            {item.originalPrice && (
                              <div className="text-xs text-success">
                                Save ₹{(item.originalPrice - item.price) * item.quantity}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
                          <div className="flex items-center gap-2">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-base-300 rounded-lg">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="btn btn-ghost btn-sm px-2"
                                disabled={item.quantity <= 1}
                              >
                                <FiMinus />
                              </button>
                              <span className="w-10 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="btn btn-ghost btn-sm px-2"
                                disabled={item.quantity >= item.maxQuantity}
                              >
                                <FiPlus />
                              </button>
                            </div>

                            {/* Stock Status */}
                            <span className="text-xs text-success flex items-center gap-1">
                              <span className="w-2 h-2 bg-success rounded-full"></span>
                              In Stock
                            </span>
                          </div>

                          <div className="flex gap-1">
                            <button
                              onClick={() => handleMoveToWishlist(item.id)}
                              className="btn btn-ghost btn-sm gap-1"
                              title="Move to wishlist"
                            >
                              <FiHeart />
                              <span className="hidden sm:inline">Save</span>
                            </button>
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="btn btn-ghost btn-sm text-error gap-1"
                              title="Remove"
                            >
                              <FiTrash2 />
                              <span className="hidden sm:inline">Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}

            {/* Continue Shopping Link */}
            {cartItems.length > 0 && (
              <Link to="/frames" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mt-4">
                <FiArrowLeft />
                Continue Shopping
              </Link>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-96"
            >
              <div className="bg-base-200 rounded-2xl p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                {/* Selected Items Count */}
                <div className="text-sm text-base-content/60 mb-4">
                  {selectedItems.length} {selectedItems.length === 1 ? 'item' : 'items'} selected
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}

                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Coupon Discount (10%)</span>
                      <span>-₹{couponDiscount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-base-content/70">Shipping</span>
                    {shipping === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      <span>₹{shipping}</span>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <span className="text-base-content/70">Tax (GST 18%)</span>
                    <span>₹{tax}</span>
                  </div>

                  <div className="border-t border-base-300 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">₹{total}</span>
                    </div>
                    <p className="text-xs text-base-content/50 mt-1">
                      Inclusive of all taxes
                    </p>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="mb-4">
                  <label className="text-sm font-medium mb-2 block">Coupon Code</label>
                  <div className="join w-full">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="input input-bordered join-item w-full input-sm"
                      disabled={couponApplied}
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="btn btn-primary join-item btn-sm"
                      disabled={couponApplied || !couponCode}
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="text-xs text-success mt-1 flex items-center gap-1">
                      <FiPercent />
                      Coupon applied successfully!
                    </p>
                  )}
                  <p className="text-xs text-base-content/50 mt-2">
                    Try: SAVE10 or WELCOME20
                  </p>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={selectedItems.length === 0}
                  className="btn btn-primary w-full gap-2 mb-4"
                >
                  Proceed to Checkout
                  <FiArrowRight />
                </button>

                {/* Payment Icons */}
                <div className="flex justify-center gap-2 text-2xl text-base-content/40">
                  <FiCreditCard />
                  <span className="text-sm bg-base-300 px-2 py-1 rounded">UPI</span>
                  <span className="text-sm bg-base-300 px-2 py-1 rounded">PayPal</span>
                  <span className="text-sm bg-base-300 px-2 py-1 rounded">Razorpay</span>
                </div>

                {/* Delivery Guarantee */}
                <div className="mt-4 pt-4 border-t border-base-300">
                  <div className="flex items-center gap-2 text-sm">
                    <FiTruck className="text-primary" />
                    <span>Free delivery on orders above ₹999</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-2">
                    <FiShield className="text-primary" />
                    <span>Secure payment guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-2">
                    <FiClock className="text-primary" />
                    <span>7 days easy returns</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* You Might Also Like */}
        {cartItems.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="card bg-base-100 shadow hover:shadow-lg transition-all">
                  <figure className="h-32">
                    <img 
                      src={`https://images.unsplash.com/photo-${1600000000000 + item}?w=200`}
                      alt="Recommended"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="card-body p-3">
                    <h3 className="font-bold text-sm">Modern Frame</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold">₹499</span>
                      <button className="btn btn-primary btn-xs">Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Cart;