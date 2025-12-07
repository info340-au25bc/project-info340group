import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    const getCurrentUser = function () {
        const user = auth.currentUser;
        setCurrentUser(user);
        return user;
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);

        try{
            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(newUser === user);
            
            setEmail("");
            setPassword("");
            
            getCurrentUser();
            
            navigate("/customer");
        } catch (err) {
            setError(err.message);
        }
    };
    return(
        <section className="auth-wrapper">
            <div className="auth-card">
            <h2>Create an Account</h2>
            <p className="auth-subtext">Join ThriveTogether and support local businesses.</p>
            <form onSubmit={handleSignUp}>
                {error && <p className="error-text">{error}</p>}

                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <input type="password" placeholder="Password (6 characters)" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="btn-primary auth-btn">Create Account</button>
            </form>
            <p className="auth-switch">Already have an account?   
             <Link to="/login"> Log in</Link></p>
            </div>
        </section>
    );
}