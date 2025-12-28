import React from "react";

function Education() {
  return (
    <div className="container p-1 mb-5 text-muted">
      <div className="row p-5 ">
        <div className="col-6 p-5 text-center">
          <img src="media/images/education.svg" style={{ width: "80%" }}></img>
        </div>
        <div className="col-6 p-5 ">
          <h3 className="fs-4">Free and open market education</h3>
          <p
            className="text-muted mb-4 mt-4 "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.<br></br>
            <div className="mt-3 ">
              <a href="" style={{ textDecoration: "none" }}>
                Varsity <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </p>

          <p
            className="text-muted mb-5 "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.<br></br>
            <div className="mt-3 ">
              <a href="" className="mt-5" style={{ textDecoration: "none" }}>
                TradingQ&A <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
