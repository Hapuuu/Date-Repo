import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleNo = () => {
    navigate("/no-way");
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src="https://img.freepik.com/premium-photo/cute-couple-coffee-date-cartoon-illustration_1267971-7575.jpg"
          alt="Cute coffee date"
          style={{ width: "300px", borderRadius: "12px", marginBottom: "30px" }}
        />
        <h1>Hey Sithushi! ☕🌿</h1>
        <p style={{ fontSize: "20px", margin: "30px 0" }}>
          Remember the guy who came back to Spa Ceylon just to thank you...
          <br />
          and ask you out?
        </p>
        <p style={{ fontSize: "24px", fontWeight: "600" }}>
          Time for that coffee you said yes to!
        </p>

        <div className="button-container">
          <button
            className="btn primary-btn"
            onClick={() => navigate("/pick-date")}
          >
            Let's Pick a Date & Time!
          </button>
          <button className="btn no-btn" onClick={handleNo}>
            Changed my mind...
          </button>
        </div>

        <p style={{ marginTop: "60px", fontStyle: "italic", color: "#666" }}>
          Built with love by Thungu ❤️
        </p>
      </div>
    </div>
  );
}

export default HomePage;
