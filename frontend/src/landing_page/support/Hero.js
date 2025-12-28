import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="support-top">
        <h4 className="mb-0">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="container support-content">
        <div className="row align-items-start gx-6">
          <div className="col-md-6 pe-md-5">
            <h2 className="support-title">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              className="support-search"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected"
            />

            <div className="support-links">
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>
            </div>
          </div>

          <div className="col-md-6 ps-md-5">
            <h3 className="mb-3">Featured</h3>
            <ol className="support-featured">
              <li>
                <a href="">Current Takeovers and Delisting – January 2024</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages – MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
