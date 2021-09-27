import React from "react";
import "./index.scss";
const Tokenomics = (props: any) => {
  return (
    <section className="tok_cart_sec">
      <div className="container">
        <div className="dasktop_img">
          <img src="assets/images/final_tokenomics.png" alt="images" />
        </div>
        <div className="mobile_img">
          <h4>TOKENOMICS</h4>
          <img src="assets/images/mobile_view01.png" alt="images" />
          <img src="assets/images/mobile_view02.png" alt="images" />
          <h5>TOTAL TOKEN SUPPLY: 850,000,000</h5>
        </div>
      </div>
      <div className="dasktop_img">
        <hr></hr>
      </div>
    </section>
  );
};

export { Tokenomics };
