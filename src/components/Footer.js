import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>Built by Srđan Maljukan</p>
      <p>With help of Dr. Angela Yu and Web Development Bootcamp course</p>
    </footer>
  );
}

export default Footer;
