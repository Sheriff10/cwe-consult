import React from "react";

function Footer() {
  const currentYear = new Date().getUTCFullYear();
  return (
    <footer className="py-6 px-4 text-center bg-dark">
      <p>&copy; {currentYear} Crypto Wealth Embassy - All rights reserved</p>
    </footer>
  );
}

export default Footer;
