import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {

    const signUserOut = async () => {
        await signOut(auth);

    };

    const [user] = useAuthState(auth);

    return(
        <div className="box-header">

            <div className="container">
                <ul>
                    <li><Link to='/'> Home</Link></li>
                    {!user ? (<li><Link to='/login'> Login</Link></li>)
                    : (<li><Link to='/createpost'> Create Post</Link></li>)
                    }
                    
                </ul>

                {user && (
                    <div className="box-bt-avatar">
                        <div className="box-avatar">
                            <p>{auth?.currentUser?.displayName}</p>
                            <p><img src={auth.currentUser?.photoURL || ""} width="50" height='50' /></p>
                        </div>
                        <div className="box-bt-sair">
                            <button className="bt-sair" onClick={signUserOut}>Sign User Out</button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );

}