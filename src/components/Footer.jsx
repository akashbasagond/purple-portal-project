
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-dark text-white text-center py-3 px-4 shadow-inner fixed bottom-0 left-0 right-0">
      <p className="text-sm">&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
