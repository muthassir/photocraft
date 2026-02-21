import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube,
  FiMail, FiPhone, FiMapPin, FiSend, FiHeart, FiCamera,
  FiArrowUp, FiCreditCard
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'Photo Frames', path: '/frames' },
      { name: 'Wall Photos', path: '/walls' },
      { name: 'Design Photos', path: '/designs' },
      { name: 'New Arrivals', path: '/new' },
      { name: 'Best Sellers', path: '/best-sellers' },
      { name: 'Special Offers', path: '/offers' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Track Order', path: '/track-order' },
      { name: 'Returns & Refunds', path: '/returns' },
      { name: 'Shipping Info', path: '/shipping' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Contact Us', path: '/contact' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: <FiFacebook />, url: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <FiTwitter />, url: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <FiInstagram />, url: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: <FiYoutube />, url: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'UPI', icon: '📱' },
    { name: 'PayPal', icon: '🅿️' },
    { name: 'Razorpay', icon: '💰' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-base-200 border-t border-base-300 relative">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Get <span className="gradient-text">20% Off</span> Your First Order
            </h3>
            <p className="text-base-content/70 mb-6">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="join flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered join-item w-full focus:input-primary"
                  required
                />
                <button type="submit" className="btn btn-primary join-item gap-2">
                  <FiSend />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
            </form>
            <p className="text-xs text-base-content/50 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:shadow-xl flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">PC</span>
              </motion.div>
              <div>
                <span className="font-bold text-xl gradient-text">Photo</span>
                <span className="font-bold text-xl text-base-content">Craft</span>
              </div>
            </Link>
            
            <p className="text-base-content/70 mb-4 max-w-sm leading-relaxed">
              Transform your precious moments into stunning masterpieces. 
              Custom photo frames, wall art, and creative designs delivered to your doorstep with love.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors">
                <FiMapPin className="text-primary flex-shrink-0" />
                <span className="text-sm">123 Photo Street, Creative City, PC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors">
                <FiPhone className="text-primary flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors">
                <FiMail className="text-primary flex-shrink-0" />
                <span className="text-sm">hello@photocrat.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`w-10 h-10 rounded-full bg-base-300 ${social.color} text-base-content hover:text-white flex items-center justify-center transition-all duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Shop
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-base-content/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-base-content/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-base-content/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods & Trust Badges */}
        <div className="mt-12 pt-8 border-t border-base-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">We Accept:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="bg-base-300 px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 hover:bg-primary hover:text-primary-content transition-colors cursor-default"
                  >
                    <span>{method.icon}</span>
                    <span className="hidden sm:inline">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FiCreditCard className="text-primary text-xl" />
              <span className="text-sm text-base-content/60">Secure SSL Encrypted Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 py-6 bg-base-300/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-base-content/60">
              © {currentYear} <span className="gradient-text font-medium">PhotoCraft</span>. All rights reserved. Made with{' '}
              <FiHeart className="inline text-error animate-pulse" /> for photo lovers
            </div>
            
            <div className="flex gap-6 text-sm text-base-content/60">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-content rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-40 border-2 border-white dark:border-base-300"
        aria-label="Back to top"
      >
        <FiArrowUp className="text-xl" />
      </motion.button>

      {/* Floating WhatsApp/Support Button (Optional) */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-24 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-40 border-2 border-white dark:border-base-300"
        aria-label="WhatsApp Support"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
        </svg>
      </motion.a>
    </footer>
  );
};

export default Footer;