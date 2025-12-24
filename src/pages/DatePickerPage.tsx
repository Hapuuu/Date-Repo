import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DatePickerPage() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [activity, setActivity] = useState('coffee');

    const times = ['10:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

    const handleNext = () => {
        if (selectedDate && selectedTime) {
            const data = { date: selectedDate, time: selectedTime, activity };
            navigate('/confirm', { state: data });
        }
    };

    return (
        <div className="container">
            <div className="card">
                <img
                    src="https://thumbs.dreamstime.com/b/steaming-coffee-cup-artistic-smoke-vibrant-hues-cozy-warm-beverage-drink-aesthetic-photography-white-coffee-cup-394502110.jpg"
                    alt="Steaming coffee"
                    style={{ width: '250px', borderRadius: '12px', marginBottom: '30px' }}
                />
                <h1>Let's Make It Happen! 🌿☕</h1>
                <p>Pick a date, time, and vibe...</p>

                <div style={{ margin: '40px 0', textAlign: 'left', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <label><strong>Date:</strong></label><br />
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date: any) => setSelectedDate(date)}
                        minDate={new Date()}
                        inline
                    />

                    <label style={{ marginTop: '30px', display: 'block' }}><strong>Time:</strong></label>
                    <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px' }}>
                        <option value="">Choose a time</option>
                        {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>

                    <label style={{ marginTop: '30px', display: 'block' }}><strong>Activity:</strong></label>
                    <select value={activity} onChange={(e) => setActivity(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px' }}>
                        <option value="coffee">Classic coffee chat</option>
                        <option value="coffee-walk">Coffee + walk in the park</option>
                        <option value="spa-coffee">Coffee + try new Spa Ceylon products 😄</option>
                        <option value="surprise">Surprise me!</option>
                    </select>
                </div>

                <button className="primary-btn" onClick={handleNext} disabled={!selectedDate || !selectedTime}>
                    Preview & Send on WhatsApp
                </button>

                <img
                    src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c24db1a0-81de-411f-b183-cdf07dbc89b7.__CR0,0,600,450_PT0_SX600_V1___.jpg"
                    alt="Spa products"
                    style={{ width: '200px', marginTop: '40px', borderRadius: '12px' }}
                />
            </div>
        </div>
    );
}

export default DatePickerPage;