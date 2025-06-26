import React, {useContext} from 'react';
import inst from "../../assets/inst.svg";
import Twiterr from "../../assets/twitter.svg";
import youtube  from "../../assets/you.svg";
import logo from "../../assets/logo.svg";
import {ThemeContext} from "../ThemeContext/ThemeContext";
import {useNavigate} from "react-router-dom";

const Footer: React.FC = () => {
    const push = useNavigate();

    const context = useContext(ThemeContext);
    if (!context) return null;

    const { theme } = context;
    const isDark = theme === 'dark';

    const footerStyle = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column' as const,
        width: '100%',
        minWidth: 'var(--min-width-width)',
        height: 'auto',
        zIndex: 1,
        color: isDark ? 'white': "black",
        alignContent: 'center',
        backgroundColor: isDark ? '#111' : '#F5FBFC',
        backgroundImage: isDark ? 'url("assets/points.png")' : '',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 27px',

    };

    return (
            <footer style={footerStyle}>
                <div className={`firstLevel ${theme === 'dark' ? 'dark' : ''}`}>
                    <div className={`takeaway ${theme === 'dark' ? 'dark' : ''}`}>
                        <img src={logo} alt="logo"/>
                        <p>Takeaway & Delivery template for small - medium businesses.</p>
                    </div>
                    <div className="info">
                        <ul className="infoTable">
                            <li className={`.infoTable li.dark ${theme === 'dark' ? 'dark' : ''}`}>
                                <h6>Company</h6>
                                <button onClick={() => push('/')}>Home</button>
                                <button onClick={() => push('/menu')}>Order</button>
                                <button>FAQ</button>
                                <button>Contact</button>
                            </li>
                            <li className={`.infoTable li.dark ${theme === 'dark' ? 'dark' : ''}`}>
                                <h6>TEMPLATE</h6>
                                <button>Style Guide</button>
                                <button>Changelog</button>
                                <button>Licence</button>
                                <button>Webflow University</button>
                            </li>
                            <li className={`.infoTable li.dark ${theme === 'dark' ? 'dark' : ''}`}>
                                <h6>FLOWBASE</h6>
                                <button>More Cloneables</button>
                            </li>
                        </ul>
                    </div>

                </div>
                <hr/>
                <div className="webflow" >
                    <div className="links">
                        Built by<span>Flowbase</span>· Powered by<span>Webflow</span>
                    </div>
                    <div className={`messenger ${theme === 'dark' ? 'dark' : ''}`}>
                        <button><img src={inst} alt="inst"/></button>
                        <button><img src={Twiterr} alt="Twiterr"/></button>
                        <button><img src={youtube} alt="youtube"/></button>
                    </div>
                </div>
            </footer>

        )
}

export default Footer;