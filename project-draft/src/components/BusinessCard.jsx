import React, { useState } from 'react';

export default function BusinessCard({ business, isFavorite, toggleFavorite }){

    const MAX_LENGTH = 100;

    const getShortDescription = (text, maxLength) => {
        if (!text || text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength).trim() + "..."; 
    };

    const [expanded, setExpanded] = useState(false);

    const shortDescription = getShortDescription(business.description, MAX_LENGTH);
    const fullDescription = business.description;

    return(
        <div className="business-card">
            <div className="business-image">
                <img src={business.image} alt={business.name} />
                <div className="business-badges">
                    {business.badges.map((badge, i) => (
                        <span key={i} className={`badge badge-${badge.toLowerCase()}`}>
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
            <div className="business-content">
                <h3 className="business-name">{business.name}</h3>
                <p className="business-description">{shortDescription}</p>
                <div className="business-rating">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span className="rating-number">{business.rating}</span>
                </div>
                <div className="business-details">
                    <div className="detail-item">📍 {business.location}</div>
                    <div className="detail-item">📞 {business.phone}</div>
                    <div className="detail-item">🕒 {business.hours}</div>
                </div>
                <div className="business-amenities">
                    {business.amenities.map((am, i) => (
                        <span key={i} className="amenity">{am}</span>
                    ))}
                </div>
                <div className="business-actions">
                    <button className="btn btn-primary btn-sm" onClick={() => setExpanded(!expanded) }>
                        {expanded ? "Hide Details" : "View Details"}
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={()=> toggleFavorite(business)}>
                        {isFavorite ? "Remove Favorite" : "Add to Favorites"}
                    </button>
                </div>
                {expanded && (
                    <div className="business-extra" >
                        <h4>More Details</h4>
                        <p><strong>Description:</strong> {fullDescription}</p>
                    </div>
                )}
            </div>
        </div>
    );
}