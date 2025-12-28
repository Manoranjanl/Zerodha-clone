import React from "react";

function Team() {
  return (
    <div className="container text-muted">
      <h2 style={{ textAlign: "center" }}>People</h2>
      <div className="row mt-5">
        <div className="col-5 founder mb-5">
          <img src="media/images/manoranjan.jpg" />
          <div className="name ">
            <h5>Manoranjan</h5>
            <h5>Lakshminarayanappa</h5>
            <p className="text-grey">Founder, CEO</p>
          </div>
        </div>
        <div className="col-7 mt-4 ">
          <p
            className="text-muted  "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p
            className="text-muted  "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p
            className="text-muted  "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            Playing basketball is his zen.
          </p>
          <p
            className="text-muted  "
            style={{
              lineHeight: 1.8,
              fontsize: "1rem",
            }}
          >
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
