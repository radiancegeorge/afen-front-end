import React, { useState } from "react";
import { Link } from "react-router-dom";
const OurPartner = (props: any) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="partner_banner">
        <img src="assets/images/partner_banner.jpg" alt="images" />
      </section>
      <section className="our_partner_sec">
        <div className="container">
          <div className="partner_heading">
            <h2>OUR PARTNERS</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="partner_box">
                <img src="assets/images/partner_logo/logo01.png" alt="images" />
                <h4>NTDC</h4>
                <p>
                  Being the first government backed NFT initiative in Africa
                  goes beyond tell tale. We are supported and endorsed by the
                  National tourism development corporation in Nigeria. This
                  collectively benefits the core of the industry in which we
                  operate as it is a step in the right direction towards mass
                  adoption of the world's most talked about disruptive
                  technology: blockchain.{" "}
                </p>
                <a href="https://ntdc.gov.pk">Learn More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner_box">
                <img src="assets/images/partner_logo/logo02.png" alt="images" />
                <h4>MOON REPUBLIC</h4>
                <p>
                  We are essentially an Afrocentric project providing solutions
                  through the blockchain for Africa. In doing so, brands such as
                  moon republic come in handy for strategic positioning across
                  social channels in Africa. We have taken advantage of this
                  mutually beneficial partnership to gain ground in the region.
                </p>
                <a href="https://moonrepublic.io">Learn More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner_box">
                <img src="assets/images/partner_logo/logo03.png" alt="images" />
                <h4>MERIDAN CAPITAL</h4>
                <p>
                  Meridian capital have supported the NFT project from inception
                  being a serial investor in key projects set to revolutionize
                  sectors of the world economy. The chain of investment for
                  Meridian cuts across new technology, Real estate, retail
                  leasing etc.
                </p>
                <a href="https://www.meridancapital.com">Learn More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner_box">
                <img src="assets/images/partner_logo/logo04.png" alt="images" />
                <h4>NFTY LABS</h4>
                <p>
                  NFTY Labs is a foundation focusing on the growth of NFT
                  ecosystems by building open-sourced, community-based tools
                  that will unlock inherent utility and value within NFTs. NFTY
                  Lab’s goal is to create new applications that offer new
                  utilities for NFTs. In line with this, we have partnered with
                  NFTY LABS to set the ball rolling taking NFTs to a new height.{" "}
                </p>
                <a href="https://nftylabs.org">Learn More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner_box">
                <img src="assets/images/partner_logo/logo05.png" alt="images" />
                <h4>BOLDEN VENTURES</h4>
                <p>
                  We have also locked hands in partnership with Bolden ventures;
                  a seed stage venture firm founded by Jonah Bolden, Australian
                  basketball player and NFT collector. We are certain that this
                  partnership strategically presents AFEN as a platform of
                  choice for NFT activities.
                </p>
                <a href="https://www.crunchbase.com/organization/bolden-ventures">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner_box">
                <img src="assets/images/partner_logo/logo06.png" alt="images" />
                <h4>PICTDA</h4>
                <p>
                  In order to function legitimately under the auspices of the
                  governing bodies in which we operate, AFEN has partnered with
                  the Plateau ICT development agency receiving a letter of
                  endorsement backing AFEN as the choice platform to execute the
                  digitization of Legacy African arts.{" "}
                </p>
                <a href="https://pictda.plateaustate.gov.ng">Learn More</a>
              </div>
            </div>

            {show && (
              <>
                <div className="col-md-4">
                  <div className="partner_box">
                    <img
                      src="assets/images/partner_logo/logo07.png"
                      alt="images"
                    />
                    <h4>GTA VENTURES</h4>
                    <p>
                      Our partnership with GTA mirrors our commitment in
                      building a community that understands our long term
                      vision. In this light, GTA Ventures is a pioneer and
                      premier crypto assets venture, project accelerator, and
                      community builder based in Vietnam. With the aim to bring
                      together the leading participants of the blockchain
                      industry.
                    </p>
                    <a href="https://gtaventures.org">Learn More</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="partner_box">
                    <img
                      src="assets/images/partner_logo/logo09.png"
                      alt="images"
                    />
                    <h4>NBBF</h4>
                    <p>
                      NFTs are surely getting the attention of several
                      industries and sports NFTs are not left out. Trust us to
                      act fast and think smart. To bring you the best from
                      Africa, we have successfully partnered with the Nigerian
                      basketball Federation and D'Tigers basketball team to mint
                      player NFTs on AFEN NFT marketplace.
                    </p>
                    <a href="https://www.nbbfonline.com">Learn More</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="partner_box">
                    <img
                      src="assets/images/partner_logo/logo08.png"
                      alt="images"
                    />
                    <h4>CONSERVATIONFT</h4>
                    <p>
                      In a bid to give back to the world we live in, we have
                      collaborated with ConservatioNFTs; a true supporter of the
                      AFEN project to mint Turtle NFTs available on AFEN NFT
                      marketplace. Users will be able to adopt real life turtles
                      by owning these NFTs The proceeds will be used for the
                      conservation of turtles to prevent extinction and a safer
                      environment for them to live in.
                    </p>
                    <a href="https://twitter.com/ConservatioNFT">Learn More</a>
                  </div>
                </div>
              </>
            )}
            <div className="col-md-12">
              <div className="partnered_view_more">
                <button onClick={() => setShow(true)}>Load More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { OurPartner };
