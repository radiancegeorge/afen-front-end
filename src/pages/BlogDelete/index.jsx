import React, { Fragment, useEffect, useState } from "react";
import Logo from "../../components/assets/images/headlogo.png";
import "./blog_delete.scss";
import useAdminCred from "../../hooks/blogPosts";
import moment from "moment";
import useAxios from "axios-hooks";

export default function BlogDelete() {
  const { postsData, fetchPosts } = useAdminCred();
  const [itemToDelete, setItemToDelete] = useState();
  const [{ ...deleteData }, deletePost] = useAxios(
    {
      method: "post",
    },
    { manual: true }
  );
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    deleteData.data && window.location.reload();
  }, [deleteData.data, deleteData.error]);
  console.log(postsData.data);
  return (
    <div className="delete_blog">
      <div className="delete_container">
        <div>
          <div className="logo-holder">
            <img src={Logo} alt="header logo" />
          </div>
          {postsData.data &&
            postsData.data.map((data) => (
              <Fragment>
                <div className="content_card" key={data.id}>
                  <div className="card_delete">
                    <img
                      className="card_image"
                      src={data.image}
                      alt="headimage"
                      srcset=""
                      sizes="(max-width: 600px) 480px, 800px"
                    />
                  </div>
                  <div className="card_delete">
                    <div className="time">
                      {" "}
                      {moment(data.updatedAt).format("lll")}{" "}
                    </div>
                    <h5 className="card_title">{data.title}</h5>
                    <h5
                      className="card_title"
                      style={{
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={(e) => setItemToDelete(data.id)}>
                      delete
                    </h5>
                  </div>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
      {itemToDelete && (
        <div className="action__">
          <h1>Delete?</h1>
          <div className="container__">
            <div
              className="yes"
              onClick={(e) => {
                deletePost({
                  url: `/post/delete?id=${itemToDelete}`,
                });
              }}>
              Yes
            </div>
            <div className="no" onClick={(e) => setItemToDelete()}>
              No
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
