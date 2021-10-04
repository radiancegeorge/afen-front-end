import React, { useState } from "react";
import { withRouter, Link, useLocation } from "react-router-dom";
import { ContactUs } from "..";
import useSubscribe from "../../hooks/subscribeMails";
import CustomImageLoader from "../customImageLoader";
// import Modal_ from "../successModal";
import "./footer.scss";
// const FooterComponent = (props: any) => {
//   return (
//     <footer className="main_footer">
//       <div className="container-fluid">
//         <div className="row align-items-center">
//           <div className="col-md-8">
//             <div className="footer_menu">
//               <ul>
//                 <li>
//                   <a href="javascript();" className="active">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="javascript();">About</a>
//                 </li>
//                 <li>
//                   <Link to="blogs">Blog</Link>
//                 </li>
//                 <li>
//                   <Link to="services">Services</Link>
//                 </li>
//                 <li>
//                   <Link to="team">Team</Link>
//                 </li>
//                 <li>
//                   <a href="javascript();">Contact</a>
//                 </li>
//                 <li>
//                   <Link to="whitepaper">Whitepaper</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="footer_social">
//               <ul>
//                 <li>
//                   <a href="javascript();">
//                     <img src="assets/images/mail_fo.png" alt="mail_fo" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="javascript();">
//                     <img src="assets/images/twitter_fo.png" alt="twitter_fo" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="javascript();">
//                     <img
//                       src="assets/images/instagram_fo.png"
//                       alt="instagram_fo"
//                     />
//                   </a>
//                 </li>
//               </ul>
//               <div className="go_up_btn">
//                 <a href="javascript();">
//                   <img src="assets/images/arrow_up.png" alt="arrow_up" />
//                   Go up
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// const Footer = withRouter(FooterComponent);
// export { Footer };

const FooterComponent = (props: any) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [subscriberData, setSubscriberData] = useState({
    email: "",
  });
  // const [visible, setVisible] = useState(true);
  const { subscribe, data, error, loading } = useSubscribe();
  const handleSend = () => {
    subscriberData.email.trim() !== "" &&
      subscribe({ data: JSON.stringify(subscriberData) });
  };
  return location.pathname.toLowerCase().includes("dashboardlogin") ||
    location.pathname.toLowerCase().includes("newpost") ||
    location.pathname.toLowerCase().includes("blogdelete") ||
    location.pathname.toLowerCase().includes("emailboard") ||
    location.pathname.toLowerCase().includes("dashboard") ? (
    <p></p>
  ) : (
    <>
      {/* {visible && (
        <Modal_ setVisible={setVisible} text={error ? "failed" : "Success"} />
      )} */}
      <footer className="home_main_footer" id="home_main_footer">
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-md-4 order-3 order-sm-3 order-md-1">
              <div className="news_letter_footer">
                <h5>Newsletter</h5>
                <p>Subscribe for our newsletter</p>
                <div className="news_f_from">
                  <input
                    type="email"
                    name="text"
                    placeholder="Your E-mail address"
                    onChange={(e) =>
                      setSubscriberData({
                        ...subscriberData,
                        email: e.target.value,
                      })
                    }
                  />
                  <button onClick={handleSend} disabled={loading || data}>
                    {!data
                      ? loading
                        ? "Please Wait "
                        : "Sign Up"
                      : "Subscribed"}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 order-1 order-sm-1 order-md-2">
              <div className="footer_description">
                <CustomImageLoader src="assets/images/afen_logo.png" />
                <p>
                  A leading hub for African Blockchain-related collaborations
                  with a focus on Decentralized Finance, Arts, Real Estate and
                  Education.
                </p>
              </div>
            </div>
            <div className="col-md-4 order-2 order-sm-2 order-md-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer_usefulll_link">
                    <h5>Quick Links</h5>
                    <ul>
                      <li>
                        <Link to="/services">Services</Link>
                        <i className="fas fa-chevron-right" />
                      </li>
                      <li>
                        <Link to="/white-paper">Whitepaper</Link>
                        <i className="fas fa-chevron-right" />
                      </li>
                      <li>
                        <a href="/#roadmap">Roadmap</a>
                        <i className="fas fa-chevron-right" />
                      </li>
                      <li>
                        <a href="/#afentokenandecosys">AFEN Token </a>
                        <i className="fas fa-chevron-right" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer_usefulll_link">
                    <h5>Go To</h5>
                    <ul>
                      <li>
                        <Link to="/teams"> Team</Link>
                        <i className="fas fa-chevron-right" />
                      </li>
                      <li>
                        <Link to="/our-partner">Partners</Link>
                        <i className="fas fa-chevron-right" />
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            setShow(true);
                          }}>
                          Contact
                        </Link>
                        <i className="fas fa-chevron-right" />
                      </li>
                      <li>
                        <Link to="/tokenomics">Token Allocation</Link>
                        <i className="fas fa-chevron-right" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 order-4 order-sm-4 order-md-4">
              <div className="home_footer_bottom">
                <div className="row">
                  <div className="col-md-8">
                    <div className="left_copy_right">
                      <ul>
                        <li>
                          <Link to="#">© Afen, Inc. All rights reserved.</Link>
                        </li>
                        <li>
                          <Link style={{ cursor: "not-allowed" }} to="#">
                            Terms and Conditions
                          </Link>
                        </li>
                        <li className="footer-hide">
                          <Link to="#">Privacy</Link>
                        </li>
                        <li className="footer-hide">
                          <Link to="#">For Business Enquiry : </Link>{" "}
                          <Link to="#" style={{ color: "#FFE260" }}>
                            afen@afengroup.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="left_copy_right footer-show">
                      <ul>
                        <li>
                          <Link style={{ cursor: "not-allowed" }} to="#">
                            Privacy
                          </Link>
                        </li>
                        <li>
                          <Link to="#">For Business Enquiry : </Link>{" "}
                          <Link to="#" style={{ color: "#FFE260" }}>
                            afen@afengroup.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="social_icon_right">
                      <ul>
                        {/* <li>
                          <a
                            href="afen@afengroup.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="assets/images/mail_fo.png"
                              alt="images"
                            />
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="http://twitter.com/afenblockchain"
                            target="_blank"
                            rel="noreferrer">
                            <CustomImageLoader src="assets/images/twetter_y.png" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://t.me/afenblockchain"
                            target="_blank"
                            rel="noreferrer">
                            <CustomImageLoader src="assets/images/send_y.png" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://instagram.com/afenblockchain"
                            target="_blank"
                            rel="noreferrer">
                            <CustomImageLoader src="assets/images/insta_y.png" />
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="http://t.me/afenblockchain"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="assets/images/linkdin_y.png"
                              alt="images"
                            />
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="http://reddit.com/r/afencommunity"
                            target="_blank"
                            rel="noreferrer">
                            <CustomImageLoader src="assets/images/domy_y.png" />
                          </a>
                        </li>
                        {/* <li>
                          <Link to="#">
                            <img
                              src="assets/images/facebook_y.png"
                              alt="images"
                            />
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ContactUs
        show={show}
        setShow={(value: boolean) => {
          setShow(value);
        }}
      />
    </>
  );
};
const Footer = withRouter(FooterComponent);
export { Footer };
