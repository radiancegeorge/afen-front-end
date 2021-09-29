import React, { useEffect, useRef, useState } from "react";
import "./Dashboard.css";
import { FaCamera } from "react-icons/fa";
import useMakeNewPost from "../../hooks/useMakeNewMost";
import { Redirect } from "react-router";
import useCheckAuth from "../../hooks/checkAuth";

const Dashboard = () => {
  const { new_post, newPostData } = useMakeNewPost();
  const [formData, setFormData] = useState({});
  const cover = useRef(null);
  const { isAuth } = useCheckAuth();

  const triggerFileInput = () => {
    cover.current.click();
  };
  const handlePost = (e) => {
    e.preventDefault();
    try {
      new_post(formData);
    } catch (error) {
      window.alert(error);
    }
  };
  useEffect(() => {
    const { data, error } = newPostData;
    if (error) window.alert("sorry an error occured");
  }, [newPostData.data, newPostData.error]);
  return isAuth ? (
    <>
      <div className="dashboard-section">
        <h1 className="dashboard-heading">create new blog post</h1>

        <form action="" className="form" onSubmit={handlePost}>
          <div className="photo">
            <FaCamera className="camera-icon" onClick={triggerFileInput} />
            <label htmlFor="image"></label>
            <input
              type="image"
              src={URL.createObjectURL(formData.cover)}
              alt=""
              id="image"
              height="50"
              width="100"
            />
            <input
              type="file"
              onChange={(e) =>
                setFormData({ ...formData, cover: e.target?.files[0] })
              }
              style={{ display: "none" }}
              ref={cover}
            />
          </div>

          <label htmlFor="title" id="titleLabel">
            Title
          </label>
          <input
            type="text"
            name=""
            id="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <label htmlFor="mediumLink" id="mediumLabel">
            Medium Link
          </label>
          <input
            type="text"
            name=""
            id="mediumLink"
            onChange={(e) =>
              setFormData({ ...formData, medium_link: e.target.value })
            }
          />
          <label htmlFor="content" id="contentLabel">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            onChange={(e) =>
              setFormData({ ...formData, post: e.target.value })
            }></textarea>

          <input
            type="submit"
            value={newPostData?.loading ? "PLEASE WAIT..." : "POST"}
            id="submitBtn"
            disabled={newPostData?.loading && true}
          />
        </form>
        {newPostData.data && (
          <div className="success">
            <div className="message">{"Successfully uploaded"}</div>
            <button
              onClick={(e) => {
                window.location.href = "/dashboard";
              }}>
              Okay
            </button>
          </div>
        )}
      </div>
    </>
  ) : (
    <Redirect to="/dashboardLogin" />
  );
};

export default Dashboard;
