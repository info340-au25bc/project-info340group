export default function Hero() {
    return (
        <section class="business-owner-hero">
            <div class="container">
                <div class="hero-content-split">
                    <div class="hero-text">
                        <h1>Grow Your Local Business</h1>
                        <p class="hero-lead">
                            Connect with customers who want to support local, family-owned, and minority-owned businesses. 
                            Create your free profile and share your story with the community.
                        </p>
                        <div class="hero-benefits">
                            {["Free business listing", "Reach engaged customers", "Share your unique story", "Build community connections"].map((benefit, i) => (
                                <div class="benefit-item" key={i}>
                                <span class="benefit-icon">✓</span>
                                <span>{benefit}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    <div class="hero-image">
                        <img src="img/guy.jpg" alt="Happy business owner in their shop"/>
                    </div>
                </div>
            </div>
        </section>
    );
}