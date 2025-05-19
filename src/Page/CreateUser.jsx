import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import Form from "../Components/Layout/From.jsx";
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../Components/redux/slices/usersSlice.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function CreateUser(){
    const dispatch = useDispatch();
    const push = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleCreateUser = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Пожалуйста, введите корректный email (пример: user@example.com)');
        } else {
            setError('');
            console.log('Отправка email:', email);
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            <Header />
            <section className="login-font">
                <h1>Create User</h1>
                <form onSubmit={handleCreateUser}>
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
                            onClick={() => push('/Login')}
                        >Cansel</button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}