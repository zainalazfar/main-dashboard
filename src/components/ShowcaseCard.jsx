import React from 'react';

export default function ShowcaseCard({ item, onClick }) {
  const getCategoryLabel = () => {
    switch (item.category) {
      case 'apps': return 'App';
      case 'courses': return 'Course';
      case '3d-stl': return '3D / STL';
      case 'leathercraft': return 'Leather';
      default: return item.category;
    }
  };

  return (
    <div className="showcase-card" onClick={onClick}>
      {/* Media / Top Banner */}
      <div className="card-media-banner">
        <span className="card-media-icon">{item.emoji}</span>
        
        <span className={`card-category-badge ${item.badgeClass}`}>
          {getCategoryLabel()}
        </span>
      </div>

      {/* Body */}
      <div className="card-body">
        <div className="card-header-row">
          <h4 className="card-title">{item.title}</h4>
          <span className="card-price">{item.price}</span>
        </div>

        <p className="card-desc">{item.shortDesc}</p>
      </div>
    </div>
  );
}
