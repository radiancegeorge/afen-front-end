import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useHistory } from "react-router-dom";
import { PageContext } from "../../../context/afenContext";

const TokenArtSection = (props: any) => {
  const { contextState, updateContext } = useContext(PageContext);
  const history = useHistory();
  const updateContextState = (type: string, item: any) => {
    updateContext({
      type: type,
      payload: item,
    });
    setTimeout(() => {
      history.push("/white-paper");
    }, 100);
  };
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  };

  return (
    <section className="aflen_tokan_art">
      <div className="container-fluid">
        <div className="tokan_top_sec" id="afentokenandecosys">
          <div className="col-md-12">
            <div className="top_heading">
              <h2>AFEN TOKEN AND ITS ECOSYSTEM</h2>
              <p>
                The AFEN token is Utility Enriched for the Benefit of the
                Ecosystem
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                className="owl-theme"
                id="tokan_slide"
                loop={false}
                margin={50}
                dots={false}
                nav={true}
                autoWidth={true}
                autoplay={false}
                responsive={responsive}>
                <div className="item">
                  <div className="tokan_box">
                    <h4>NFT MARKETPLACE PAYMENTS</h4>
                    <p>
                      When users choose to conduct their transactions using the
                      AFEN native token on our NFT marketplace, they get a
                      percentage discount on transaction fees.
                    </p>
                    <a
                      href="https://afenmarketplace.com"
                      onClick={() => {
                        // updateContextState("whitepaper", "token");
                      }}>
                      Explore{" "}
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="tokan_box">
                    <h4>STAKE AND EARN</h4>
                    <p>
                      By staking AFEN tokens over a period of time, users can
                      earn staking rewards based on interest accrued over time
                      and the duration of their lock-up.
                    </p>
                    <a
                      href="https://afenmarketplace.com/staking"
                      onClick={() => {}}>
                      Stake{" "}
                    </a>
                  </div>
                </div>

                {/* <div className="item">
                  <div className="tokan_box">
                    <h4>ART - NFT MARKETPLACE PAYMENTS</h4>
                    <p>
                      When users choose to conduct their transactions using AFEN
                      tokens on our NFTs marketplace, they get a percentage....
                    </p>
                    <Link
                      to="#"
                      onClick={() => {
                        updateContextState("whitepaper", "token");
                      }}>
                      Read more{" "}
                    </Link>
                  </div>
                </div> */}

                <div className="item">
                  <div className="tokan_box">
                    <h4>EDUCATIONAL INCENTIVES</h4>
                    <p>
                      In a situation where an educator uploads their course(s)
                      on our platform, they will be incentivized for every
                      course completion that their content holds.
                    </p>
                    <Link
                      to="#"
                      onClick={() => {
                        updateContextState("whitepaper", "token");
                      }}>
                      Coming soon{" "}
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="tokan_box">
                    <h4>CASH BACK ON TRANSACTIONS</h4>
                    <p>
                      When our users engage in transactions using AFEN tokens
                      either on our platform or partnering platforms, we
                      offer....
                    </p>
                    <a
                      href="https://afenmarketplace.com/staking"
                      onClick={() => {
                        updateContextState("whitepaper", "token");
                      }}>
                      Coming soon{" "}
                    </a>
                  </div>
                </div>
                {/* <div className="item">
                  <div className="tokan_box">
                    <h4>STAKE AND EARN</h4>
                    <p>
                      By staking AFEN tokens over a period of time, users can
                      earn staking rewards based on interest accrued over time
                      and the duration of their lock-up.
                    </p>
                    <Link
                      to="#"
                      onClick={() => {
                        updateContextState("whitepaper", "token");
                      }}
                    >
                      Read more{" "}
                    </Link>
                  </div>
                </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className="bottom_about">
          <div className="title">
            <h4>WHAT ARE WE ALL ABOUT ?</h4>
            <div className="border" />
            <p style={{ color: "white" }}>
              AFEN is Africa’s leading NFT project, with the aim to
              revolutionize key potential sectors- namely Arts, Real Estate, and
              Education. The AFEN project has gone past preliminary stage to
              involve a team of enthusiastic cryptocurrency marksmen adequately
              skilled and ready to deliver a working platform for the exchange
              of digital arts, facilitation of Real estate investments, and
              Blockchain education.
            </p>
          </div>
        </div>
        <div className="our_road_map" id="roadmap">
          <div className="road_heading">
            <h3>OUR ROADMAP</h3>
          </div>
          {/* <div className="road_map_contant">
            <div className="row align-items-center">
              <div className="col-md-3 col-xl-5">
                <div className="road_cricle">
                  <h4>
                    Q2 <br />
                    2021
                  </h4>
                </div>
              </div>
              <div className="col-md-9 col-xl-7">
                <div className="road_list_box">
                  <ul>
                    <li>Ecosystem building and development</li>
                    <li>Partnership with African artists</li>
                    <li>
                      Partnerships for African legacy art listings with
                      government bodies
                    </li>
                    <li>AFEN NFT Marketplace Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="road_map_contant">
            <div className="row align-items-center">
              <div className="col-md-3 col-xl-5">
                <div className="road_cricle">
                  <h4>
                    Q3 <br />
                    2021
                  </h4>
                </div>
              </div>
              <div className="col-md-9 col-xl-7">
                <div className="road_list_box">
                  <ul>
                    <li>
                      Launch of AFEN NFT Marketplace Phase 1 for individual
                      &amp; African Artists
                    </li>
                    <li>
                      Partnership with More African countries for Legacy art
                      listings
                    </li>
                    <li>
                      NFT Platform expansion to include (Music NFTs, Sports, and
                      other Digital collectibles)
                    </li>
                    <li>
                      AFEN 2.O (Marketing, stabilization of AFEN token,
                      community incentive program)
                    </li>
                    <li>
                      AFEN NFT Marketplace Phase 2 (additional features for
                      better user experience)
                    </li>
                    <li>Listing AFEN token on DEX &amp; CEX</li>
                    <li>
                      Partnership with Educational creators and companies for
                      Educational projects.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <div className="road_map_contant">
            <div className="row align-items-center">
              <div className="col-md-3 col-xl-5">
                <div className="road_cricle">
                  <h4>
                    Q4 <br />
                    2021
                  </h4>
                </div>
              </div>
              <div className="col-md-9 col-xl-7">
                <div className="road_list_box">
                  <ul>
                    <li>AFEN NFT Marketplace Phase 3 Development.</li>
                    <li>
                      AFEN Education 'BloomOne Academy' platform Development
                    </li>
                    <li>Exibition Event: NFT Lagos Gallery</li>
                    <li>Real Estate architecture development</li>
                    <li>
                      NFT Collections powered by $afen: Coin of Champions
                      'In-game NFTs'⚽️
                    </li>
                    {/* <li>AFEN Educational Platform Launch.</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="road_map_contant">
            <div className="row align-items-center">
              <div className="col-md-3 col-xl-5">
                <div className="road_cricle">
                  <h4>
                    Q1 <br />
                    2022
                  </h4>
                </div>
              </div>
              <div className="col-md-9 col-xl-7">
                <div className="road_list_box">
                  <ul>
                    <li>H1 Opening: Community AMA session</li>
                    <li>Special NFT Collections Release</li>
                    <li>Official website update</li>
                    <li>
                      BloomOne platform launch
                      <ul>
                        <li>Free courses</li>
                        <li>Learn-to-Earn program</li>
                        <li>
                          Introducing Certificate ‘Utility’ NFTs powered by
                          $afen
                        </li>
                      </ul>
                    </li>
                    <li>AFEN at Africa Tech Summit, Nairobi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="road_map_contant">
            <div className="row align-items-center">
              <div className="col-md-3 col-xl-5">
                <div className="road_cricle">
                  <h4>
                    Q2 <br />
                    2022
                  </h4>
                </div>
              </div>
              <div className="col-md-9 col-xl-7">
                <div className="road_list_box">
                  <ul>
                    <li>NFT Marketplace Revamp (powered by $afen)</li>
                    <li>BloomOne Internship Cohort: Batch 1</li>
                    <li>Major token burn / buyback event</li>
                    <li>
                      Introducing METACITTI: A decentralized Real Estate NFT
                      Metaverse. Powered by $afen
                    </li>
                    <li>$AFEN Token Listings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="road_map_contant">
            <div className="row align-items-center">
              <div className="col-md-3 col-xl-5">
                <div className="road_cricle">
                  <h4>
                    Q3 <br />
                    2022
                  </h4>
                </div>
              </div>
              <div className="col-md-9 col-xl-7">
                <div className="road_list_box">
                  <ul>
                    <li>H2 Opening: Community AMA session</li>
                    <li>New product development: Phase 1</li>
                    <li>METACITTI Development</li>
                    <ul>
                      <li>Floor plan unveiling</li>
                      <li>Partnership announcements</li>
                    </ul>
                    <li>AFEN NFT Conference</li>
                    <li>NFT Marketplace Launch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="road_map_contant">
            <div className="row align-items-center">
              <div className="col-md-3 col-xl-5">
                <div className="road_cricle">
                  <h4>
                    Q4 <br />
                    2022
                  </h4>
                </div>
              </div>
              <div className="col-md-9 col-xl-7">
                <div className="road_list_box">
                  <ul>
                    <li>BloomOne Internship Cohort: Batch 2</li>
                    <li>New product development: Phase 2</li>
                    <li>METACITTI development:</li>
                    <ul>
                      <li>Government partnership: Town planning authorities</li>
                      <li>Introducing Real Estate NFTs</li>
                      <li>Product integrations</li>
                    </ul>
                    <li>More NFT Collections Releases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="road_map_contant">
            <div className="row align-items-center">
              <div className="col-md-3 col-xl-5">
                <div className="road_cricle">
                  <h4>
                    Q1 <br />
                    2023
                  </h4>
                </div>
              </div>
              <div className="col-md-9 col-xl-7">
                <div className="road_list_box">
                  <ul>
                    <li>H1 Opening: Community AMA session</li>
                    <li>METACITTI development: Public offering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TokenArtSection };
