import Header from "./Header";
import Footer from "./Footer";
import BusinessCard from "./BusinessCard";

export default function FavoritesPage({ favorites, toggleFavorite }){
    return (
        <>
        <Header />
        <section className="favorites-page container">
            <h2>Your Favorite businesses</h2>
            {favorites.length === 0 ? (
                <p>You haven't added any favorites yet.</p>
            ) : (
                <div className="business-grid">
                    {favorites.map(biz => (
                        <BusinessCard
                        key={biz.id}
                        business={biz}
                        isFavorite={true}
                        toggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            )}
        </section>
        <Footer />
        </>
    );
}