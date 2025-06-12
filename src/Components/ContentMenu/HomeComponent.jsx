import React from 'react';

import TrustPilot from "../../assets/IMAGE8.png";
import img_Home from "../../assets/IMAGE7.png";

export default function HomeComponent() {
    return (
        <main className="Home_Section">
            <div className="info_Section_Home">
                <div className="beautifulFood">
                    <h1>
                        Beautiful food & takeaway, <span>delivered</span> to your door.
                    </h1>
                    <p className="Lorem_Ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    <button>Place an Order</button>
                    <div className="Trust_Pilot">
                        <img src={TrustPilot} alt="Trust Pilot"/>
                        <p><span>4.8 out of 5</span> based on 2000+ reviews</p>
                    </div>
                </div>
                <div className="img_Home">
                    <img src={img_Home} alt="img_Home"/>
                </div>
            </div>
        </main>
    )
}