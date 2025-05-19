import {useState} from "react";


export default function From({handleSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <div className="input_Info">
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="btn_Form">
                <button
                    type="submit"
                    className='submit'
                    onClick={ () => handleSubmit(email, password)}
                >Submit
                </button>
                <button className='cancel'>Cansel</button>
            </div>
        </>
    )
}