import React from 'react';

export default function FilterSort({ selectedCategory, sortBy, onCategoryChange, onSortChange }) {
    const categories = [
        'All Categories',
        'Food & Dining',
        'Retail',
        'Services',
        'Entertainment',
        'Health & Wellness'
    ];

    const sortOptions = [
        { value: 'name', label: 'Name (A-Z)' },
        { value: 'name-desc', label: 'Name (Z-A)' },
        { value: 'rating', label: 'Highest Rated' },
        { value: 'newest', label: 'Newest First' }
    ];

    const handleCategoryChange = (e) => {
        onCategoryChange(e.target.value);
    };

    const handleSortChange = (e) => {
        onSortChange(e.target.value);
    };

    return (
        <section className="filter-sort-section">
            <div className="container">
                <div className="filter-sort-container">
                    <div className="filter-group">
                        <label htmlFor="category-filter">Filter by Category:</label>
                        <select 
                            id="category-filter" 
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="filter-select"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category === 'All Categories' ? '' : category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="sort-group">
                        <label htmlFor="sort-options">Sort by:</label>
                        <select 
                            id="sort-options" 
                            value={sortBy}
                            onChange={handleSortChange}
                            className="sort-select"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}

