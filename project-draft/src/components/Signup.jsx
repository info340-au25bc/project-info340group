import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);

        try{
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/customer");
        } catch (err) {
            setError(err.message);
        }
    };
    return(
        <section className="auth-section">
            <h2>Create an Account</h2>
            <form onSubmit={handleSignUp}>
                {error && <p className="error-text">{error}</p>}

                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <input type="password" placeholder="Password (6 characters)" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="btn btn-primary">Sign Up</button>
            </form>
        </section>
    );
}