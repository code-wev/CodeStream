
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useNavigate } from "react-router";
import { registerWithEmail } from "../../features/auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import "nice-select2/dist/css/nice-select2.css";
import NiceSelect from "nice-select2";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerData = {
      name,
      email,
      avatar,
      phone,
      password,
    };
    console.log(registerData);
    try {
      await registerWithEmail(dispatch, email, password);
      navigate("/"); // register success hole home e pathabe
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div className="min-h-screen relative flex justify-center items-center max-w-xl mx-auto">
      <div className="relative md:flex gap-4 p-6 rounded-2xl bg-[#0f1729]">
        <div className="card bg-[#0f1729] w-full py-10">
          <h1 className="text-4xl text-[#FFFEFF] ml-7 mt-2">
            Sign Up Your Account
          </h1>

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Avatar URL</span>
              </label>
              <input
                onChange={(e) => setAvatar(e.target.value)}
                type="text"
                placeholder="Avatar"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Phone</span>
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full mb-2"
                required
              />
              <label className="text-base text-white hover:text-gray-400">
                <Link to="/forgetPass" className="link">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-4 flex justify-center">
              <button className="btn bg-blue-600 w-full border-none text-white hover:bg-blue-700">
                Login
              </button>
            </div>
          </form>

          <p className="text-white ml-6">
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </p>

          <div className="divider divider-warning py-4 text-[#D0CFD1]">
            OR register with
          </div>

          <button
            // onClick={handleGoogleSignIn}
            className="text-lg btn w-5/6 mx-auto bg-[#2B2738] text-[#D0CFD1] hover:text-black"
          >
            <FcGoogle className="" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
