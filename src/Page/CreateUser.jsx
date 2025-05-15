import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";


export default function CreateUser(){
    return (
        <>
            <Header />
            <section className="login-font">
                <h1>Create User</h1>
                <form action="">
                    <div className="input_Info">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <div className="btn_Form">
                        <button type="submit" className='submit'>Create</button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}