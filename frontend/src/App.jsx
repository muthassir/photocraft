import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Context Providers
import { ThemeProvider } from './contexts/ThemeContext';

// Layout Components
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

// Pages
import Home from './pages/Home';
import Designs from './pages/Designs';
import About from './pages/About';
import Upload from './pages/Upload';
import Cart from './pages/Cart';
import Admin from './pages/Admin';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-base-100">
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/designs" element={<Designs />} />
              <Route path="/about" element={<About />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />


            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Toast Notifications */}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;