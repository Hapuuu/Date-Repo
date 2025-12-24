import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const noMessages = [
    "Error 404: Rejection not found 😉",
    "system error your heart says yes",
];

function HomePage() {
    const navigate = useNavigate();
    const [noCount, setNoCount] = useState(0);
    console.log("No count: ", noCount)
    const [showPopup, setShowPopup] = useState(false);

    const handleNo = () => {
        navigate('/no-way');
        // if (noCount < noMessages.length) {
        //     setNoCount(noCount + 1);
        //     setShowPopup(true);
        //     setTimeout(() => setShowPopup(false), 3000);
        // } else {
        // }
    };

    return (
        <div className="container">
            <div className="card">
                <img
                    src="https://img.freepik.com/premium-photo/cute-couple-coffee-date-cartoon-illustration_1267971-7575.jpg"
                    alt="Cute coffee date"
                    style={{ width: '300px', borderRadius: '12px', marginBottom: '30px' }}
                />
                <h1>Hey Sithushi! ☕🌿</h1>
                <p style={{ fontSize: '20px', margin: '30px 0' }}>
                    Remember the guy who came back to Spa Ceylon just to thank you...<br />
                    and ask you out?
                </p>
                <p style={{ fontSize: '24px', fontWeight: '600' }}>
                    Time for that coffee you said yes to!
                </p>

                <div style={{ marginTop: '50px' }}>
                    <button className="primary-btn" onClick={() => navigate('/pick-date')}>
                        Let's Pick a Date & Time!
                    </button>
                    <button className="no-btn" onClick={handleNo}>
                        Changed my mind...
                    </button>
                </div>

                {showPopup && (
                    <div style={{
                        position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
                        background: '#D4AF37', color: '#333', padding: '20px', borderRadius: '12px',
                        fontSize: '20px', fontWeight: 'bold', zIndex: 100
                    }}>
                        {noMessages[noCount - 1]}
                    </div>
                )}

                <p style={{ marginTop: '60px', fontStyle: 'italic', color: '#666' }}>
                    Built with love by Thungu ❤️
                </p>
            </div>
        </div>
    );
}

export default HomePage;