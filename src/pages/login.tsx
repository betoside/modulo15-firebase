
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {

        const results = await signInWithPopup(auth, provider);

        console.log(results);
        navigate('/');

    }

    return(
        <div>
            <h1>Login page</h1>
            <p>Sign in with google to continuous</p>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    );

}