import React from "react";
import Signup from "../signup/Signup";

function Hero() {
  const signUp = () => {
    window.location.href = "/signup";
  };

  return (
    <div className="container p-5 mb-5 text-muted">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        ></img>
        <h1 className="mt-5">Invest in everything</h1>
        <p className="mt-2 ">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          onClick={signUp}
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5 mb-5 mt-3"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
