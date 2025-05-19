import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import Form from "../Components/Layout/From.jsx";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../Components/redux/slices/usersSlice.js";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default function Login() {
    const dispatch = useDispatch();
    const push = useNavigate();


    const handleSubmit = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                push("/");
        })
            .catch(error => console.error(error));
    }

    return (
        <>
            <Header/>
            <section className="login-font">
                <h1>Login</h1>
                {/*<form action="">*/}
                    {/*<form action="">*/}
                    {/*    <div className="input_Info">*/}
                    {/*        <div className="email">*/}
                    {/*            <label htmlFor="email">Email</label>*/}
                    {/*            <input type="email" />*/}
                    {/*        </div>*/}
                    {/*        <div className="password">*/}
                    {/*            <label htmlFor="password">Password</label>*/}
                    {/*            <input type="password" />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="btn_Form">*/}
                    {/*        <button type="submit" className='submit'>Submit</button>*/}
                    {/*        <button className='cancel'>Cansel</button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                    <Form
                        handleSubmit={handleSubmit}
                    />
                {/*</form>*/}
            </section>
            <Footer/>
        </>
    )
}