import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h6 className="text-center">
        {" "}
        All Right Reserved Copyright &copy;2024 Ecommerce Publiced By Narayan{" "}
      </h6>
      <p className="text-center mt-3">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/policy">Privacy Policy T&C</Link>
      </p>
    </div>
  );
};

export default Footer;
