import Header from './Header';
import BusinessCard from "./BusinessCard";
import BUSINESSES from "../data/businesses";

export default function CustomerPage() {
    return (
        <>
        <Header />
            <section className="shop-hero">
                <div className="container">
                    <h2>Discover Amazing Local Businesses</h2>
                    <p>Support your community by finding and connecting with local, family-owned, and minority-owned businesses</p>
                </div>
            </section>

            <section className="results-section">
                <div className="container">
                    <div className="results-header">
                        <h3>Showing {BUSINESSES.length} local businesses</h3>
                    </div>

                    <div className="business-grid">
                        {BUSINESSES.map(biz => (
                            <BusinessCard key={biz.id} business={biz} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

