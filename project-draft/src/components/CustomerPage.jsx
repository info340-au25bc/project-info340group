import Header from './Header';

export default function CustomerPage() {
    return (
        <>
        <Header />
        <main>
            <section className="shop-hero">
                <div className="container">
                    <h2>Discover Amazing Local Businesses</h2>
                    <p>Support your community by finding and connecting with local, family-owned, and minority-owned businesses</p>
                </div>
            </section>

            <section className="search-filter-section">
                <div className="container">
                    <div className="search-filter-container">
                        <div className="search-box">
                            <div className="search-input-container">
                                <span className="search-icon">🔍</span>
                                <input type="text" placeholder="Search by name, category, or description..." className="search-input" />
                            </div>
                        </div>

                        <div className="filter-buttons">
                            <div className="filter-group">
                                <label>Category</label>
                                <div className="btn-group">
                                    <button className="btn active">All Categories</button>
                                    <button className="btn">Restaurants & Cafes</button>
                                    <button className="btn">Retail & Shopping</button>
                                    <button className="btn">Professional Services</button>
                                    <button className="btn">Health & Wellness</button>
                                    <button className="btn">Arts & Entertainment</button>
                                    <button className="btn">Home & Garden</button>
                                </div>
                            </div>

                            <div className="filter-group">
                                <label>Location</label>
                                <div className="btn-group">
                                    <button className="btn active">All Areas</button>
                                    <button className="btn">Capitol Hill</button>
                                    <button className="btn">Ballard</button>
                                    <button className="btn">Fremont</button>
                                    <button className="btn">Queen Anne</button>
                                    <button className="btn">Downtown</button>
                                    <button className="btn">University District</button>
                                </div>
                            </div>

                            <div className="filter-group">
                                <label>Ownership Type</label>
                                <div className="btn-group">
                                    <button className="btn active">All Types</button>
                                    <button className="btn">Minority-Owned</button>
                                    <button className="btn">Women-Owned</button>
                                    <button className="btn">Veteran-Owned</button>
                                    <button className="btn">Family-Owned</button>
                                    <button className="btn">LGBTQ+-Owned</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="results-section">
                <div className="container">
                    <div className="results-header">
                        <h3>Showing 6 local businesses</h3>
                        <div className="sort-controls">
                            <label htmlFor="sortBy">Sort by:</label>
                            <select className="sort-select" id="sortBy">
                                <option value="name">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                    </div>

                    <div className="business-grid">
                        <div className="business-card">
                            <div className="business-image">
                                <img src="/img/women.jpg" alt="Maria's Mexican Kitchen" />
                                <div className="business-badges">
                                    <span className="badge badge-minority">Minority</span>
                                    <span className="badge badge-family">Family</span>
                                </div>
                            </div>
                            <div className="business-content">
                                <h3 className="business-name">Maria's Mexican Kitchen</h3>
                                <p className="business-description">Authentic Mexican cuisine passed down through generations. Family recipes and fresh ingredients.</p>
                                <div className="business-rating">
                                    <span className="stars">★★★★★</span>
                                    <span className="rating-number">4.8</span>
                                </div>
                                <div className="business-details">
                                    <div className="detail-item">
                                        <span className="detail-icon">📍</span>
                                        <span>1234 Broadway E, Seattle, WA 98102</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📞</span>
                                        <span>(206) 555-0123</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">🕒</span>
                                        <span>Mon-Sun: 11am-9pm</span>
                                    </div>
                                </div>
                                <div className="business-amenities">
                                    <span className="amenity">dine in</span>
                                    <span className="amenity">takeout</span>
                                    <span className="amenity">delivery</span>
                                    <span className="amenity-more">+1 more</span>
                                </div>
                                <div className="business-actions">
                                    <button className="btn btn-primary btn-sm">View Details</button>
                                    <button className="btn btn-secondary btn-sm">Add to Favorites</button>
                                </div>
                            </div>
                        </div>

                        <div className="business-card">
                            <div className="business-image">
                                <img src="/img/boutique.jpg" alt="Makers Boutique" />
                                <div className="business-badges">
                                    <span className="badge badge-lgbtq">Lgbtq+</span>
                                    <span className="badge badge-women">Women</span>
                                </div>
                            </div>
                            <div className="business-content">
                                <h3 className="business-name">Makers Boutique</h3>
                                <p className="business-description">Curated collection of handmade goods from local artisans. Supporting creativity and community.</p>
                                <div className="business-rating">
                                    <span className="stars">★★★★☆</span>
                                    <span className="rating-number">4.6</span>
                                </div>
                                <div className="business-details">
                                    <div className="detail-item">
                                        <span className="detail-icon">📍</span>
                                        <span>5678 NW Market St, Seattle, WA 98107</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📞</span>
                                        <span>(206) 555-0456</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">🕒</span>
                                        <span>Tue-Sat: 10am-7pm, Sun: 12pm-5pm</span>
                                    </div>
                                </div>
                                <div className="business-amenities">
                                    <span className="amenity">wheelchair</span>
                                    <span className="amenity">parking</span>
                                </div>
                                <div className="business-actions">
                                    <button className="btn btn-primary btn-sm">View Details</button>
                                    <button className="btn btn-secondary btn-sm">Add to Favorites</button>
                                </div>
                            </div>
                        </div>

                        <div className="business-card">
                            <div className="business-image">
                                <img src="/img/coffeeguy.jpg" alt="Bean & Brew Coffee Co." />
                                <div className="business-badges">
                                    <span className="badge badge-veteran">Veteran</span>
                                </div>
                            </div>
                            <div className="business-content">
                                <h3 className="business-name">Bean & Brew Coffee Co.</h3>
                                <p className="business-description">Veteran-owned coffee shop serving locally roasted beans and homemade pastries.</p>
                                <div className="business-rating">
                                    <span className="stars">★★★★★</span>
                                    <span className="rating-number">4.9</span>
                                </div>
                                <div className="business-details">
                                    <div className="detail-item">
                                        <span className="detail-icon">📍</span>
                                        <span>9012 Fremont Ave N, Seattle, WA 98103</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📞</span>
                                        <span>(206) 555-0789</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">🕒</span>
                                        <span>Mon-Fri: 6am-6pm, Sat-Sun: 7am-5pm</span>
                                    </div>
                                </div>
                                <div className="business-amenities">
                                    <span className="amenity">dine in</span>
                                    <span className="amenity">takeout</span>
                                    <span className="amenity">wifi</span>
                                    <span className="amenity-more">+1 more</span>
                                </div>
                                <div className="business-actions">
                                    <button className="btn btn-primary btn-sm">View Details</button>
                                    <button className="btn btn-secondary btn-sm">Add to Favorites</button>
                                </div>
                            </div>
                        </div>

                        <div className="business-card">
                            <div className="business-image">
                                <img src="/img/guy.jpg" alt="Shop 1" />
                                <div className="business-badges">
                                    <span className="badge badge-family">Family</span>
                                </div>
                            </div>
                            <div className="business-content">
                                <h3 className="business-name">Shop 1</h3>
                                <p className="business-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="business-rating">
                                    <span className="stars">★★★★☆</span>
                                    <span className="rating-number">4.7</span>
                                </div>
                                <div className="business-details">
                                    <div className="detail-item">
                                        <span className="detail-icon">📍</span>
                                        <span>Seattle, WA 98105</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📞</span>
                                        <span>(999) 999-9999</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">🕒</span>
                                        <span>Mon-Sat: 9am-6pm, Sun: 10am-4pm</span>
                                    </div>
                                </div>
                                <div className="business-amenities">
                                    <span className="amenity">parking</span>
                                    <span className="amenity">wheelchair</span>
                                </div>
                                <div className="business-actions">
                                    <button className="btn btn-primary btn-sm">View Details</button>
                                    <button className="btn btn-secondary btn-sm">Add to Favorites</button>
                                </div>
                            </div>
                        </div>

                        <div className="business-card">
                            <div className="business-image">
                                <img src="/img/guy.jpg" alt="Shop 2" />
                                <div className="business-badges">
                                    <span className="badge badge-women">Women</span>
                                    <span className="badge badge-minority">Minority</span>
                                </div>
                            </div>
                            <div className="business-content">
                                <h3 className="business-name">Shop 2</h3>
                                <p className="business-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="business-rating">
                                    <span className="stars">★★★★☆</span>
                                    <span className="rating-number">4.5</span>
                                </div>
                                <div className="business-details">
                                    <div className="detail-item">
                                        <span className="detail-icon">📍</span>
                                        <span>Seattle, WA 98104</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📞</span>
                                        <span>(999) 999-9999</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">🕒</span>
                                        <span>Mon-Fri: 7am-8pm, Sat-Sun: 8am-6pm</span>
                                    </div>
                                </div>
                                <div className="business-amenities">
                                    <span className="amenity">parking</span>
                                    <span className="amenity">wheelchair</span>
                                    <span className="amenity">reservations</span>
                                </div>
                                <div className="business-actions">
                                    <button className="btn btn-primary btn-sm">View Details</button>
                                    <button className="btn btn-secondary btn-sm">Add to Favorites</button>
                                </div>
                            </div>
                        </div>

                        <div className="business-card">
                            <div className="business-image">
                                <img src="/img/guy.jpg" alt="Shop 3" />
                                <div className="business-badges">
                                    <span className="badge badge-women">Women</span>
                                    <span className="badge badge-minority">Minority</span>
                                </div>
                            </div>
                            <div className="business-content">
                                <h3 className="business-name">Shop 3</h3>
                                <p className="business-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="business-rating">
                                    <span className="stars">★★★★☆</span>
                                    <span className="rating-number">4.4</span>
                                </div>
                                <div className="business-details">
                                    <div className="detail-item">
                                        <span className="detail-icon">📍</span>
                                        <span>Seattle, WA 98105</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📞</span>
                                        <span>(999) 999-9999</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">🕒</span>
                                        <span>Wed-Sun: 11am-7pm</span>
                                    </div>
                                </div>
                                <div className="business-amenities">
                                    <span className="amenity">wheelchair</span>
                                    <span className="amenity">parking</span>
                                </div>
                                <div className="business-actions">
                                    <button className="btn btn-primary btn-sm">View Details</button>
                                    <button className="btn btn-secondary btn-sm">Add to Favorites</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}

