import React, { useState } from "react";

const LoginPage = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Simple credential storage for demo purposes
  const credentials = {
    12345: "password123",
    67890: "securepass",
  };

  const handleLogin = () => {
    // Check if Student ID exists and password matches
    if (credentials[studentId] && credentials[studentId] === password) {
      setIsVerified(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid ID or Password");
      setIsVerified(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Get Your Certificate</h1>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Verify & Download
        </button>

        {errorMessage && <p style={styles.error}>{errorMessage}</p>}

        {isVerified && (
          <a
            href={`/certificates/${studentId}.pdf`}
            download
            style={styles.downloadLink}
          >
            Download Certificate
          </a>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #FF9B6A, #4F3FFF)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    animation: "fadeIn 0.5s ease-in-out",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    color: "#4F3FFF",
    fontSize: "2.2rem",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "2px solid #DDD",
    fontSize: "1rem",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#4F3FFF",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4F3FFF",
    color: "#FFF",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#3C2AE3",
  },
  error: {
    color: "#FF6B6B",
    marginTop: "10px",
    fontSize: "0.9rem",
  },
  downloadLink: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#4F3FFF",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
  },
};

export default LoginPage;
