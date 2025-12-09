import { useState, useMemo, useEffect } from 'react';
import Header from './Header';
import BusinessCard from "./BusinessCard";
import Footer from './Footer';
import BUSINESSES from "../data/businesses";
import FilterSort from "./FilterSort";

export default function CustomerPage({ favorites, toggleFavorite, currentUser }) {
    console.log("Total businesses:", BUSINESSES.length);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter, search, and sort businesses efficiently using useMemo
    const filteredAndSortedBusinesses = useMemo(() => {
        let filtered = BUSINESSES;
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            filtered = BUSINESSES.filter(biz => {
                const searchableText = [
                    biz.name,
                    biz.description,
                    biz.location,
                    biz.category,
                    ...biz.badges,
                    ...biz.amenities
                ].join(' ').toLowerCase();
                return searchableText.includes(query);
            });
        }

        if (selectedCategory) {
            filtered = filtered.filter(biz => biz.category.toLowerCase() === selectedCategory.toLowerCase());
        }

        // Then, sort the filtered results
        const sorted = [...filtered].sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'rating':
                    return b.rating - a.rating; // Highest first
                case 'newest':
                    // Since we don't have a date field, we'll use ID as a proxy (higher ID = newer)
                    return b.id - a.id;
                default:
                    return 0;
            }
        });

        return sorted;
    }, [selectedCategory, sortBy, searchQuery]);

    return (
        <>
            <Header currentUser={currentUser} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <section className="shop-hero">
                <div className="container">
                    <h2>Discover Amazing Local Businesses</h2>
                    <p>Support your community by finding and connecting with local, family-owned, and minority-owned businesses</p>
                </div>
            </section>

            <section className="results-section">
                <div className="container">
                    <FilterSort 
                        selectedCategory={selectedCategory}
                        sortBy={sortBy}
                        onCategoryChange={setSelectedCategory}
                        onSortChange={setSortBy}
                    />
                    <button 
                        className="clear-btn"
                        onClick={() => {
                            setSelectedCategory('');
                            setSortBy('name');
                            setSearchQuery('');
                        }}
                    >
                        Clear All Filters
                    </button>
                    <div className="results-header">
                        <h3>Showing {filteredAndSortedBusinesses.length} local businesses</h3>
                    </div>

                    <div className="business-grid">
                        {filteredAndSortedBusinesses.map(biz => (
                            <BusinessCard 
                            key={biz.id} 
                            business={biz} 
                            toggleFavorite={toggleFavorite}
                            isFavorite={favorites.some(f => f.id === biz.id)} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

