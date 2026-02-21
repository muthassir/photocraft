import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCamera, FiFramer, FiGrid, FiPenTool, FiArrowRight, 
  FiStar, FiTruck, FiShield, FiClock, FiHeart, FiUsers,
  FiChevronRight
} from 'react-icons/fi';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Photo Frames',
      description: 'Beautiful frames for your precious memories',
      icon: <FiFramer className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
      link: '/frames',
      color: 'from-blue-500 to-cyan-500',
      items: '120+ designs'
    },
    {
      id: 2,
      title: 'Wall Photos',
      description: 'Transform your walls with stunning photo collections',
      icon: <FiGrid className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1618215089823-c4e5ae2c1fa6?w=500',
      link: '/walls',
      color: 'from-purple-500 to-pink-500',
      items: '80+ designs'
    },
    {
      id: 3,
      title: 'Design Photos',
      description: 'Creative designs to make your photos unique',
      icon: <FiPenTool className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
      link: '/designs',
      color: 'from-orange-500 to-red-500',
      items: '200+ designs'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Vintage Wooden Frame",
      price: "₹499",
      originalPrice: "₹999",
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Modern Metal Frame Set",
      price: "₹1299",
      originalPrice: "₹1999",
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1618215089823-c4e5ae2c1fa6?w=300",
      badge: "New"
    },
    {
      id: 3,
      name: "Canvas Wall Art",
      price: "₹899",
      originalPrice: "₹1499",
      rating: 4.7,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300",
      badge: "-40%"
    },
    {
      id: 4,
      name: "Wedding Album Design",
      price: "₹299",
      originalPrice: "₹599",
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=300",
      badge: "Limited"
    }
  ];

  const benefits = [
    {
      icon: <FiTruck className="text-3xl" />,
      title: "Free Shipping",
      description: "On orders above ₹999"
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Secure Payment",
      description: "100% secure transactions"
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: "Quick Delivery",
      description: "5-7 business days"
    },
    {
      icon: <FiHeart className="text-3xl" />,
      title: "Quality Guarantee",
      description: "Premium materials"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Happy Customer",
      content: "The photo frame I ordered exceeded my expectations. The quality is amazing and delivery was super fast!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Regular Customer",
      content: "I've ordered multiple wall arts from here. Each piece is crafted with such attention to detail.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Interior Designer",
      content: "Perfect for my client projects. Great designs and excellent customization options.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Choose Design",
      description: "Browse our collection and select your favorite frame or design",
      icon: <FiGrid className="text-4xl" />
    },
    {
      step: "02",
      title: "Upload Photo",
      description: "Upload your photo and we'll customize it with your selected design",
      icon: <FiCamera className="text-4xl" />
    },
    {
      step: "03",
      title: "Get Delivery",
      description: "We'll customize and deliver your beautiful creation",
      icon: <FiTruck className="text-4xl" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1600"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base-100/95 via-base-100/80 to-transparent"></div>
        </div>

        {/* Animated Circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/5"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge badge-primary badge-lg mb-6">Welcome to PhotoCraft</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Transform Your
              <br />
              <span className="gradient-text">Photos Into Art</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-base-content/70 mb-8 max-w-2xl"
            >
              Upload your photos, choose from 400+ designs, and get beautifully 
              customized frames and wall art delivered to your doorstep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/upload" className="btn btn-primary btn-lg gap-2">
                <FiCamera />
                Start Creating
                <FiArrowRight />
              </Link>
              <Link to="/frames" className="btn btn-outline btn-lg">
                Explore Gallery
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-16"
            >
              <div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-primary text-2xl" />
                  <span className="text-3xl font-bold">50K+</span>
                </div>
                <span className="text-sm text-base-content/60">Happy Customers</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FiStar className="text-primary text-2xl" />
                  <span className="text-3xl font-bold">100K+</span>
                </div>
                <span className="text-sm text-base-content/60">Photos Created</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FiGrid className="text-primary text-2xl" />
                  <span className="text-3xl font-bold">400+</span>
                </div>
                <span className="text-sm text-base-content/60">Design Options</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-primary/10 text-primary rounded-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-base-content/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shop by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Choose from our wide range of customization options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to={category.link}>
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      <div className="mb-3 transform group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-sm opacity-90 mb-2">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                          {category.items}
                        </span>
                        <span className="text-white group-hover:translate-x-2 transition-transform">
                          <FiArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured <span className="gradient-text">Products</span>
              </h2>
              <p className="text-base-content/70">Most popular choices this week</p>
            </div>
            <Link to="/frames" className="btn btn-outline gap-2 mt-4 md:mt-0">
              View All
              <FiChevronRight />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
              >
                <figure className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-2 right-2 badge badge-secondary">
                      {product.badge}
                    </div>
                  )}
                </figure>
                <div className="card-body p-4">
                  <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="rating rating-xs">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          className="mask mask-star-2 bg-orange-400"
                          checked={i < Math.floor(product.rating)}
                          readOnly
                        />
                      ))}
                    </div>
                    <span className="text-xs text-base-content/60">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm line-through text-base-content/40">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Action */}
                  <Link to="/upload" className="btn btn-primary btn-sm w-full mt-3 gap-2">
                    <FiCamera />
                    Add Your Photo
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Three simple steps to transform your photos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="inline-block p-6 bg-primary/10 text-primary rounded-3xl mb-6">
                  {item.icon}
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-base-content/5">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-base-content/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Real reviews from happy customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-base-content/60">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="rating rating-sm mb-3">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                        checked={i < testimonial.rating}
                        readOnly
                      />
                    ))}
                  </div>
                  
                  <p className="text-base-content/70">"{testimonial.content}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 50,000+ happy customers who have transformed their photos into beautiful keepsakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload" className="btn btn-lg bg-white text-primary hover:bg-base-100 gap-2">
                <FiCamera />
                Start Creating Now
              </Link>
              <Link to="/contact" className="btn btn-lg btn-outline text-white border-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;