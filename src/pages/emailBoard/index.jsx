import { useRef, useState } from "react";
import bg from "../../img/afen-blog-bg.jpg";
import logo from "../../img/afenblog.png";
import "./emailBoard.scss";
import { FaCamera } from "react-icons/fa";
import useSendBulkMail from "../../hooks/sendMail";
import useCheckAuth from "../../hooks/checkAuth";
import { Redirect } from "react-router";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const EmailBoard = () => {
  const { isAuth } = useCheckAuth();
  const { countData, pushMail, bulkMailData } = useSendBulkMail();
  const imageSelector = useRef(null);
  const [formData, setFormData] = useState({});
  const handleImageSelection = (e) => {
    e.preventDefault();
    imageSelector.current.click();
  };
  // console.log(formData);

  const handleMailPush = (e) => {
    e.preventDefault();
    const keys = Object.keys(formData);
    keys.forEach((item) => {
      if (!formData[item]) throw `${item} cannot be empty`;
    });
    const data = new FormData();
    data.append("content", formData.content);
    data.append("title", formData.title);
    data.append("cover", formData.cover);

    pushMail(data);
  };
  return isAuth ? (
    <div
      className="emailboard"
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <div className="container__">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="dashboard-heading">NEW CAMPAIGN</h1>
        <p className="subscribers">
          {countData.data && countData.data.count} Subscribers
        </p>
        <form action="" className="form" onSubmit={handleMailPush}>
          <label htmlFor="imaage" style={{ position: "relative" }}>
            <FaCamera
              size={30}
              className="camera-icon"
              onClick={handleImageSelection}
              cursor="pointer"
            />
            <span>Optional Banner</span>
            <input
              type="image"
              src={formData.cover && URL.createObjectURL(formData.cover)}
              alt=""
              className="image"
              onClick={(e) => e.preventDefault()}
            />
            <input
              ref={imageSelector}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) =>
                setFormData({ ...formData, cover: e.target.files[0] })
              }
            />
          </label>
          <label htmlFor="Title">
            <span>Title</span>
            <input
              type="text"
              name=""
              id=""
              className="title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </label>
          <label htmlFor="content">
            <span>Content</span>
            <CKEditor
              name="content"
              id="content"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setFormData({ ...formData, content: data });
                console.log({ event, editor, data });
              }}
            />
          </label>
          <button
            className="submitBtn"
            disabled={bulkMailData.loading ? true : false}
            style={{ cursor: "pointer" }}>
            {bulkMailData.loading ? "SENDING" : "SEND"}
          </button>
        </form>
      </div>
      {bulkMailData.data && (
        <div className="success">
          <div className="message">{"Successfully sent mail"}</div>
          <button
            onClick={(e) => {
              window.location.href = "/emailboard";
            }}>
            Okay
          </button>
        </div>
      )}
    </div>
  ) : (
    <Redirect to="dashboardLogin" />
  );
};

export default EmailBoard;
