import React from "react";

function Pricing() {
  return (
    <div className="container text-muted">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2 className="mb-3 fs-4">Unbeatable pricing</h2>
          <p
            className="mt-4 text-muted"
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-1">
          <img src="media/images/pricing0.svg" style={{ height: "40%" }} />
        </div>
        <div className="col-1 p-3">
          <p className="text-muted ">
            Free account<br></br>Opening
          </p>
        </div>

        <div className="col-1">
          <img src="media/images/pricingEquity.svg" style={{ height: "40%" }} />
        </div>
        <div className="col-1">
          <p className="text-muted  p-3">
            Free equity delivery<br></br>and direct mutual funds
          </p>
        </div>
        <div className="col-1">
          <img
            src="media/images/intradayTrades.svg"
            style={{ height: "40%" }}
          />
        </div>
        <div className="col-1">
          <p className="text-muted p-3 ">
            Intraday and<br></br>F&O
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
