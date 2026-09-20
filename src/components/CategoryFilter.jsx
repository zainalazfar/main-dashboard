import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { CATEGORIES } from '../data/items.js';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured First' },
  { value: 'title', label: 'Alphabetical (A - Z)' },
  { value: 'category', label: 'By Category' }
];

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  itemCounts,
  sortBy,
  setSortBy
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLabel = SORT_OPTIONS.find(o => o.value === sortBy)?.label || 'Featured First';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="filter-section">
      <div className="filter-tabs">
        {CATEGORIES.map((cat) => {
          const count = itemCounts[cat.id] || 0;
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              className={`filter-tab ${isActive ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Modern Custom Dropdown */}
      <div className="filter-sort" ref={dropdownRef}>
        <button
          type="button"
          className={`custom-sort-trigger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{currentLabel}</span>
          <ChevronDown
            size={15}
            className={`sort-chevron ${isOpen ? 'open' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="custom-sort-menu" role="listbox">
            {SORT_OPTIONS.map((option) => {
              const isSelected = sortBy === option.value;
              return (
                <div
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  className={`custom-sort-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setSortBy(option.value);
                    setIsOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check size={14} className="sort-check-icon" />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
