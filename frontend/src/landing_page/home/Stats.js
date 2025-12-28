import React from "react";

function Stats() {
  return (
    <div className="container p-1 mb-5 text-muted">
      <div className="row p-5 ">
        <div className="col-6 p-5 ">
          <h2 className="fs-2 mb-5">Trust with confidence</h2>
          <h3 className="fs-4">Customer-first always</h3>
          <p
            className="text-muted mb-5 "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h3 className="fs-4">No spam or gimmicks</h3>
          <p
            className="text-muted mb-5 "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="fs-4">The Zerodha universe</h3>
          <p
            className="text-muted mb-5 "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="fs-4">Do better with money</h3>
          <p
            className="text-muted mb-5 "
            style={{ lineHeight: 1.8, fontsize: "1rem" }}
          >
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-6 p-5 ">
          <img src="media/images/ecosystem.png" style={{ width: "110%" }}></img>
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="text-center">
          <img src="media/images/pressLogos.png" style={{ width: "60%" }} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
