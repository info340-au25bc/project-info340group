import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Header({ currentUser: propCurrentUser, searchQuery, onSearchChange }) {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    // https://www.back4app.com/docs/react/working-with-users/get-current-user-react
    const getCurrentUser = function () {
        const user = auth.currentUser;
        setCurrentUser(user);
        return user;
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    const displayUser = propCurrentUser || currentUser;

    const handleLogout = async () => {
        try {
            await signOut(auth);
            const user = auth.currentUser;
            if (user === null) {
                console.log('Success! No user is logged in anymore!');
            }
            getCurrentUser();
            navigate("/");
        } catch (error) {
            console.error(`Error! ${error.message}`);
        }
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <h1>ThriveTogether</h1>
                    </Link>
                </div>
                <div className="header-right">
                    <div className="search-container">
                        <span className="search-icon">🔍</span>
                        <input 
                        type="text" 
                        className="search-bar" 
                        placeholder="Search businesses..."
                        aria-label="Search"
                        value={searchQuery || ''}
                        onChange={(e) => onSearchChange && onSearchChange(e.target.value)} />
                    </div>
                    <div className="auth-links">
                        {displayUser ? (
                            <div className="user-info">
                                <span className="user-email">{displayUser.email}</span>
                                <button onClick={handleLogout} className="btn btn-primary">Log Out</button>
                            </div>
                        ) : (
                            <>
                            <Link to="/login" className="btn btn-primary">Log In</Link>
                            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}