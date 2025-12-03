export default function Hero() {
    return (
        <section className="business-owner-hero">
            <div className="container">
                <div className="hero-content-split">
                    <div className="hero-text">
                        <h1>Grow Your Local Business</h1>
                        <p className="hero-lead">
                            Connect with customers who want to support local, family-owned, and minority-owned businesses. 
                            Create your free profile and share your story with the community.
                        </p>
                        <div className="hero-benefits">
                            {["Free business listing", "Reach engaged customers", "Share your unique story", "Build community connections"].map((benefit, i) => (
                                <div className="benefit-item" key={i}>
                                    <span className="benefit-icon">✓</span>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/img/guy.jpg" alt="Happy business owner in their shop" />
                    </div>
                </div>
            </div>
        </section>
    );
}