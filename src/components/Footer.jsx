import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="footer">
                <Link to="/">Home</Link>
                <Link to="/customer">Customers</Link>
                <Link to="/business">Businesses</Link>
            <p>&copy; 2025 ThriveTogether | Contact: info@thrivetogether.com</p>
        </footer>
    );
}