import Header from './Header';
import Hero from './Hero';
import BusinessForm from './BusinessForm';
import Footer from './Footer';

export default function BusinessPage() {
    return (
        <>
            <Header currentUser={currentUser}/>
            <Hero />
            <BusinessForm />
            <Footer />
        </>
    );
}

