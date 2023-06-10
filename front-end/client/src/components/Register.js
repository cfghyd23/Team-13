import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [group, setGroup] = React.useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/createuser",
        {
          name,
          email,
          password,
          address,
          phone,
          group,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else toast.error(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Register Here</h3>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    value={group}
                    onChange={(e) => setGroup(e.target.group)}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block w-100 p-2"
                  type="submit"
                  onClick={handleRegister}
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

export default Register;
