import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loadingMessages = [
    "Analyzing your inner thoughts... 🧠",
    "Detecting hidden smiles from that day at Spa Ceylon 😏",
    "Scanning for butterflies in stomach... Found 100+ 🦋",
    "Your heart rate just increased 20% ❤️",
    "Rebooting decision engine... Still says YES 💚",
    "Thungu’s effort level detected: MAXIMUM 😍",
    "Conclusion: You know you want this coffee ☕",
    "Redirecting to the fun part... almost there! ✨",
];

function NoWayLoading() {
    const navigate = useNavigate();
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        if (messageIndex < loadingMessages.length - 1) {
            const timer = setTimeout(() => {
                setMessageIndex(messageIndex + 1);
            }, 1800); // Change message every 1.8s
            return () => clearTimeout(timer);
        } else {
            // Final message, then redirect
            const timer = setTimeout(() => {
                navigate('/pick-date', { state: { noAtFirst: true } });
            }, 2200);
            return () => clearTimeout(timer);
        }
    }, [messageIndex, navigate]);

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div className="card" style={{ textAlign: 'center', padding: '60px 40px', maxWidth: '600px' }}>
                <div style={{ fontSize: '80px', marginBottom: '40px' }}>
                    {messageIndex < 4 ? '🧠' : messageIndex < 6 ? '🦋' : '❤️'}
                </div>

                <h2 style={{ fontSize: '26px', marginBottom: '30px', color: '#2E8B57' }}>
                    Just a moment...
                </h2>

                <p style={{ fontSize: '20px', lineHeight: '1.7', minHeight: '60px' }}>
                    {loadingMessages[messageIndex]}
                </p>

                <div style={{ marginTop: '40px' }}>
                    <div className="loading-dots">
                        <span>.</span><span>.</span><span>.</span>
                    </div>
                </div>

                <p style={{ marginTop: '60px', fontStyle: 'italic', color: '#888', fontSize: '15px' }}>
                    (Your heart already knows the answer 😉)
                </p>
            </div>

            <style jsx>{`
        .loading-dots span {
          font-size: 40px;
          animation: dot 1.5s infinite;
          color: #228B22;
        }
        .loading-dots span:nth-child(1) { animation-delay: 0s; }
        .loading-dots span:nth-child(2) { animation-delay: 0.3s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.6s; }
        @keyframes dot {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
        </div>
    );
}

export default NoWayLoading;