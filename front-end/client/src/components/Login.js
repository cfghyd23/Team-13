import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/loginuser",
        {
          email,
          password,
        }
      );
      console.log(data);
      if (data.success) {
        console.log(data.userdata);
        setAuth({
          ...auth,
          user: data.user,
        });
        toast.success("Login successful!");
        if (data?.userdata?.email === "admin@admin.com") {
          navigate("/admin");
        } else {
          navigate("/homepage");
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  return (
    <section className="vh-100 sample">
      <div className="container py-5 h-100">
        <div className="row d d-flex align-items-center justify-content-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block w-100 p-2"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <hr className="my-4" />
                <label className="mb-4">Not a member?</label>
                <br />
                <button
                  className="btn btn-lg btn-block btn-primary w-100 p-2"
                  style={{ backgroundColor: "#dd4b39" }}
                  type="submit"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
