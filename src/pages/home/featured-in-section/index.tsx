import React, { useState, useEffect } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import CustomImageLoader from "../../../components/customImageLoader";
import "./index.scss";
const FeaturedInSection = (props: any) => {
  const [isOpen, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [heading, setHeading] = useState("");
  const redirect = (link: string) => {
    window.open(link, "_blank");
  };

  const handleShowDialog = () => {
    setOpen(!isOpen);
    console.log("cliked");
  };

  useEffect(() => {
    var x: any = document.getElementById("home_main_footer");
    if (x.style.display === "none" && !isOpen) {
      x.style.display = "block";
    } else if (isOpen) {
      x.style.display = "none";
    }
  }, [isOpen]);

  return (
    <>
      <section className="featured_in">
        <div className="container conyainer-id">
          <div className="ftrud_heading">
            <h3>OUR ENDORSMENTS</h3>
          </div>
          <Row className="our-endor">
            <Col md={4} lg={4} sm={12} className="box">
              <Card
                onClick={() => {
                  setImage("assets/images/invesdor1.png");
                  setHeading(
                    " Nigerian Tourism Development Corporation Endorsement Letter"
                  );
                  setOpen(true);
                }}>
                <Card.Body>
                  <Card.Title className="box-font">
                    Nigerian Tourism Development Corporation Endorsement Letter{" "}
                  </Card.Title>
                  <CustomImageLoader src="assets/images/invesdor1.png" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={4} sm={12} className="box">
              <Card
                onClick={() => {
                  setImage("assets/images/invesdor2.png");
                  setHeading(
                    "Ministry of Tourism, Culture & Hospitality, Plateau State Government"
                  );
                  setOpen(true);
                }}>
                <Card.Body>
                  <Card.Title className="box-font">
                    Ministry of Tourism, Culture & Hospitality, Plateau State
                    Government
                  </Card.Title>
                  <CustomImageLoader src="assets/images/invesdor2.png" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={4} sm={12} className="box">
              <Card
                onClick={() => {
                  setImage("assets/images/invesdor3.png");
                  setHeading("Governor’s Office, Jos");
                  setOpen(true);
                }}>
                <Card.Body>
                  <Card.Title className="box-font">
                    Governor’s Office, Jos
                  </Card.Title>
                  <CustomImageLoader src="assets/images/invesdor3.png" />
                </Card.Body>
              </Card>
            </Col>

            {/* {isOpen && (
              <dialog
                className="dialog dialog-custom"
                style={{ position: "absolute" }}
                open
                onClick={handleShowDialog}
              >
                <img
                  className="image"
                  src={image}
                  onClick={handleShowDialog}
                  alt="images"
                />
              </dialog>
            )} */}
          </Row>
          {!isOpen && (
            <div className="ftrud_heading">
              <h3>Featured In</h3>
            </div>
          )}
          <div className="ftrud_logo">
            <ul>
              <li
                onClick={() => {
                  redirect(
                    "https://www.publish0x.com/icoda-agency/african-project-afen-to-launch-an-nft-marketplace-and-presen-xknpwrx"
                  );
                }}>
                <CustomImageLoader src="assets/images/featured_logo/logo01.png" />
              </li>
              <li
                onClick={() => {
                  redirect("https://youtu.be/o7WeUVSV0bg");
                }}>
                <CustomImageLoader src="assets/images/featured_logo/logo02.png" />
              </li>
              <li
                onClick={() => {
                  redirect(
                    "https://www.investing.com/news/cryptocurrency-news/african-project-afen-to-launch-an-nft-marketplace-and-present-african-culture-digitally-2595327"
                  );
                }}>
                <CustomImageLoader src="assets/images/featured_logo/logo03.png" />
              </li>
              <li
                onClick={() => {
                  redirect(
                    "https://nulltx.com/african-project-afen-to-launch-an-nft-marketplace-and-present-african-culture-digitally/"
                  );
                }}>
                <CustomImageLoader src="assets/images/featured_logo/logo04.png" />
              </li>
              <li
                onClick={() => {
                  redirect(
                    "https://bitcoinist.com/african-project-afen-to-launch-an-nft-marketplace-and-present-african-culture-digitally/"
                  );
                }}>
                <CustomImageLoader src="assets/images/featured_logo/logo05.png" />
              </li>
              <li
                onClick={() => {
                  redirect(
                    "https://www.financemagnates.com/thought-leadership/afen-blockchain-group-set-to-develop-key-areas-of-the-african-continent/"
                  );
                }}>
                <CustomImageLoader src="assets/images/featured_logo/logo06.png" />
              </li>
              <li
                onClick={() => {
                  redirect(
                    "https://www.benzinga.com/markets/cryptocurrency/21/08/22618001/afen-brings-african-culture-to-the-world-through-unique-nft-collections"
                  );
                }}>
                <CustomImageLoader src="assets/images/featured_logo/logo07.png" />
              </li>
              <li
                onClick={() => {
                  redirect("https://www.youtube.com/watch?v=_H_VmR-JfGY");
                }}>
                <CustomImageLoader src="assets/images/featured_logo/logo08.png" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Modal
        aria-labelledby="exampleModalLabel"
        dialogClassName="modal-dialog modal-dialog2"
        keyboard={true}
        className="contact_mdl"
        show={isOpen}
        onHide={() => {
          setOpen(false);
        }}>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="image"
            src={image}
            height="100%"
            width="100%"
            // onClick={handleShowDialog}
            alt="images"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export { FeaturedInSection };
