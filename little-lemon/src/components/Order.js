// Order.js
import React from "react";

function Order() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Online Orders are Under Construction. Please come back soon...</h1>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: "1.8rem",
    color: "#444",
    fontStyle: "italic",
  },
};

export default Order;
