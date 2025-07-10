import React, {FC, useContext} from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";


import Img_Home from "../../assets/IMAGE7.png";
import {ThemeContext} from "../ThemeContext/ThemeContext";


const BeautifulFood_span = styled.span`
    color: #35B8BE;
`


const Trust_Pilot_Container = styled.div`
    padding-top: 30px;
    p {
        padding-top: 10px;
    }
`

const Trust_Pilot_Text = styled.p`
    font-size: 20px;
    font-weight: 600;
`

const Star_Trust_Pilot_Text = styled.span`
    font-size: 30px;
    padding-right: 2px;
    color: ${BeautifulFood_span}
`

const BeautifulFood_h1 = styled.h1`
    color: #08090A;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px; 
    letter-spacing: 1.8px;
`

const Lorem_Ipsum_p = styled.p`
    padding-top: 27px;
    color: #546285;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.12px;
    letter-spacing: 0.36px;
`

const BeautifulFood_button = styled.button`
    margin-top: 53px;
    border-radius: 6px;
    width: 193px;
    height: 60px;
    color: white;
    background-color: #35B8BE;
`




const HomeComponent: FC = () => {
    const context = useContext(ThemeContext);
    if (!context) return null;

    const { theme, toggleTheme } = context;
    const push = useNavigate();

    const isDark = theme === 'dark';

    const boxStyle = {
        color: isDark ? 'white' : '#08090A',

    };
    return (
        <main className={`Home_Section ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="info_Section_Home">
                <div className="beautifulFood">

                    <BeautifulFood_h1 style={boxStyle}>
                        Beautiful food & takeaway, <BeautifulFood_span>delivered</BeautifulFood_span> to your door.
                    </BeautifulFood_h1>
                    <Lorem_Ipsum_p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                    </Lorem_Ipsum_p>
                    <BeautifulFood_button onClick={() => push("/menu")} >Place an Order</BeautifulFood_button>
                    <Trust_Pilot_Container>
                        <Trust_Pilot_Text style={boxStyle}>
                            <Star_Trust_Pilot_Text>
                                <BeautifulFood_span>
                                ★
                                </BeautifulFood_span>
                            </Star_Trust_Pilot_Text >
                            Trustpilot
                        </Trust_Pilot_Text>
                        <p style={boxStyle}><BeautifulFood_span >4.8 out of 5</BeautifulFood_span> based on 2000+ reviews</p>
                    </Trust_Pilot_Container>
                </div>
                <div className="img_Home">
                    <img src={Img_Home} alt="img_Home"/>
                </div>
            </div>
        </main>
    )
}

export default HomeComponent;