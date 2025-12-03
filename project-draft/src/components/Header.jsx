import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <h1>ThriveTogether</h1>
                    </Link>
                </div>
                <div className="auth-links">
                    <Link to="/login" className="btn btn-link">Log In</Link>
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                </div>
                <div className="search-container">
                    <span className="search-icon">🔍</span>
                    <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search Bar"
                    aria-label="Search" />
                </div>
            </div>
        </header>
    );
}