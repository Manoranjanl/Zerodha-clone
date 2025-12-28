import React from "react";

function Hero() {
  return (
    <div className="container p-5 text-muted" style={{ textAlign: "center" }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="mb-4" style={{ fontSize: "1.75rem", fontWeight: "500" }}>
        Zerodha Products
      </h1>
      <h3 className="mb-4" style={{ fontSize: "1.25rem", fontWeight: "400" }}>
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p style={{ fontSize: "1rem", fontWeight: "400" }}>
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </p>
      <p className="border-bottom  mt-5"></p>
    </div>
  );
}

export default Hero;
