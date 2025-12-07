import Header from './Header';
import Hero from './Hero';
import BusinessForm from './BusinessForm';
import Footer from './Footer';

export default function BusinessPage({ currentUser }) {
    return (
        <>
            <Header />
            <Hero />
            <BusinessForm />
            <Footer />
        </>
    );
}

