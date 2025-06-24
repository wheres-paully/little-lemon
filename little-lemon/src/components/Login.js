import React from "react";

function Login() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Log In PortalUnder Construction. Please come back soon...</h1>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: "1.8rem",
    color: "#666",
    fontStyle: "italic",
  },
};

export default Login;
