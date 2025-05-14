import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";


export default function Login(){
    return (
        <>
        <Header />
            <section className="login-font">
                <h1>Login</h1>
                <form action="">
                    <div className="input_Info">
                        <div className="email">
                            <label htmlFor="email">User Name</label>
                            <input type="email" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <div className="btn_Form">
                        <button type="submit" className='submit'>Submit</button>
                        <button className='cancel'>Cansel</button>
                    </div>
                </form>
            </section>
        <Footer />
        </>
    )
}