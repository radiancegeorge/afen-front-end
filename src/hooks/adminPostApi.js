import useAxios from "axios-hooks";
const useAdminCred = () => {
  const [{ ...loginData }, login] = useAxios(
    {
      method: "post",
      url: "/admin/login",
    },
    {
      manual: true,
    }
  );

  const [{ ...newPostData }, newPost] = useAxios(
    {
      method: "post",
      url: "/post/new_post",
    },
    {
      manual: true,
    }
  );

  const [{ ...postsData }, getPost] = useAxios(
    {
      method: "get",
      url: "/post/all_posts",
    },
    {
      manual: true,
    }
  );
  const initLogin = ({ email, password }) => {
    login({
      data: {
        email,
        password,
      },
    });
  };
  const makeNewPost = (data) => {
    newPost({
      data,
    });
  };
  const fetchPosts = (data) => {
    getPost({
      data,
    });
  };
  return {
    initLogin,
    loginData,
    makeNewPost,
    newPostData,
    fetchPosts,
    postsData,
  };
};

export default useAdminCred;
