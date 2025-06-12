import React from "react";
import Header from "../Components/Layout/Header.js";
import Footer from "../Components/Layout/Footer";
import Form from "../Components/Layout/From";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../Components/redux/slices/usersSlice";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAppDispatch} from "../Components/hooks/redux-hooks.js";

const CreateUser: React.FC = () => {
    const dispatch = useAppDispatch();
    const push = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please input correct email (look at this email user@example.com)');
        } else {
            setError('');
            console.log('Sent email:', email);
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
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setError("Пользователь с таким email уже зарегистрирован.");
                } else {
                    setError("Произошла ошибка при регистрации. Попробуйте позже.");
                }
                console.error(error);
            });
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

export default CreateUser;