import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useHistory } from "react-router-dom";
import { PageContext } from "../../context/afenContext";

const Services = (props: any) => {
  const { updateContext } = useContext(PageContext);
  const history = useHistory();
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    5000: {
      items: 1,
    },
  };
  const updateContextState = (type: string, item: any) => {
    updateContext({
      type: type,
      payload: item,
    });
  };
  const lernMore = (e: any) => {
    updateContextState("whitepaper", "service");
    setTimeout(() => {
      history.push("/white-paper#" + e);
    }, 100);
    // window.open("https://link.medium.com/SVJQK3dNnjb", "_blank");
  };
  return (
    <section className="service_main_banner">
      <OwlCarousel
        className="owl-theme"
        id="service_main_slide"
        margin={0}
        nav={true}
        dots={false}
        autoplay={false}
        loop={false}
        responsive={responsive}>
        <div className="item">
          <div className="service_contant">
            <div className="banner_img">
              <img src="assets/images/sebastian.jpg" alt="sebastian" />
            </div>
            <div className="banner_contant">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="right_roted">
                      <h4>AFEN AND REAL ESTATE</h4>
                      <h3>AFEN AND EDUCATION</h3>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="left_contant">
                      <h5>AFEN AND ART</h5>
                      <div className="cont_brd">
                        <span />
                        <p>
                          As an African startup with a worldwide purview, we
                          relish the opportunity to
                        </p>
                      </div>
                      <div className="cont_brd">
                        <span />
                        <p>
                          contribute to the future of arts and digital ownership
                          through a unique nft
                        </p>
                      </div>
                      <div className="cont_brd">
                        <span />
                        <p>
                          marketplace optimised for African and non-African
                          creators.
                        </p>
                      </div>
                      {/* <Link to="#" onClick={() => lernMore("afen-art")}>
                        Learn more
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="service_contant">
            <div className="banner_img">
              <img src="assets/images/afen_education.png" alt="Afen Education" />
            </div>
            <div className="banner_contant">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="right_roted">
                      <h4>AFEN AND EDUCATION</h4>
                      <h3>AFEN AND ART</h3>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="left_contant">
                      <h5>AFEN AND REAL ESTATE</h5>
                      <div className="cont_brd">
                        <span />
                        <p>
                          With a focus on digital ownership through blockchain
                          technology, we are transforming the African property
                          econommy by eliminating unnecessary barriers and
                          contrats hampering growth and ease of business in Real
                          estate.
                        </p>
                      </div>
                      {/* <div className="cont_brd">
                        <span />
                        <p>Authenticate and transfer property ownership</p>
                      </div>
                      <div className="cont_brd">
                        <span />
                        <p>lowering transaction costs to near zero.</p>
                      </div> */}
                      {/* <Link to="#" onClick={() => lernMore("real-estate")}>
                        Learn more
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="service_contant">
            <div className="banner_img">
              <img src="assets/images/real_estate.png" alt="Real Estate" />
            </div>
            <div className="banner_contant">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="right_roted">
                      <h4>AFEN AND ART</h4>
                      <h3>AFEN AND REAL ESTATE</h3>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="left_contant">
                      <h5>AFEN AND EDUCATION</h5>
                      <div className="cont_brd">
                        <span />
                        <p>
                          Meeting up with the rest of the world in terms of
                          technological advancement in ingrained in our mission.
                          To archieve this we are driving education on
                          blockchain technology in unique ways through
                          innovation and partnerships.
                        </p>
                      </div>
                      {/* <div className="cont_brd">
                        <span />
                        <p>
                          Courses in blockchain-related subjects and
                          certification upon completion.
                        </p>
                      </div>
                      <div className="cont_brd">
                        <span />
                        <p>Awarded certificates will be transferred as NFTs</p>
                      </div> */}
                      {/* <Link to="#" onClick={() => lernMore("afen-education")}>
                        Learn more
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export { Services };
