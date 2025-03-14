import { Link } from "react-router-dom";
import React, { useState } from "react";
import { color } from "framer-motion";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header with full width */}
      <div style={styles.header}>
        <button onClick={() => setIsOpen(!isOpen)} style={styles.button}>
          ☰ Menu
        </button>
      </div>

      {/* Dropdown menu (full width) */}
      <div
        style={{
          ...styles.dropdown,
          height: isOpen ? "150px" : "0px",
          padding: isOpen ? "10px" : "0px",
        }}
      >
        <ul style={styles.list}>
          <li style={styles.item}><Link style={styles.link} to="/reactdev">React</Link></li>
          <li style={styles.item}><Link style={styles.link} to="/ml-dev">Ai/ML</Link></li>
        </ul>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  header: {
    // width: "100%",
    // background: "#333",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  },
  button: {
    // background: "none",
    // color: "white",
    fontSize: "15px",
    // border: "none",
    cursor: "pointer",
  },
  dropdown: {
    width: "100%",
    background: "black",
    overflow: "hidden",
    transition: "height 0.3s ease-in-out, padding 0.3s ease-in-out",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  item: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    width: "100%",
    textAlign: "left",
    color: "white",
  },
  link: {
    color: "white",
    textDecoration: "none"
  }

};

export default DropdownMenu;
