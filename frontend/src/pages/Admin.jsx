import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiHome, FiPackage, FiUsers, FiShoppingBag, FiSettings,
  FiBarChart2, FiCamera, FiHeart, FiStar, FiTrendingUp,
  FiDollarSign, FiClock, FiCheckCircle, FiXCircle,
  FiEye, FiEdit, FiTrash2, FiPlus, FiSearch, FiFilter,
  FiDownload, FiMail, FiPhone, FiMapPin, FiCalendar,
  FiMoreVertical, FiAlertCircle, FiRefreshCw, FiPrinter,
  FiToggleLeft, FiToggleRight, FiUserCheck, FiUserX
} from 'react-icons/fi';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [dateRange, setDateRange] = useState('today');

  // Mock Data
  const stats = [
    { title: 'Total Revenue', value: '₹12,45,678', change: '+12.5%', icon: <FiDollarSign />, color: 'bg-green-500' },
    { title: 'Total Orders', value: '1,234', change: '+8.2%', icon: <FiShoppingBag />, color: 'bg-blue-500' },
    { title: 'Total Customers', value: '45,678', change: '+15.3%', icon: <FiUsers />, color: 'bg-purple-500' },
    { title: 'Photos Created', value: '89,456', change: '+22.1%', icon: <FiCamera />, color: 'bg-pink-500' },
  ];

  const recentOrders = [
    { id: '#ORD001', customer: 'Priya Sharma', date: '2024-01-15', amount: 2499, status: 'completed', items: 3 },
    { id: '#ORD002', customer: 'Rahul Verma', date: '2024-01-15', amount: 4999, status: 'processing', items: 2 },
    { id: '#ORD003', customer: 'Anjali Patel', date: '2024-01-14', amount: 1299, status: 'pending', items: 1 },
    { id: '#ORD004', customer: 'Arjun Singh', date: '2024-01-14', amount: 3599, status: 'shipped', items: 4 },
    { id: '#ORD005', customer: 'Neha Gupta', date: '2024-01-13', amount: 1899, status: 'completed', items: 2 },
  ];

  const products = [
    { id: 1, name: 'Vintage Wooden Frame', category: 'Frames', price: 499, stock: 45, sales: 234, status: 'active' },
    { id: 2, name: 'Canvas Wall Art', category: 'Walls', price: 2499, stock: 23, sales: 156, status: 'active' },
    { id: 3, name: 'Wedding Album Design', category: 'Designs', price: 1499, stock: 67, sales: 89, status: 'active' },
    { id: 4, name: 'Modern Metal Frame', category: 'Frames', price: 1299, stock: 12, sales: 45, status: 'low-stock' },
    { id: 5, name: 'Bohemian Wall Tapestry', category: 'Walls', price: 1899, stock: 0, sales: 67, status: 'out-of-stock' },
  ];

  const customers = [
    { id: 1, name: 'Priya Sharma', email: 'priya@email.com', orders: 12, spent: 24999, joined: '2023-01-15', status: 'active' },
    { id: 2, name: 'Rahul Verma', email: 'rahul@email.com', orders: 8, spent: 15999, joined: '2023-03-20', status: 'active' },
    { id: 3, name: 'Anjali Patel', email: 'anjali@email.com', orders: 15, spent: 35999, joined: '2022-11-10', status: 'active' },
    { id: 4, name: 'Arjun Singh', email: 'arjun@email.com', orders: 3, spent: 4999, joined: '2024-01-05', status: 'inactive' },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { color: 'badge-success', icon: <FiCheckCircle /> },
      processing: { color: 'badge-info', icon: <FiRefreshCw /> },
      pending: { color: 'badge-warning', icon: <FiClock /> },
      shipped: { color: 'badge-primary', icon: <FiPackage /> },
      cancelled: { color: 'badge-error', icon: <FiXCircle /> },
      active: { color: 'badge-success', icon: <FiUserCheck /> },
      inactive: { color: 'badge-error', icon: <FiUserX /> },
      'low-stock': { color: 'badge-warning', icon: <FiAlertCircle /> },
      'out-of-stock': { color: 'badge-error', icon: <FiXCircle /> },
    };
    const config = statusConfig[status] || statusConfig.pending;
    return (
      <span className={`badge ${config.color} gap-1`}>
        {config.icon}
        {status}
      </span>
    );
  };

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <FiHome /> },
    { id: 'orders', name: 'Orders', icon: <FiShoppingBag />, count: 12 },
    { id: 'products', name: 'Products', icon: <FiPackage /> },
    { id: 'customers', name: 'Customers', icon: <FiUsers /> },
    { id: 'analytics', name: 'Analytics', icon: <FiBarChart2 /> },
    { id: 'reports', name: 'Reports', icon: <FiTrendingUp /> },
    { id: 'settings', name: 'Settings', icon: <FiSettings /> },
  ];

  return (
    <div className="min-h-screen bg-base-200 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: sidebarOpen ? 280 : 80 }}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="bg-base-100 shadow-xl fixed left-0 top-0 h-screen z-30 overflow-hidden"
      >
        <div className="p-4 flex items-center justify-between border-b border-base-200">
          {sidebarOpen ? (
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PC</span>
              </div>
              <span className="font-bold text-xl">PhotoCraft</span>
            </Link>
          ) : (
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold">PC</span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="btn btn-ghost btn-sm btn-circle"
          >
            <FiMoreVertical />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-primary text-primary-content'
                  : 'hover:bg-base-200'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && (
                <>
                  <span className="flex-1 text-left">{item.name}</span>
                  {item.count && (
                    <span className="badge badge-secondary badge-sm">{item.count}</span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        {/* Admin Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-base-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              A
            </div>
            {sidebarOpen && (
              <div>
                <p className="font-medium">Admin User</p>
                <p className="text-xs text-base-content/50">admin@photocrat.com</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1" style={{ marginLeft: sidebarOpen ? 280 : 80 }}>
        {/* Top Bar */}
        <header className="bg-base-100 shadow-sm sticky top-0 z-20">
          <div className="flex items-center justify-between px-6 py-3">
            <h2 className="text-xl font-bold capitalize">{activeTab}</h2>
            
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="join hidden md:flex">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered join-item input-sm"
                />
                <button className="btn btn-primary join-item btn-sm">
                  <FiSearch />
                </button>
              </div>

              {/* Date Filter */}
              <select className="select select-bordered select-sm">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>This month</option>
                <option>Last month</option>
              </select>

              {/* Notifications */}
              <button className="btn btn-ghost btn-sm btn-circle relative">
                <FiBell />
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
              </button>

              {/* Profile */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-sm gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                    A
                  </div>
                  <span className="hidden lg:inline">Admin</span>
                </label>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card bg-base-100 shadow-xl"
                    >
                      <div className="card-body p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-base-content/60 text-sm">{stat.title}</p>
                            <p className="text-2xl font-bold mt-1">{stat.value}</p>
                            <p className="text-success text-sm mt-1">{stat.change}</p>
                          </div>
                          <div className={`${stat.color} p-3 rounded-xl text-white`}>
                            {stat.icon}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Revenue Chart */}
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="font-bold">Revenue Overview</h3>
                      <div className="h-64 flex items-center justify-center bg-base-200 rounded-xl">
                        <p className="text-base-content/50">Chart Component Here</p>
                      </div>
                    </div>
                  </div>

                  {/* Popular Products */}
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="font-bold">Popular Products</h3>
                      <div className="space-y-4">
                        {products.slice(0, 4).map((product) => (
                          <div key={product.id} className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-base-200 rounded-lg"></div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-xs text-base-content/50">{product.sales} sales</p>
                            </div>
                            <p className="font-bold">₹{product.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold">Recent Orders</h3>
                      <button className="btn btn-primary btn-sm">View All</button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order) => (
                            <tr key={order.id}>
                              <td className="font-medium">{order.id}</td>
                              <td>{order.customer}</td>
                              <td>{order.date}</td>
                              <td>₹{order.amount}</td>
                              <td>{getStatusBadge(order.status)}</td>
                              <td>
                                <div className="flex gap-1">
                                  <button className="btn btn-ghost btn-xs">
                                    <FiEye />
                                  </button>
                                  <button className="btn btn-ghost btn-xs">
                                    <FiEdit />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Orders Management */}
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                      <h3 className="font-bold text-xl">Order Management</h3>
                      
                      <div className="flex gap-2">
                        <div className="join">
                          <input
                            type="text"
                            placeholder="Search orders..."
                            className="input input-bordered join-item input-sm"
                          />
                          <button className="btn btn-primary join-item btn-sm">
                            <FiSearch />
                          </button>
                        </div>
                        
                        <button className="btn btn-outline btn-sm gap-2">
                          <FiFilter />
                          Filter
                        </button>
                        
                        <button className="btn btn-outline btn-sm gap-2">
                          <FiDownload />
                          Export
                        </button>
                      </div>
                    </div>

                    {/* Order Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {[
                        { label: 'Total Orders', value: 1234 },
                        { label: 'Pending', value: 23, color: 'text-warning' },
                        { label: 'Processing', value: 45, color: 'text-info' },
                        { label: 'Shipped', value: 67, color: 'text-primary' },
                        { label: 'Completed', value: 1099, color: 'text-success' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-base-200 p-4 rounded-xl text-center">
                          <p className="text-sm text-base-content/60">{stat.label}</p>
                          <p className={`text-2xl font-bold ${stat.color || ''}`}>{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Orders Table */}
                    <div className="overflow-x-auto">
                      <table className="table table-zebra">
                        <thead>
                          <tr>
                            <th>
                              <input type="checkbox" className="checkbox checkbox-sm" />
                            </th>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Amount</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[...Array(10)].map((_, i) => (
                            <tr key={i}>
                              <td>
                                <input type="checkbox" className="checkbox checkbox-sm" />
                              </td>
                              <td className="font-medium">#ORD{1234 + i}</td>
                              <td>
                                <div>
                                  <p className="font-medium">Customer {i + 1}</p>
                                  <p className="text-xs text-base-content/50">cust{i}@email.com</p>
                                </div>
                              </td>
                              <td>2024-01-{15 - i}</td>
                              <td>{Math.floor(Math.random() * 5) + 1}</td>
                              <td>₹{Math.floor(Math.random() * 5000) + 999}</td>
                              <td>
                                <span className="badge badge-outline">UPI</span>
                              </td>
                              <td>{getStatusBadge(['pending', 'processing', 'shipped', 'completed'][Math.floor(Math.random() * 4)])}</td>
                              <td>
                                <div className="flex gap-1">
                                  <button className="btn btn-ghost btn-xs" title="View">
                                    <FiEye />
                                  </button>
                                  <button className="btn btn-ghost btn-xs" title="Edit">
                                    <FiEdit />
                                  </button>
                                  <button className="btn btn-ghost btn-xs text-error" title="Delete">
                                    <FiTrash2 />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-6">
                      <p className="text-sm text-base-content/50">Showing 1-10 of 1234 orders</p>
                      <div className="join">
                        <button className="join-item btn btn-sm">«</button>
                        <button className="join-item btn btn-sm btn-active">1</button>
                        <button className="join-item btn btn-sm">2</button>
                        <button className="join-item btn btn-sm">3</button>
                        <button className="join-item btn btn-sm">4</button>
                        <button className="join-item btn btn-sm">»</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'products' && (
              <motion.div
                key="products"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Products Management */}
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                      <h3 className="font-bold text-xl">Product Catalog</h3>
                      
                      <div className="flex gap-2">
                        <button className="btn btn-primary btn-sm gap-2">
                          <FiPlus />
                          Add Product
                        </button>
                        
                        <div className="join">
                          <input
                            type="text"
                            placeholder="Search products..."
                            className="input input-bordered join-item input-sm"
                          />
                          <button className="btn btn-primary join-item btn-sm">
                            <FiSearch />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="tabs tabs-boxed mb-6">
                      <button className="tab tab-active">All Products</button>
                      <button className="tab">Frames</button>
                      <button className="tab">Wall Art</button>
                      <button className="tab">Designs</button>
                      <button className="tab">Low Stock</button>
                    </div>

                    {/* Products Table */}
                    <div className="overflow-x-auto">
                      <table className="table table-zebra">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Sales</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => (
                            <tr key={product.id}>
                              <td>
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-base-300 rounded-lg"></div>
                                  <div>
                                    <p className="font-medium">{product.name}</p>
                                    <p className="text-xs text-base-content/50">ID: PRD{product.id}</p>
                                  </div>
                                </div>
                              </td>
                              <td>{product.category}</td>
                              <td>₹{product.price}</td>
                              <td>
                                <span className={product.stock < 10 ? 'text-error font-bold' : ''}>
                                  {product.stock} units
                                </span>
                              </td>
                              <td>{product.sales}</td>
                              <td>{getStatusBadge(product.status)}</td>
                              <td>
                                <div className="flex gap-1">
                                  <button className="btn btn-ghost btn-xs">
                                    <FiEye />
                                  </button>
                                  <button className="btn btn-ghost btn-xs">
                                    <FiEdit />
                                  </button>
                                  <button className="btn btn-ghost btn-xs text-error">
                                    <FiTrash2 />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'customers' && (
              <motion.div
                key="customers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Customers Management */}
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-xl">Customer Management</h3>
                      
                      <div className="join">
                        <input
                          type="text"
                          placeholder="Search customers..."
                          className="input input-bordered join-item input-sm"
                        />
                        <button className="btn btn-primary join-item btn-sm">
                          <FiSearch />
                        </button>
                      </div>
                    </div>

                    {/* Customer Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="stat bg-base-200 rounded-xl p-4">
                        <div className="stat-title">Total Customers</div>
                        <div className="stat-value text-2xl">45,678</div>
                      </div>
                      <div className="stat bg-base-200 rounded-xl p-4">
                        <div className="stat-title">Active</div>
                        <div className="stat-value text-2xl text-success">38,234</div>
                      </div>
                      <div className="stat bg-base-200 rounded-xl p-4">
                        <div className="stat-title">New (This Month)</div>
                        <div className="stat-value text-2xl text-info">1,234</div>
                      </div>
                      <div className="stat bg-base-200 rounded-xl p-4">
                        <div className="stat-title">Avg. Order Value</div>
                        <div className="stat-value text-2xl text-primary">₹2,499</div>
                      </div>
                    </div>

                    {/* Customers Table */}
                    <div className="overflow-x-auto">
                      <table className="table table-zebra">
                        <thead>
                          <tr>
                            <th>Customer</th>
                            <th>Contact</th>
                            <th>Orders</th>
                            <th>Total Spent</th>
                            <th>Joined</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.map((customer) => (
                            <tr key={customer.id}>
                              <td>
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                    {customer.name.charAt(0)}
                                  </div>
                                  <span className="font-medium">{customer.name}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <p className="text-sm">{customer.email}</p>
                                  <p className="text-xs text-base-content/50">+91 98765 4321</p>
                                </div>
                              </td>
                              <td>{customer.orders}</td>
                              <td>₹{customer.spent}</td>
                              <td>{customer.joined}</td>
                              <td>{getStatusBadge(customer.status)}</td>
                              <td>
                                <div className="flex gap-1">
                                  <button className="btn btn-ghost btn-xs">
                                    <FiEye />
                                  </button>
                                  <button className="btn btn-ghost btn-xs">
                                    <FiMail />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Sales Analytics */}
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="font-bold">Sales Overview</h3>
                      <div className="h-80 flex items-center justify-center bg-base-200 rounded-xl">
                        <p className="text-base-content/50">Sales Chart</p>
                      </div>
                    </div>
                  </div>

                  {/* Category Performance */}
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="font-bold">Category Performance</h3>
                      <div className="h-80 flex items-center justify-center bg-base-200 rounded-xl">
                        <p className="text-base-content/50">Category Chart</p>
                      </div>
                    </div>
                  </div>

                  {/* Top Products */}
                  <div className="card bg-base-100 shadow-xl lg:col-span-2">
                    <div className="card-body">
                      <h3 className="font-bold">Top Performing Products</h3>
                      <div className="overflow-x-auto">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Sales</th>
                              <th>Revenue</th>
                              <th>Growth</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((product) => (
                              <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.sales} units</td>
                                <td>₹{product.price * product.sales}</td>
                                <td className="text-success">+{Math.floor(Math.random() * 30)}%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// Missing FiBell import
const FiBell = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

export default Admin;