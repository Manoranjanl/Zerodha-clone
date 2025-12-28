import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 text-muted p-3">
          <h2 className="mt-5">{productName}</h2>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-3">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
