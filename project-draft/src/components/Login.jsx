import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

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
    <section className="auth-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            {error && <p className="error-text">{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <input type="password" placeholder="Password (6 characters)" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button className="btn btn-primary">Log In</button>
        </form>
    </section>
);
}