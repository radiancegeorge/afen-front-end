import React, { useEffect, useState } from "react";
import "./DashboardLogin.css";
import useAdminCred from "../../hooks/adminPostApi";
import { useHistory } from "react-router";
const Dashboard = () => {
  const [formData, setFormData] = useState({});
  const { initLogin, loginData } = useAdminCred();
  const [errorShow, setError] = useState(loginData.error);
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    if (formData?.email && formData?.password) initLogin(formData);
    return;
  };

  useEffect(() => {
    const { data, error } = loginData;
    if (data) {
      window.sessionStorage.setItem("isAuth", data);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    }
    if (error) {
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [loginData.data, loginData.error]);

  // useEffect(() => {

  // }, [errorShow]);
  return (
    <>
      <div className="dashboardLogin-section">
        <h1 className="dashboardLogin-heading">login</h1>

        <form action="" className="formLogin" onSubmit={handleLogin}>
          <label htmlFor="email" id="emailLabel">
            Email
          </label>
          <input
            type="text"
            name=""
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label htmlFor="password" id="passwordLabel">
            password
          </label>
          <input
            type="password"
            name=""
            id="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <input type="submit" value="Login " id="loginBtn" />
        </form>
        {errorShow && (
          <p
            style={{
              textAlign: "center",
              marginTop: 30,
              color: "red",
            }}>
            Invalid Credentials
          </p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
