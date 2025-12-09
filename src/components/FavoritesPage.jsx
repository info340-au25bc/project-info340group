import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import BusinessCard from "./BusinessCard";
import FilterSort from "./FilterSort";

export default function FavoritesPage({ favorites, toggleFavorite, currentUser }){
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('name');

    // Filter and sort favorites efficiently using useMemo
    const filteredAndSortedFavorites = useMemo(() => {
        // First, filter by category
        let filtered = favorites;
        if (selectedCategory) {
            filtered = favorites.filter(biz => biz.category === selectedCategory);
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
    }, [favorites, selectedCategory, sortBy]);

    return (
        <>
        <Header currentUser={currentUser} />
        <section className="favorites-page">
            <div className="container">
                <h2>Your Favorite Businesses</h2>
                
                {favorites.length === 0 ? (
                    <div className="empty-favorites">
                        <p className="empty-favorites-text">You haven't added any favorites yet.</p>
                        <p className="empty-favorites-subtext">
                            Go back <Link to="/customer">here</Link> to see more businesses to add to favorites! ❤️
                        </p>
                    </div>
                ) : (
                    <>
                        <FilterSort 
                            selectedCategory={selectedCategory}
                            sortBy={sortBy}
                            onCategoryChange={setSelectedCategory}
                            onSortChange={setSortBy}
                        />
                        <div className="results-header">
                            <h3>Showing {filteredAndSortedFavorites.length} favorite businesses</h3>
                        </div>
                        <div className="business-grid">
                            {filteredAndSortedFavorites.map(biz => (
                                <BusinessCard
                                key={biz.id}
                                business={biz}
                                isFavorite={true}
                                toggleFavorite={toggleFavorite}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
        <Footer />
        </>
    );
}