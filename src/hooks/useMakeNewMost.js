import useAdminCred from "./adminPostApi";

const useMakeNewPost = () => {
  const { newPostData, makeNewPost } = useAdminCred();
  const new_post = (data) => {
    const { post, medium_link, title, cover } = data;

    const formData = new FormData();
    formData.append("post", post);
    formData.append("medium_link", medium_link);
    formData.append("title", title);
    formData.append("cover", cover);
    console.log(formData);
    makeNewPost(formData);
  };

  return {
    newPostData,
    new_post,
  };
};

export default useMakeNewPost;
