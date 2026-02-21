import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome, FiImage, FiGrid, FiPenTool, FiUpload, 
  FiShoppingCart, FiUser, FiMenu, FiX, FiSearch,
  FiHeart, FiLogOut, FiSettings, FiPackage, FiChevronDown
} from 'react-icons/fi';
import ThemeSwitcher from '../../common/ThemeSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Mock user for demo - replace with actual auth later
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: null,
    isAuthenticated: true
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', name: 'Home', icon: <FiHome /> },
    { path: '/frames', name: 'Photo Frames', icon: <FiImage /> },
    { path: '/walls', name: 'Wall Photos', icon: <FiGrid /> },
    { path: '/designs', name: 'Design Photos', icon: <FiPenTool /> },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchOpen(false);
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout clicked');
    navigate('/');
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-base-100/90 backdrop-blur-lg shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:shadow-xl flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">OZ</span>
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl gradient-text">Heart</span>
                <span className="font-bold text-xl text-base-content">OZ</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    location.pathname === link.path
                      ? 'bg-primary text-primary-content shadow-md'
                      : 'hover:bg-base-200/80 text-base-content/80 hover:text-base-content'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="btn btn-ghost btn-circle hidden sm:flex"
                aria-label="Search"
              >
                <FiSearch className="text-xl" />
              </button>

              {/* Upload Button */}
              <Link 
                to="/upload" 
                className="btn btn-primary btn-sm hidden lg:flex gap-2"
              >
                <FiUpload />
                <span>Upload</span>
              </Link>

              {/* Cart */}
              <Link to="/cart" className="btn btn-ghost btn-circle relative">
                <FiShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 badge badge-secondary badge-sm">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Theme Switcher */}
              <ThemeSwitcher />

              {/* User Menu */}
              {user.isAuthenticated ? (
                <div className="dropdown dropdown-end">
                  <label 
                    tabIndex={0} 
                    className="btn btn-ghost btn-circle avatar"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  >
                    <div className="w-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="rounded-full" />
                      ) : (
                        user.name.charAt(0).toUpperCase()
                      )}
                    </div>
                  </label>
                  
                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        tabIndex={0} 
                        className="mt-3 p-2 shadow-xl menu dropdown-content bg-base-100 rounded-box w-64 border border-base-200"
                      >
                        <li className="menu-header p-3">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-base-content/60 truncate">{user.email}</div>
                        </li>
                        <li><div className="divider my-1"></div></li>
                        <li>
                          <Link to="/profile" className="flex items-center gap-2">
                            <FiUser />
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/orders" className="flex items-center gap-2">
                            <FiPackage />
                            My Orders
                          </Link>
                        </li>
                        <li>
                          <Link to="/wishlist" className="flex items-center gap-2">
                            <FiHeart />
                            Wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="/settings" className="flex items-center gap-2">
                            <FiSettings />
                            Settings
                          </Link>
                        </li>
                        <li><div className="divider my-1"></div></li>
                        <li>
                          <button 
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-error w-full"
                          >
                            <FiLogOut />
                            Logout
                          </button>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to="/login" className="btn btn-ghost btn-circle">
                  <FiUser />
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-ghost btn-circle md:hidden"
                aria-label="Menu"
              >
                {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
            </div>
          </div>

          {/* Search Bar - Expandable */}
          <AnimatePresence>
            {searchOpen && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleSearch}
                className="hidden sm:block mt-3"
              >
                <div className="join w-full">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search for frames, designs, wall art..."
                    className="input input-bordered join-item w-full focus:input-primary"
                    autoFocus
                  />
                  <button type="submit" className="btn btn-primary join-item">
                    <FiSearch />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-base-100 shadow-xl z-40 md:hidden border-t border-base-200"
          >
            <div className="container mx-auto p-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="join w-full">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search products..."
                    className="input input-bordered join-item w-full input-sm"
                  />
                  <button type="submit" className="btn btn-primary join-item btn-sm">
                    <FiSearch />
                  </button>
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      location.pathname === link.path
                        ? 'bg-primary text-primary-content'
                        : 'hover:bg-base-200'
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ))}
                
                <div className="divider my-2"></div>
                
                <Link
                  to="/upload"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200"
                >
                  <FiUpload className="text-xl" />
                  <span className="font-medium">Upload Photo</span>
                </Link>
                
                <Link
                  to="/wishlist"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200"
                >
                  <FiHeart className="text-xl" />
                  <span className="font-medium">Wishlist</span>
                </Link>
                
                <Link
                  to="/orders"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200"
                >
                  <FiPackage className="text-xl" />
                  <span className="font-medium">My Orders</span>
                </Link>
              </nav>

              {/* Mobile User Info */}
              {user.isAuthenticated && (
                <div className="mt-4 p-3 bg-base-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-base-content/60 truncate">{user.email}</div>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="btn btn-outline btn-error btn-sm w-full mt-3 gap-2"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              )}
              
              {!user.isAuthenticated && (
                <div className="mt-4 flex gap-2">
                  <Link to="/login" className="btn btn-primary flex-1">Login</Link>
                  <Link to="/register" className="btn btn-outline flex-1">Register</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className={`${scrolled ? 'h-16' : 'h-20'} transition-all duration-500`}></div>
    </>
  );
};

export default Header;