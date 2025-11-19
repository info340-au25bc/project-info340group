export default function BusinessCard({ business }){
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
                <p className="business-description">{business.description}</p>
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
                        <span key={i} className="amentity">{am}</span>
                    ))}
                </div>
                <div className="business-actions">
                    <button className="btn btn-primary btn-sm">View Details</button>
                    <button className="btn btn-secondary btn-sm">Add to Favorites</button>
                </div>
            </div>
        </div>
    );
}