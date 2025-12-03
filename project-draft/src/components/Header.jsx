import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Header({ currentUser }) {
    const handleLogout = async () => {
        await signOut(auth);
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <h1>ThriveTogether</h1>
                    </Link>
                </div>
                <div className="auth-links">
                    {!currentUser && (
                        <>
                        <Link to="/login" className="btn btn-primary">Log In</Link>
                        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                        </>
                    )}
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