import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/customer">Customers</Link>
                <Link to="/business">Businesses</Link>
            </div>
            <p>&copy; 2025 ThriveTogether | Contact: info@thrivetogether.com</p>
        </footer>
    );
}