import React, {FC, useContext, useState} from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Form from "../Components/Layout/From";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Components/hooks/redux-hooks";
import { setUser } from "../Components/redux/slices/usersSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {ThemeContext} from "../Components/ThemeContext/ThemeContext";

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const push = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>("");

    const context = useContext(ThemeContext);
    if (!context) return null;

    const { theme } = context;


    const validateEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Пожалуйста, введите корректный email (пример: user@example.com)");
            return;
        }

        setError(error);

        const auth = getAuth();
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            const token = await user.getIdToken();

            dispatch(
                setUser({
                    email: user.email,
                    id: user.uid,
                    token,
                })
            );
            push("/");
        } catch (err) {
            console.error(err);
            setError("Неверный email или пароль.");
        }
    };

    return (
        <>
            <Header />
            <section  className={`login-font ${theme === 'dark' ? 'dark' : ''}`}>
                <h1>Login</h1>
                <form
                        className={`.login-font form ${theme === 'dark' ? 'dark' : ''}`}
                        onSubmit={handleSubmit}>
                    <Form
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        error={error}
                    />
                    <div className="btn_Form">
                        <button type="submit" className="submit">
                            Submit
                        </button>
                        <button
                            type="button"
                            className="cancel"
                            onClick={() => push("/create-user")}
                        >
                            Create User
                        </button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Login;
