import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContactUs } from "../../../components";

const AfroxnftSection = (props: any) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="afro_punk_outer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="afro_pnk_cotant">
                <span>Latest Product</span>
                <h4>Own an AFROXNFT</h4>
                <p>
                  A piece of African creativity with limitless utility and value
                  awaits you when you visit the AFEN NFT marketplace and buy NFT
                  from the AFROXNFT collection.
                </p>
                <a
                  href="https://afenmarketplace.com/artist-profile/0xECeada54C0d75b5d0D45a74cc242168E03eaD39B"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy now
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="afro_pnk_img">
                <img src="assets/images/panda_single.png" alt="panda_single" />
                <ul>
                  <li>
                    <a
                      href="http://instagram.com/afenblockchain"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="assets/images/instagram.png" alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/AfroXNFT?s=09"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="assets/images/twitter.png" alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/qHQkRbjcna"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="assets/images/discord.png" alt="discord" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs
        show={show}
        setShow={(value: boolean) => {
          setShow(value);
        }}
      />
    </>
  );
};

export { AfroxnftSection };
