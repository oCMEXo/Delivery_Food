import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import Form from "../Components/Layout/From.jsx";
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../Components/redux/slices/usersSlice.js";
import {useNavigate} from "react-router-dom";

export default function CreateUser(){
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleRegister = (email, password) => {
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
            .catch(console.error);
    }

    return (
        <>
            <Header />
            <section className="login-font">
                <h1>Create User</h1>
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
                {/*        <button type="submit" className='submit'>Create</button>*/}
                {/*    </div>*/}
                {/*</form>*/}
                <Form
                    handleSubmit={handleRegister}
                />
            </section>
            <Footer />
        </>
    )
}