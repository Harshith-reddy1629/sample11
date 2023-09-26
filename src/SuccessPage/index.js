import "./index.css";

const SuccessPage = () => (
  <div className="success-page">
    <img
      src="https://img.freepik.com/free-vector/verified-concept-illustration_114360-5167.jpg?size=626&ext=jpg"
      alt="success"
      className="success-img"
    />
    <div className="success-content">
      <h1>Welcome to AdmitKard</h1>
      <p>
        In order to provide you with a custom experience, <br />
        <span style={{ fontWeight: "bold" }}>
          we need to ask you a few questions.
        </span>
      </p>
      <button className="continue-button">Get Started</button>
      <span style={{ fontSize: "12px", color: "#999", marginTop: "8px" }}>
        *This will only take 5 min.
      </span>
    </div>
  </div>
);

export default SuccessPage;
