const stories = [
    {
        name: "Maria Rodriguez",
        business: "Maria's Mexican Kitchen",
        quote: "ThriveTogether helped me reach customers who truly value authentic, family-owned businesses. In just 6 months, our customer base grew by 40%!", 
        image: "img/women.jpg"
    },
    {
        name: "Sarah Chen",
        business: "Makers Boutique",
        quote: "Being listed as an LGBTQ+-owned business brought in so many wonderful customers who share our values. This platform truly makes a difference.", image: "img/boutique.jpg"
    },
    {
        name: "James Williams",
        business: "Bean & Brew Coffee Co.",
        quote: "As a veteran-owned business, it means everything to connect with a community that wants to support us. ThriveTogether made it easy to tell our story.",
        image: "img/coffeeguy.jpg"
    }
];

export default function SuccessStories() {
    (
        <section class="success-stories">
            <div class="container">
                <h2>Success Stories from Local Business Owners</h2>
                <p class="section-subtitle">See how LocalConnect has helped businesses like yours grow</p>
            <div className="testimonials-grid">
                {stories.map((story, index) => (
                    <article className="testimonial-card" key={index}>
                        <div className="testimonial-image">
                            <img src={story.image} alt={story.name} />
                        </div>
                        <blockquote>{story.quote}</blockquote>
                        <cite>
                            <strong>{story.name}</strong>
                            <br />
                            {story.business}
                        </cite>
                    </article>
                ))}
            </div>
        </div>
    </section>
    );
}