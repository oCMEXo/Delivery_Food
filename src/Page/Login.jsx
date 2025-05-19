import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import Form from "../Components/Layout/From.jsx";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../Components/redux/slices/usersSlice.js";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";

export default function Login() {
    const dispatch = useDispatch();
    const push = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Пожалуйста, введите корректный email (пример: user@example.com)');
        } else {
            setError('');
            console.log('Отправка email:', email);
        }


        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                push("/");
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <Header/>
            <section className="login-font">
                <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                    <Form
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        error={error}
                    />
                        <div className="btn_Form">
                            <button type="submit" className='submit'>Submit</button>
                            <button
                                type="button"
                                className='cancel'
                                onClick={() => push('/CreateUser')}
                            >Create User</button>
                        </div>
                    </form>
            </section>
            <Footer/>
        </>
    )
}