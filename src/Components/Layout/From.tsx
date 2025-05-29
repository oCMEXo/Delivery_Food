import React from "react";

interface FormProp {
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    error: string;
}

const Form: React.FC<FormProp> = ({error, email, password, setEmail, setPassword})  => {

    if (email === undefined || password === undefined) {
        console.warn("email and password props must be initialized to empty strings.");
    }
    return (
            <>
                <div className="input_Info">
                    <div className="email">
                        <div className="email_Item wrapper_form">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                value={email ?? ""}
                                onChange={e => setEmail(e.target.value)}
                                className={error ? 'input-error' : ''}
                                required/>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                    </div>
                    <div className="password">
                        <div className="password_Item wrapper_form">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>

            </>

    )
}

export default Form;