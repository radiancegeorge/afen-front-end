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
    new_post(formData);
  };
  useEffect(() => {
    const { data, error } = newPostData;

    if (data) {
      window.location.href = "/dashboard";
      console.log(data);
    }
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
            <input type="image" src alt="" id="image" height="50" width="100" />
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
      </div>
    </>
  ) : (
    <Redirect to="/dashboardLogin" />
  );
};

export default Dashboard;
