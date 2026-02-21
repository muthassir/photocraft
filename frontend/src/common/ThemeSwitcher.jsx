import React, { useState } from 'react';
import { FiAirplay, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const themes = [
  { id: 'light', name: 'Light', emoji: '☀️' },
  { id: 'dark', name: 'Dark', emoji: '🌙' },
  { id: 'cupcake', name: 'Cupcake', emoji: '🧁' },
  { id: 'bumblebee', name: 'Bumblebee', emoji: '🐝' },
  { id: 'emerald', name: 'Emerald', emoji: '💚' },
  { id: 'corporate', name: 'Corporate', emoji: '🏢' },
  { id: 'synthwave', name: 'Synthwave', emoji: '🌆' },
  { id: 'retro', name: 'Retro', emoji: '📻' },
  { id: 'cyberpunk', name: 'Cyberpunk', emoji: '🤖' },
  { id: 'valentine', name: 'Valentine', emoji: '❤️' },
  { id: 'halloween', name: 'Halloween', emoji: '🎃' },
  { id: 'garden', name: 'Garden', emoji: '🌱' },
  { id: 'forest', name: 'Forest', emoji: '🌲' },
  { id: 'aqua', name: 'Aqua', emoji: '💧' },
  { id: 'lofi', name: 'LoFi', emoji: '🎵' },
  { id: 'pastel', name: 'Pastel', emoji: '🎨' },
  { id: 'fantasy', name: 'Fantasy', emoji: '🧚' },
  { id: 'wireframe', name: 'Wireframe', emoji: '📐' },
  { id: 'black', name: 'Black', emoji: '⚫' },
  { id: 'luxury', name: 'Luxury', emoji: '💎' },
  { id: 'dracula', name: 'Dracula', emoji: '🧛' },
  { id: 'cmyk', name: 'CMYK', emoji: '🖨️' },
  { id: 'autumn', name: 'Autumn', emoji: '🍂' },
  { id: 'business', name: 'Business', emoji: '💼' },
  { id: 'acid', name: 'Acid', emoji: '⚗️' },
  { id: 'lemonade', name: 'Lemonade', emoji: '🍋' },
  { id: 'night', name: 'Night', emoji: '🌃' },
  { id: 'coffee', name: 'Coffee', emoji: '☕' },
  { id: 'winter', name: 'Winter', emoji: '❄️' },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme: currentTheme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-ghost btn-circle"
        aria-label="Theme Switcher"
      >
        <FiAirplay className="text-xl" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute right-0 mt-2 w-64 bg-base-100 rounded-box shadow-2xl z-50 p-3 border border-base-200"
          >
            <div className="grid grid-cols-3 gap-1 max-h-96 overflow-y-auto">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    toggleTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`
                    p-2 rounded-lg text-center transition-all
                    ${currentTheme === t.id ? 'bg-primary text-primary-content' : 'hover:bg-base-200'}
                  `}
                >
                  <div className="text-2xl">{t.emoji}</div>
                  <div className="text-xs truncate">{t.name}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;