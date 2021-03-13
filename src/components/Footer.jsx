import React from "react";

function Footer() {
  return (
    <div className="mt-5 p-2 bg-dark text-white">
      Copyright &copy; {year()}, Muhammad Saleem Raza
    </div>
  );
}

export default Footer;

const year = () => new Date().getFullYear();
