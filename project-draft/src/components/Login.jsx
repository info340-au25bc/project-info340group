import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
    
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/customer");
        } catch (err) {
            setError("Invalid email or password");
        }
};

return(
    <section className="auth-wrapper">
        <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtext">Log in to continue supporting your community.</p>
        <form onSubmit={handleLogin}>
            {error && <p className="error-text">{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <input type="password" placeholder="Password (6 characters)" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button className="btn-primary auth-btn">Log In</button>

            <p className="auth-switch">Need an account? 
                <Link to="/signup"> Create one</Link>
            </p>
        </form>
        </div>
    </section>
);
}