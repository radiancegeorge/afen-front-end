const useCheckAuth = () => {
  const isAuth = window.sessionStorage.getItem("isAuth");
  return {
    isAuth,
  };
};

export default useCheckAuth;
