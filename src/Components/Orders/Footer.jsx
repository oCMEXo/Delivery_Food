import {Component} from "react";
import inst from "../../assets/inst.svg";
import Twiterr from "../../assets/twitter.svg";
import youtube from "../../assets/you.svg";
import logo from "../../assets/logo.svg";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="firstLavel">
                    <div className="takeaway">
                        <button className="logo_footer">
                            <img src={logo} alt="logo"/>
                        </button>
                        <p>Takeaway & Delivery template for small - medium businesses.</p>
                    </div>
                    <div className="info">
                        <ul className="infoTable">
                            <li>
                                <h6>Company</h6>
                                <a>Home</a>
                                <a>Order</a>
                                <a>FAQ</a>
                                <a>Contact</a>
                            </li>
                            <li>
                                <h6>TEMPLATE</h6>
                                <button>Style Guide</button>
                                <button>Changelog</button>
                                <button>Licence</button>
                                <button>Webflow University</button>
                            </li>
                            <li>
                                <h6>FLOWBASE</h6>
                                <button>More Cloneables</button>
                            </li>
                        </ul>
                    </div>

                </div>
                <hr/>
                <div className="webflow">
                    <div className="links">
                        Built by<span>Flowbase</span>· Powered by<span>Webflow</span>
                    </div>
                    <div className="messenger">
                        <button><img src={inst} alt="inst"/></button>
                        <button><img src={Twiterr} alt="Twiterr"/></button>
                        <button><img src={youtube} alt="youtube"/></button>
                    </div>
                </div>
            </footer>

        )
    }
}