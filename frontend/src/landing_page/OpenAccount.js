import React from "react";

function OpenAccount() {
  const signUp = () => {
    window.location.href = "http://localhost:3000/signup";
  };

  return (
    <div className="container p-5 mb-5 text-muted">
      <div className="row text-center">
        <h3 className="mt-5 mb-4 text-muted">Open a Zerodha account</h3>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
