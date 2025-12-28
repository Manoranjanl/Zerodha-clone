import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL}></img>
        </div>
        <div className="col-1 "></div>
        <div className="col-5 text-muted">
          <h2 className="mt-5">{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none", marginLeft: "50px" }}>
              Learn More
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
