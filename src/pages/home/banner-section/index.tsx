import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { ContactUs } from "../../../components";
import CustomImageLoader from "../../../components/customImageLoader";
import "./index.scss";
const BannerSection = (props: any) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // let mobile_side_btn: any = document.querySelector(".mobile_side_btn");
    // mobile_side_btn.addEventListener("click", function (this: any) {
    //   let right_chart: any = document.querySelector(".right_chart");
    //   right_chart.classList.toggle("open");
    // });
  }, []);

  return (
    <>
      <section className="home_banner_section">
        <div className="container-fluid">
          <div className="col-md-6">
            <div className="top_contant">
              <span>AFEN GROUP</span>
              <h2>Revolutionizing Opportunities Through Blockchain</h2>
              <p>
                Blockchain has the potential to adequately transform African
                society. Offering insurmountable opportunities to those
                leveraging it to build a new structure in diverse sectors. We
                have taken the step to pioneer a revolution in Africa on the
                backs of a disruptive technology.
              </p>
              <button
                className="slider_btn_outline"
                onClick={() => {
                  window.open("https://link.medium.com/tTlCRvuMnjb", "_blank");
                }}>
                Learn more
              </button>
              <Link to="/white-paper" className="whitepaper_ot">
                <img src="assets/images/file-text.png" alt="img" />
                Whitepaper
              </Link>
            </div>
            <div className="bottom_icon">
              <ul>
                {/* <li>
                <Link to="#">
                  <img src="assets/images/facebook.png" alt="facebook.png" />
                </Link>
              </li> */}
                <li>
                  <a
                    href="https://instagram.com/afenblockchain"
                    target="_blank"
                    rel="noreferrer">
                    <CustomImageLoader src="assets/images/instagram.png" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://reddit.com/r/afencommunity"
                    target="_blank"
                    rel="noreferrer">
                    <CustomImageLoader src="assets/images/reddit.png" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/afenblockchain"
                    target="_blank"
                    rel="noreferrer">
                    <CustomImageLoader src="assets/images/twitter.png" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://t.me/afenblockchain"
                    target="_blank"
                    rel="noreferrer">
                    <CustomImageLoader src="assets/images/send.png" />
                  </a>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={() => {
                      setShow(true);
                    }}>
                    <CustomImageLoader src="assets/images/mail.png" />
                  </Link>
                </li>
                <li>
                  <a
                    href="https://facebook.com/afencommunity/"
                    target="__blank">
                    <FaFacebook color="white" size={18} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="mobile_side_btn">
          <Link to="#">
            <i className="fas fa-chevron-up"></i>Afen <span>$ 0.007595</span>
          </Link>
        </div> */}
        {/* <div className="right_chart">
          <div className="chart_top">
            <img src="assets/images/afen_black.png" alt="images" />
            <Link to="#">
              <span>Powered by coinmarketcap</span>
              <img src="assets/images/external-link.png" alt="images" />
            </Link>
          </div>
          <div className="chart_img_box">
            <div className="top">
              <div className="cricle_rd" />
              <p>
                Afen Blockchain <span>No. 1945</span>
              </p>
            </div>
            <img src="assets/images/chart_vectore.png" alt="images" />
            <p className="price">
              <span>Price</span> $ 0.007596
            </p>
          </div>
        </div> */}
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

export { BannerSection };
