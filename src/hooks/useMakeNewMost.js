import useAdminCred from "./adminPostApi";

const useMakeNewPost = () => {
  const { newPostData, makeNewPost } = useAdminCred();

  const new_post = (data) => {
    const { post, medium_link, title, cover } = data;
    const params = Object.keys(data);
    if (!params.length) throw new Error("cannot upload an empty data");
    params.forEach((item) => {
      if (data[item] === "" || !data[item]) {
        console.log(item);
        throw new Error(`${item} cannot be empty`);
      }
    });
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
