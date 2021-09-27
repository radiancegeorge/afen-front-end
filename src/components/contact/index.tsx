import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import useAxios from "axios-hooks";
import CustomImageLoader from "../customImageLoader";

const ContactModal = (props: any) => {
  const [show, setShow] = useState(props.show);
  const [data, setData] = useState({});
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  const form = useRef(null);
  const [{ loading, error, data: resData }, sendMessage] = useAxios(
    {
      url: "/contact",
      method: "post",
    },
    {
      manual: true,
    }
  );

  const handleSend = (e: any) => {
    e.preventDefault();
    try {
      sendMessage({
        data,
      });
    } catch (err) {}
  };

  useEffect(() => {
    resData &&
      setTimeout(() => {
        window.location.reload();
      }, 2000);
  }, [resData]);
  return (
    <Modal
      aria-labelledby="exampleModalLabel"
      dialogClassName="modal-dialog"
      keyboard={true}
      className="contact_mdl"
      show={show}
      onHide={() => {
        props.setShow(false);
      }}>
      <div className="modal-header">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => {
            props.setShow(false);
          }}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="md_contact_cnt">
        <h3>Contact Us</h3>
        <form onSubmit={handleSend} ref={form}>
          <div className="form-group">
            <input
              type="text"
              name="text"
              className="form-control"
              placeholder="Your Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="text"
              className="form-control"
              placeholder="Your E-mail address"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Your Message"
              defaultValue={""}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
          </div>
          <div className="submit_btn">
            <button>
              {!resData
                ? !loading
                  ? "Submit"
                  : "Please wait..."
                : "Successful"}
            </button>
          </div>
        </form>
      </div>
      <div className="contact_social">
        <h4>Our socials</h4>
        <ul>
          <li>
            <a
              href="http://twitter.com/afenblockchain"
              target="_blank"
              rel="noreferrer">
              <img alt="img" src="assets/images/cnt_icon/twetter_y.png" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/afenblockchain"
              target="_blank"
              rel="noreferrer">
              <img alt="img" src="assets/images/cnt_icon/send_y.png" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/afenblockchain"
              target="_blank"
              rel="noreferrer">
              <img src="assets/images/cnt_icon/insta_y.png" alt="img" />
            </a>
          </li>
          {/* <li>
            <a href="javascritpt();">
              <img src="assets/images/cnt_icon/linkdin_y.png" alt="images" />
            </a>
          </li> */}
          <li>
            <a
              href="http://reddit.com/r/afencommunity"
              target="_blank"
              rel="noreferrer">
              <img alt="img" src="assets/images/cnt_icon/domy_y.png" />
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
};
const ContactUs = withRouter(ContactModal);
export { ContactUs };
