import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiHeart, FiCamera, FiUsers, FiStar, FiTruck, FiShield,
  FiAward, FiClock, FiPackage, FiSmile, FiTarget, FiEye
} from 'react-icons/fi';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50,000+', icon: <FiUsers /> },
    { label: 'Photos Created', value: '100,000+', icon: <FiCamera /> },
    { label: 'Design Options', value: '400+', icon: <FiStar /> },
    { label: 'Cities Served', value: '200+', icon: <FiTruck /> },
  ];

  const team = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Founder & Creative Director",
      bio: "Former graphic designer with a passion for preserving memories through art.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Head of Design",
      bio: "Award-winning designer with 10+ years of experience in photo editing.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Customer Experience Lead",
      bio: "Dedicated to ensuring every customer gets the perfect photo product.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      social: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      id: 4,
      name: "Arjun Singh",
      role: "Production Manager",
      bio: "Ensures every print meets our high quality standards before shipping.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      social: { twitter: "#", linkedin: "#", instagram: "#" }
    }
  ];

  const values = [
    {
      id: 1,
      title: "Quality First",
      description: "We never compromise on quality. Every product is crafted with premium materials.",
      icon: <FiAward className="text-3xl" />
    },
    {
      id: 2,
      title: "Customer Delight",
      description: "Your happiness is our success. We go above and beyond to exceed expectations.",
      icon: <FiSmile className="text-3xl" />
    },
    {
      id: 3,
      title: "Innovation",
      description: "Constantly evolving our designs and techniques to bring you the latest trends.",
      icon: <FiTarget className="text-3xl" />
    },
    {
      id: 4,
      title: "Attention to Detail",
      description: "Every photo is handled with care and precision to preserve your memories.",
      icon: <FiEye className="text-3xl" />
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "PhotoCraft started as a small home studio with a big dream."
    },
    {
      year: "2019",
      title: "First 1000 Customers",
      description: "Reached our first milestone of 1000 happy customers."
    },
    {
      year: "2020",
      title: "Expanded to 50 Cities",
      description: "Grew our delivery network to serve customers across the country."
    },
    {
      year: "2021",
      title: "Launched 200+ Designs",
      description: "Introduced new categories including wall art and design templates."
    },
    {
      year: "2022",
      title: "Opened Second Studio",
      description: "Expanded operations with a state-of-the-art production facility."
    },
    {
      year: "2023",
      title: "50,000 Customers Strong",
      description: "Celebrated serving over 50,000 happy families."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Story
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We're on a mission to help people transform their precious moments into 
                beautiful, tangible memories that last a lifetime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-primary/10 text-primary rounded-2xl mb-4">
                  <div className="text-3xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-base-content/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From a Simple Idea to a{' '}
                <span className="gradient-text">Beautiful Reality</span>
              </h2>
              <div className="space-y-4 text-base-content/70">
                <p>
                  PhotoCraft was born from a simple observation: in our digital age, 
                  precious photos get lost in phones and hard drives. We wanted to 
                  create a way for people to bring their memories out of the digital 
                  world and into their homes.
                </p>
                <p>
                  What started as a small home studio in 2018 has grown into a trusted 
                  brand serving thousands of happy customers across the country. Every 
                  day, we help people transform their favorite moments into beautiful 
                  frames, wall art, and custom designs.
                </p>
                <p>
                  Our team of skilled designers and craftspeople pour their hearts into 
                  every single order, ensuring that each product meets our exacting 
                  standards of quality and beauty.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-base-100"></div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold">4,500+</span>
                  <span className="text-base-content/60 ml-2">5-star reviews</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-base-100 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <FiHeart className="text-2xl" />
                  </div>
                  <div>
                    <div className="font-bold">Made with Love</div>
                    <div className="text-sm text-base-content/60">Every order is special</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="card-body">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-base-content/70">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              The milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-base-200 p-6 rounded-2xl">
                      <span className="text-primary font-bold text-xl">{item.year}</span>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                      <p className="text-base-content/70 mt-1">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-8 h-8 bg-primary rounded-full border-4 border-base-100"></div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              The passionate people behind your beautiful memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
              >
                <figure className="px-4 pt-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-base-content/70 mt-2">{member.bio}</p>
                  
                  <div className="flex justify-center gap-3 mt-4">
                    <a href={member.social.twitter} className="btn btn-ghost btn-xs btn-circle">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="btn btn-ghost btn-xs btn-circle">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href={member.social.instagram} className="btn btn-ghost btn-xs btn-circle">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose{' '}
                <span className="gradient-text">PhotoCraft?</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiShield className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Quality Guarantee</h3>
                    <p className="text-base-content/70">100% satisfaction guarantee or your money back</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fast Turnaround</h3>
                    <p className="text-base-content/70">Most orders ship within 3-5 business days</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiPackage className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Premium Materials</h3>
                    <p className="text-base-content/70">We use only the highest quality materials</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiHeart className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Personal Touch</h3>
                    <p className="text-base-content/70">Each order is handled with care and attention</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800"
                    alt="Why Choose Us"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-primary text-primary-content p-4 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
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
              Ready to Create Your Memories?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of happy customers who have trusted us with their precious moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload" className="btn btn-lg bg-white text-primary hover:bg-base-100 gap-2">
                <FiCamera />
                Start Creating
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

export default About;