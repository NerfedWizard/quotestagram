// import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";




function Homepage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/quotes");
    }
    const handleGuest = () => {
        navigate("/guestbook");
    }
    return (
        <>
            <div>
                <main className="homepageGrid">                    
                    <h1 className="made-by" style={{ textAlign: "center" }}>Brekke <ion-icon class="heartPulse" name="heart-outline"></ion-icon> Nelson</h1>
                    <h1 className="made-by"style={{ textAlign: "center" }}>Wedding Page</h1>
                    <p>
                        <button className="custom-button" onClick={handleGuest}><ion-icon name="mail-open-outline"></ion-icon> Please Sign the Guestbook and leave us a note! <ion-icon name="mail-open-outline"></ion-icon></button>
                    </p>
                    <p style={{ textAlign: "center" }}> Or </p>
                    <button className="custom-button" onClick={handleClick}><ion-icon name="receipt-sharp"></ion-icon> Check out some Quotes! <ion-icon name="receipt-sharp"></ion-icon></button>
                </main>
            </div>
        </>
    )
}
export default Homepage;