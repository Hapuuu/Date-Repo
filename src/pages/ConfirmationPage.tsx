import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

function ConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { date, time, activity } = location.state || {};

    // Redirect home if no data (safety check)
    if (!date || !time || !activity) {
        navigate('/');
        return null;
    }

    // Define mapping with proper typing and fallback
    const activityTextMap = {
        coffee: 'classic coffee chat',
        'coffee-walk': 'coffee + a relaxing walk',
        'spa-coffee': 'coffee + trying new Spa Ceylon products 😄',
        surprise: 'a fun surprise activity!',
    };

    // Safely get the display text with fallback
    const activityText = activityTextMap[activity as keyof typeof activityTextMap] || 'coffee chat';

    // Format the date nicely
    const formattedDate = format(date, 'MMMM d, yyyy');

    // Pre-fill WhatsApp message
    const message = encodeURIComponent(
        `Hey Thungu! Your website was TOO cute 😂 Let's do ${activityText} on ${format(date, 'MMMM d')} at ${time}. Can't wait! – Sithushi`
    );

    // ⚠️ REPLACE WITH YOUR ACTUAL PHONE NUMBER (e.g., 94771234567 for Sri Lanka)
    const YOUR_PHONE_NUMBER = '+94772265151'; // ← CHANGE THIS!

    const whatsappLink = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${message}`;

    return (
        <div className="container">
            <div className="card">
                <img
                    src="https://thumbs.dreamstime.com/b/cute-couple-sitting-table-drinking-tea-coffee-talking-young-funny-man-woman-cafe-date-dialog-conversation-151499139.jpg"
                    alt="Coffee date illustration"
                    style={{ width: '350px', borderRadius: '12px', marginBottom: '30px' }}
                />
                <h1>Awesome Choice! 🎉</h1>
                <p style={{ fontSize: '22px', lineHeight: '1.6' }}>
                    We'll meet on <strong>{formattedDate}</strong> at <strong>{time}</strong><br />
                    for <strong>{activityText}</strong>.
                </p>

                <p style={{ margin: '30px 0', fontSize: '18px' }}>
                    Just tap the button below to send this message on WhatsApp:
                </p>

                <div
                    style={{
                        background: '#E8F5E8',
                        padding: '20px',
                        borderRadius: '12px',
                        margin: '30px 0',
                        fontStyle: 'italic',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        border: '1px solid #A8D5BA',
                    }}
                >
                    "Hey Thungu! Your website was TOO cute 😂 Let's do {activityText} on {format(date, 'MMMM d')} at {time}. Can't wait! – Sithushi"
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <button className="primary-btn" style={{ fontSize: '20px', padding: '16px 32px' }}>
                        Send on WhatsApp →
                    </button>
                </a>

                <p style={{ marginTop: '50px', color: '#666', fontSize: '16px' }}>
                    Can't wait to see you, Sithushi! 🌿☕<br />
                    – Thungu (the guy who made a whole website just for this coffee date ❤️)
                </p>
            </div>
        </div>
    );
}

export default ConfirmationPage;